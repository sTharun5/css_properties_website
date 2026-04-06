// All CSS Flexbox properties — Beginner to Advanced with Deep Explanations
export const flexSections = [
  {
    level: 'Beginner',
    intro: {
      title: '🧩 Deep Dive: What is Flexbox?',
      body: `Flexbox (Flexible Box Layout Module) fundamentally altered how CSS engines calculate layout. Before Flexbox, developers relied on block, inline, table, and float layout models, which were designed for documents, not dynamic web applications.

**The Core Mechanics:**
When you declare \`display: flex\` on an element, two things happen immediately under the hood:
1. A **Flex Formatting Context (FFC)** is created. Margins of flex items do not collapse within this context.
2. The element generates two invisible axes: the **Main Axis** (governed by \`justify-content\`) and the **Cross Axis** (governed by \`align-items\`).

Unlike CSS Grid which lays out elements in two dimensions simultaneously, Flexbox is inherently **one-dimensional**. It calculates the layout of items along a single contiguous line (the main axis). If wrapping is enabled, think of it as multiple distinct 1D lines stacked vertically, not a 2D grid.`,
    },
    properties: [
      {
        id: 'display-flex',
        name: 'display: flex',
        cssProperty: 'display',
        applies: 'container',
        description: `**How it works:** This is the trigger property. Applying \`display: flex\` transforms the element into a flex container and its direct children into flex items.
<span></span>
**Under the hood effects:**
• **Inline sizing:** Elements like \`<span>\` or \`<a>\` (normally inline) immediately become block-level flex items capable of receiving width/height.
• **Margin collapsing:** The standard CSS margin collapse behavior is disabled. If you have two flex items with \`margin: 20px\`, the space between them will be exactly 40px, not 20px.
• **Absolute positioning:** If you place an \`position: absolute\` element inside a flex container (without setting \`left\`/\`top\`), its static position is calculated as if it were a flex item, though it doesn't participate in flex sizing.
<span></span>
**flex vs inline-flex:** \`display: flex\` acts like a block element (takes up 100% width of its parent). \`display: inline-flex\` acts like an inline element (shrink-wraps to its content width) but still applies internal flexbox layout to its children.`,
        values: ['flex', 'inline-flex', 'block'],
        default: 'flex',
        practice: 'Try `inline-flex` if you want a button with text and an icon inside it, but you don\'t want the button to stretch full width!',
        chips: [
          { key: 'flex', meaning: 'Block-level flex container' },
          { key: 'inline-flex', meaning: 'Inline-level flex container' },
        ],
        getCode: (val) => `.container {\n  display: ${val};\n}\n\n/* All direct children become\n   flex items automatically */`,
        renderItems: 3,
      },
      {
        id: 'flex-direction',
        name: 'flex-direction',
        cssProperty: 'flex-direction',
        applies: 'container',
        description: `**How it works:** Defines the vector (direction) of the main axis. This is the cornerstone of flex layout because it dictates how *every other* property behaves.
<span></span>
**The Axis Flip:**
When you switch from \`row\` to \`column\`, the internal coordinate system of the CSS engine rotates 90 degrees.
• In \`row\` (default): The main axis is horizontal. \`justify-content\` moves items horizontally. \`width\` dictates the flex-basis.
• In \`column\`: The main axis is vertical. \`justify-content\` now moves items vertically! \`align-items\` moves them horizontally. \`height\` dictates the flex-basis.
<span></span>
**Reversing the layout:**
\`row-reverse\` and \`column-reverse\` don't just change the visual order—they actually change the start/end points of the layout vector. \`row-reverse\` means the start edge is on the right, and items flow leftward. *Accessibility note: This only changes visual rendering, not DOM order. Screen readers will still read left-to-right DOM order, which can cause accessibility issues for keyboard navigation.*`,
        values: ['row', 'row-reverse', 'column', 'column-reverse'],
        default: 'row',
        practice: 'Use `column` for mobile layouts, then switch to `row` in a media query for desktop!',
        chips: [
          { key: 'row', meaning: '→ Left to right (default)' },
          { key: 'row-reverse', meaning: '← Right to left' },
          { key: 'column', meaning: '↓ Top to bottom' },
          { key: 'column-reverse', meaning: '↑ Bottom to top' },
        ],
        getCode: (val) => `.container {\n  display: flex;\n  flex-direction: ${val};\n}`,
        renderItems: 4,
      },
      {
        id: 'justify-content',
        name: 'justify-content',
        cssProperty: 'justify-content',
        applies: 'container',
        description: `**How it works:** Instructs the rendering engine on how to distribute *positive free space* along the main axis, AFTER all flex items have been sized and flex-grow/shrink operations are completed.
<span></span>
**Deep Technical Context:**
If your flex items completely fill the container (i.e., there is zero free space), \`justify-content\` literally does nothing. It mathematically relies on the presence of leftover space.
<span></span>
**The Calculations:**
• \`flex-start\` / \`flex-end\`: Packs items to the start or end edge of the layout vector.
• \`center\`: Calculates the total remaining space, divides it by 2, and pads the outer edges with that value.
• \`space-between\`: Number of items minus 1 equals the "gaps". Divides free space by gaps, placing equal space between items. No space on outer edges.
• \`space-around\`: Puts equal space around every item. (Item 1 has unit of space on its left, unit of space on its right. Item 2 has unit of space on its left... meaning the space *between* items is double the space on the outer edges).
• \`space-evenly\`: Calculates total number of items plus 1. Divides free space by that number to strictly ensure equal pixel gaps everywhere.`,
        values: ['flex-start', 'flex-end', 'center', 'space-between', 'space-around', 'space-evenly'],
        default: 'flex-start',
        practice: 'Use `space-between` for standard headers: Logo on the left, Navigation on the right.',
        chips: [
          { key: 'flex-start', meaning: 'Pack items to start' },
          { key: 'center', meaning: 'Center items' },
          { key: 'space-between', meaning: 'Max space between' },
          { key: 'space-around', meaning: '½ space on edges' },
          { key: 'space-evenly', meaning: 'Equal space everywhere' },
        ],
        getCode: (val) => `.container {\n  display: flex;\n  justify-content: ${val};\n}`,
        renderItems: 3,
      },
      {
        id: 'align-items',
        name: 'align-items',
        cssProperty: 'align-items',
        applies: 'container',
        description: `**How it works:** Aligns flex items across the Cross Axis. If \`flex-direction\` is \`row\`, this aligns items vertically.
<span></span>
**Understanding 'stretch':**
The default value is \`stretch\`. If a flex item does not have a fixed cross-size (e.g., no explicit \`height\` in a row layout), the engine will force its cross-size to stretch to match the tallest item in that specific flex line. This is why Flexbox natively solves the classic "equal height columns" problem that used to require JavaScript.
<span></span>
**Understanding 'baseline':**
\`baseline\` aligns items based on the typographical baseline of the text inside the items. If you have a large 48px heading next to a small 14px paragraph, \`center\` feels wrong because the text bottoms don't align. \`baseline\` tells the layout engine to calculate the distance to the first alphabetical baseline in each item and align those imaginary lines perfectly.
<span></span>
**Scope limit:** \`align-items\` only operates *within a single flex line*. If the container wraps into multiple lines, \`align-items\` aligns the items within their specific line tract only.`,
        values: ['stretch', 'flex-start', 'flex-end', 'center', 'baseline'],
        default: 'stretch',
        practice: 'Combine `justify-content: center` and `align-items: center` to mathematically perfect-center anything.',
        chips: [
          { key: 'stretch', meaning: 'Fill container cross-axis' },
          { key: 'center', meaning: 'Center on cross-axis' },
          { key: 'baseline', meaning: 'Align text baselines' },
        ],
        getCode: (val) => `.container {\n  display: flex;\n  align-items: ${val};\n  height: 160px;\n}`,
        renderItems: 4,
        tallItems: true,
      },
      {
        id: 'gap',
        name: 'gap',
        cssProperty: 'gap',
        applies: 'container',
        description: `**How it works:** A modern addition to Flexbox that defines explicit gutters between items. Previously, developers used awkward strategies like adding \`margin-right\` to all items and then using \`&:last-child { margin-right: 0 }\` or negative margins on the parent. \`gap\` cleanly injects space strictly *between* items.
<span></span>
**Internal mechanics:**
When the flex layout algorithm calculates available free space (for \`justify-content\` or \`flex-grow\`), it performs this mathematical subtraction first:
\`Available Space = Container Width - (Sum of item widths) - (Gap Size * (Items - 1))\`
<span></span>
**Gap separation:**
The \`gap\` property is actually a shorthand for \`row-gap\` and \`column-gap\`. You can specify two values like \`gap: 20px 40px;\` (which sets row-gap to 20px and column-gap to 40px). If you only set one value, it applies to both.`,
        values: ['0px', '8px', '16px', '24px', '32px'],
        default: '16px',
        practice: 'Always use `gap` instead of CSS margins for internal component spacing! It prevents margin-collapse edge cases.',
        chips: [
          { key: 'gap', meaning: 'Sets both row and column gap' },
          { key: 'row-gap', meaning: 'Gap between rows' },
          { key: 'column-gap', meaning: 'Gap between columns' },
        ],
        getCode: (val) => `.container {\n  display: flex;\n  gap: ${val};\n}`,
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
        description: `**How it works:** Tells the flex container whether its items should be forced onto a single line (\`nowrap\`) or allowed to overflow into multiple lines (\`wrap\`) when the container math determines there isn't enough space.
<span></span>
**The Math of Wrapping:**
By default (\`nowrap\`), the engine will aggressively shrink all items (using \`flex-shrink\`) down to their \`min-content\` size to force them to fit. If they *still* don't fit, they literally overflow outside the container.
When \`wrap\` is engaged, the engine calculates the \`flex-basis\` of the items. Once the sum of the \`flex-basis\` (plus gaps) exceeds the container's main-axis dimension, the engine forcibly breaks the line. A new, independent flex line is created.
<span></span>
**Line Independence:**
A critical concept: **Each wrapped line functions as an independent flex container**. \`justify-content\` and \`align-items\` are calculated *per line*. If line 1 has 4 items and line 2 has 1 item, \`justify-content: space-between\` will spread the 4 items out on line 1, but the 1 item on line 2 will just sit at the start edge because it has no siblings to create space between. This is why Flexbox cannot create rigid 2D alignment like Grid can.`,
        values: ['nowrap', 'wrap', 'wrap-reverse'],
        default: 'wrap',
        practice: 'Combine `flex-wrap: wrap` with `flex-basis: 300px` for a responsive card grid that needs zero media queries.',
        chips: [
          { key: 'nowrap', meaning: 'Force single line (overflows)' },
          { key: 'wrap', meaning: 'Breaks to next line' },
          { key: 'wrap-reverse', meaning: 'Wraps upwards inherently' },
        ],
        getCode: (val) => `.container {\n  display: flex;\n  flex-wrap: ${val};\n}`,
        renderItems: 7,
        wideItems: true,
      },
      {
        id: 'align-content',
        name: 'align-content',
        cssProperty: 'align-content',
        applies: 'container',
        description: `**How it works:** This is the multi-line counterpart to \`justify-content\`. While \`justify-content\` handles free space on the Main Axis, \`align-content\` handles free space on the Cross Axis.
<span></span>
**The Prerequisite:**
This property **only does something if two conditions are met:**
1. \`flex-wrap\` must be set to \`wrap\`.
2. The container must have explicit extra height on the cross-axis. If the container simply shrink-wraps its contents, there is no free vertical space to distribute.
<span></span>
**Line Packing Logic:**
When wrapped, Flexbox creates invisible "line tracks". By default (\`stretch\`), these line tracks stretch vertically to completely fill the container height, which spreads your rows out. If you change it to \`flex-start\`, all line tracks are packed tightly together at the top of the container, leaving empty space at the bottom. \`space-between\` throws the first row to the top edge and the last row to the bottom edge.`,
        values: ['flex-start', 'flex-end', 'center', 'space-between', 'space-around', 'stretch'],
        default: 'flex-start',
        practice: 'Use `align-content: center` on a tall wrapper to take a wrapped cluster of tags and perfectly center the entire cluster vertically.',
        chips: [
          { key: 'flex-start', meaning: 'Pack rows to top' },
          { key: 'center', meaning: 'Center the cluster of rows' },
          { key: 'stretch', meaning: 'Rows stretch to fill vertical space' },
        ],
        getCode: (val) => `.container {\n  display: flex;\n  flex-wrap: wrap;\n  height: 250px;\n  align-content: ${val};\n}`,
        renderItems: 7,
        wideItems: true,
        multiline: true,
      },
      {
        id: 'flex-grow',
        name: 'flex-grow',
        cssProperty: 'flex-grow',
        applies: 'item',
        description: `**How it works:** Determines the "growth factor" of a flex item. If the container evaluates its layout and finds positive free space remaining, it consults the \`flex-grow\` values of all children to determine how to distribute that spare space.
<span></span>
**The Proportional Math:**
A value of 0 (default) means "do not absorb free space". 
If the container has 100px of free space, and Item A has \`flex-grow: 1\` while Item B has \`flex-grow: 1\`, the engine adds the total grow factors (1+1=2). It divides the free space by the total factor (100px / 2 = 50px). It then adds 50px to both items' widths.
If Item A has \`flex-grow: 2\` and Item B has \`flex-grow: 1\`, the total factor is 3. The 100px is divided into thirds. Item A absorbs 66.6px, and Item B absorbs 33.3px.
<span></span>
**Crucial Misunderstanding:**
\`flex-grow: 2\` does **not** mean the item will be twice as large as the other item! It just means it will absorb twice as much of the *leftover free space*. The final size is \`Base Size + Allotted Free Space\`.`,
        values: ['0', '1', '2', '3'],
        default: '1',
        practice: 'Give an input field `flex-grow: 1` next to a search button (`flex-grow: 0`) and the input will consume the rest of the available bar width.',
        chips: [
          { key: '0', meaning: 'No growth (default)' },
          { key: '1', meaning: 'Absorb proportional space' },
          { key: '2', meaning: 'Absorb 2x proportional space' },
        ],
        getCode: (val) => `.item-2 {\n  flex-grow: ${val};\n}\n/* Item 1 and 3 have flex-grow: 0 */`,
        renderItems: 3,
        growDemo: true,
      },
      {
        id: 'flex-shrink',
        name: 'flex-shrink',
        cssProperty: 'flex-shrink',
        applies: 'item',
        description: `**How it works:** The defense mechanism of Flexbox. When the items' ideal sizes exceed the container's width, a negative free space condition occurs. \`flex-shrink\` dictates how the engine forces items to compress to solve the overflow.
<span></span>
**The Weighted Shrink Algorithm:**
The default is 1, meaning all items allow themselves to be crushed equally to prevent overflow. If set to 0, the item violently refuses to shrink, even if it completely breaks out of the flex container boundary.
<span></span>
**It is not purely proportional:**
Unlike \`flex-grow\`, the shrink algorithm is weighted by the item's starting size. A 500px item with \`shrink: 1\` will lose more physical pixels than a 100px item with \`shrink: 1\`. The browser engine tries to prevent small items from shrinking out of existence before large items have surrendered their bulk.
<span></span>
**The min-content floor limit:**
By default, an item will not shrink below its \`min-content\` size (e.g., the length of its longest unbroken word). This often causes perceived bugs where \`flex-shrink\` seems to stop working. You solve this by adding \`min-width: 0\` to the item, removing the standard floor limit.`,
        values: ['0', '1', '2', '3'],
        default: '0',
        practice: 'Apply `flex-shrink: 0` to avatars or icons in a list so they preserve their perfect circle/square shape when the text wrapping next to them gets squished.',
        chips: [
          { key: '1', meaning: 'Shrink naturally (default)' },
          { key: '0', meaning: 'Refuse to shrink (preserves basis)' },
          { key: '2', meaning: 'Shrink at double the rate' },
        ],
        getCode: (val) => `.item-2 {\n  flex-shrink: ${val};\n}\n/* Watch item-2 resist shrinking */`,
        renderItems: 3,
        shrinkDemo: true,
      },
      {
        id: 'flex-basis',
        name: 'flex-basis',
        cssProperty: 'flex-basis',
        applies: 'item',
        description: `**How it works:** Sets the ideal, hypothetical base size of an item *before* the flex engine applies any growing or shrinking calculations.
<span></span>
**flex-basis vs width:**
While \`width\` technically does the same thing, \`flex-basis\` is axis-aware. If you change a container from \`row\` to \`column\`, \`flex-basis\` automatically controls the height instead. It is structurally safer.
Also, if both \`width\` and \`flex-basis\` are set, \`flex-basis\` completely overwrites \`width\`.
<span></span>
**The magic of 'auto' vs '0':**
• \`flex-basis: auto\` (default): The engine looks at the item's content (or its fixed \`width\`) and uses that as the starting point. So if a word is 80px long, the basis is 80px.
• \`flex-basis: 0\`: The engine completely ignores the item's content. It treats the item's initial size as exactly 0 pixels. This is crucial for creating items of perfectly equal width. If you set \`flex: 1 1 0\`, the layout engine sees zero starting width, calculates 100% of the container as "free space", divides it perfectly equally among the items, yielding mathematically identical columns regardless of content length.`,
        values: ['auto', '0', '80px', '120px', '40%'],
        default: '120px',
        practice: 'Use `flex-basis: 300px` combined with `flex-grow: 1`. It tells the browser: "Try to make this exactly 300px, but stretch it larger if there is leftover screen width".',
        chips: [
          { key: 'auto', meaning: 'Basis equals content size' },
          { key: '0', meaning: 'Total disregard for content size' },
          { key: 'px / %', meaning: 'Explicit starting measurement' },
        ],
        getCode: (val) => `.item-2 {\n  flex-basis: ${val};\n}`,
        renderItems: 3,
        basisDemo: true,
      },
      {
        id: 'flex-flow',
        name: 'flex-flow',
        cssProperty: 'flex-flow',
        applies: 'container',
        description: `**How it works:** A standard shorthand property that combines \`flex-direction\` and \`flex-wrap\` into a single, clean declaration.
<span></span>
**Why it exists:**
In any large scale web application, controlling the axis orientation and the line-wrapping rule simultaneously is extremely common (e.g. changing from \`column nowrap\` on mobile to \`row wrap\` on desktop). Grouping them prevents forgetting to set the wrap state when mutating the axis.
<span></span>
**Syntax parsing:**
The browser engine parses the string, extracting the direction keyword (\`row\`, \`column\`, \`row-reverse\`, \`column-reverse\`) and the wrap keyword (\`wrap\`, \`nowrap\`, \`wrap-reverse\`). The order of the two keywords does not matter to the CSS parser, though convention is direction first.`,
        values: ['row nowrap', 'row wrap', 'column wrap', 'row-reverse wrap'],
        default: 'row wrap',
        practice: 'Make a habit of writing `flex-flow: column wrap` instead of writing two lines of code!',
        chips: [
          { key: 'row nowrap', meaning: 'Default engine state' },
          { key: 'row wrap', meaning: 'Horizontal flow with multi-line capabilities' },
        ],
        getCode: (val) => `.container {\n  display: flex;\n  flex-flow: ${val};\n}`,
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
        description: `**How it works:** The ultimate shorthand. It bundles \`flex-grow\`, \`flex-shrink\`, and \`flex-basis\` into a single property. The spec strongly recommends using this shorthand over individual properties because the shorthand intelligently configures default values to prevent common layout bugs.
<span></span>
**Intelligent Default Injection:**
If you omit values, the browser infers them automatically in ways you might not expect:
• \`flex: 1\` -> Expands to \`1 1 0%\`. (Grow 1, shrink 1, basis absolute 0). This creates perfectly equal fractional boxes, ignoring content sizes.
• \`flex: auto\` -> Expands to \`1 1 auto\`. (Grow 1, shrink 1, basis auto). This shares free space, but items with more content get more space since their starting basis is larger.
• \`flex: none\` -> Expands to \`0 0 auto\`. (Grow 0, shrink 0, basis auto). A rigid item that completely ignores flex forces and locks to its content width.
• \`flex: 0 1 200px\` -> The standard expansion for specifying a fixed pixel target.
<span></span>
**The "Equal Width" secret:**
Never use \`width: 33.33%\` in flexbox. Use \`flex: 1\` on all three items. The browser math handles the gaps and edge pixels flawlessly, preventing the sub-pixel rendering bugs that plague percentage-based layouts.`,
        values: ['none', '1', 'auto', '1 0 auto', '2 1 100px', '0 0 200px'],
        default: '1',
        practice: 'Use `flex: 1` on layout columns—it bypasses content-based sizing entirely to guarantee perfectly equal responsive columns.',
        chips: [
          { key: 'none', meaning: 'Rigid, locks to content' },
          { key: 'auto', meaning: 'Flexible, but respects content size' },
          { key: '1', meaning: 'Most powerful: forces mathematically equal splits' },
        ],
        getCode: (val) => `.item {\n  flex: ${val};\n}`,
        renderItems: 3,
        flexShorthand: true,
      },
      {
        id: 'align-self',
        name: 'align-self',
        cssProperty: 'align-self',
        applies: 'item',
        description: `**How it works:** Allows a single flex item to rebel against the container's \`align-items\` rule. It accepts the exact same values as \`align-items\` but applies them individually on the cross axis.
<span></span>
**Internal processing logic:**
The layout engine processes the main axis first. Then, it sets up the cross-axis bounding boxes using the container's \`align-items\`. Finally, it iterates over all children; if it finds an \`align-self\` property, it recalculates the y-coordinates (in a row layout) for that specific item, pulling it away from its siblings.
<span></span>
**Use-case boundaries:**
Note that there is **no** \`justify-self\` in Flexbox (unlike CSS Grid). Because flexbox packs elements along a 1D line based on free space calculations across *all* items together, you cannot simply tell one item to individually "justify" itself away from the stream. (To achieve the effect of \`justify-self\` in Flexbox, you use \`margin-left: auto\` which consumes all free space on that side).`,
        values: ['auto', 'flex-start', 'flex-end', 'center', 'stretch', 'baseline'],
        default: 'flex-start',
        practice: 'If you have a row of settings, and one "Save" button needs to sit lower than the text, use `align-self: flex-end` just on the button.',
        chips: [
          { key: 'auto', meaning: 'Obeys container align-items' },
          { key: 'flex-start', meaning: 'Tears away to start edge' },
          { key: 'stretch', meaning: 'Forces height expansion' },
        ],
        getCode: (val) => `.special-item {\n  align-self: ${val};\n}`,
        renderItems: 4,
        selfDemo: true,
      },
      {
        id: 'order',
        name: 'order',
        cssProperty: 'order',
        applies: 'item',
        description: `**How it works:** Manipulates the visual render order of flex items independently of their source DOM structure. 
<span></span>
**The Sorting Engine:**
By default, all items have an \`order\` value of \`0\`. The browser groups items by their order value. If multiple items have the same order, they are laid out according to the HTML source sequence.
If you apply \`order: 1\` to an item, it is plucked out of the \`0\` group and placed at the very end. If you apply \`order: -1\`, it is pushed to the very front. You can use any integer, positive or negative.
<span></span>
**Accessibility Warning — Critical Danger:**
\`order\` ONLY alters the visual painting layer. It explicitly **does not** change the logical DOM layer. 
• Screen readers will read the content in the original HTML source order.
• The \`Tab\` key navigation for keyboard accessibility will jump wildly around the screen based on the invisible HTML order, causing extreme confusion for disabled users.
• Therefore: Never use \`order\` for actual logical reordering of content. Use it strictly for visual layout conveniences on mobile devices where purely decorative elements might need to shift.`,
        values: ['-2', '-1', '0', '1', '2'],
        default: '-1',
        practice: 'Use `order: 1` to throw an image completely below the text on mobile, without needing JavaScript to move the DOM node.',
        chips: [
          { key: '0', meaning: 'Default source order' },
          { key: '-1', meaning: 'Visually shifts to the front' },
          { key: '1', meaning: 'Visually shifts to the back' },
        ],
        getCode: (val) => `.item-3 {\n  order: ${val};\n}`,
        renderItems: 5,
        orderDemo: true,
      },
      {
        id: 'place-content',
        name: 'place-content',
        cssProperty: 'place-content',
        applies: 'container',
        description: `**How it works:** A very modern shorthand that targets specifically multi-line wrapping contexts. It combines \`align-content\` and \`justify-content\` into one line of code.
<span></span>
**Syntax parsing limitations:**
The syntax takes two values: \`place-content: <align-content> <justify-content>\`. 
If you only supply one value (e.g. \`place-content: center\`), the browser parser duplicates the value, setting BOTH \`align-content\` and \`justify-content\` to \`center\`. This creates a powerful, instantaneous complete-centering of a multi-line cluster.
<span></span>
**Why it fails sometimes:**
Remember that \`align-content\` strictly requires extra vertical height and \`flex-wrap: wrap\` to engage. If you apply \`place-content: center\` to a standard one-line flex row, the \`justify-content\` will work horizontally, but the vertical axis will appear broken because a single flex line relies on \`align-items\`, not \`align-content\`. (To center a single line in both directions, use \`place-items: center\` instead, or the standard justify/align pair).`,
        values: ['center', 'start', 'end', 'space-between', 'center start', 'space-evenly center'],
        default: 'center',
        practice: 'If you have a massive grid of wrapped badges, `place-content: center` will lock the entire blob perfectly to the middle of the screen in one line.',
        chips: [
          { key: 'center', meaning: 'Applies center to both alignments' },
          { key: 'start end', meaning: 'Align rows top, justify left' },
        ],
        getCode: (val) => `.container {\n  display: flex;\n  flex-wrap: wrap;\n  height: 220px;\n  place-content: ${val};\n}`,
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
        description: `**How it works:** The silent assassin of Flexbox layout. This explains the most common bug developers face when text breaks layouts.
<span></span>
**The Flex Floor Rule:**
The W3C specification includes a unique rule for Flex items: the \`min-width\` (and \`min-height\`) of a flex item defaults to \`auto\`, NOT \`0\` (which is the default purely block elements).
The \`auto\` value means: "Calculate the size of my internal content (like a long URL, a block of code, or a non-wrapping text string). I absolutely refuse to shrink smaller than that specific size, regardless of what \`flex-shrink\` tells me to do."
<span></span>
**The Explosion Bug:**
When you put a long \`<p>\` tag or a \`<pre>\` block inside a flex item, the item's \`min-width\` becomes massive. The item physically cannot shrink. It violently bursts out of the flex container, ruining the layout on mobile devices.
<span></span>
**The Fix:**
You must manually overwrite the spec's default by declaring \`min-width: 0\` (or \`min-height: 0\` for columns) on the flex item. This explicitly removes the content-aware floor limit, allowing the \`flex-shrink\` algorithm to crush the item down to 0 pixels if necessary. This finally allows your internal \`overflow: hidden\` or \`text-overflow: ellipsis\` rules to engage properly.`,
        values: ['0', 'auto', '100px', '200px'],
        default: '0',
        practice: 'If text overflow breaks your flex layout, apply `min-width: 0` to the item enclosing the text.',
        chips: [
          { key: 'auto', meaning: 'Implicit floor based on content (causes bugs)' },
          { key: '0', meaning: 'Removes the flex floor completely (recommended)' },
        ],
        getCode: (val) => `.item-2 {\n  flex: 1;\n  min-width: ${val};\n  overflow: hidden;\n  text-overflow: ellipsis;\n}`,
        renderItems: 3,
        minWidthDemo: true,
      },
    ],
  },
];

