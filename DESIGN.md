---
name: Performance Cycling Design System
colors:
  surface: '#131313'
  surface-dim: '#131313'
  surface-bright: '#393939'
  surface-container-lowest: '#0e0e0e'
  surface-container-low: '#1b1c1c'
  surface-container: '#1f2020'
  surface-container-high: '#2a2a2a'
  surface-container-highest: '#353535'
  on-surface: '#e4e2e1'
  on-surface-variant: '#e4bfb1'
  inverse-surface: '#e4e2e1'
  inverse-on-surface: '#303030'
  outline: '#ab8a7d'
  outline-variant: '#5b4137'
  surface-tint: '#ffb599'
  primary: '#ffb599'
  on-primary: '#5a1c00'
  primary-container: '#ff5f00'
  on-primary-container: '#531a00'
  inverse-primary: '#a63b00'
  secondary: '#c8c6c5'
  on-secondary: '#313030'
  secondary-container: '#4a4949'
  on-secondary-container: '#bab8b7'
  tertiary: '#c6c6c7'
  on-tertiary: '#2f3131'
  tertiary-container: '#939494'
  on-tertiary-container: '#2b2d2d'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#ffdbce'
  primary-fixed-dim: '#ffb599'
  on-primary-fixed: '#370e00'
  on-primary-fixed-variant: '#7f2b00'
  secondary-fixed: '#e5e2e1'
  secondary-fixed-dim: '#c8c6c5'
  on-secondary-fixed: '#1c1b1b'
  on-secondary-fixed-variant: '#474646'
  tertiary-fixed: '#e2e2e2'
  tertiary-fixed-dim: '#c6c6c7'
  on-tertiary-fixed: '#1a1c1c'
  on-tertiary-fixed-variant: '#454747'
  background: '#131313'
  on-background: '#e4e2e1'
  surface-variant: '#353535'
typography:
  display-xl:
    fontFamily: Space Grotesk
    fontSize: 72px
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: -0.04em
  headline-lg:
    fontFamily: Space Grotesk
    fontSize: 48px
    fontWeight: '700'
    lineHeight: '1.2'
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Space Grotesk
    fontSize: 32px
    fontWeight: '600'
    lineHeight: '1.3'
    letterSpacing: -0.01em
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
    letterSpacing: '0'
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
    letterSpacing: '0'
  label-caps:
    fontFamily: Space Grotesk
    fontSize: 14px
    fontWeight: '600'
    lineHeight: '1.0'
    letterSpacing: 0.1em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  unit: 8px
  container-max: 1280px
  gutter: 24px
  margin: 32px
  section-gap: 120px
---

## Brand & Style
The design system is engineered for a high-performance cycling brand that balances raw energy with technical sophistication. It targets elite athletes and enthusiasts who value precision engineering and speed. The emotional response is one of momentum, reliability, and "at-the-limit" performance.

The visual style is a hybrid of **Minimalism** and **High-Contrast Bold**. It utilizes expansive whitespace to allow product photography to breathe, contrasted against aggressive, dark sections that evoke the texture of carbon fiber and asphalt. Subtle dot-grid overlays and hairline borders are used throughout the interface to reinforce the aesthetic of technical blueprints and mechanical accuracy.

## Colors
The palette is built on high-visibility contrast. The primary color is a vibrant **Electric Orange**, reserved strictly for primary actions, critical data points, and movement indicators. **Deep Charcoal** serves as the primary canvas, providing a premium, sleek backdrop that reduces eye strain and makes the orange elements "pop." **Crisp White** is used for high-level hierarchy typography and secondary backgrounds to create a clean, clinical feel in technical specification areas.

Success, error, and warning states should be handled through tonal shifts of the primary palette or highly saturated functional colors that maintain the "electric" intensity of the brand.

## Typography
Typography in this design system is built to convey speed. **Space Grotesk** is used for headlines; its technical, geometric construction and slightly condensed feel mimic the typography found on racing components and digital bike computers. Large display headers should use tight letter-spacing and bold weights to evoke a sense of forward motion.

**Inter** is utilized for body copy to ensure maximum readability during high-activity scenarios. It provides a neutral, functional counterpoint to the aggressive headlines. For technical data—such as cadence, wattage, or heart rate—always use the **Label-Caps** style to maintain a precise, engineered appearance.

## Layout & Spacing
The layout follows a **Fixed Grid** model for desktop, utilizing a 12-column system that emphasizes structural alignment and precision. On mobile, the system transitions to a fluid model with generous margins to ensure touch targets are easily accessible during physical activity.

Spacing is governed by an 8px rhythmic scale. To achieve the "premium" feel, the design system utilizes significant vertical "Section Gaps" (120px+) between major content blocks, preventing the UI from feeling cluttered. Alignment should be strict; elements should snap to the grid to reflect the meticulous nature of cycling engineering.

## Elevation & Depth
Depth in this design system is achieved through **Tonal Layers** rather than heavy shadows. Surfaces are stacked using varying shades of charcoal to define hierarchy. 

Where depth is required for interactive elements (like cards or buttons), a very subtle, sharp drop shadow is applied to suggest a slight lift off the surface without breaking the flat, technical aesthetic. Backgrounds may occasionally feature a subtle "blueprint" grid pattern (1px lines or dots) in a low-contrast gray to provide a sense of scale and a "workbench" feel.

## Shapes
The shape language is "Soft" (0.25rem), leaning toward the sharper side of the spectrum. This "mechanical radius" reflects the precision-machined edges of high-end aluminum and carbon components. Large containers may use slightly more rounding (0.5rem) to maintain a modern look, but the overall silhouette of the design system remains crisp and architectural. Buttons and inputs should never be fully rounded (pills), as the squared-off nature feels more structural and "pro."

## Components
- **Buttons:** Primary buttons use the Electric Orange background with black text for maximum contrast. They feature a slight 2px border on hover to simulate mechanical engagement.
- **Cards:** Use a slightly lighter charcoal than the background with a 1px border. On hover, the border transitions to the primary orange.
- **Input Fields:** Technical and stark. Use a dark background with a crisp white border. Labels should use the uppercase "Space Grotesk" style.
- **Chips/Badges:** Small, rectangular tags used for "In Stock" or "New" status. Use high-contrast color fills with no rounding.
- **Data Visualizations:** Line charts and progress bars should use the primary orange against a dark grid. Lines should be thin (1.5px to 2px) to look like precision instruments.
- **Progress Indicators:** Use sharp, segmented bars instead of smooth circles to reinforce the mechanical theme.