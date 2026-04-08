export const animationsSections = [
  {
    level: '1. Smooth Transitions',
    intro: {
      title: 'State Transitions',
      body: 'In modern web design, things should almost never instantly snap from one state to another. When a user hovers over a button, it should smoothly lift up. When a modal opens, it should smoothly fade in. \n\nCSS Transitions allow us to declare a duration and an easing curve, telling the browser to mathematically calculate all the intermediate visual frames between State A and State B.'
    },
    properties: [
      {
        id: 'transition-property',
        name: 'transition-property',
        description: 'Explicitly defines EXACTLY which CSS property should animate. While you can use "all", targeting specific properties is much better for browser performance.',
        values: [
          { name: 'all', desc: 'Anything that changes will animate. (Computationally heavy!)', code: 'transition-property: all;' },
          { name: 'transform', desc: 'Only position/scale/rotation changes will animate.', code: 'transition-property: transform;' },
          { name: 'background, color', desc: 'You can comma-separate specific properties.', code: 'transition-property: background, color;' }
        ]
      },
      {
        id: 'transition-duration',
        name: 'transition-duration',
        description: 'How long the animation takes to complete from start to finish. Measure in seconds (s) or milliseconds (ms).',
        values: [
          { name: '0.3s', desc: 'A snappy third of a second (great for UI hovers).', code: 'transition-duration: 0.3s;' },
          { name: '1s', desc: 'A full slow second.', code: 'transition-duration: 1s;' },
          { name: '250ms', desc: '250 milliseconds.', code: 'transition-duration: 250ms;' }
        ]
      },
      {
        id: 'transition-timing-function',
        name: 'transition-timing-function',
        description: 'Also known as the "Easing Curve". This dictates whether the animation starts slow and speeds up, or starts fast and slows down.',
        values: [
          { name: 'linear', desc: 'Moves at exactly the same robotic speed the whole time.', code: 'transition-timing-function: linear;' },
          { name: 'ease-out', desc: 'Starts fast, then gracefully slows down to a stop.', code: 'transition-timing-function: ease-out;' },
          { name: 'cubic-bezier()', desc: 'Custom physics curves. You can even make it bounce using values above 1!', code: 'transition-timing-function: cubic-bezier(0.68, -0.55, 0.265, 1.55);' }
        ]
      },
      {
        id: 'transition-shorthand',
        name: 'transition (Shorthand)',
        description: 'We almost never write the properties individually. We jam them into the shorthand order: [property] [duration] [timing] [delay].',
        values: [
          { name: 'Transform 0.2s', desc: 'Animating a fast UI lift.', code: 'transition: transform 0.2s ease;' },
          { name: 'Multiple', desc: 'Chain multiple rules separated by commas.', code: 'transition: opacity 0.3s linear, transform 0.5s ease-out;' }
        ]
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
        name: 'translate()',
        description: 'Moves the element visually without actually changing its physical footprint on the layout grid. (Like picking it up and moving it off the ground layer).',
        values: [
          { name: 'translateY', desc: 'Moves the box UP or DOWN by pixels.', code: 'transform: translateY(-10px);' },
          { name: 'translateX', desc: 'Moves the box LEFT or RIGHT.', code: 'transform: translateX(20px);' },
          { name: 'translate (Both)', desc: 'X and Y concurrently.', code: 'transform: translate(50px, 100px);' }
        ]
      },
      {
        id: 'transform-scale',
        name: 'scale()',
        description: 'Grows or shrinks the element. 1 is normal size. 0.5 is half size. 2 is double size.',
        values: [
          { name: 'scale(1.1)', desc: 'Grows the element by exactly 10%.', code: 'transform: scale(1.1);' },
          { name: 'scale(0.9)', desc: 'Shrinks the element slightly.', code: 'transform: scale(0.9);' }
        ]
      },
      {
        id: 'transform-rotate',
        name: 'rotate()',
        description: 'Spins the element on its Z axis. Commonly measured in degrees (deg).',
        values: [
          { name: 'rotate(90deg)', desc: 'A sharp quarter-turn clockwise.', code: 'transform: rotate(90deg);' },
          { name: 'rotate(-45deg)', desc: 'A slight tilt backward.', code: 'transform: rotate(-45deg);' }
        ]
      },
      {
        id: 'transform-shorthand',
        name: 'Chaining Transforms',
        description: 'You can stack as many matrix manipulations together as you want just by putting a space between them!',
        values: [
          { name: 'Lift & Grow', desc: 'The classic button hover combo.', code: 'transform: translateY(-5px) scale(1.05);' },
          { name: 'Spin & Move', desc: 'Moves while rotating.', code: 'transform: translateX(100px) rotate(360deg);' }
        ]
      }
    ]
  },
  {
    level: '3. CSS Keyframes',
    intro: {
      title: 'Infinite Automation',
      body: 'Transitions require a trigger (like a mouse hover or javascript class added). But what if you want a loading spinner to spin infinitely as soon as the page loads? \n\nThat is what `@keyframes` are for. You define "waypoints" along a timeline (from 0% to 100%), and simply attach that timeline to an element.'
    },
    properties: [
      {
        id: 'animation-name',
        name: 'animation-name',
        description: 'The exact naming identifier of the `@keyframes` block you created in your stylesheet.',
        values: [
          { name: 'spin', desc: 'Binds to @keyframes spin.', code: 'animation-name: spin;' },
          { name: 'pulse', desc: 'Binds to @keyframes pulse.', code: 'animation-name: pulse;' }
        ]
      },
      {
        id: 'animation-iteration-count',
        name: 'animation-iteration-count',
        description: 'How many times should the animation run before stopping forever.',
        values: [
          { name: 'infinite', desc: 'Runs forever (Loaders, radar blips).', code: 'animation-iteration-count: infinite;' },
          { name: '1', desc: 'Runs exactly once.', code: 'animation-iteration-count: 1;' },
          { name: '3', desc: 'Runs exactly 3 times then stops.', code: 'animation-iteration-count: 3;' }
        ]
      },
      {
        id: 'animation-direction',
        name: 'animation-direction',
        description: 'How the animation progresses through its set keyframes.',
        values: [
          { name: 'normal', desc: 'Goes 0% to 100%, snaps back to 0, repeats.', code: 'animation-direction: normal;' },
          { name: 'alternate', desc: 'Goes 0% to 100%, then reverses backwards from 100% to 0% smoothly!', code: 'animation-direction: alternate;' }
        ]
      },
      {
        id: 'animation-shorthand',
        name: 'animation (Shorthand)',
        description: 'Like transitions, you place all directives into one line: [name] [duration] [timing] [iteration].',
        values: [
          { name: 'Infinite Spinner', desc: 'A perfectly smooth loading wheel.', code: 'animation: spin 1s linear infinite;' },
          { name: 'Heartbeat', desc: 'A bouncing pulse that reverses to create life.', code: 'animation: heartbeat 0.8s ease-in-out infinite alternate;' }
        ]
      }
    ]
  }
];

export const animationsPatterns = [];
