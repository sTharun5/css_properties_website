// All CSS Flexbox properties — Beginner to Advanced
export const flexSections = [
 {
 level: 'Beginner',
 intro: {
 title: ' What is Flexbox?',
 body: `Flexbox is a CSS layout system that makes it easy to line up and space out items inside a container. Before Flexbox, developers used floats and table tricks — both were messy and hard to maintain.

**How it works:**
Write \`display: flex\` on any element and two things happen:
1. That element becomes a **flex container** with a horizontal main axis and a vertical cross axis.
2. Every direct child becomes a **flex item** — they automatically line up in a row.

Flexbox is **one-dimensional** — it works in one direction at a time (a row or a column). For full two-dimensional layouts, use CSS Grid.`,
 },
 properties: [
 {
 id: 'display-flex',
 name: 'display: flex',
 cssProperty: 'display',
 applies: 'container',
 description: `Setting \`display: flex\` on an element turns it into a flex container. All direct children immediately line up as flex items in a row.
<span></span>
**What changes inside:**
Inline elements like \`span\` or \`a\` tags can now have a fixed width and height. Margins between items don't collapse — two items with \`margin: 20px\` have exactly 40px between them. If a child has \`position: absolute\`, it drops out of the flex flow and doesn't affect the other items.
<span></span>
**flex vs inline-flex:**
\`display: flex\` fills the full width of its parent (like a div). \`display: inline-flex\` shrinks to wrap around its content (like a button). Both use Flexbox layout internally.`,
 values: ['flex', 'inline-flex', 'block'],
 default: 'flex',
 practice: 'Try `inline-flex` if you want a button with an icon and text, but don\'t want it to stretch to full width!',
 chips: [
 { key: 'flex', meaning: 'Block-level flex container' },
 { key: 'inline-flex', meaning: 'Inline-level flex container' },
 ],
 getCode: (val) => `.container {\n display: ${val};\n}\n\n/* All direct children become\n flex items automatically */`,
 renderItems: 3,
 },
 {
 id: 'flex-direction',
 name: 'flex-direction',
 cssProperty: 'flex-direction',
 applies: 'container',
 description: `Sets which direction items flow inside the container. Default is \`row\` — items go left to right. Use \`column\` to stack them top to bottom.
<span></span>
**The axis swap:**
Changing direction also swaps what the other properties control. In \`row\`: \`justify-content\` moves items horizontally, \`align-items\` moves them vertically. In \`column\`: it flips — \`justify-content\` moves items vertically and \`align-items\` moves them horizontally.
<span></span>
**Reversed values:**
\`row-reverse\` and \`column-reverse\` flip the starting edge — items appear reversed on screen. But the HTML order doesn't change, so screen readers and keyboard Tab still follow the original order. Only use reverse for visual tweaks, not to reorder content.`,
 values: ['row', 'row-reverse', 'column', 'column-reverse'],
 default: 'row',
 practice: 'Use `column` on mobile, then switch to `row` in a media query for desktop!',
 chips: [
 { key: 'row', meaning: '→ Left to right (default)' },
 { key: 'row-reverse', meaning: '← Right to left' },
 { key: 'column', meaning: '↓ Top to bottom' },
 { key: 'column-reverse', meaning: '↑ Bottom to top' },
 ],
 getCode: (val) => `.container {\n display: flex;\n flex-direction: ${val};\n}`,
 renderItems: 4,
 },
 {
 id: 'justify-content',
 name: 'justify-content',
 cssProperty: 'justify-content',
 applies: 'container',
 description: `Controls how items are spaced along the **main axis** (horizontal in a row). It only works when there's leftover space after items are sized.
<span></span>
**How each value works:**
• \`flex-start\` / \`flex-end\` — Pack items to the start or end edge.
• \`center\` — Group items in the middle, equal space on both sides.
• \`space-between\` — First item at the start, last at the end, equal gaps in between. No space on outer edges.
• \`space-around\` — Equal space on both sides of every item. Edge gaps are half the middle gaps.
• \`space-evenly\` — Every gap (including outer edges) is exactly the same size.`,
 values: ['flex-start', 'flex-end', 'center', 'space-between', 'space-around', 'space-evenly'],
 default: 'flex-start',
 practice: 'Use `space-between` for navbars — logo on the left, nav links on the right.',
 chips: [
 { key: 'flex-start', meaning: 'Pack items to start' },
 { key: 'center', meaning: 'Center items' },
 { key: 'space-between', meaning: 'Max space between' },
 { key: 'space-around', meaning: '½ space on edges' },
 { key: 'space-evenly', meaning: 'Equal space everywhere' },
 ],
 getCode: (val) => `.container {\n display: flex;\n justify-content: ${val};\n}`,
 renderItems: 3,
 },
 {
 id: 'align-items',
 name: 'align-items',
 cssProperty: 'align-items',
 applies: 'container',
 description: `Controls how items line up on the **cross axis** (vertical in a row). Works separately from \`justify-content\` which handles the main axis.
<span></span>
**Why stretch is the default:**
If items don't have a set height, they stretch to match the tallest item in the row. This is how Flexbox solves equal-height columns automatically — no JavaScript needed.
<span></span>
**What baseline does:**
\`baseline\` aligns items so the text inside each one sits on the same invisible line. Useful when mixing large and small text so the bottoms of the letters line up, not the boxes.
<span></span>
**One limit:**
\`align-items\` only works within a single row. When items wrap to multiple rows, use \`align-content\` to control the spacing between those rows.`,
 values: ['stretch', 'flex-start', 'flex-end', 'center', 'baseline'],
 default: 'stretch',
 practice: 'Combine `justify-content: center` and `align-items: center` to perfectly center anything inside a container.',
 chips: [
 { key: 'stretch', meaning: 'Fill container cross-axis' },
 { key: 'center', meaning: 'Center on cross-axis' },
 { key: 'baseline', meaning: 'Align text baselines' },
 ],
 getCode: (val) => `.container {\n display: flex;\n align-items: ${val};\n height: 160px;\n}`,
 renderItems: 4,
 tallItems: true,
 },
 {
 id: 'gap',
 name: 'gap',
 cssProperty: 'gap',
 applies: 'container',
 description: `Adds space **between** flex items — not on the outer edges. It's the clean, modern way to space items. No more adding margin to every item and removing it from the last one.
<span></span>
**How it fits into layout:**
The gap is subtracted from the available space before \`flex-grow\` or \`justify-content\` run. So those properties automatically work around the gaps.
<span></span>
**Row and column gaps separately:**
\`gap\` is a shorthand for \`row-gap\` and \`column-gap\`. Use \`gap: 20px 40px\` to set different values for each direction. One value applies to both.`,
 values: ['0px', '8px', '16px', '24px', '32px'],
 default: '16px',
 practice: 'Always use `gap` instead of margins for spacing between items — it avoids margin-collapse edge cases.',
 chips: [
 { key: 'gap', meaning: 'Sets both row and column gap' },
 { key: 'row-gap', meaning: 'Gap between rows' },
 { key: 'column-gap', meaning: 'Gap between columns' },
 ],
 getCode: (val) => `.container {\n display: flex;\n gap: ${val};\n}`,
 renderItems: 5,
 },
 ],
 },
 {
 level: 'Intermediate',
 properties: [
 {
 id: 'flex-wrap',
 name: 'flex-wrap',
 cssProperty: 'flex-wrap',
 applies: 'container',
 description: `By default, flex items stay on one line and shrink to fit. \`flex-wrap: wrap\` lets items jump to a new line when they run out of space.
<span></span>
**Without wrap:**
The browser squishes all items as small as possible to keep them on one line. If they still don't fit, they overflow outside the container boundary.
<span></span>
**With wrap on:**
When combined item widths exceed the container, a new line starts. Each line is independent — items on line 2 don't align with items on line 1 as a proper 2D grid. This is why CSS Grid exists for true two-dimensional layouts.`,
 values: ['nowrap', 'wrap', 'wrap-reverse'],
 default: 'wrap',
 practice: 'Combine `flex-wrap: wrap` with `flex-basis: 300px` for a responsive card grid with zero media queries.',
 chips: [
 { key: 'nowrap', meaning: 'Force single line (may overflow)' },
 { key: 'wrap', meaning: 'Breaks to next line' },
 { key: 'wrap-reverse', meaning: 'Wraps upward' },
 ],
 getCode: (val) => `.container {\n display: flex;\n flex-wrap: ${val};\n}`,
 renderItems: 7,
 wideItems: true,
 },
 {
 id: 'align-content',
 name: 'align-content',
 cssProperty: 'align-content',
 applies: 'container',
 description: `Controls spacing between **rows** when items wrap to multiple lines. Think of it as \`justify-content\` but for the rows themselves on the cross axis.
<span></span>
**Two requirements to work:**
1. \`flex-wrap\` must be set to \`wrap\` — no wrapping means only one row, nothing to space out.
2. The container needs explicit extra height — without leftover vertical space, there's nothing to distribute.
<span></span>
**How rows are packed:**
\`stretch\` (default) makes rows grow to fill all available height. \`flex-start\` packs rows tightly at the top. \`space-between\` pushes the first row to the top and the last to the bottom.`,
 values: ['flex-start', 'flex-end', 'center', 'space-between', 'space-around', 'stretch'],
 default: 'flex-start',
 practice: 'Use `align-content: center` to vertically center a wrapped group of tags inside a tall container.',
 chips: [
 { key: 'flex-start', meaning: 'Pack rows to top' },
 { key: 'center', meaning: 'Center the cluster of rows' },
 { key: 'stretch', meaning: 'Rows stretch to fill vertical space' },
 ],
 getCode: (val) => `.container {\n display: flex;\n flex-wrap: wrap;\n height: 250px;\n align-content: ${val};\n}`,
 renderItems: 7,
 wideItems: true,
 multiline: true,
 },
 {
 id: 'flex-grow',
 name: 'flex-grow',
 cssProperty: 'flex-grow',
 applies: 'item',
 description: `When the container has leftover space, \`flex-grow\` decides how much each item takes. A value of \`0\` means the item keeps its size. A higher number means it grabs more of the extra space.
<span></span>
**The math:**
If one item has \`flex-grow: 2\` and another has \`flex-grow: 1\`, the container splits leftover space into 3 parts. The first item gets 2 parts, the second gets 1 part. They won't be 2× as wide overall — just 2× as much of the extra space.
<span></span>
**Common mistake:**
\`flex-grow: 2\` does not mean "twice as big". It means "absorbs twice as much of the remaining free space". The final size includes the item's original size plus its share of free space.`,
 values: ['0', '1', '2', '3'],
 default: '1',
 practice: 'Give a search input `flex-grow: 1` next to a button (`flex-grow: 0`) — the input stretches to fill the rest of the bar.',
 chips: [
 { key: '0', meaning: 'No growth (default)' },
 { key: '1', meaning: 'Absorb proportional space' },
 { key: '2', meaning: 'Absorb 2× proportional space' },
 ],
 getCode: (val) => `.item-2 {\n flex-grow: ${val};\n}\n/* Item 1 and 3 have flex-grow: 0 */`,
 renderItems: 3,
 growDemo: true,
 },
 {
 id: 'flex-shrink',
 name: 'flex-shrink',
 cssProperty: 'flex-shrink',
 applies: 'item',
 description: `When items are too wide to fit, \`flex-shrink\` controls how much each one compresses. Default is \`1\` — all items shrink equally. Set to \`0\` to stop an item from shrinking at all.
<span></span>
**Bigger items shrink more:**
Unlike \`flex-grow\`, shrinking is weighted by item size. A 500px item and a 100px item both with \`flex-shrink: 1\` won't lose the same amount — the larger one gives up more pixels. The browser tries to keep small items readable before crushing large ones.
<span></span>
**The invisible floor:**
Items won't shrink past their content size — the width of the longest unbreakable word inside them. If shrinking seems to stop working, add \`min-width: 0\` to the item to remove this limit.`,
 values: ['0', '1', '2', '3'],
 default: '0',
 practice: 'Apply `flex-shrink: 0` to avatars or icons so they keep their perfect shape when text beside them gets squished.',
 chips: [
 { key: '1', meaning: 'Shrink naturally (default)' },
 { key: '0', meaning: 'Refuse to shrink' },
 { key: '2', meaning: 'Shrink at double rate' },
 ],
 getCode: (val) => `.item-2 {\n flex-shrink: ${val};\n}\n/* Watch item-2 resist shrinking */`,
 renderItems: 3,
 shrinkDemo: true,
 },
 {
 id: 'flex-basis',
 name: 'flex-basis',
 cssProperty: 'flex-basis',
 applies: 'item',
 description: `Sets an item's starting size before the browser applies any growing or shrinking. Think of it as the item's "ideal size" before flex math happens.
<span></span>
**vs width:**
\`flex-basis\` is direction-aware. In a \`column\` layout, it controls height automatically — \`width\` wouldn't. If both \`width\` and \`flex-basis\` are set on the same item, \`flex-basis\` wins.
<span></span>
**auto vs 0:**
• \`auto\` — The item starts at its natural content size (or explicit width).
• \`0\` — The item starts at zero, so all space is treated as free space. This creates perfectly equal columns regardless of how much content each item has.`,
 values: ['auto', '0', '80px', '120px', '40%'],
 default: '120px',
 practice: 'Use `flex-basis: 300px` with `flex-grow: 1` — "try to be 300px wide, but stretch if there\'s extra room".',
 chips: [
 { key: 'auto', meaning: 'Basis equals content size' },
 { key: '0', meaning: 'Ignores content, starts at zero' },
 { key: 'px / %', meaning: 'Explicit starting size' },
 ],
 getCode: (val) => `.item-2 {\n flex-basis: ${val};\n}`,
 renderItems: 3,
 basisDemo: true,
 },
 {
 id: 'flex-flow',
 name: 'flex-flow',
 cssProperty: 'flex-flow',
 applies: 'container',
 description: `A shorthand that combines \`flex-direction\` and \`flex-wrap\` into one line. Clean and convenient when you need to set both.
<span></span>
**Why it's useful:**
When building responsive layouts, you often need to change direction and wrap at the same time — like going from \`column nowrap\` on mobile to \`row wrap\` on desktop. Writing them together keeps things tidy and prevents forgetting one.
<span></span>
**Order doesn't matter:**
You can write \`row wrap\` or \`wrap row\` — the browser handles both. Convention is direction first.`,
 values: ['row nowrap', 'row wrap', 'column wrap', 'row-reverse wrap'],
 default: 'row wrap',
 practice: 'Write `flex-flow: column wrap` instead of two separate lines — same result, less code.',
 chips: [
 { key: 'row nowrap', meaning: 'Default state' },
 { key: 'row wrap', meaning: 'Horizontal with line wrapping' },
 ],
 getCode: (val) => `.container {\n display: flex;\n flex-flow: ${val};\n}`,
 renderItems: 6,
 wideItems: true,
 },
 ],
 },
 {
 level: 'Advanced',
 properties: [
 {
 id: 'flex-shorthand',
 name: 'flex (shorthand)',
 cssProperty: 'flex',
 applies: 'item',
 description: `Combines \`flex-grow\`, \`flex-shrink\`, and \`flex-basis\` into one property. The spec recommends always using this shorthand — it sets smarter defaults than the individual properties do.
<span></span>
**What shortcut values expand to:**
• \`flex: 1\` → \`1 1 0%\` — Items share space equally, content size ignored. Best for equal columns.
• \`flex: auto\` → \`1 1 auto\` — Items share space, but content-rich items get more room.
• \`flex: none\` → \`0 0 auto\` — Rigid item, completely ignores flex sizing.
• \`flex: 0 1 200px\` — Standard way to give an item a 200px starting width.
<span></span>
**The best pattern:**
Use \`flex: 1\` on columns instead of \`width: 33.33%\`. It handles gaps and edge pixels cleanly — no sub-pixel rendering bugs.`,
 values: ['none', '1', 'auto', '1 0 auto', '2 1 100px', '0 0 200px'],
 default: '1',
 practice: 'Use `flex: 1` on layout columns — it forces equal splits and handles gaps automatically.',
 chips: [
 { key: 'none', meaning: 'Rigid, locks to content size' },
 { key: 'auto', meaning: 'Flexible, respects content size' },
 { key: '1', meaning: 'Equal splits, ignores content size' },
 ],
 getCode: (val) => `.item {\n flex: ${val};\n}`,
 renderItems: 3,
 flexShorthand: true,
 },
 {
 id: 'align-self',
 name: 'align-self',
 cssProperty: 'align-self',
 applies: 'item',
 description: `Overrides the container's \`align-items\` rule for a single item. Accepts all the same values as \`align-items\`.
<span></span>
**How it's applied:**
The browser lays out the main axis first, then applies \`align-items\` to everyone. If an item has \`align-self\`, it gets repositioned on the cross axis independently — other items are not affected.
<span></span>
**No justify-self in Flexbox:**
Unlike CSS Grid, Flexbox has no \`justify-self\`. To push one item to the opposite end of the main axis, use \`margin-left: auto\` — it eats all the remaining space on that side, pushing the item to the far right.`,
 values: ['auto', 'flex-start', 'flex-end', 'center', 'stretch', 'baseline'],
 default: 'flex-start',
 practice: 'Use `align-self: flex-end` on just the Save button to pin it to the bottom of a row while other items stay at the top.',
 chips: [
 { key: 'auto', meaning: 'Follows container align-items' },
 { key: 'flex-start', meaning: 'Pulls to start edge' },
 { key: 'stretch', meaning: 'Stretches to fill cross-axis' },
 ],
 getCode: (val) => `.special-item {\n align-self: ${val};\n}`,
 renderItems: 4,
 selfDemo: true,
 },
 {
 id: 'order',
 name: 'order',
 cssProperty: 'order',
 applies: 'item',
 description: `Changes where an item appears visually without touching the HTML. Default is \`0\`. Lower numbers appear first, higher numbers appear last.
<span></span>
**How it works:**
The browser groups items by their \`order\` value. Items with the same value follow their HTML order. Use \`-1\` to pull an item to the front, or \`1\` to push it to the back.
<span></span>
**Accessibility warning:**
\`order\` only changes what you see on screen. Screen readers read the original HTML order. Keyboard Tab navigation also follows the HTML order — so reordering items with \`order\` can confuse keyboard users. Only use it for purely decorative visual shifts.`,
 values: ['-2', '-1', '0', '1', '2'],
 default: '-1',
 practice: 'Use `order: 1` to move an image below the text on mobile — no JavaScript or DOM manipulation needed.',
 chips: [
 { key: '0', meaning: 'Default source order' },
 { key: '-1', meaning: 'Visually moves to the front' },
 { key: '1', meaning: 'Visually moves to the back' },
 ],
 getCode: (val) => `.item-3 {\n order: ${val};\n}`,
 renderItems: 5,
 orderDemo: true,
 },
 {
 id: 'place-content',
 name: 'place-content',
 cssProperty: 'place-content',
 applies: 'container',
 description: `Shorthand for \`align-content\` + \`justify-content\` in one line. Best used in wrapped, multi-line containers.
<span></span>
**Syntax:**
\`place-content: <align-content> <justify-content>\`. Write just one value and it applies to both. So \`place-content: center\` centers a wrapped cluster of items both vertically and horizontally in one shot.
<span></span>
**When it doesn't work:**
\`align-content\` needs \`flex-wrap: wrap\` and extra height to do anything. On a single-row flex container, the vertical centering part is silently ignored. For single rows, use \`align-items: center\` instead.`,
 values: ['center', 'start', 'end', 'space-between', 'center start', 'space-evenly center'],
 default: 'center',
 practice: 'Use `place-content: center` on a wrapped badge grid to lock the whole cluster to the center of the screen.',
 chips: [
 { key: 'center', meaning: 'Centers in both directions' },
 { key: 'start end', meaning: 'Rows top, items left' },
 ],
 getCode: (val) => `.container {\n display: flex;\n flex-wrap: wrap;\n height: 220px;\n place-content: ${val};\n}`,
 renderItems: 6,
 wideItems: true,
 multiline: true,
 placeContent: true,
 },
 {
 id: 'min-max-width',
 name: 'min-width limitations',
 cssProperty: 'minWidth',
 applies: 'item',
 description: `This is the most common hidden bug in Flexbox. Flex items have \`min-width: auto\` by default — meaning they refuse to shrink smaller than their own content, no matter what.
<span></span>
**Why it breaks layouts:**
If a flex item contains a long URL, a wide code block, or text that won't wrap, the item's minimum size becomes very wide. It can't shrink, so it bursts out of the container — especially on mobile screens.
<span></span>
**The fix:**
Add \`min-width: 0\` to the flex item. This removes the automatic size floor and lets the item shrink freely. After that, \`overflow: hidden\` and \`text-overflow: ellipsis\` will start working correctly inside it.`,
 values: ['0', 'auto', '100px', '200px'],
 default: '0',
 practice: 'If text is breaking your flex layout, add `min-width: 0` to the item wrapping the text — it\'s almost always the fix.',
 chips: [
 { key: 'auto', meaning: 'Default — won\'t shrink past content size' },
 { key: '0', meaning: 'Removes the floor — item can shrink freely' },
 ],
 getCode: (val) => `.item-2 {\n flex: 1;\n min-width: ${val};\n overflow: hidden;\n text-overflow: ellipsis;\n}`,
 renderItems: 3,
 minWidthDemo: true,
 },
 ],
 },
];

