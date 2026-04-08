export const responsiveSections = [
  {
    level: '1. Viewport Media Queries',
    intro: {
      title: 'Global Screen Adaptation',
      body: "Before 2010, developers built separate websites for mobile and desktop (`m.facebook.com`). \n\nThen came `@media` queries—the foundation of Responsive Web Design. They allow us to write CSS rules that ONLY activate when the browser viewport perfectly matches specific mathematical conditions (like width, height, or screen orientation)."
    },
    properties: [
      {
        id: 'media-max-width',
        name: '@media (max-width)',
        cssProperty: 'media',
        description: 'The "Desktop-First" approach. These rules apply IF the screen is SMALLER than the specified pixel width.',
        values: ['768px', '480px'],
        default: '768px',
        chips: [
          { key: '768px', meaning: 'Standard breakpoint targeting Tablets and down' },
          { key: '480px', meaning: 'Targets only very small mobile phones' }
        ],
        getCode: (val) => `@media (max-width: ${val}) {\n  .container {\n    flex-direction: column;\n  }\n}`
      },
      {
        id: 'media-min-width',
        name: '@media (min-width)',
        cssProperty: 'media',
        description: 'The "Mobile-First" approach. Write CSS for mobile devices first, then use `min-width` to ENHANCE the layout when the screen gets WIDER.',
        values: ['1024px', '1400px'],
        default: '1024px',
        chips: [
          { key: '1024px', meaning: 'Standard breakpoint targeting Laptops and up' },
          { key: '1400px', meaning: 'Targets ultra-wide Desktop monitors' }
        ],
        getCode: (val) => `@media (min-width: ${val}) {\n  .container {\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n  }\n}`
      },
      {
        id: 'media-orientation',
        name: '@media (orientation)',
        cssProperty: 'media',
        description: 'Queries not just width, but the physical rotation of the device viewport.',
        values: ['landscape', 'portrait'],
        default: 'landscape',
        chips: [
          { key: 'landscape', meaning: 'Width is greater than height (holding phone sideways)' },
          { key: 'portrait', meaning: 'Height is greater than width (holding phone normally)' }
        ],
        getCode: (val) => `@media (orientation: ${val}) {\n  .camera-view {\n    width: 100vw;\n  }\n}`
      }
    ]
  },
  {
    level: '2. Modern Container Queries',
    intro: {
      title: '@container vs Viewport',
      body: "Media queries rely on the global browser width. But component-driven development (React/Vue) demands that a Card component should adjust its own layout based on where it is placed! If a card is squeezed into a tiny sidebar, it shouldn't try to render horizontally just because the global viewport is on a 4K monitor. \n\n`@container` queries fix this by letting components listen to the size of their direct parent container instead of the whole browser!"
    },
    properties: [
      {
        id: 'container-type',
        name: 'container-type',
        cssProperty: 'container-type',
        description: 'You MUST define a wrapping element as a mathematical "Container" before you can query it. This creates an isolated physics boundary.',
        values: ['inline-size', 'normal'],
        default: 'inline-size',
        chips: [
          { key: 'inline-size', meaning: 'Queries changes to Width only (most common)' },
          { key: 'normal', meaning: 'Queries stylistic state but not dimensional size' }
        ],
        getCode: (val) => `.card-wrapper {\n  container-type: ${val};\n  container-name: card;\n}`
      },
      {
        id: 'container-query',
        name: '@container',
        cssProperty: 'container',
        description: 'Once the parent is defined, the child can query its size directly using the `@container` syntax.',
        values: ['(max-width: 400px)', '(min-width: 600px)'],
        default: '(max-width: 400px)',
        chips: [
          { key: '(max-width: 400px)', meaning: 'If parent box shrinks below 400px' },
          { key: '(min-width: 600px)', meaning: 'If parent box grows over 600px' }
        ],
        getCode: (val) => `@container ${val} {\n  .card-child {\n    display: block;\n  }\n}`
      }
    ]
  },
  {
    level: '3. Fluid Mathematics',
    intro: {
      title: 'Elastic Values',
      body: "Often, you don't need a hard media query breakpoint. Instead, you can mathematical functions to make UI elements automatically scale in a completely fluid manner across all devices."
    },
    properties: [
      {
        id: 'fluid-clamp',
        name: 'clamp()',
        cssProperty: 'font-size',
        description: 'The golden rule of fluid typography. Defines exactly three variables: [Minimum Size], [Preferred Elastic Viewport Size], and [Maximum Size].',
        values: ['clamp(16px, 2vw, 24px)', 'clamp(300px, 50%, 600px)'],
        default: 'clamp(16px, 2vw, 24px)',
        chips: [
          { key: '16px, 2vw, 24px', meaning: 'Font is 16px on mobile, scales naturally up to 24px on desktop' },
          { key: '300px, 50%, 600px', meaning: 'A dynamically scaling fluid layout box' }
        ],
        getCode: (val) => `.heading {\n  font-size: ${val};\n}`
      },
      {
        id: 'fluid-min-max',
        name: 'min() and max()',
        cssProperty: 'width',
        description: 'Allows you to pass multiple values to the browser, and forces it to automatically pick either the smallest one or the largest one at runtime.',
        values: ['min(90vw, 1200px)', 'max(300px, 50vw)'],
        default: 'min(90vw, 1200px)',
        chips: [
          { key: 'min()', meaning: 'Takes 90% width, but caps out permanently at 1200px (Desktop wrap)' },
          { key: 'max()', meaning: 'Takes 50% width, but refuses to shrink below 300px (Mobile save)' }
        ],
        getCode: (val) => `.layout-wrapper {\n  width: ${val};\n}`
      }
    ]
  }
];

export const responsivePatterns = [];
