// All CSS Grid properties — Beginner to Advanced
export const gridSections = [
  {
    level: 'Beginner',
    intro: {
      title: '🔲 What is CSS Grid?',
      body: `CSS Grid is a **two-dimensional layout system**. While Flexbox is great for lining items up in a single row or column, Grid lets you build complex layouts with both rows and columns at the same time.

**How it works:**
When you add \`display: grid\` to an element, it becomes a grid container. 
Unlike Flexbox where the items mostly control their own size, Grid is controlled by the container. You set up a skeleton of rows and columns on the parent, and then drop items into the cells you created.

**Grid terms:**
• **Grid Lines:** The invisible lines that make up the grid. Line 1 is always the starting edge.
• **Grid Track:** The space between two lines (a row or a column).
• **Grid Cell:** The smallest single space in the grid.
• **Grid Area:** A space made up of one or more cells.`,
    },
    properties: [
      {
        id: 'display-grid',
        name: 'display: grid',
        cssProperty: 'display',
        applies: 'container',
        description: `Adding \`display: grid\` turns an element into a grid container. All its direct children immediately become grid items.
<span></span>
**Default behavior:**
If you don't define any rows or columns, the grid will just stack the items on top of each other, creating one single column with as many rows as there are items. The grid automatically creates rows to hold all your content.
<span></span>
**grid vs inline-grid:**
\`display: grid\` acts like a block element, taking up the full width of its parent. \`display: inline-grid\` shrinks to wrap just the grid itself, sitting side-by-side with text or other elements.`,
        values: ['grid', 'inline-grid'],
        default: 'grid',
        practice: 'Use `inline-grid` if you want the grid to wrap its content tightly like a button.',
        chips: [
          { key: 'grid', meaning: 'Full-width grid container' },
          { key: 'inline-grid', meaning: 'Shrink-wrapped grid container' },
        ],
        getCode: (val) => `.container {\n  display: ${val};\n}`,
        renderItems: 6,
      },
      {
        id: 'grid-template-columns',
        name: 'grid-template-columns',
        cssProperty: 'gridTemplateColumns',
        applies: 'container',
        description: `This is the most important Grid property. It sets up your columns. You provide a list of sizes, and the number of values sets the number of columns.
<span></span>
**The fraction unit (fr):**
\`fr\` stands for "fraction of free space". It's the best way to size grid tracks.
• \`1fr 1fr\` creates two equal columns.
• \`1fr 2fr 1fr\` creates three columns, dividing the space into 4 parts. The middle gets 2 parts (50%), and the others get 1 part (25%).
<span></span>
**The repeat() function:**
Instead of typing \`1fr 1fr 1fr 1fr\`, use \`repeat(4, 1fr)\`. You can even mix sizes: \`repeat(3, 100px 1fr)\` gives you 6 columns that alternate between fixed and flexible widths.`,
        values: ['1fr 1fr', '1fr 2fr 1fr', 'repeat(3, 1fr)', 'repeat(4, 1fr)', '200px 1fr', '100px auto 100px'],
        default: 'repeat(3, 1fr)',
        practice: '`grid-template-columns: 250px 1fr;` is the classic "sidebar and content" layout in one line.',
        chips: [
          { key: '1fr', meaning: 'Fraction of free space' },
          { key: 'repeat(x, y)', meaning: 'Shortcut for repeating values' },
          { key: 'auto', meaning: 'Sizes to fit the content' },
        ],
        getCode: (val) => `.container {\n  display: grid;\n  grid-template-columns: ${val};\n}`,
        renderItems: 6,
      },
      {
        id: 'grid-template-rows',
        name: 'grid-template-rows',
        cssProperty: 'gridTemplateRows',
        applies: 'container',
        description: `Sets up the explicit height for your rows. Like columns, the number of values you write is the number of rows you create.
<span></span>
**When to use it:**
Normally, you don't need this. The web is meant to scroll down, so letting rows size themselves automatically is usually best. 
You only use \`grid-template-rows\` when you want to lock the height of your app to exactly 100vh (full screen) and stop it from scrolling.
<span></span>
**What happens to extra items:**
If you define two rows (\`100px 100px\`) but have three items, the third item falls into the "implicit grid". It will just take whatever height its content needs (\`auto\`) instead of 100px.`,
        values: ['auto', '80px 80px', '1fr 2fr', 'repeat(2, 100px)', '60px 1fr 60px'],
        default: '80px 80px',
        practice: 'Use `grid-template-rows: 80px 1fr 60px` with `height: 100vh` to make a full-screen app with a header and footer.',
        chips: [
          { key: 'auto', meaning: 'Height matches the content inside' },
          { key: 'px / rem', meaning: 'Fixed row height' },
          { key: '1fr', meaning: 'Takes remaining vertical space' },
        ],
        getCode: (val) => `.container {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  grid-template-rows: ${val};\n}`,
        renderItems: 6,
      },
      {
        id: 'grid-gap',
        name: 'gap (grid)',
        cssProperty: 'gap',
        applies: 'container',
        description: `Adds empty space between your grid rows and columns. It's much cleaner than using margins on individual items.
<span></span>
**How it fits in:**
Gap is applied between the tracks, not on the outer edges. The grid takes the gap size out of the total space before it calculates how big the \`fr\` tracks should be. This means gaps will never accidentally break your layout.
<span></span>
**Two values:**
You can set different gaps for rows and columns. For example, \`gap: 32px 16px\` adds 32px spacing between rows, but only 16px spacing between columns.`,
        values: ['0px', '8px', '16px', '24px', '8px 24px'],
        default: '16px',
        practice: 'Pass two values like `gap: 24px 8px` to group items horizontally but keep space between rows.',
        chips: [
          { key: 'gap', meaning: 'Equal spacing everywhere' },
          { key: 'x y', meaning: 'Row gap first, then column gap' },
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
        description: `Controls where an item sits and how many columns it covers. It uses the invisible grid lines for placement.
<span></span>
**How to count lines:**
In a 3-column grid, there are 4 vertical lines. Line 1 is the left edge, Line 4 is the right edge.
• \`grid-column: 1 / 3\`: The item starts at line 1 and ends at line 3, giving it a 2-column width.
• \`grid-column: span 2\`: The item covers 2 columns starting from wherever it currently is.
<span></span>
**The absolute full-width trick:**
Grid lines can be counted backwards. The far-right edge is always Line \`-1\`. If you use \`grid-column: 1 / -1\`, the item stretches from the very start to the very end. This works perfectly even if you change the number of columns later.`,
        values: ['1 / 2', '1 / 3', '1 / 4', 'span 2', 'span 3', '1 / -1'],
        default: 'span 2',
        practice: 'Use `grid-column: 1 / -1` to make a featured item stretch totally across the grid.',
        chips: [
          { key: 'start / end', meaning: 'Use line numbers to place items' },
          { key: 'span x', meaning: 'Cover x number of columns' },
          { key: '1 / -1', meaning: 'Full width trick' },
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
        description: `Works exactly like \`grid-column\`, but controls the vertical placement and height of an item across rows.
<span></span>
**Creative layouts:**
With \`grid-row: span 2\`, an item punches down to cover two rows. The other items will automatically wrap around it. This lets you build masonry or magazine layouts easily.
<span></span>
**Stacking items on top of each other:**
Because you can place items wherever you want, you can put two different items in the exact same cell. They will overlap perfectly without needing \`position: absolute\`. Just use \`z-index\` to control which is on top!`,
        values: ['auto', '1 / 3', 'span 2', 'span 3'],
        default: 'span 2',
        practice: 'Use `grid-row: 1 / -1; grid-column: 1 / -1` on both an image and text to overlap them in the exact same spot.',
        chips: [
          { key: 'start / end', meaning: 'Target horizontal row lines' },
          { key: 'span x', meaning: 'Cover x number of rows' },
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
        description: `This is the most visual way to build layouts. Instead of counting numbers, you name your items, and then draw a map to place them.
<span></span>
**How it works:**
1. Give each child a name: \`grid-area: header\`
2. Draw the map on the parent container using \`grid-template-areas: "header header"\`
The grid magically places your items exactly how they visually look in your code map.
<span></span>
**Leaving empty spaces:**
If you want a cell to be empty, just put a dot \`.\` in the map. This is perfect for complex dashboards.`,
        values: ['"header header" "sidebar main" "footer footer"', '"header" "main" "footer"'],
        default: '"header header" "sidebar main" "footer footer"',
        practice: 'Redefine the layout map entirely inside a media query to dramatically shift your page structure for mobile phones.',
        chips: [
          { key: 'grid-area:', meaning: 'Give the child element a name' },
          { key: 'grid-template-areas:', meaning: 'Draw the layout map on the parent' },
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
        description: `Controls the height of any extra ("implicit") rows the grid makes automatically when there are too many items to fit in the explicit grid.
<span></span>
**Default behavior:**
Grid creates rows automatically if you don't define them. By default, these rows are \`auto\` tall, meaning they just shrink to fit whatever text is inside.
<span></span>
**Controlling extra rows:**
You can force every new automatically-created row to be exactly 200px tall by setting \`grid-auto-rows: 200px\`. A better trick is \`minmax(100px, auto)\` — it guarantees the rows are at least 100px tall for a neat look, but lets them stretch if someone types a very long paragraph.`,
        values: ['auto', '80px', '100px', 'minmax(60px, auto)', '1fr'],
        default: '80px',
        practice: 'Use `minmax(200px, auto)` to keep image cards looking consistent, but stop text from overflowing if the title is long.',
        chips: [
          { key: 'auto', meaning: 'Height matches the content inside' },
          { key: 'px', meaning: 'Forces rows to a fixed height' },
          { key: 'minmax()', meaning: 'Sets a minimum height, but can still stretch' },
        ],
        getCode: (val) => `.container {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  grid-auto-rows: ${val};\n  gap: 8px;\n}`,
        renderItems: 8,
      },
      {
        id: 'justify-items',
        name: 'justify-items',
        cssProperty: 'justifyItems',
        applies: 'container',
        description: `Aligns every item horizontally inside its own grid cell track. 
<span></span>
**The default stretch:**
By default, this is set to \`stretch\`. If you put a div inside a cell, it will stretch sideways to touch the left and right edges.
<span></span>
**Stopping the stretch:**
If you change it to \`start\`, \`center\`, or \`end\`, the items shrink down to the size of their text/content, and then align themselves to the left, center, or right of the cell. Flexbox doesn't do this — Flexbox aligns items across the whole container, not inside individual cells.`,
        values: ['stretch', 'start', 'end', 'center'],
        default: 'center',
        practice: 'Use `justify-items: center` to quickly perfectly center an entire grid of small icons inside their cells.',
        chips: [
          { key: 'stretch', meaning: 'Fills the cell width' },
          { key: 'start / end', meaning: 'Snaps left or right' },
          { key: 'center', meaning: 'Centers horizontally in the cell' },
        ],
        getCode: (val) => `.container {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  justify-items: ${val};\n}`,
        renderItems: 6,
      },
      {
        id: 'align-items-grid',
        name: 'align-items (grid)',
        cssProperty: 'alignItems',
        applies: 'container',
        description: `Exactly like \`justify-items\`, but works vertically. It aligns every item up and down inside its cell track.
<span></span>
**Why grid items match heights automatically:**
The default is \`stretch\`. This is mathematically why items on the same row are the same tallness. The grid finds the tallest item on the row, and forces the others to stretch down to match it.
<span></span>
**Breaking the stretch:**
Change it to \`start\` or \`center\`, and the items shrink vertically to their own content, moving to the top or middle of their cell.`,
        values: ['stretch', 'start', 'end', 'center'],
        default: 'center',
        practice: 'Use `align-items: center` to make sure small icons match up dead-center with tall text blocks.',
        chips: [
          { key: 'stretch', meaning: 'Fills the cell height' },
          { key: 'start / end', meaning: 'Snaps to top or bottom' },
          { key: 'center', meaning: 'Centers vertically in the cell' },
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
        description: `This is arguably the single most useful trick in CSS. It lets the grid automatically figure out how many columns it can cram onto the screen without needing media queries across devices.
<span></span>
**How to use it:**
Use \`repeat(auto-fit, minmax(200px, 1fr))\`. This says: "Put as many 200px columns as you can on the screen. If there's extra space, stretch them equally (1fr). If things get too squished, wrap them to the next line."
<span></span>
**auto-fill vs auto-fit:**
If your screen is wide enough for five columns, but you only have two items:
• \`auto-fill\` will create three blank columns to the right. 
• \`auto-fit\` collapses those empty columns and lets your two items stretch all the way across.`,
        values: ['repeat(auto-fill, minmax(100px, 1fr))', 'repeat(auto-fit, minmax(100px, 1fr))'],
        default: 'repeat(auto-fit, minmax(100px, 1fr))',
        practice: 'Always reach for `auto-fit` first. Use `auto-fill` only for things like photo albums where you want the images to stay rigidly left-aligned even when a row is incomplete.',
        chips: [
          { key: 'auto-fill', meaning: 'Keeps empty tracks on the right' },
          { key: 'auto-fit', meaning: 'Collapses empty tracks so items stretch' },
        ],
        getCode: (val) => `.container {\n  display: grid;\n  grid-template-columns:\n    ${val};\n  gap: 16px;\n}`,
        renderItems: 5,
      },
      {
        id: 'grid-auto-flow',
        name: 'grid-auto-flow',
        cssProperty: 'gridAutoFlow',
        applies: 'container',
        description: `Controls how the grid automatically places items when you haven't given them specific coordinates. 
<span></span>
**Row vs Column:**
By default, the grid fills items horizontally (filling a row), then drops down and makes a new row. If you change it to \`column\`, it packs items vertically first, creating new columns as it expands to the right.
<span></span>
**The magic of 'dense':**
If you have small and large items mixed together, grid sometimes leaves awkward blank holes. Writing \`row dense\` tells the grid: "If you see a blank hole, look forward through the HTML to find a smaller item, and shove it backward to plug the gap."`,
        values: ['row', 'column', 'row dense', 'column dense'],
        default: 'row dense',
        practice: 'Use `row dense` to build a tight, gap-free photo gallery when you have big landscape and small portrait pictures mixed up.',
        chips: [
          { key: 'row', meaning: 'Fills left to right' },
          { key: 'column', meaning: 'Fills top to bottom' },
          { key: 'dense', meaning: 'Back-fills to close empty gaps' },
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
        description: `A fast shorthand that combines \`align-items\` (vertical) and \`justify-items\` (horizontal) in one single line.
<span></span>
**Syntax:**
If you just write \`place-items: center\`, the grid automatically centers items horizontally and vertically away from the cell edges at the same time.
<span></span>
**The fastest centering trick:**
In Flexbox, you need three lines to perfectly center a child: \`display: flex; justify-content: center; align-items: center;\`.
In Grid, it only takes two lines: \`display: grid; place-items: center;\`.`,
        values: ['center', 'start', 'end', 'center start', 'end center', 'stretch'],
        default: 'center',
        practice: 'Use `display: grid; place-items: center;` to quickly center a title inside a giant hero section banner.',
        chips: [
          { key: 'center', meaning: 'Centers both up/down and left/right' },
          { key: 'val1 val2', meaning: 'Align-Items first, then Justify-Items' },
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
        description: `This can be confusing! \`justify-items\` moves elements inside their own cells. \`justify-content\` moves the **entire grid block completely** inside the main container div.
<span></span>
**When do you need it?**
If you use \`1fr\`, the grid tracks stretch to 100% of the parent immediately. So there is no empty space left over to move the grid around.
But, if you use rigid sizes like \`repeat(3, 100px)\` inside a 1000px wide box, you have 700px of empty space left over. You use \`justify-content\` to shove the entire 300px block to the center (\`center\`), right (\`end\`), or spread the tracks apart (\`space-between\`).`,
        values: ['start', 'end', 'center', 'space-between', 'space-evenly', 'space-around'],
        default: 'center',
        practice: 'Apply `justify-content: center` to perfectly lock a fixed-width dashboard grid gracefully in the middle of an ultrawide monitor.',
        chips: [
          { key: 'start / end', meaning: 'Shoves the whole grid left/right' },
          { key: 'center', meaning: 'Centers the grid as a group' },
          { key: 'space-between', meaning: 'Pulls the tracks far apart into the corners' },
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
        description: `The exact vertical counterpart to \`justify-content\`. It moves the **entire grid structure** vertically if there is leftover empty tall space inside the parent container.
<span></span>
**When to trigger it:**
It only works if your parent container is taller than your grid. For example, if you set the container to \`height: 700px\`, but your rows only add up to 200px.
<span></span>
**Moving the grid:**
Use \`center\` to put the group in the direct middle. Or use \`space-between\` which yanks the top row all the way against the ceiling, the bottom row against the floor, and leaves all the empty space in the middle.`,
        values: ['start', 'end', 'center', 'space-between', 'space-evenly', 'stretch'],
        default: 'center',
        practice: 'Set your web app shell to `height: 100vh` and use `align-content: space-between` to instantly push your top-bar to the top and your footer to the deep bottom!',
        chips: [
          { key: 'start / end', meaning: 'Pegs grid to top or bottom' },
          { key: 'center', meaning: 'Locates grid to exact middle altitude' },
          { key: 'space-between', meaning: 'Rips rows off to opposite boundaries' },
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
        description: `Allows a single item to break the alignment rules set by its parent, overriding its own horizontal (\`justify-self\`) or vertical (\`align-self\`) position inside its cell.
<span></span>
**How it overrides rules:**
Even if the parent shouts "Everyone stretch!", you can apply \`justify-self: end\` to just the 5th item. It ignores the stretch command, shrinks to fit its own content width, and docks immediately on the far right edge of the grid cell track, leaving its siblings safely stretching.
<span></span>
*(Note: Flexbox has \`align-self\` but it famously does not possess \`justify-self\`. Only the 2D Grid engine does both!)*`,
        values: ['stretch', 'start', 'end', 'center'],
        default: 'center',
        practice: 'In a 3-column top navbar menu, place the logo, the search bar, and the profile picture. Then use `justify-self: start/center/end` to throw them all to perfect separated spots.',
        chips: [
          { key: 'justify-self', meaning: 'Forces singular item horizontal alignment' },
          { key: 'align-self', meaning: 'Forces singular item vertical alignment' },
          { key: 'place-self', meaning: 'Shorthand for both axes at once' },
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
    code: `.grid {\n  display: grid;\n  /* Automatically calculates columns depending on width */\n  /* If space lacks, elements seamlessly wrap below */\n  grid-template-columns:\n    repeat(auto-fit, minmax(220px, 1fr));\n  gap: 20px;\n}`,
    demo: 'cards',
  },
  {
    name: '🏠 Dashboard Architecture',
    code: `.page {\n  display: grid;\n  /* Map layout structure visually */\n  grid-template-columns: 220px 1fr;\n  grid-template-rows: 60px 1fr 60px;\n  grid-template-areas:\n    "header header"\n    "sidebar main"\n    "footer footer";\n  min-height: 100vh;\n}`,
    demo: 'layout',
  },
  {
    name: '🖼️ Heavy Asymmetrical Masonry',
    code: `.magazine {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  grid-auto-rows: 100px;\n  /* Auto fills dead space backwards! */\n  grid-auto-flow: dense;\n  gap: 8px;\n}\n.featured {\n  /* Cut across multiple grid axes! */\n  grid-column: span 2;\n  grid-row: span 2;\n}`,
    demo: 'magazine',
  },
];