export const flexPatterns = [
 {
 name: ' Mathematical Center (Holy Grail Unit)',
 code: `.center-box {\n /* The most powerful CSS snippet */\n display: flex;\n justify-content: center;\n align-items: center;\n\n /* Alternatively, you can use margin */\n /* display: flex; */\n /* .child { margin: auto; } */\n}`,
 demo: 'center',
 },
 {
 name: ' Split Navbar Engine',
 code: `.navbar {\n display: flex;\n justify-content: space-between;\n align-items: center;\n padding: 0 24px;\n}\n/* The flex engine forces the logo left */\n/* and the nav group right naturally */`,
 demo: 'navbar',
 },
 {
 name: ' Responsive Fractional Grid',
 code: `.card-row {\n display: flex;\n flex-wrap: wrap;\n gap: 16px;\n}\n.card {\n /* min 200px basis */\n /* allows equal stretch beyond */\n flex: 1 1 200px;\n}`,
 demo: 'cards',
 },
 {
 name: ' Application Shell (Holy Grail)',
 code: `.page {\n display: flex;\n flex-direction: column;\n min-height: 100vh; /* locks to viewport */\n}\n.main-area {\n display: flex;\n flex: 1; /* eats remaining vertical space */\n}\n.sidebar { flex: 0 0 220px; /* rigid width, immune to shrink */ }\n.content { flex: 1; /* stretches to fill space next to sidebar */ }`,
 demo: 'holy',
 },
];
