export const gridChallenges = [
  {
    id: 1,
    title: 'Level 1: The Matrix Awakens',
    description: 'The container below is currently blocking its children. Turn it into a grid container to begin the two-dimensional architecture.',
    defaultCss: `.app-layout {
  height: 200px;
  /* Add your property below */
  
}`,
    html: `<div class="app-layout">\n  <div class="box">1</div>\n  <div class="box">2</div>\n  <div class="box">3</div>\n  <div class="box">4</div>\n</div>`,
    validate: (css) => /display\s*:\s*grid/.test(css.toLowerCase())
  },
  {
    id: 2,
    title: 'Level 2: Dual Columns',
    description: 'You have a grid, but it currently defaults to one column. Define EXACTLY two columns of equal fraction (`1fr`) space.',
    defaultCss: `.app-layout {
  display: grid;
  height: 200px;
  /* Define two 1fr columns below */
  
}`,
    html: `<div class="app-layout">\n  <div class="box">1</div>\n  <div class="box">2</div>\n  <div class="box">3</div>\n  <div class="box">4</div>\n</div>`,
    validate: (css) => /grid-template-columns\s*:\s*1fr\s+1fr/.test(css.toLowerCase()) || /grid-template-columns\s*:\s*repeat\(2\s*,\s*1fr\)/.test(css.toLowerCase())
  },
  {
    id: 3,
    title: 'Level 3: The Repeater',
    description: 'Instead of typing out `1fr` three times, use the `repeat()` function to create exactly 3 equal columns.',
    defaultCss: `.app-layout {
  display: grid;
  height: 200px;
  /* Use the repeat function below */
  
}`,
    html: `<div class="app-layout">\n  <div class="box">1</div>\n  <div class="box">2</div>\n  <div class="box">3</div>\n  <div class="box">4</div>\n</div>`,
    validate: (css) => /grid-template-columns\s*:\s*repeat\(3\s*,\s*1fr\)/.test(css.toLowerCase())
  },
  {
    id: 4,
    title: 'Level 4: Bridging the Gap',
    description: 'The items are currently smashed together! Create exactly 20px of mathematical gap space between rows and columns.',
    defaultCss: `.app-layout {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  height: 200px;
  /* Add a 20px gap below */
  
}`,
    html: `<div class="app-layout">\n  <div class="box">1</div>\n  <div class="box">2</div>\n  <div class="box">3</div>\n  <div class="box">4</div>\n</div>`,
    validate: (css) => /gap\s*:\s*20px/.test(css.toLowerCase())
  },
  {
    id: 5,
    title: 'Level 5: Explicit Heights',
    description: 'The grid tracks are automatically sharing the 200px height. Use `grid-template-rows` to force the first row to be 50px, and the second row to be 150px.',
    defaultCss: `.app-layout {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  height: 200px;
  /* Define row heights below */
  
}`,
    html: `<div class="app-layout">\n  <div class="box">1</div>\n  <div class="box">2</div>\n  <div class="box">3</div>\n  <div class="box">4</div>\n</div>`,
    validate: (css) => /grid-template-rows\s*:\s*50px\s+150px/.test(css.toLowerCase())
  },
  {
    id: 6,
    title: 'Level 6: Breaking the Lines',
    description: 'The target element wants to grow horizontally. Apply `grid-column: span 2` to the target to make it cover two grid cells.',
    defaultCss: `.app-layout {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
}

.target {
  /* Make me stretch across 2 cells! */
  
}`,
    html: `<div class="app-layout">\n  <div class="box target" style="background: var(--accent-info); color: black;">Stretch Me</div>\n  <div class="box">2</div>\n  <div class="box">3</div>\n</div>`,
    validate: (css) => {
      const match = css.match(/\.target\s*\{([^}]*)\}/);
      if (!match) return false;
      return /grid-column\s*:\s*span\s+2/.test(match[1].toLowerCase());
    }
  },
  {
    id: 7,
    title: 'Level 7: The Final Line',
    description: 'The target element needs to stretch from the very beginning of the grid to the absolute end. Use the magic `-1` line trick!',
    defaultCss: `.app-layout {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;
}

.target {
  /* Stretch from line 1 to line -1 */
  
}`,
    html: `<div class="app-layout">\n  <div class="box target" style="background: var(--accent-info); color: black;">Full Width</div>\n  <div class="box">2</div>\n  <div class="box">3</div>\n</div>`,
    validate: (css) => {
      const match = css.match(/\.target\s*\{([^}]*)\}/);
      if (!match) return false;
      return /grid-column\s*:\s*1\s*\/\s*-1/.test(match[1].toLowerCase());
    }
  },
  {
    id: 8,
    title: 'Level 8: Vertical Impact',
    description: 'Like columns, rows can be spanned. Force the target item to span down 2 vertical rows.',
    defaultCss: `.app-layout {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
}

.target {
  /* Span 2 whole rows! */
  
}`,
    html: `<div class="app-layout">\n  <div class="box target" style="background: var(--accent-info); color: black;">Tall Box</div>\n  <div class="box">2</div>\n  <div class="box">3</div>\n  <div class="box">4</div>\n</div>`,
    validate: (css) => {
      const match = css.match(/\.target\s*\{([^}]*)\}/);
      if (!match) return false;
      return /grid-row\s*:\s*span\s+2/.test(match[1].toLowerCase());
    }
  },
  {
    id: 9,
    title: 'Level 9: The Naming Map',
    description: 'Map out the grid! You must define the areas safely to prepare for a visual map. Give the `.header` a `grid-area` value of "header".',
    defaultCss: `.header {
  /* Assign the grid area name below */
  
}`,
    html: `<div class="app-layout" style="display: grid; grid-template-areas: 'header header' 'main main';">\n  <div class="box header" style="background: var(--accent-info); color: black;">Header Map</div>\n</div>`,
    validate: (css) => {
      const match = css.match(/\.header\s*\{([^}]*)\}/);
      if (!match) return false;
      return /grid-area\s*:\s*["']?header["']?/.test(match[1].toLowerCase());
    }
  },
  {
    id: 10,
    title: 'Level 10: The Master Template',
    description: 'Using `grid-template-areas`, draw a map where "header" takes the top two cells, and "sidebar" and "main" sit next to each other underneath.',
    defaultCss: `.app-layout {
  display: grid;
  height: 200px;
  gap: 10px;
  /* Draw the visual string map below! */
  
}
`,
    html: `<div class="app-layout">\n  <div class="box" style="grid-area: header; background: var(--accent-info); color: black;">Header</div>\n  <div class="box" style="grid-area: sidebar">Sidebar</div>\n  <div class="box" style="grid-area: main">Main</div>\n</div>`,
    validate: (css) => {
      const lower = css.toLowerCase();
      // Look for the strings properly structured
      return /grid-template-areas\s*:\s*["']header\s+header["']\s+["']sidebar\s+main["']/.test(lower);
    }
  },
  {
    id: 11,
    title: 'Level 11: Justify Cells Horizontal',
    description: 'By default, grid items "stretch" to fill cell spaces. Set `justify-items` to `center` to center them horizontally inside their own individual track cells.',
    defaultCss: `.app-layout {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  height: 200px;
  /* Center horizontally inside tracks */
  
}`,
    html: `<div class="app-layout">\n  <div class="box">1</div>\n  <div class="box">2</div>\n</div>`,
    validate: (css) => /justify-items\s*:\s*center/.test(css.toLowerCase())
  },
  {
    id: 12,
    title: 'Level 12: Align Cells Vertical',
    description: 'Now, modify the vertical positioning inside the cell. Set `align-items` to `center`.',
    defaultCss: `.app-layout {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  height: 200px;
  /* Center vertically inside tracks */
  
}`,
    html: `<div class="app-layout">\n  <div class="box">1</div>\n  <div class="box">2</div>\n</div>`,
    validate: (css) => /align-items\s*:\s*center/.test(css.toLowerCase())
  },
  {
    id: 13,
    title: 'Level 13: Place Items Shorthand',
    description: 'Instead of two lines, use the magic CSS Grid shorthand. Write `place-items: center` to center them both horizontally AND vertically.',
    defaultCss: `.app-layout {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  height: 250px;
  /* Add shorthand below */
  
}`,
    html: `<div class="app-layout">\n  <div class="box">1</div>\n  <div class="box">2</div>\n</div>`,
    validate: (css) => /place-items\s*:\s*center/.test(css.toLowerCase())
  },
  {
    id: 14,
    title: 'Level 14: Justify Content (The Whole Map)',
    description: 'The grid tracks are only taking up 200px total inside a 500px container. Push the ENTIIRE mathematical grid block horizontally over to the `end` space.',
    defaultCss: `.app-layout {
  display: grid;
  grid-template-columns: 100px 100px; /* Fixed! */
  width: 500px;
  border: 1px dashed white;
  /* Shift the whole grid group horizontally */
  
}`,
    html: `<div class="app-layout">\n  <div class="box">1</div>\n  <div class="box">2</div>\n</div>`,
    validate: (css) => /justify-content\s*:\s*(flex-end|end)/.test(css.toLowerCase())
  },
  {
    id: 15,
    title: 'Level 15: Align Content (Vertical Map)',
    description: 'Your rows are 100px tall. The container is 300px tall. Use `align-content: space-between` to force the TOP row and BOTTOM row apart vertically.',
    defaultCss: `.app-layout {
  display: grid;
  grid-template-rows: 100px 100px;
  grid-template-columns: 1fr;
  height: 300px;
  border: 1px dashed white;
  /* Separate the rows vertically! */
  
}`,
    html: `<div class="app-layout">\n  <div class="box">R1</div>\n  <div class="box">R2</div>\n</div>`,
    validate: (css) => /align-content\s*:\s*space-between/.test(css.toLowerCase())
  },
  {
    id: 16,
    title: 'Level 16: Override Justification',
    description: 'The grid forces everyone to stretch! Target `.box` and use `justify-self: end` to override JUST that one box horizontal trait.',
    defaultCss: `.app-layout {
  display: grid;
  grid-template-columns: 1fr;
  justify-items: stretch; /* Global law */
}

.box {
  /* Break the law! Shift right horizontally. */
  
}`,
    html: `<div class="app-layout">\n  <div class="box target" style="background: var(--accent-info); color: black;">Rebel</div>\n</div>`,
    validate: (css) => {
      const match = css.match(/\.box\s*\{([^}]*)\}/);
      if (!match) return false;
      return /justify-self\s*:\s*(flex-end|end)/.test(match[1].toLowerCase());
    }
  },
  {
    id: 17,
    title: 'Level 17: Implicit Flow (Column)',
    description: 'Normally items flow left to right horizontally (rows). Use `grid-auto-flow: column` to force the implicit placement to stack vertically first.',
    defaultCss: `.app-layout {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 60px 60px;
  /* Change the automated flow below */
  
}`,
    html: `<div class="app-layout">\n  <div class="box">1</div>\n  <div class="box">2</div>\n  <div class="box">3</div>\n  <div class="box">4</div>\n</div>`,
    validate: (css) => /grid-auto-flow\s*:\s*column/.test(css.toLowerCase())
  },
  {
    id: 18,
    title: 'Level 18: Implicit Row Heights',
    description: 'You did NOT define `grid-template-rows`, but you have a gap. The implicit tracks default to height "auto". Force any automatically generated implicit row to be 100px tall!',
    defaultCss: `.app-layout {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
  /* Set the height of implicit extra rows */
  
}`,
    html: `<div class="app-layout">\n  <div class="box">1</div>\n  <div class="box">2</div>\n  <div class="box">3</div>\n  <div class="box">4</div>\n</div>`,
    validate: (css) => /grid-auto-rows\s*:\s*100px/.test(css.toLowerCase())
  },
  {
    id: 19,
    title: 'Level 19: The Dense Packer algorithm',
    description: 'Grid left a massive hole because it thinks mathematically. Use `grid-auto-flow: row dense` to activate the AI back-packer algorithm to jam items into visual holes.',
    defaultCss: `.app-layout {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
  /* Activate the dense packing algorithm */
  
}`,
    html: `<div class="app-layout">\n  <div class="box">1</div>\n  <div class="box" style="grid-column: span 3; background: var(--accent-info); color: black;">WIDE 2</div>\n  <div class="box">3</div>\n</div>`,
    validate: (css) => /grid-auto-flow\s*:\s*row\s+dense/.test(css.toLowerCase()) || /grid-auto-flow\s*:\s*dense/.test(css.toLowerCase())
  },
  {
    id: 20,
    title: 'Level 20: The Holy Auto-Fit',
    description: 'The pinnacle of responsive CSS layout without media queries! Write exactly: `grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));` to create elastic collapsing tracks.',
    defaultCss: `.app-layout {
  display: grid;
  gap: 16px;
  /* Implement the magic elastic grid below */
  
}`,
    html: `<div class="app-layout">\n  <div class="box">1</div>\n  <div class="box">2</div>\n  <div class="box">3</div>\n</div>`,
    validate: (css) => {
      const lower = css.toLowerCase();
      // allow spaces arbitrarily inside the function string
      return /repeat\(\s*auto-fit\s*,\s*minmax\(\s*200px\s*,\s*1fr\s*\)\s*\)/.test(lower);
    }
  }
];
