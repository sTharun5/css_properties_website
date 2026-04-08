export const animationsSections = [
  {
    level: '1. Smooth Transitions',
    intro: {
      title: 'State Transitions',
      body: "In modern web design, things should almost never instantly snap from one state to another. When a user hovers over a button, it should smoothly lift up. When a modal opens, it should smoothly fade in. \n\nCSS Transitions allow us to declare a duration and an easing curve, telling the browser to mathematically calculate all the intermediate visual frames between State A and State B."
    },
    properties: [
      {
        id: 'transition-duration',
        name: 'transition-duration',
        cssProperty: 'transition-duration',
        description: 'How long the animation takes to complete from start to finish. Without a duration, the transition is instantaneous (0s) and invisible.',
        values: ['0.3s', '1s', '250ms'],
        default: '0.3s',
        chips: [
          { key: '0.3s', meaning: 'A snappy third of a second (great for UI hovers)' },
          { key: '1s', meaning: 'A full slow second' },
          { key: '250ms', meaning: '250 milliseconds (same as 0.25s)' }
        ],
        getCode: (val) => `.element {\n  transition-duration: ${val};\n}`
      },
      {
        id: 'transition-timing-function',
        name: 'transition-timing-function',
        cssProperty: 'transition-timing-function',
        description: 'Also known as the "Easing Curve". This dictates whether the animation starts slow and speeds up, or starts fast and slows down.',
        values: ['linear', 'ease-out', 'cubic-bezier(0.68, -0.55, 0.26, 1.55)'],
        default: 'linear',
        chips: [
          { key: 'linear', meaning: 'Moves at exactly the same robotic speed the whole time' },
          { key: 'ease-out', meaning: 'Starts fast, then gracefully slows down to a stop' },
          { key: 'cubic-bezier', meaning: 'Custom physics curves that allow snapping and bouncing' }
        ],
        getCode: (val) => `.element {\n  transition-timing-function: ${val};\n}`
      },
      {
        id: 'transition',
        name: 'transition (Shorthand)',
        cssProperty: 'transition',
        description: 'We almost never write the properties individually. We jam them into the shorthand order: [property] [duration] [timing] [delay].',
        values: ['all 0.3s ease', 'transform 0.2s', 'opacity 0.3s linear, transform 0.5s ease-out'],
        default: 'transform 0.2s',
        chips: [
          { key: 'transform 0.2s', meaning: 'Highly optimized hardware-accelerated target' },
          { key: 'all...', meaning: 'Lazy target but expensive for browser layout' },
          { key: 'opacity..., transform...', meaning: 'Multiple comma-separated triggers' }
        ],
        getCode: (val) => `.element {\n  transition: ${val};\n}`
      }
    ]
  },
  {
    level: '2. 2D / 3D Transforms',
    intro: {
      title: 'Hardware Accelerated Transforms',
      body: "Transform is the absolute king of CSS. If you try to animate `margin` or `top/left`, it will look choppy because those force the browser to recalculate the entire page Layout. \n\n`transform` is entirely handled by the user's GPU (Graphics Card). It is buttery smooth, perfectly achieving 60-120 frames per second."
    },
    properties: [
      {
        id: 'transform-translate',
        name: 'transform: translate()',
        cssProperty: 'transform',
        description: 'Moves the element visually without actually changing its physical footprint on the layout grid. (Like picking it up and moving it off the ground layer).',
        values: ['translateY(-10px)', 'translateX(20px)', 'translate(50px, 100px)'],
        default: 'translateY(-10px)',
        chips: [
          { key: 'translateY', meaning: 'Moves the box UP (-px) or DOWN (px)' },
          { key: 'translateX', meaning: 'Moves the box LEFT (-px) or RIGHT (px)' },
          { key: 'translate', meaning: 'Both X and Y concurrently' }
        ],
        getCode: (val) => `.element:hover {\n  transform: ${val};\n}`
      },
      {
        id: 'transform-scale',
        name: 'transform: scale()',
        cssProperty: 'transform',
        description: 'Grows or shrinks the element. 1 is normal size. 0.5 is half size. 2 is double size.',
        values: ['scale(1.1)', 'scale(0.9)', 'scale(2)'],
        default: 'scale(1.1)',
        chips: [
          { key: 'scale(1.1)', meaning: 'Grows the element by exactly 10%' },
          { key: 'scale(0.9)', meaning: 'Shrinks the element slightly' }
        ],
        getCode: (val) => `.element:hover {\n  transform: ${val};\n}`
      },
      {
        id: 'transform-rotate',
        name: 'transform: rotate()',
        cssProperty: 'transform',
        description: 'Spins the element on its Z axis. Commonly measured in degrees (deg).',
        values: ['rotate(90deg)', 'rotate(-45deg)', 'rotateX(180deg)'],
        default: 'rotate(90deg)',
        chips: [
          { key: 'rotate(90deg)', meaning: 'A sharp quarter-turn clockwise' },
          { key: 'rotate(-45deg)', meaning: 'A slight tilt backward' },
          { key: 'rotateX', meaning: 'Flipping like a coin in 3D space' }
        ],
        getCode: (val) => `.element:hover {\n  transform: ${val};\n}`
      }
    ]
  },
  {
    level: '3. CSS Keyframes',
    intro: {
      title: 'Infinite Automation',
      body: "Transitions require a trigger (like a mouse hover or javascript class added). But what if you want a loading spinner to spin infinitely as soon as the page loads? \n\nThat is what `@keyframes` are for. You define \"waypoints\" along a timeline (from 0% to 100%), and simply attach that timeline to an element."
    },
    properties: [
      {
        id: 'animation-name',
        name: 'animation-name',
        cssProperty: 'animation-name',
        description: 'The exact naming identifier of the `@keyframes` block you created in your stylesheet.',
        values: ['spin', 'pulse', 'slide'],
        default: 'spin',
        chips: [
          { key: 'spin', meaning: 'Binds to @keyframes spin' },
          { key: 'pulse', meaning: 'Binds to @keyframes pulse' }
        ],
        getCode: (val) => `@keyframes ${val} {\n  100% { transform: scale(1.5); }\n}\n\n.element {\n  animation-name: ${val};\n}`
      },
      {
        id: 'animation-iteration-count',
        name: 'animation-iteration-count',
        cssProperty: 'animation-iteration-count',
        description: 'How many times should the animation run before stopping forever.',
        values: ['infinite', '1', '3'],
        default: 'infinite',
        chips: [
          { key: 'infinite', meaning: 'Runs forever (Loaders, radar blips)' },
          { key: '1', meaning: 'Runs exactly once' }
        ],
        getCode: (val) => `.element {\n  animation-name: spin;\n  animation-iteration-count: ${val};\n}`
      },
      {
        id: 'animation-shorthand',
        name: 'animation (Shorthand)',
        cssProperty: 'animation',
        description: 'Like transitions, you place all directives into one line: [name] [duration] [timing] [iteration].',
        values: ['spin 1s linear infinite', 'pulse 0.8s ease-in-out infinite alternate'],
        default: 'spin 1s linear infinite',
        chips: [
          { key: 'spin...', meaning: 'A perfectly smooth endless loading wheel' },
          { key: 'pulse...', meaning: 'A bouncing heartbeat that reverses direction cleanly' }
        ],
        getCode: (val) => `.element {\n  animation: ${val};\n}`
      }
    ]
  }
];

export const animationsPatterns = [];
