// All CSS Units — Absolute, Relative, and Viewport with Deep Explanations
export const unitsSections = [
  {
    level: 'Absolute & Relative Basics',
    intro: {
      title: '📏 Deep Dive: The Physics of CSS Units',
      body: `Before we can layout elements using Flexbox or Grid, we must define their physical presence using CSS units. The CSS specification classifies length units into two primary categories: **Absolute** and **Relative**.
      
**The Rendering Pipeline:**
When the browser engines (like WebKit or Blink) parse your CSS, they ultimately convert *every single unit* into raw physical device pixels before painting them to the monitor. This process is called "Computing the Values". 

Understanding how different relative units mathematically resolve themselves into those final absolute pixels is the secret to building resilient, scalable, and highly accessible web typography and layout architectures.`,
    },
    properties: [
      {
        id: 'unit-px',
        name: 'px (Pixel)',
        cssProperty: 'width',
        applies: 'any',
        description: `**How it works:** The \`px\` unit is the most foundational measuring stick in CSS. However, it is an incredibly common misconception that 1 CSS Pixel equals 1 Hardware Monitor Pixel.
<span></span>
**The Screen Mathematics:**
Due to high-density Retina/4K displays, the physical hardware pixels on your monitor are extremely tiny. If CSS \`px\` mapped 1-to-1 to hardware pixels, websites would render invisibly small on modern phones. 
Instead, a CSS \`px\` is defined by the W3C as a **Reference Pixel**, representing the visual angle of one pixel on a device with a pixel density of 96dpi, held at arm's length. 
Consequently, on an iPhone Retina display (which has a device pixel ratio of 3), an element mathematically sized at \`width: 100px\` in CSS is actually painted by the GPU using exactly **300 physical light-emitting diodes** on the phone screen.
<span></span>
**When to use:**
Pixels should almost **never** be used for font sizes because it completely overrides the user's browser accessibility settings for vision impairment. Pixels should be strictly reserved for microscopic decorative elements like \`border-width: 1px\` or \`box-shadow\`.`,
        values: ['10px', '50px', '100px'],
        default: '100px',
        practice: 'Use `border: 1px solid red` for debugging. Resist using px for fonts!',
        chips: [
          { key: 'px', meaning: 'Absolute CSS Reference Pixel (NOT hardware pixel)' },
        ],
        getCode: (val) => `.box {\n  width: ${val};\n  height: 50px;\n  background: var(--blue);\n}`,
        renderItems: 1,
      },
      {
        id: 'unit-em',
        name: 'em (Ephemeral Font-Size)',
        cssProperty: 'width',
        applies: 'any',
        description: `**How it works:** The \`em\` unit is a deeply contextual, relative unit. 1 \`em\` mathematically equates to the computed \`font-size\` of the element you are currently styling.
<span></span>
**The Compounding Trap:**
If you set a parent \`div\` to \`font-size: 20px\`, and a child element inside it to \`font-size: 2em\`, the child's text renders at 40px (\`20 * 2\`). 
However, if you nest *another* element inside that child, and set IT to \`2em\`, it calculates dynamically off its direct parent (which is 40px), resulting in 80px (\`40 * 2\`). This creates aggressive geometrical compounding bugs where text exponentially explodes in size.
<span></span>
**The Ideal Use-Case:**
While terrible for establishing standard font-sizes due to the compounding trap, \`em\` is phenomenal for structural margins and paddings on modular components like Buttons. 
If you set a button's padding to \`padding: 0.5em 1em\`, the padding creates a symbiotic mathematical relationship with the font size. If you later shrink the button's \`font-size\`, the padding dynamically shrinks perfectly proportional to the text, keeping the aesthetic aspect ratio immaculate without writing extra code.`,
        values: ['1em', '2em', '4em', '10em'],
        default: '2em',
        practice: 'Use `padding: 0.5em 1em` on buttons so the internal spacing automatically scales relative to the specific button\'s font size.',
        chips: [
          { key: 'em', meaning: 'Relative to current element\'s font-size' },
          { key: 'compounding', meaning: 'Multiplies exponentially down the DOM tree' },
        ],
        getCode: (val) => `.box {\n  font-size: 16px; /* Base */\n  width: ${val}; /* Resolves to 16 * value */\n  height: 50px;\n  background: var(--pink);\n}`,
        renderItems: 1,
      },
      {
        id: 'unit-rem',
        name: 'rem (Root em)',
        cssProperty: 'width',
        applies: 'any',
        description: `**How it works:** The absolute king of modern CSS typography. The \`rem\` unit functions identically to \`em\`, but completely circumvents the compounding bug because it exclusively derives its multiplication value from a single source of truth: the absolute root \`<html>\` element of the document.
<span></span>
**Accessibility & Best Practice:**
By default, every standard web browser sets the root \`<html>\` font-size to mathematically evaluate to \`16px\` by default, unless a visually-impaired user modifies their browser settings. 
If a user goes into Chrome Settings and changes their default font to \`24px\` because they are legally blind, a developer who hardcoded \`p { font-size: 16px }\` will completely override and break the user's accessibility tools, leaving the text unreadable.
If the developer instead writes \`p { font-size: 1rem }\`, the layout engine consults the root. Because the user changed the root to 24px, \`1rem\` mathematically resolves to 24px, and the website remains perfectly accessible.
<span></span>
**The 62.5% Trick (Anti-pattern):**
Some developers set \`html { font-size: 62.5%; }\` so that \`1rem\` equals exactly \`10px\` (because 62.5% of 16px default is 10). This makes mental math easier (\`2.4rem\` = 24px). However, modern designers usually discourage this; it's better to just accept \`16px\` as the standard baseline and use CSS variables or a calc engine.`,
        values: ['1rem', '2rem', '4rem', '10rem'],
        default: '2rem',
        practice: 'Use `rem` for EVERYTHING related to typography layout: fonts, global margins, and major block structure!',
        chips: [
          { key: 'rem', meaning: 'Relative to ROOT (<html>) font-size only' },
          { key: 'a11y', meaning: 'The only correct unit for accessible text sizing' },
        ],
        getCode: (val) => `.box {\n  /* html root assumed 16px */\n  width: ${val}; /* Resolves to 16 * value */\n  height: 50px;\n  background: var(--teal);\n}`,
        renderItems: 1,
      },
    ],
  },
  {
    level: 'Viewport Units',
    properties: [
      {
        id: 'unit-vh-vw',
        name: 'vw & vh (Viewport dimensions)',
        cssProperty: 'width',
        applies: 'any',
        description: `**How it works:** \`vw\` and \`vh\` represent a percentage slice of the browser's physical viewport geometry. \`1vw\` is exactly 1% of the viewport's width. \`100vh\` is exactly 100% of the viewport's height.
<span></span>
**The Mobile Safari Bug:**
\`.hero { height: 100vh; }\` is famously bugged on iOS Safari and Chrome Android. When applying \`100vh\`, the browser engines naively calculate the total screen height spanning from the absolute top to absolute bottom... completely ignoring the dynamic URL toolbar overlay. Your actual webpage content extends down beneath the bottom toolbar UI, forcing an annoying scroll.
<span></span>
**The Modern Fix (dvh / svh / lvh):**
To rectify this historical flaw, CSS introduced new sub-variants:
• \`svh\` (Small Viewport Height): The safe zone height when the URL mobile bar is fully expanded.
• \`lvh\` (Large Viewport Height): The maximal height when the user scrolls and the URL bar retracts via animation.
• \`dvh\` (Dynamic Viewport Height): The mathematically perfect algorithm. It smoothly recalculates in real-time between \`svh\` and \`lvh\` as the user's thumb moves the toolbar up and down.`,
        values: ['10vw', '25vw', '50vw', '100vw'],
        default: '50vw',
        practice: 'Never write 100vh on mobile anymore. Use the new standard: `height: 100dvh` for application shells!',
        chips: [
          { key: 'vw / vh', meaning: '1% of raw viewport width/height' },
          { key: 'dvh', meaning: 'Dynamic calculation avoiding iOS toolbar bugs' },
        ],
        getCode: (val) => `.box {\n  width: ${val};\n  height: 50px;\n  background: var(--purple);\n}`,
        renderItems: 1,
      },
      {
        id: 'unit-vmin-vmax',
        name: 'vmin & vmax',
        cssProperty: 'width',
        applies: 'any',
        description: `**How it works:** The most aggressively responsive layout units in CSS. They algorithmically evaluate both the viewport width and height simultaneously, compare them, and dynamically select either the smaller or larger axis for geometric scaling.
<span></span>
**vmin (Viewport Minimum):**
\`1vmin\` looks at both the height and width of the browser. Whichever magnitude is mathematically smaller right now, it takes 1% of THAT specific axis. 
If you are holding an iPhone in Portrait mode (tall), the width is the smaller axis, so \`vmin\` derives from the width. The millisecond you rotate the phone mechanically into Landscape mode (wide), the height becomes the smaller axis, and \`vmin\` instantly shifts its calculation vector to the height.
<span></span>
**The Best Use-Case:**
They are unparalleled for ensuring SVG models or Canvas elements never overflow the screen. Setting an element to \`width: 100vmin; height: 100vmin;\` guarantees a geometrically flawless square that will always stretch to exactly touch the edges of the smallest screen boundary, but mathematically cannot ever overflow the display, preventing scrollbars globally.`,
        values: ['10vmin', '50vmin', '100vmin', '50vmax'],
        default: '50vmin',
        practice: 'Use `height: 80vmin; width: 80vmin;` on a Hero image or 3D canvas so it automatically scales flawlessly during device rotation.',
        chips: [
          { key: 'vmin', meaning: 'Locks relative to smallest physical axis' },
          { key: 'vmax', meaning: 'Locks relative to largest physical axis' },
        ],
        getCode: (val) => `.box {\n  width: ${val};\n  height: 50px;\n  background: var(--blue);\n}`,
        renderItems: 1,
      },
    ],
  },
  {
    level: 'Advanced Ratios',
    properties: [
      {
        id: 'unit-ch',
        name: 'ch (Character Unit)',
        cssProperty: 'width',
        applies: 'any',
        description: `**How it works:** \`ch\` is a phenomenally obscure but profoundly powerful typographical unit. 1 \`ch\` is equal to the exact geometric width of the zero character (\`0\`) within the currently rendered font-family and font-size.
<span></span>
**The Reading Psychology:**
Typographers universally agree that optimal reading legibility degrades rapidly if text lines are too long (the eye fatigues tracking back to the next line) or too short (the eye breaks rhythm constantly). The mathematical gold standard for prose reading is between 60 and 75 characters per line.
<span></span>
**The implementation:**
Instead of awkwardly guessing column pixel widths like \`max-width: 800px\` across different operating systems rendering different fonts, you simply declare \`max-width: 65ch\`. The layout engine evaluates the user's specific font file, calculates the pixel width of the zero character, multiplies it by 65, and perfectly constraints the paragraph boundary, guaranteeing flawless typographic psychological line lengths unconditionally.`,
        values: ['10ch', '30ch', '65ch'],
        default: '65ch',
        practice: 'Apply `max-width: 65ch` globally to your `<article>` or `<p>` tags for immaculate article reading experiences.',
        chips: [
          { key: 'ch', meaning: 'Width of the "0" (zero) character glyph' },
          { key: 'legibility', meaning: 'Used purely to constrain prose text lengths' },
        ],
        getCode: (val) => `.box {\n  width: ${val};\n  background: var(--pink);\n  padding: 8px;\n  color: white;\n}\n/* Note how it bounds the test phrase width*/`,
        renderItems: 1,
        isTextNode: true, // Custom flag to render text inside the demo instead of plain block
      },
      {
        id: 'unit-percentages',
        name: '% (Percentage)',
        cssProperty: 'width',
        applies: 'any',
        description: `**How it works:** The classic relative unit. It calculates its geometrical value strictly based on its immediate, physical DOM parent element.
<span></span>
**The Flow Limitation:**
While widely utilized, traditional developers heavily rely on percentages for layout grids (e.g., \`width: 33.33%\`). This is largely considered legacy architecture due to extreme fragility. Percents are completely blind to surrounding margins, borders, and paddings unless you strictly enforce \`box-sizing: border-box\` universally. More critically, percentages cannot dynamically utilize Flexbox/Grid Free-Space mathematical engines, causing destructive wrapping algorithms.
<span></span>
**Percentage Heights (The Trap):**
The most common confusion in CSS is why \`height: 100%\` randomly refuses to render. Due to the W3C block formatting context, vertical flow defaults to \`auto\` (shrinking to accommodate text). A child element mathematically cannot calculate 100% height if its parent has an \`auto\` height... because 100% of "undefined" equals undefined. To successfully utilize \`%\` for height, there must be an unbroken daisy-chain of explicit heights set down the entire DOM tree all the way to the \`<html>\` root string.`,
        values: ['25%', '50%', '75%', '100%'],
        default: '50%',
        practice: 'Stop using percentage widths for layout architectures. Delegate layouts entirely to Flex/Grid fraction (`fr`) engines.',
        chips: [
          { key: '%', meaning: 'Strict mathematical ratio of direct parent node' },
          { key: 'height bug', meaning: 'Fails unless parent explicitly holds altitude' },
        ],
        getCode: (val) => `/* The parent holds 100% width context */\n.box {\n  width: ${val};\n  height: 50px;\n  background: var(--teal);\n}`,
        renderItems: 1,
      },
    ],
  },
];

export const unitsPatterns = [
  {
    name: '📚 The Accessible Readable Column',
    code: `.article-prose {\n  /* Protects reading rhythm natively */\n  max-width: 65ch;\n  /* Scales perfectly due to root context */\n  font-size: 1.1rem;\n  /* Automatically scales gap with font size! */\n  margin-bottom: 2em;\n}`,
    demo: 'ch',
  },
  {
    name: '📱 100% Bug-Free Height Shell',
    code: `.app-wrapper {\n  /* Avoids 100vh Safari toolbar overflow */\n  height: 100dvh;\n  width: 100vw;\n  display: flex;\n  flex-direction: column;\n}`,
    demo: 'viewport',
  },
];
