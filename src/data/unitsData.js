// All CSS Units — Absolute, Relative, and Viewport
export const unitsSections = [
 {
 level: 'Absolute & Relative Basics',
 intro: {
 title: ' Understanding CSS Units',
 body: `Before laying out elements with Flexbox or Grid, you need to size them. CSS has two types of units: **Absolute** (like \`px\`) and **Relative** (like \`rem\`, \`em\`, \`%\`).

**What the browser actually does:**
No matter which unit you write, the browser converts everything to raw screen pixels before drawing it. Understanding how each unit calculates that conversion is the key to building layouts that scale well on every screen size.`,
 },
 properties: [
 {
 id: 'unit-px',
 name: 'px (Pixel)',
 cssProperty: 'width',
 applies: 'any',
 description: `\`px\` is the most common CSS unit. But one CSS pixel is not the same as one physical screen pixel — this is one of the most misunderstood things in CSS.
<span></span>
**Why it's different on modern screens:**
High-density screens (like Retina displays) pack far more physical pixels per inch than older monitors. If \`1px\` mapped to one physical pixel, websites would look tiny on phones. Instead, the browser uses a "reference pixel" — a standard visual size. On a phone with a 3× screen density, \`width: 100px\` actually uses 300 physical pixels to draw.
<span></span>
**When to use px:**
Use \`px\` for small decorative details — like \`border: 1px solid\` or \`box-shadow\` offsets. Avoid it for font sizes. A hardcoded pixel font size ignores the user's browser text-size settings, which breaks accessibility for people who need larger text.`,
 values: ['10px', '50px', '100px'],
 default: '100px',
 practice: 'Use `border: 1px solid red` for debugging layouts. Avoid px for fonts!',
 chips: [
 { key: 'px', meaning: 'CSS reference pixel (not hardware pixel)' },
 ],
 getCode: (val) => `.box {\n width: ${val};\n height: 50px;\n background: var(--blue);\n}`,
 renderItems: 1,
 },
 {
 id: 'unit-em',
 name: 'em (Ephemeral Font-Size)',
 cssProperty: 'width',
 applies: 'any',
 description: `\`1em\` equals the \`font-size\` of the element you're styling. If the element's font size is 20px, then \`1em = 20px\` and \`2em = 40px\`.
<span></span>
**The stacking problem:**
If a parent has \`font-size: 20px\` and a child has \`font-size: 2em\` (= 40px), then a grandchild with \`font-size: 2em\` calculates from 40px — giving 80px. The sizes keep multiplying down the tree. This makes \`em\` risky for font sizes across nested elements.
<span></span>
**Where em shines:**
Use \`em\` for \`padding\` and \`margin\` on components like buttons. If a button has \`padding: 0.5em 1em\`, the padding automatically stays proportional when you change the font size — the button just scales nicely without extra CSS.`,
 values: ['1em', '2em', '4em', '10em'],
 default: '2em',
 practice: 'Use `padding: 0.5em 1em` on buttons so the padding scales automatically with the font size.',
 chips: [
 { key: 'em', meaning: 'Relative to current element\'s font-size' },
 { key: 'compounding', meaning: 'Multiplies down nested elements' },
 ],
 getCode: (val) => `.box {\n font-size: 16px; /* Base */\n width: ${val}; /* Resolves to 16 * value */\n height: 50px;\n background: var(--pink);\n}`,
 renderItems: 1,
 },
 {
 id: 'unit-rem',
 name: 'rem (Root em)',
 cssProperty: 'width',
 applies: 'any',
 description: `\`rem\` works like \`em\`, but always reads from one single source: the root \`html\` element. It never compounds down the tree — no stacking surprises.
<span></span>
**Why it matters for accessibility:**
Browsers default to \`16px\` for the root font size. If a user sets their browser font to \`24px\` (for vision reasons), elements sized in \`rem\` automatically scale up. Elements hardcoded in \`px\` stay the same size and override the user's settings — breaking accessibility.
<span></span>
**The 62.5% trick:**
Some developers write \`html { font-size: 62.5%; }\` so \`1rem = 10px\` (easier mental math). This is optional and slightly dated — just use \`rem\` with the default \`16px\` base and everything works fine.`,
 values: ['1rem', '2rem', '4rem', '10rem'],
 default: '2rem',
 practice: 'Use `rem` for all font sizes, global margins, and layout spacing — it\'s the most accessible and predictable unit.',
 chips: [
 { key: 'rem', meaning: 'Relative to root html font-size only' },
 { key: 'a11y', meaning: 'Respects user browser text settings' },
 ],
 getCode: (val) => `.box {\n /* html root assumed 16px */\n width: ${val}; /* Resolves to 16 * value */\n height: 50px;\n background: var(--teal);\n}`,
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
 description: `\`vw\` is 1% of the browser window width. \`vh\` is 1% of the browser window height. \`100vw\` = full window width, \`100vh\` = full window height.
<span></span>
**The iOS Safari bug:**
\`height: 100vh\` is famously broken on mobile. iOS Safari and Android Chrome include the address bar in the viewport height — so your content gets partially hidden under the browser toolbar at the bottom.
<span></span>
**The modern fix — dvh, svh, lvh:**
CSS introduced new units to solve this properly:
• \`svh\` — height when the toolbar is fully visible (safe minimum)
• \`lvh\` — height when the toolbar is hidden (maximum)
• \`dvh\` — updates in real time as the toolbar appears and disappears. Use this for app shells.`,
 values: ['10vw', '25vw', '50vw', '100vw'],
 default: '50vw',
 practice: 'Stop writing `height: 100vh` on mobile. Use `height: 100dvh` instead — it accounts for the mobile browser toolbar.',
 chips: [
 { key: 'vw / vh', meaning: '1% of raw viewport width or height' },
 { key: 'dvh', meaning: 'Dynamic — avoids iOS toolbar bugs' },
 ],
 getCode: (val) => `.box {\n width: ${val};\n height: 50px;\n background: var(--purple);\n}`,
 renderItems: 1,
 },
 {
 id: 'unit-vmin-vmax',
 name: 'vmin & vmax',
 cssProperty: 'width',
 applies: 'any',
 description: `\`vmin\` uses whichever is smaller — the viewport width or height. \`vmax\` uses whichever is larger. They update automatically when the screen rotates.
<span></span>
**vmin in action:**
Portrait phone: width is smaller, so \`vmin\` measures from the width. Rotate to landscape: height is now smaller, so \`vmin\` switches to height. The element stays proportional in both orientations automatically.
<span></span>
**Best use case:**
\`width: 100vmin; height: 100vmin\` creates a square that always fits perfectly on screen in any orientation — no overflow, no scrollbars. Great for canvases, images, and full-screen UI elements.`,
 values: ['10vmin', '50vmin', '100vmin', '50vmax'],
 default: '50vmin',
 practice: 'Use `width: 80vmin; height: 80vmin` on a hero image — it scales cleanly on both portrait and landscape.',
 chips: [
 { key: 'vmin', meaning: 'Relative to the smaller viewport axis' },
 { key: 'vmax', meaning: 'Relative to the larger viewport axis' },
 ],
 getCode: (val) => `.box {\n width: ${val};\n height: 50px;\n background: var(--blue);\n}`,
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
 description: `\`1ch\` equals the width of the \`0\` (zero) character in the current font and size. It's a typographic unit used to control how wide a block of text can be.
<span></span>
**Why line length matters for reading:**
Lines of text are easiest to read at 60–75 characters wide. Shorter and your eyes constantly snap back. Longer and they have to scan too far, causing fatigue.
<span></span>
**The right way to set max-width:**
Instead of guessing with \`max-width: 800px\` (which varies by font), write \`max-width: 65ch\`. The browser measures the font's zero character, multiplies by 65, and sets the perfect maximum line length — automatically, for any font.`,
 values: ['10ch', '30ch', '65ch'],
 default: '65ch',
 practice: 'Add `max-width: 65ch` to your `article` or `p` tags for comfortable, readable line lengths.',
 chips: [
 { key: 'ch', meaning: 'Width of the "0" character in current font' },
 { key: 'legibility', meaning: 'Used to constrain prose line length' },
 ],
 getCode: (val) => `.box {\n width: ${val};\n background: var(--pink);\n padding: 8px;\n color: white;\n}\n/* Note how it bounds the text width */`,
 renderItems: 1,
 isTextNode: true,
 },
 {
 id: 'unit-percentages',
 name: '% (Percentage)',
 cssProperty: 'width',
 applies: 'any',
 description: `Percentage values are relative to the parent element. \`width: 50%\` means half of the parent's width.
<span></span>
**The layout limitation:**
Using percentages for columns (like \`width: 33.33%\`) is considered outdated. They can't account for gaps cleanly and require \`box-sizing: border-box\` everywhere. Flexbox and CSS Grid handle this far better with \`flex: 1\` and \`fr\` units.
<span></span>
**Why height: 100% often fails:**
For percentage heights to work, every parent up the tree must have an explicit height set. If any parent's height is \`auto\` (the default), the percentage has nothing to calculate against and just gets ignored.`,
 values: ['25%', '50%', '75%', '100%'],
 default: '50%',
 practice: 'Stop using percentage widths for layout columns. Use `flex: 1` or CSS Grid `fr` units instead.',
 chips: [
 { key: '%', meaning: 'Ratio of direct parent size' },
 { key: 'height bug', meaning: 'Fails if parent has no explicit height' },
 ],
 getCode: (val) => `/* The parent holds 100% width context */\n.box {\n width: ${val};\n height: 50px;\n background: var(--teal);\n}`,
 renderItems: 1,
 },
 ],
 },
];

export const unitsPatterns = [
 {
 name: ' The Accessible Readable Column',
 code: `.article-prose {\n /* Protects reading rhythm natively */\n max-width: 65ch;\n /* Scales perfectly due to root context */\n font-size: 1.1rem;\n /* Automatically scales gap with font size! */\n margin-bottom: 2em;\n}`,
 demo: 'ch',
 },
 {
 name: ' 100% Bug-Free Height Shell',
 code: `.app-wrapper {\n /* Avoids 100vh Safari toolbar overflow */\n height: 100dvh;\n width: 100vw;\n display: flex;\n flex-direction: column;\n}`,
 demo: 'viewport',
 },
];
