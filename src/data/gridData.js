// All CSS Grid properties — Beginner to Advanced with Deep Explanations
export const gridSections = [
  {
    level: 'Beginner',
    intro: {
      title: '🔲 Deep Dive: What is CSS Grid?',
      body: `CSS Grid is a **pure two-dimensional layout engine**. While Flexbox pushes items along a 1D line and wraps them when they overflow, Grid fundamentally alters the geometry of the page layout. It allows you to build a rigid structural skeleton (Tracks) and subsequently lock HTML elements into designated coordinates on that skeleton.

**Core Mechanics:**
When you activate \`display: grid\`, the element transforms into a Grid Container.
Unlike Flexbox, where the children dictate the size and structure based on their content, Grid is a **parent-driven layout module**. You define invisible layout lines on the container using \`grid-template-columns\` and \`grid-template-rows\`. The spaces between these theoretical lines form "Tracks".

**The Grid Anatomy:**
• **Grid Lines:** The dividing boundaries (both horizontal and vertical) that form the grid. Line 1 is the starting edge.
• **Grid Track:** The space between two adjacent grid lines (a row or a column).
• **Grid Cell:** The smallest available unit inside the grid, bound by four grid lines.
• **Grid Area:** Any rectangular space comprised of one or more adjacent grid cells.`,
    },
    properties: [
      {
        id: 'grid-display',
        name: 'display: grid',
        cssProperty: 'display',
        applies: 'container',
        description: `**How it works:** Initializes the Grid Formatting Context (GFC) on the parent element. This transforms direct children into grid items.
<span></span>
**Under the hood effects:**
• **Auto-placement:** The moment an element becomes a Grid, a powerful algorithm called the "Auto-Placement Algorithm" boots up. If you do not define explicit coordinates for your grid items, the algorithm starts dropping items into cells one by one, filling rows left-to-right, then auto-creating new rows vertically downwards.
• **Implicit Grid Creation:** If there are 5 items in the DOM, but you only defined \`grid-template-columns: 1fr 1fr\` (a 2-column grid and 0 explicit rows), the Grid engine refuses to break the layout. It silently generates "implicit" row tracks to house the 3 leftover items.
<span></span>
**grid vs inline-grid:** \`display: grid\` forces the container to behave like a standard block-level element, spreading 100% across its parent width. \`display: inline-grid\` shrink-wraps the entire grid structure down to exactly encompass its tracks, sitting inline with text like an image or a button would.`,
        values: ['grid', 'inline-grid'],
        default: 'grid',
        practice: 'Use `inline-grid` if you are building complex UI components (like a custom multi-select dropdown badge box) that need to live inline inside a sentence!',
        chips: [
          { key: 'grid', meaning: 'Standard block Grid Container' },
          { key: 'inline-grid', meaning: 'Inline wrapper around the Grid' },
        ],
        getCode: (val) => `.container {\n  display: ${val};\n}`,
        renderItems: 6,
      },
      {
        id: 'grid-template-columns',
        name: 'grid-template-columns',
        cssProperty: 'gridTemplateColumns',
        applies: 'container',
        description: `**How it works:** This is the most crucial property in CSS Grid. It defines the explicit framework of your layout columns. You pass it a space-separated list of sizes. The number of values dictates the number of columns.
<span></span>
**Understanding Fraction Units (fr):**
The \`fr\` unit was invented specifically for Grid. It stands for "Fraction of available free space". It functions mathematically like \`flex-grow\` in Flexbox, but it’s vastly more stable because it operates on the mathematical framework tracks, not the physical DOM nodes.
• \`1fr 1fr\`: Subtracts any gaps or fixed units (e.g., \`200px\`) from the container's width. Takes the leftover free space, divides it by 2, and assigns the size to the columns.
• \`1fr 2fr 1fr\`: Total fractions = 4. Divides free space into 4 chunks. Column A gets 25%, Column B gets 50%, Column C gets 25%.
<span></span>
**The Repeat() Function:**
Instead of typing \`1fr 1fr 1fr 1fr\`, you use \`repeat(4, 1fr)\`. The first argument is the track count; the second is the track size. You can repeat complex patterns: \`repeat(3, 100px 1fr)\` creates a 6-column grid alternating fixed and fluid sizes.`,
        values: ['1fr 1fr', '1fr 2fr 1fr', 'repeat(3, 1fr)', 'repeat(4, 1fr)', '200px 1fr', '100px auto 100px'],
        default: 'repeat(3, 1fr)',
        practice: '`grid-template-columns: 250px 1fr;` is the modern one-liner code to build the classic "Fixed Sidebar + Fluid Content" layout.',
        chips: [
          { key: '1fr', meaning: 'Fraction of free space' },
          { key: 'repeat(x, y)', meaning: 'Repeater function shortcut' },
          { key: 'auto', meaning: 'Track uses the width of its widest content' },
        ],
        getCode: (val) => `.container {\n  display: grid;\n  grid-template-columns: ${val};\n}`,
        renderItems: 6,
      },
      {
        id: 'grid-template-rows',
        name: 'grid-template-rows',
        cssProperty: 'gridTemplateRows',
        applies: 'container',
        description: `**How it works:** Defines explicit horizontal row tracks. Just like columns, the number of space-separated values you supply determines the explicit number of rows.
<span></span>
**Explicit vs Implicit Rows:**
A common pitfall is misunderstanding why rows work differently. On the web, we generally understand horizontal layout boundaries (columns) well, but vertical bounds are meant to scroll infinitely.
If you declare \`grid-template-rows: 100px 200px\`, you explicitly create two specific row tracks. If there are extra DOM elements, they will spill out of this explicit grid into the **implicit grid**. The implicit grid tracks will automatically assume a height of \`auto\` (taking the height of their internal content), NOT the sizes you defined in \`grid-template-rows\`.
<span></span>
**Use cases:**
Usually, developers omit \`grid-template-rows\` entirely and let the layout freely expand downwards automatically. You only use this property when you are building an architectural "shell" for a web app that occupies exactly \`100vh\` (100% of the viewport height), such as a dashboard with a fixed header and footer.`,
        values: ['auto', '80px 80px', '1fr 2fr', 'repeat(2, 100px)', '60px 1fr 60px'],
        default: '80px 80px',
        practice: 'Use `grid-template-rows: 80px 1fr 60px` combined with `height: 100vh` to build a full-screen layout that never scrolls.',
        chips: [
          { key: 'auto', meaning: 'Expands dynamically based on internal content' },
          { key: 'px / rem', meaning: 'Rigid vertical tracks' },
          { key: '1fr', meaning: 'Divides vertical free space (requires container height)' },
        ],
        getCode: (val) => `.container {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  grid-template-rows: ${val};\n}`,
        renderItems: 6,
      },
      {
        id: 'grid-gap',
        name: 'gap (grid)',
        cssProperty: 'gap',
        applies: 'container',
        description: `**How it works:** Automatically calculates and injects blank spacing between grid tracks (gutters). It is technically a shorthand for the \`row-gap\` and \`column-gap\` properties.
<span></span>
**The Engine Math:**
Unlike margins — which physically bloat the size of an element and cause layout disruptions — \`gap\` is executed purely by the Grid rendering engine. When calculating \`fr\` units, the engine will subtract the total sum of all gaps from the available width *before* executing the fraction mathematics. This makes it impossible for gaps to break a grid layout onto the next line (unlike using \`width: 33.3%\` + \`margin: 2%\` in older CSS).
<span></span>
**Edge Behavior:**
Gaps are strictly added *between* tracks. The gap applies essentially to the interior grid lines. No space is ever added to the outer boundaries of the container. If you need space between the grid itself and the container edge, use standard \`padding\` on the container.`,
        values: ['0px', '8px', '16px', '24px', '8px 24px'],
        default: '16px',
        practice: 'Pass two variables to gap, e.g., `gap: 32px 16px`, to create spacious horizontal breathing room between rows, but tight physical grouping for columns!',
        chips: [
          { key: 'gap', meaning: 'Row and Column gap equal value' },
          { key: 'x y', meaning: 'First value Row, second is Column' },
        ],
        getCode: (val) => `.container {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: ${val};\n}`,
        renderItems: 9,
      },
    ],
  },
  {
    level: 'Intermediate',
    properties: [
      {
        id: 'grid-column',
        name: 'grid-column',
        cssProperty: 'gridColumn',
        applies: 'item',
        description: `**How it works:** Manipulates the exact location and span of a single grid item across the horizontal axis. It does this by referencing the invisible "Grid Lines".
<span></span>
**Grid Line Mathematics:**
If you make a 3-column grid, there are 4 vertical grid lines. Line 1 is the far-left edge. Line 4 is the far-right edge.
• \`grid-column: 1 / 3\`: Instructs the item to start physically at Grid Line 1, and stop exactly at Grid Line 3. It will encompass two grid tracks.
• \`grid-column: span 2\`: Instructs the item to cover exactly 2 columns of space, starting from wherever the Auto-Placement algorithm happened to organically drop it.
<span></span>
**Negative Lines (The Power Move):**
The grid lines are also counted backwards! The far-right line is mathematically known as Line \`-1\`. Therefore, \`grid-column: 1 / -1\` tells the engine: "Start at the absolute beginning, and stretch to the absolute end." This works flawlessly regardless of if your grid has 3 columns or 30 columns. It’s perfect for full-width banners.`,
        values: ['1 / 2', '1 / 3', '1 / 4', 'span 2', 'span 3', '1 / -1'],
        default: 'span 2',
        practice: 'Use `grid-column: 1 / -1` on a specific featured blog post card to make it visually stretch across the entire width of the article grid.',
        chips: [
          { key: 'start / end', meaning: 'Target specific grid line integers' },
          { key: 'span n', meaning: 'Stretch n amount of tracks from current spot' },
          { key: '1 / -1', meaning: 'Absolute full width mathematical lock' },
        ],
        getCode: (val) => `.featured {\n  grid-column: ${val};\n}\n/* Container has 3 columns */`,
        renderItems: 6,
        spanDemo: true,
        spanAxis: 'col',
      },
      {
        id: 'grid-row',
        name: 'grid-row',
        cssProperty: 'gridRow',
        applies: 'item',
        description: `**How it works:** The exact vertical counterpart to \`grid-column\`. It dictates the starting horizontal grid line and the stopping horizontal grid line for a specific grid item.
<span></span>
**Creating Assymetric Layouts:**
This is where Grid separates itself radically from Flexbox. In Flexbox, items in a row simply wrap to a new row, forcing a horizontal flow structure. By declaring \`grid-row: span 2\` on an item, it punches straight down through the layout tracks. The surrounding grid items will organically reflow around the massive multi-row column. 
<span></span>
**Stacking Items / Overlapping Z-Index:**
Because Grid uses absolute track coordinates, you can actually place multiple distinct DOM elements into the exact same \`grid-row\` and \`grid-column\` coordinates. When you do this, the items literally overlap. The last element in the HTML sequence renders on top (or you can use \`z-index\`). This effectively obsoletes absolute positioning hacks for image overlays!`,
        values: ['auto', '1 / 3', 'span 2', 'span 3'],
        default: 'span 2',
        practice: 'Assign `grid-row: 1 / -1; grid-column: 1 / -1` to an image, and the same rules to text. They will overlay onto the same single-cell grid like magic.',
        chips: [
          { key: 'start / end', meaning: 'Target horizontal line integers' },
          { key: 'span n', meaning: 'Punches downward across row lines' },
        ],
        getCode: (val) => `.tall-item {\n  grid-row: ${val};\n}`,
        renderItems: 6,
        spanDemo: true,
        spanAxis: 'row',
      },
      {
        id: 'grid-area',
        name: 'grid-area & grid-template-areas',
        cssProperty: 'gridArea',
        applies: 'item',
        description: `**How it works:** Provides an incredible, ASCII-art-like layer of abstraction on top of Grid Layout. Instead of manipulating mathematical line numbers (\`1 / 3\`), you literally assign a human-readable text name to a component using \`grid-area\` (e.g. "header"). Then, on the container, you use \`grid-template-areas\` to draw a map in code mapping those strings to layout zones.
<span></span>
**The Mapping Engine:**
• You assign \`grid-area: HD\` to your header component.
• You assign \`grid-area: SD\` to your sidebar component.
• You assign \`grid-area: MN\` to your main component.
You then declare on the container: \`grid-template-areas: "HD HD" "SD MN"\`
The layout engine reads those strings, cross-references strings that match your \`grid-area\` declarations, and physically stretches the DOM nodes to cover the grid cells mathematically represented by the string matrix.
<span></span>
**Empty Cells:**
Use a dot \`.\` in your template string to explicitly inform the engine: "This cell should remain physically empty".`,
        values: ['"header header" "sidebar main" "footer footer"', '"header" "main" "footer"'],
        default: '"header header" "sidebar main" "footer footer"',
        practice: 'The ultimate responsive design technique: Simply change the `grid-template-areas` ASCII string inside a media query to visually reposition five components at once.',
        chips: [
          { key: 'grid-area:', meaning: 'Applied to child. Assigns a name or shorthand' },
          { key: 'grid-template-areas:', meaning: 'Applied to parent. Analyzes layout map' },
        ],
        getCode: (val) => `.container {\n  display: grid;\n  grid-template-columns: 200px 1fr;\n  grid-template-areas:\n    "header header"\n    "sidebar main"\n    "footer footer";\n}\n.header { grid-area: header; }\n.sidebar { grid-area: sidebar; }\n.main   { grid-area: main;   }\n.footer { grid-area: footer; }`,
        renderItems: 0,
        areasDemo: true,
      },
      {
        id: 'grid-auto-rows',
        name: 'grid-auto-rows',
        cssProperty: 'gridAutoRows',
        applies: 'container',
        description: `**How it works:** Instructs the grid engine how to size "Implicit Layout Rows" that it is forced to organically generate.
<span></span>
**The Implicit Grid mechanics:**
If you define two columns (\`1fr 1fr\`), but you pipe in 10 posts from a database, the Auto-Placement algorithm runs out of explicit columns. It must create 5 rows total to house the content. Because you did not write \`grid-template-rows\` explicitly for all 5 rows, the grid dynamically generates "Implicit" rows. 
By default, the engine assigns these implicit rows a size of \`auto\` (meaning they strictly contour themselves to the height of their internal text). 
If you apply \`grid-auto-rows: 200px\`, every single dynamically spawned horizontal row will forcibly be 200px tall. No matter how many database items load in, the architecture remains rigidly uniform.
<span></span>
**The Power of minmax():**
The optimal usage of this is \`grid-auto-rows: minmax(200px, auto)\`. This tells the engine: "Ensure every row is visually uniform at a minimum baseline of 200px, but if a database item has extremely long text, allow that specific row to expand organically so text does not clip and overlap."`,
        values: ['auto', '80px', '100px', 'minmax(60px, auto)', '1fr'],
        default: '80px',
        practice: 'When building card collections that flow endlessly, use grid-auto-rows with minmax() to guarantee visual consistency while protecting against text overflow!',
        chips: [
          { key: 'auto', meaning: 'Implicit row contours to content height' },
          { key: 'fixed (e.g. 100px)', meaning: 'Implicit row forces strict pixel size' },
          { key: 'minmax()', meaning: 'Sets floor boundary and growth ceiling' },
        ],
        getCode: (val) => `.container {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  grid-auto-rows: ${val};\n  gap: 8px;\n}`,
        renderItems: 8,
      },
      {
        id: 'justify-items',
        name: 'justify-items',
        cssProperty: 'justifyItems',
        applies: 'container',
        description: `**How it works:** Controls the internal, localized horizontal alignment of every child item inside its isolated grid cell.
<span></span>
**The Default Stretch:**
By default, this is set to \`stretch\`. If you place a simple \`<div>\` inside a grid cell, the layout engine applies maximum horizontal torque, expanding the background color of the div until it hits the boundaries of the grid cell's track limits.
<span></span>
**Breaking the Stretch:**
If you modify this to \`start\`, \`end\`, or \`center\`, you are explicitly commanding the element to shrink down to accommodate its internal content, thus severing its relationship with the track boundaries. The engine then takes that shrunken package and shoves it to the left, right, or center of the track cell.
*(Note: Flexbox does not have this property! In Flexbox, you align items along the main axis using \`justify-content\` across the entire track).*`,
        values: ['stretch', 'start', 'end', 'center'],
        default: 'center',
        practice: 'Use `justify-items: center` to quickly horizontally center 12 icons in a 3-column UI grid without mutating the internal CSS of the icons themselves.',
        chips: [
          { key: 'stretch', meaning: 'Div fills entire track width' },
          { key: 'start', meaning: 'Shrinks div, snaps to left side' },
          { key: 'center', meaning: 'Shrinks div, locks in exact cell middle' },
        ],
        getCode: (val) => `.container {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  justify-items: ${val};\n}`,
        renderItems: 6,
      },
      {
        id: 'align-items-grid',
        name: 'align-items (grid)',
        cssProperty: 'alignItems',
        applies: 'container',
        description: `**How it works:** The precise vertical companion to \`justify-items\`. It controls how every single child element behaves on the Cross Axis (vertically) inside its specific, invisible grid cell block.
<span></span>
**The default Stretch paradigm:**
Like the horizontal axis, Grid defaults vertical behavior to \`stretch\`. This is mathematically why elements in a CSS Grid row natively execute perfectly equal-height layouts. The engine analyzes row 1, finds the element with the largest internal content, evaluates that height, and transmits an overwrite command forcing all sibling elements in the row to stretch to match that maximal height.
<span></span>
**Detaching from the row constraint:**
If you change it to \`start\` (or \`center\`, \`end\`), the elements detach from the mathematical track-stretching algorithm. They shrink down to exactly fit whatever text/image is inside them, and merely float at the top (or center) of the tracking lines of the row.`,
        values: ['stretch', 'start', 'end', 'center'],
        default: 'center',
        practice: 'Set `align-items: center` when dealing with UI lists where you have a tall image next to a tiny text description. It aligns them by midline.',
        chips: [
          { key: 'stretch', meaning: 'Div fills entire track height' },
          { key: 'start', meaning: 'Shrinks div vertically, snaps to top' },
          { key: 'center', meaning: 'Shrinks div vertically, locks to midline' },
        ],
        getCode: (val) => `.container {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  align-items: ${val};\n}`,
        renderItems: 6,
        tallGrid: true,
      },
    ],
  },
  {
    level: 'Advanced',
    properties: [
      {
        id: 'auto-fill-fit',
        name: 'auto-fill vs auto-fit',
        cssProperty: 'gridTemplateColumns',
        applies: 'container',
        description: `**How it works:** This is practically the single most powerful feature of the CSS layout engine. These two keywords, utilized inside the \`repeat()\` function, deploy an artificial intelligence algorithm that evaluates screen real-estate to programmatically inject or remove column tracks in real-time, eliminating the need for Media Queries completely.
<span></span>
**Understanding Minmax() interaction:**
You almost exclusively use this with \`minmax()\`.
\`repeat(auto-fit, minmax(200px, 1fr))\` commands the engine: "Render as many 200px columns as mathematically possible across the width of the display. If you cannot fit a new 200px column on the row, wrap the item immediately to a new row. Upon wrapping, take whatever fractional leftover row space exists and distribute it equally among the current columns so they stretch seamlessly across the remaining void."
<span></span>
**auto-fill vs auto-fit:**
This nuance is critical on large desktop monitors.
• \`auto-fill\`: Calculates the matrix, realizes it can fit five \`200px\` columns in a \`1000px\` screen, and spins up **five distinct grid tracks**. If you only have 2 physical HTML items in the DOM, the remaining 3 columns exist visually as invisible empty voids on the right.
• \`auto-fit\`: Calculates the matrix, realizes it can construct five columns... but notices there are only 2 items in the DOM! It aggressively and systematically completely **collapses the empty tracks to 0**. Since the remaining 2 items have a \`1fr\` parameter in the minmax array, those 2 items expand, violently surging forward to consume the collapsed vacuum, perfectly covering the remaining space.`,
        values: ['repeat(auto-fill, minmax(100px, 1fr))', 'repeat(auto-fit, minmax(100px, 1fr))'],
        default: 'repeat(auto-fit, minmax(100px, 1fr))',
        practice: 'Use `auto-fit` for almost everything. Use `auto-fill` ONLY when building a matrix grid layout (like a spreadsheet or photo grid) where items MUST stay aligned left even if the row is half-empty.',
        chips: [
          { key: 'auto-fill', meaning: 'Retains invisible track integrity' },
          { key: 'auto-fit', meaning: 'Collapses blank tracks, allowing fr expansion' },
        ],
        getCode: (val) => `.container {\n  display: grid;\n  grid-template-columns:\n    ${val};\n  gap: 16px;\n}`,
        renderItems: 5,
      },
      {
        id: 'grid-auto-flow',
        name: 'grid-auto-flow',
        cssProperty: 'gridAutoFlow',
        applies: 'container',
        description: `**How it works:** Explicitly overhauls the internal processing direction of the Auto-Placement Algorithm.
<span></span>
**The Matrix Generator:**
By default, it is set to \`row\`. When creating the matrix, the algorithm evaluates an item, drops it into a column, moves right to the next column, drops the next item in, and so forth until it hits the final track, where it clicks downward, generating an implicit row.
Change it to \`column\`, and the exact inverse happens. It drops an item, clicks downward to the next row, drops an item, clicks downward... until it hits a row boundary, where it generates an implicit column track to the right.
<span></span>
**The 'Dense' Packing Algorithm:**
This is CSS Grid’s architectural masterpiece. If you have an asymmetrical magazine layout with massive \`span 2\` elements in the DOM flow interspersed with tiny \`span 1\` elements, the standard sequence logic will often generate chaotic holes and empty cell gaps in the layout to respect DOM source order.
Adding the \`dense\` keyword (e.g., \`row dense\`) commands the Auto-Placement engine to decouple visual painting from DOM source parsing. The algorithm iterates backwards over the grid track map, intensely scanning for empty vacuums and orphaned cells, physically uprooting smaller elements later in the DOM stream and back-filling them into the empty matrix holes. It creates perfect masonry arrays.`,
        values: ['row', 'column', 'row dense', 'column dense'],
        default: 'row dense',
        practice: 'Apply `grid-auto-flow: dense` when building masonry image galleries (like Pinterest) containing portraits and landscapes.',
        chips: [
          { key: 'row', meaning: 'Sequential horizontal writing' },
          { key: 'column', meaning: 'Sequential vertical writing' },
          { key: 'dense', meaning: 'Overloads standard order to plug empty gaps' },
        ],
        getCode: (val) => `.container {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  grid-auto-flow: ${val};\n}`,
        renderItems: 8,
        denseDemo: true,
      },
      {
        id: 'place-items',
        name: 'place-items (shorthand)',
        cssProperty: 'placeItems',
        applies: 'container',
        description: `**How it works:** Extremely efficient shorthand parameter encompassing both \`align-items\` (vertical) and \`justify-items\` (horizontal).
<span></span>
**Syntax Execution:**
Provide a single keyword (e.g., \`place-items: center\`), and the parser duplicates the command, transmitting overwrite data to both axes simultaneously to break the default \`stretch\` algorithm in both directions.
<span></span>
**The Ultimate Centering Technique:**
In Flexbox, achieving mathematically perfect centering necessitates three distinct lines of code: \`display: flex; justify-content: center; align-items: center;\`.
In CSS Grid, due to to this shorthand, it requires only two lines of code: \`display: grid; place-items: center;\`. It accomplishes the exact same result while utilizing less parse time constraints in the DOM tree rendering loop.`,
        values: ['center', 'start', 'end', 'center start', 'end center', 'stretch'],
        default: 'center',
        practice: 'Deploy `display: grid; place-items: center;` routinely on simple elements like badges, icon wrappers, or hero titles to lock them into exact mid-point equilibrium instantly.',
        chips: [
          { key: 'center', meaning: 'Dual-axis cell centering' },
          { key: 'val1 val2', meaning: 'Align-Items followed by Justify-Items' },
        ],
        getCode: (val) => `.container {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  place-items: ${val};\n}`,
        renderItems: 6,
        tallGrid: true,
      },
      {
        id: 'justify-content-grid',
        name: 'justify-content (grid)',
        cssProperty: 'justifyContent',
        applies: 'container',
        description: `**How it works:** This is an incredibly common area of profound confusion. Why does CSS Grid have \`justify-items\` AND \`justify-content\`?
<span></span>
**The Grand Distinction:**
• \`justify-items\` manipulates the DOM elements **INSIDE** their respective Grid Cell constraints.
• \`justify-content\` manipulates the actual **GRID SKELETON ITSELF** inside the physical boundaries of the HTML container div.
<span></span>
**Prerequisite Triggers:**
\`justify-content\` literally does absolutely nothing if you are using \`1fr\` fractions. Fractional units, by fundamental definition, stretch the grid tracks mathematically until they consume 100% of the HTML boundary space. If grid tracks are 100% wide, there is ZERO free space around the grid system.
This property **ONLY triggers** when you declare rigid column specifications (e.g., \`grid-template-columns: repeat(3, 100px)\`) that mathematically sum up to LESS than the total width of the overall parent \`<div>\`. Once that free space exists, this property pushes the entire grid architecture block to the left (\`start\`), right (\`end\`), or isolates the tracks away from each other using algorithms like \`space-between\`.`,
        values: ['start', 'end', 'center', 'space-between', 'space-evenly', 'space-around'],
        default: 'center',
        practice: 'If you have a 1200px wide wrapper `div` and want an immaculate 900px centered grid matrix inside it without setting margins, just apply `justify-content: center`.',
        chips: [
          { key: 'start', meaning: 'Grid framework shoved left' },
          { key: 'center', meaning: 'Grid framework geometrically centered' },
          { key: 'space-between', meaning: 'Tracks ripped apart to corners' },
        ],
        getCode: (val) => `.container {\n  display: grid;\n  grid-template-columns:\n    repeat(3, 120px); /* rigid px! */\n  justify-content: ${val};\n}`,
        renderItems: 6,
        fixedCols: true,
      },
      {
        id: 'align-content-grid',
        name: 'align-content (grid)',
        cssProperty: 'alignContent',
        applies: 'container',
        description: `**How it works:** The precise vertical companion to \`justify-content\`. It controls the placement and distribution of the complete Grid Track Matrix along the block (vertical) axis.
<span></span>
**Prerequisite Triggers:**
Just like the horizontal equivalent, this property is rendered completely inert unless two mathematical constraints are met:
1. The container element must have an explicitly defined vertical altitude (e.g., \`height: 700px\` or \`min-height: 100vh\`).
2. The grid rows must calculate out to a total accumulated height that is LESS than the container’s ceiling height. (e.g., \`grid-template-rows: repeat(3, 100px)\` leaving 400px of pure emptiness).
<span></span>
**Manipulating Free Space:**
Applying \`center\` treats the entire grid configuration as a single mass and forces it into the perfect vertical midpoint of the parent. Applying \`space-between\` literally tears the row tracks apart, welding the first row to the ceiling layer and welding the final row to the baseboard layer, effectively blowing a huge vacuum-gap between the internal middle rows.`,
        values: ['start', 'end', 'center', 'space-between', 'space-evenly', 'stretch'],
        default: 'center',
        practice: 'On a tall hero section or dashboard, apply `height: 100vh` and then use `align-content: space-between` to instantly snap your header to the top and your footer to the absolute bottom.',
        chips: [
          { key: 'start', meaning: 'Grid architecture cemented to ceiling' },
          { key: 'center', meaning: 'Grid architecture floats in mid-air' },
          { key: 'space-between', meaning: 'Rows disassociated to opposite edges' },
        ],
        getCode: (val) => `.container {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  height: 250px; /* needs altitude! */\n  align-content: ${val};\n}`,
        renderItems: 6,
        alignContentGrid: true,
      },
      {
        id: 'justify-self',
        name: 'justify-self / align-self',
        cssProperty: 'justifySelf',
        applies: 'item',
        description: `**How it works:** These are targeting override properties deployed directly on a singular grid DOM element to sever its alignment linkage to the parent logic.
<span></span>
**Systematic Local Overrides:**
Generally, the \`justify-items\` and \`align-items\` properties (set on the container) dictate the positioning rules for the entire collective. However, specific architectural variants frequently require one node to behave erratically.
If you declare \`justify-self: end\` on one specific item, the rendering engine processes all 11 siblings via standard container logic, evaluates that singular 12th node, ignores the parent rules data, unhooks it from the stretch algorithms, shrinks the package package to its content-width, and fires it horizontally to the far right edge of its local grid cell.
<span></span>
*(Flexbox correlation: Flexbox possesses \`align-self\` but it fundamentally does not possess \`justify-self\`. That is a uniquely powerful feature of the 2D Grid engine structural mathematics).*`,
        values: ['stretch', 'start', 'end', 'center'],
        default: 'center',
        practice: 'If you have a 3-column cell structure acting as a top navigation, you can apply `justify-self: start` to the Logo, `justify-self: center` to the search bar, and `justify-self: end` to the profile image, keeping them isolated cleanly within their cell parameters.',
        chips: [
          { key: 'justify-self', meaning: 'Rogue horizontal cell alignment' },
          { key: 'align-self', meaning: 'Rogue vertical cell alignment' },
          { key: 'place-self', meaning: 'Rogue dual-axis shorthand override' },
        ],
        getCode: (val) => `.container {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  justify-items: stretch; /* universal */\n}\n.special {\n  justify-self: ${val}; /* override */\n}`,
        renderItems: 6,
        selfGridDemo: true,
      },
    ],
  },
];

export const gridPatterns = [
  {
    name: '📱 Holy Grail Responsive Matrix',
    code: `.grid {\n  display: grid;\n  /* Auto-generates columns based on space */\n  /* Breaks downward automatically */\n  /* Collapses voids naturally */\n  grid-template-columns:\n    repeat(auto-fit, minmax(220px, 1fr));\n  gap: 20px;\n}`,
    demo: 'cards',
  },
  {
    name: '🏠 Dashboard Architecture',
    code: `.page {\n  display: grid;\n  /* Explicit mathematical frame */\n  grid-template-columns: 220px 1fr;\n  grid-template-rows: 60px 1fr 60px;\n  /* String semantic mapping */\n  grid-template-areas:\n    "header header"\n    "sidebar main"\n    "footer footer";\n  min-height: 100vh;\n}`,
    demo: 'layout',
  },
  {
    name: '🖼️ Heavy Asymmetrical Masonry',
    code: `.magazine {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  grid-auto-rows: 100px;\n  /* Activates deep-packing auto algorithm */\n  grid-auto-flow: dense;\n  gap: 8px;\n}\n.featured {\n  /* Punches out multi-track boundaries */\n  grid-column: span 2;\n  grid-row: span 2;\n}`,
    demo: 'magazine',
  },
];