export const flexPatterns = [
  {
    name: '🎯 Mathematical Center (Holy Grail Unit)',
    code: `.center-box {\n  /* The most powerful CSS snippet */\n  display: flex;\n  justify-content: center;\n  align-items: center;\n\n  /* Alternatively, you can use margin */\n  /* display: flex; */\n  /* .child { margin: auto; } */\n}`,
    demo: 'center',
  },
  {
    name: '🗂️ Split Navbar Engine',
    code: `.navbar {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 0 24px;\n}\n/* The flex engine forces the logo left */\n/* and the nav group right naturally */`,
    demo: 'navbar',
  },
  {
    name: '🃏 Responsive Fractional Grid',
    code: `.card-row {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 16px;\n}\n.card {\n  /* min 200px basis */\n  /* allows equal stretch beyond */\n  flex: 1 1 200px;\n}`,
    demo: 'cards',
  },
  {
    name: '📐 Application Shell (Holy Grail)',
    code: `.page {\n  display: flex;\n  flex-direction: column;\n  min-height: 100vh; /* locks to viewport */\n}\n.main-area {\n  display: flex;\n  flex: 1; /* eats remaining vertical space */\n}\n.sidebar { flex: 0 0 220px; /* rigid width, immune to shrink */ }\n.content { flex: 1; /* stretches to fill space next to sidebar */ }`,
    demo: 'holy',
  },
];
