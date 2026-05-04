// --- Shared Preloading Logic ---
const heroImages = [];
const productImages = [];
let heroImagesLoaded = 0;
let productImagesLoaded = 0;

function preloadAssets() {
    if (document.getElementById('hero-canvas')) {
        for (let i = 1; i <= 240; i++) {
            const img = new Image();
            img.src = `cycle-assest/ezgif-frame-${i.toString().padStart(3, '0')}.jpg`;
            heroImages.push(img);
            img.onload = () => {
                heroImagesLoaded++;
                if (heroImagesLoaded === 1) renderHeroCanvas();
            };
        }
    }

    if (document.getElementById('lineup-canvas')) {
        for (let i = 91; i <= 240; i++) {
            const img = new Image();
            img.src = `cycle-scroll-assest/ezgif-frame-${i.toString().padStart(3, '0')}.jpg`;
            productImages.push(img);
            img.onload = () => {
                productImagesLoaded++;
            };
        }
    }
}

// --- Background Removal Logic (Luma Key) ---
const offscreenCanvas = document.createElement('canvas');
const offscreenCtx = offscreenCanvas.getContext('2d', { willReadFrequently: true });

function processFrame(img, targetW, targetH) {
    offscreenCanvas.width = targetW;
    offscreenCanvas.height = targetH;
    offscreenCtx.drawImage(img, 0, 0, targetW, targetH);
    
    const imageData = offscreenCtx.getImageData(0, 0, targetW, targetH);
    const data = imageData.data;
    
    // Threshold for background removal (Light pixels are removed)
    // The cyclist is dark, sky/road are light.
    for (let i = 0; i < data.length; i += 4) {
        const r = data[i];
        const g = data[i+1];
        const b = data[i+2];
        const brightness = (r + g + b) / 3;
        
        // If the pixel is light (sky/road), make it transparent
        if (brightness > 130) {
            data[i+3] = 0;
        } else if (brightness > 100) {
            // Feathered edge
            data[i+3] = (1 - (brightness - 100) / 30) * 255;
        }
    }
    
    offscreenCtx.putImageData(imageData, 0, 0);
    return offscreenCanvas;
}

// --- Hero Animation Logic (index.html) ---
const heroCanvas = document.getElementById('hero-canvas');
const heroScrollTrack = document.getElementById('hero-scroll-track');

function renderHeroCanvas() {
    if (!heroCanvas || !heroScrollTrack || heroImages.length === 0) return;
    const heroCtx = heroCanvas.getContext('2d');
    
    if (heroCanvas.width !== window.innerWidth) {
        heroCanvas.width = window.innerWidth;
        heroCanvas.height = window.innerHeight;
    }

    const scrollTop = window.scrollY;
    const maxScroll = heroScrollTrack.clientHeight - window.innerHeight;
    let scrollFraction = Math.max(0, scrollTop - heroScrollTrack.offsetTop) / maxScroll;
    scrollFraction = Math.max(0, Math.min(1, scrollFraction));

    const frameIndex = Math.min(239, Math.floor(scrollFraction * 240));
    const img = heroImages[frameIndex];

    if (img && img.complete) {
        const zoom = 1.3;
        const canvasRatio = heroCanvas.width / heroCanvas.height;
        const imgRatio = img.width / img.height;
        let renderWidth = heroCanvas.width * zoom;
        let renderHeight = heroCanvas.height * zoom;

        if (canvasRatio > imgRatio) {
            renderWidth = heroCanvas.width * zoom;
            renderHeight = (heroCanvas.width * zoom) / imgRatio;
        } else {
            renderHeight = heroCanvas.height * zoom;
            renderWidth = (heroCanvas.height * zoom) * imgRatio;
        }

        const offsetX = (heroCanvas.width - renderWidth) / 2;
        const offsetY = (heroCanvas.height - renderHeight) / 2 + (heroCanvas.height * 0.18);

        heroCtx.fillStyle = "#131313";
        heroCtx.fillRect(0, 0, heroCanvas.width, heroCanvas.height);
        heroCtx.drawImage(img, offsetX, offsetY, renderWidth, renderHeight);
    }
}

// --- Product Lineup Animation Logic (bikes.html) ---
const lineupSection = document.getElementById('product-lineup');
const lineupCanvas = document.getElementById('lineup-canvas');
const productLayers = document.querySelectorAll('.product-layer');

function renderProductLineup() {
    if (!lineupSection || !lineupCanvas || productImages.length === 0) return;
    const ctx = lineupCanvas.getContext('2d');

    const rect = lineupSection.getBoundingClientRect();
    const windowHeight = window.innerHeight;
    const totalScroll = rect.height - windowHeight;
    let progress = -rect.top / totalScroll;
    progress = Math.max(0, Math.min(1, progress));

    const productCount = 5;
    const progressInSegments = progress * productCount;
    const activeIndex = Math.min(productCount - 1, Math.floor(progressInSegments));
    
    // Fix: Ensure localProgress stays at 1.0 when at the end of a segment, instead of resetting to 0.0
    let localProgress = progressInSegments % 1;
    if (progress === 1) {
        localProgress = 1;
    } else if (localProgress === 0 && progressInSegments > 0) {
        // This handles the boundary between segments
        localProgress = 1;
    }

    productLayers.forEach((layer, index) => {
        if (index === activeIndex) layer.classList.add('active');
        else layer.classList.remove('active');
    });

    if (lineupCanvas.width !== 600) {
        lineupCanvas.width = 600;
        lineupCanvas.height = 400;
    }

    const frameIndex = Math.min(149, Math.floor(localProgress * 150));
    const img = productImages[frameIndex];

    if (img && img.complete) {
        ctx.clearRect(0, 0, lineupCanvas.width, lineupCanvas.height);
        // Process the frame to remove background
        const processed = processFrame(img, lineupCanvas.width, lineupCanvas.height);
        ctx.drawImage(processed, 0, 0);
    }

    let translateX;
    if (activeIndex % 2 === 0) {
        translateX = `calc(${localProgress * 100}vw - ${localProgress * 600}px)`;
    } else {
        translateX = `calc(${(1 - localProgress) * 100}vw - ${(1 - localProgress) * 600}px)`;
    }
    lineupCanvas.style.transform = `translateX(${translateX})`;
}

// --- Event Listeners ---
window.addEventListener('scroll', () => {
    requestAnimationFrame(() => {
        renderHeroCanvas();
        renderProductLineup();
    });
});

window.addEventListener('resize', () => {
    renderHeroCanvas();
    renderProductLineup();
});

preloadAssets();
renderHeroCanvas();
renderProductLineup();
