const canvas = document.getElementById('hero-canvas');
const ctx = canvas.getContext('2d');
const scrollTrack = document.getElementById('hero-scroll-track');

const frameCount = 240;
const currentFrame = index => (
  `cycle-assest/ezgif-frame-${index.toString().padStart(3, '0')}.jpg`
);

const images = [];
let imagesLoaded = 0;

for (let i = 1; i <= frameCount; i++) {
  const img = new Image();
  img.src = currentFrame(i);
  images.push(img);
  img.onload = () => {
    imagesLoaded++;
    if (imagesLoaded === 1) { 
      drawImageToCanvas(images[0]);
    }
  };
}

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  renderCanvas();
}

function renderCanvas() {
  const scrollTop = window.scrollY;
  // Use scrollTrack.offsetTop to get accurate position in case it's not exactly at the top
  const maxScroll = scrollTrack.clientHeight - window.innerHeight;
  let scrollFraction = Math.max(0, scrollTop - scrollTrack.offsetTop) / maxScroll;
  
  scrollFraction = Math.max(0, Math.min(1, scrollFraction));
  const frameIndex = Math.min(
    frameCount - 1,
    Math.floor(scrollFraction * frameCount)
  );
  
  if (images[frameIndex] && images[frameIndex].complete) {
    drawImageToCanvas(images[frameIndex]);
  }
}

window.addEventListener('resize', resizeCanvas);
resizeCanvas();

function drawImageToCanvas(img) {
  // Add a larger zoom to give us even more room to shift the image down
  // without revealing the bottom edge of the canvas.
  const zoom = 1.3; 
  const canvasRatio = canvas.width / canvas.height;
  const imgRatio = img.width / img.height;
  let renderWidth = canvas.width * zoom;
  let renderHeight = canvas.height * zoom;
  let offsetX = 0;
  let offsetY = 0;

  if (canvasRatio > imgRatio) {
    renderWidth = canvas.width * zoom;
    renderHeight = (canvas.width * zoom) / imgRatio;
  } else {
    renderHeight = canvas.height * zoom;
    renderWidth = (canvas.height * zoom) * imgRatio;
  }

  // Center horizontally
  offsetX = (canvas.width - renderWidth) / 2;
  
  // Shift vertically down more significantly to clear the header completely
  offsetY = (canvas.height - renderHeight) / 2 + (canvas.height * 0.18); 

  // Fill canvas with background color first
  ctx.fillStyle = "#131313";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.drawImage(img, offsetX, offsetY, renderWidth, renderHeight);
}

window.addEventListener('scroll', () => {
  requestAnimationFrame(renderCanvas);
});
