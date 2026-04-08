export const flexChallenges = [
  {
    id: 1,
    title: 'Level 1: The Activation',
    description: 'The container below is acting like a standard block. Turn it into a flex container to align the child elements in a row.',
    defaultCss: `.container {
  height: 200px;
  /* Add your property below */
  
}`,
    html: `<div class="container">\n  <div class="box">1</div>\n  <div class="box">2</div>\n</div>`,
    validate: (css) => /display\s*:\s*flex/.test(css.toLowerCase())
  },
  {
    id: 2,
    title: 'Level 2: The Push to the Right',
    description: 'The items are sitting on the left. Use a property to push them all the way to the right edge of the main axis without changing their order.',
    defaultCss: `.container {
  display: flex;
  height: 200px;
  /* Add your property below */
  
}`,
    html: `<div class="container">\n  <div class="box">1</div>\n  <div class="box">2</div>\n</div>`,
    validate: (css) => /justify-content\s*:\s*(flex-end|end)/.test(css.toLowerCase())
  },
  {
    id: 3,
    title: 'Level 3: Perfect Centering',
    description: 'Center the items perfectly along the main horizontal axis.',
    defaultCss: `.container {
  display: flex;
  height: 200px;
  /* Add your property below */
  
}`,
    html: `<div class="container">\n  <div class="box">1</div>\n  <div class="box">2</div>\n</div>`,
    validate: (css) => /justify-content\s*:\s*center/.test(css.toLowerCase())
  },
  {
    id: 4,
    title: 'Level 4: Maximum Separation',
    description: 'Push the two items as far away from each other as possible, pinning them to the opposite edges.',
    defaultCss: `.container {
  display: flex;
  height: 200px;
  /* Add your property below */
  
}`,
    html: `<div class="container">\n  <div class="box logo">LOGO</div>\n  <div class="box nav">MENU</div>\n</div>`,
    validate: (css) => /justify-content\s*:\s*space-between/.test(css.toLowerCase())
  },
  {
    id: 5,
    title: 'Level 5: Equal Spacing',
    description: 'Distribute the items so they have equal space around them on all sides.',
    defaultCss: `.container {
  display: flex;
  height: 200px;
  /* Add your property below */
  
}`,
    html: `<div class="container">\n  <div class="box">A</div>\n  <div class="box">B</div>\n  <div class="box">C</div>\n</div>`,
    validate: (css) => /justify-content\s*:\s*space-(around|evenly)/.test(css.toLowerCase())
  },
  {
    id: 6,
    title: 'Level 6: Vertical Alignment',
    description: 'The items are stretched vertically by default. Move them to the bottom of the cross axis.',
    defaultCss: `.container {
  display: flex;
  height: 200px;
  /* Add your property below */
  
}`,
    html: `<div class="container">\n  <div class="box">1</div>\n  <div class="box">2</div>\n</div>`,
    validate: (css) => /align-items\s*:\s*(flex-end|end)/.test(css.toLowerCase())
  },
  {
    id: 7,
    title: 'Level 7: The Holy Grail of Centering',
    description: 'Use the two fundamental properties to center the orb perfectly in the exact middle of the screen horizontally and vertically.',
    defaultCss: `.container {
  display: flex;
  height: 200px;
  /* Combine two properties below */
  
}`,
    html: `<div class="container">\n  <div class="box orb"></div>\n</div>`,
    validate: (css) => {
      const lower = css.toLowerCase();
      return /justify-content\s*:\s*center/.test(lower) && /align-items\s*:\s*center/.test(lower);
    }
  },
  {
    id: 8,
    title: 'Level 8: Changing Direction',
    description: 'Instead of an inline row, make the items stack mathematically in a vertical column.',
    defaultCss: `.container {
  display: flex;
  height: 300px;
  /* Add your property below */
  
}`,
    html: `<div class="container">\n  <div class="box">1</div>\n  <div class="box">2</div>\n  <div class="box">3</div>\n</div>`,
    validate: (css) => /flex-direction\s*:\s*column/.test(css.toLowerCase())
  },
  {
    id: 9,
    title: 'Level 9: The Reverse Column',
    description: 'Stack the items vertically, but completely reverse their order so 3 is on top and 1 is on bottom.',
    defaultCss: `.container {
  display: flex;
  height: 300px;
  /* Add your property below */
  
}`,
    html: `<div class="container">\n  <div class="box">1</div>\n  <div class="box">2</div>\n  <div class="box">3</div>\n</div>`,
    validate: (css) => /flex-direction\s*:\s*column-reverse/.test(css.toLowerCase())
  },
  {
    id: 10,
    title: 'Level 10: Centering a Column',
    description: 'Warning: Direction changes the axes! When in a column, `justify-content` controls vertical alignment, and `align-items` controls horizontal. Center the column perfectly.',
    defaultCss: `.container {
  display: flex;
  flex-direction: column;
  height: 300px;
  /* Center horizontally AND vertically */
  
}`,
    html: `<div class="container">\n  <div class="box">1</div>\n  <div class="box">2</div>\n</div>`,
    validate: (css) => {
      const lower = css.toLowerCase();
      return /justify-content\s*:\s*center/.test(lower) && /align-items\s*:\s*center/.test(lower);
    }
  },
  {
    id: 11,
    title: 'Level 11: Wrapping Elements',
    description: 'There are too many items and they are shrinking! Allow them to wrap to a new line.',
    defaultCss: `.container {
  display: flex;
  width: 250px;
  height: auto;
  /* Add your property below */
  
}`,
    html: `<div class="container">\n  <div class="box" style="min-width: 80px">1</div>\n  <div class="box" style="min-width: 80px">2</div>\n  <div class="box" style="min-width: 80px">3</div>\n  <div class="box" style="min-width: 80px">4</div>\n</div>`,
    validate: (css) => /flex-wrap\s*:\s*wrap/.test(css.toLowerCase()) && !/wrap-reverse/.test(css.toLowerCase())
  },
  {
    id: 12,
    title: 'Level 12: Reverse Wrapping',
    description: 'Make the items wrap, but make the new rows stack upwards instead of downwards.',
    defaultCss: `.container {
  display: flex;
  width: 250px;
  height: 300px;
  /* Add your property below */
  
}`,
    html: `<div class="container">\n  <div class="box" style="min-width: 80px">1</div>\n  <div class="box" style="min-width: 80px">2</div>\n  <div class="box" style="min-width: 80px">3</div>\n  <div class="box" style="min-width: 80px">4</div>\n</div>`,
    validate: (css) => /flex-wrap\s*:\s*wrap-reverse/.test(css.toLowerCase())
  },
  {
    id: 13,
    title: 'Level 13: The Flow Shorthand',
    description: 'Use the `flex-flow` shorthand property to set BOTH the direction to column AND the wrap to wrap in a single line of CSS.',
    defaultCss: `.container {
  display: flex;
  height: 300px;
  /* Set both column and wrap simultaneously */
  
}`,
    html: `<div class="container">\n  <div class="box">1</div>\n  <div class="box">2</div>\n  <div class="box">3</div>\n  <div class="box">4</div>\n</div>`,
    validate: (css) => /flex-flow\s*:\s*column\s+wrap/.test(css.toLowerCase())
  },
  {
    id: 14,
    title: 'Level 14: Align Content vs Align Items',
    description: 'When you have multiple WRAPPED rows, `align-content` controls the spacing of the rows themselves vertically. Space the exact rows completely apart using `align-content`.',
    defaultCss: `.container {
  display: flex;
  flex-wrap: wrap;
  height: 400px;
  /* Space out the multi-line rows */
  
}`,
    html: `<div class="container">\n  <div class="box" style="width: 40%">1</div>\n  <div class="box" style="width: 40%">2</div>\n  <div class="box" style="width: 40%">3</div>\n  <div class="box" style="width: 40%">4</div>\n</div>`,
    validate: (css) => /align-content\s*:\s*space-between/.test(css.toLowerCase())
  },
  {
    id: 15,
    title: 'Level 15: The Lone Rebel (align-self)',
    description: 'Target the specific `.target` box and align only IT to the bottom (flex-end), leaving the other boxes stretched.',
    defaultCss: `.container {
  display: flex;
  height: 250px;
}

.target {
  /* Write code here to override the parent align-items! */
  
}`,
    html: `<div class="container">\n  <div class="box">1</div>\n  <div class="box target" style="background: var(--accent-info); color: black;">Rebel</div>\n  <div class="box">3</div>\n</div>`,
    validate: (css) => {
      const match = css.match(/\.target\s*\{([^}]*)\}/);
      if (!match) return false;
      return /align-self\s*:\s*(flex-end|end)/.test(match[1].toLowerCase());
    }
  },
  {
    id: 16,
    title: 'Level 16: Changing Order',
    description: 'By default, all items have an `order` of 0. Give the target an order of 1 to move it to the very end of the row.',
    defaultCss: `.container {
  display: flex;
  height: 200px;
}

.target {
  /* Move me to the right! */
  
}`,
    html: `<div class="container">\n  <div class="box target" style="background: var(--accent-info); color: black;">Move Me</div>\n  <div class="box">B</div>\n  <div class="box">C</div>\n</div>`,
    validate: (css) => {
      const match = css.match(/\.target\s*\{([^}]*)\}/);
      if (!match) return false;
      return /order\s*:\s*1/.test(match[1].toLowerCase());
    }
  },
  {
    id: 17,
    title: 'Level 17: Growing to Fill',
    description: 'The target item wants more space! Use `flex-grow` to make it consume all remaining empty space in the row.',
    defaultCss: `.container {
  display: flex;
  height: 200px;
}

.target {
  /* Grow to fill the space! */
  
}`,
    html: `<div class="container">\n  <div class="box">A</div>\n  <div class="box target" style="background: var(--accent-info); color: black;">Stretch Me</div>\n  <div class="box">C</div>\n</div>`,
    validate: (css) => {
      const match = css.match(/\.target\s*\{([^}]*)\}/);
      if (!match) return false;
      return /flex-grow\s*:\s*1/.test(match[1].toLowerCase()) || /flex\s*:\s*1/.test(match[1].toLowerCase());
    }
  },
  {
    id: 18,
    title: 'Level 18: Unequal Growth Factor',
    description: 'Make the target grow exactly TWICE as fast as the other item. Give the normal box a grow of 1, and the target a grow of 2.',
    defaultCss: `.container {
  display: flex;
  height: 200px;
}

.normal {
  /* Set grow to 1 */
  
}

.target {
  /* Set grow to 2 */
  
}`,
    html: `<div class="container">\n  <div class="box normal">1</div>\n  <div class="box target" style="background: var(--accent-info); color: black;">2x</div>\n</div>`,
    validate: (css) => {
      const normalMatch = css.match(/\.normal\s*\{([^}]*)\}/);
      const targetMatch = css.match(/\.target\s*\{([^}]*)\}/);
      if (!normalMatch || !targetMatch) return false;
      return /flex(?:-grow)?\s*:\s*1/.test(normalMatch[1].toLowerCase()) && /flex(?:-grow)?\s*:\s*2/.test(targetMatch[1].toLowerCase());
    }
  },
  {
    id: 19,
    title: 'Level 19: Shrinking Control',
    description: 'Elements naturally shrink in Flexbox. Use `flex-shrink: 0` on the target so it refuses to compress, forcing the other boxes to shrink instead.',
    defaultCss: `.container {
  display: flex;
  width: 300px; /* Highly constrained container */
  height: 200px;
}

.box {
  width: 200px; /* Total width 600px! Will overflow! */
}

.target {
  /* Refuse to shrink! */
  
}`,
    html: `<div class="container">\n  <div class="box">1</div>\n  <div class="box target" style="background: var(--accent-info); color: black;">No Shrink</div>\n  <div class="box">3</div>\n</div>`,
    validate: (css) => {
      const match = css.match(/\.target\s*\{([^}]*)\}/);
      if (!match) return false;
      return /flex-shrink\s*:\s*0/.test(match[1].toLowerCase()) || /flex\s*:\s*.*0/.test(match[1].toLowerCase());
    }
  },
  {
    id: 20,
    title: 'Level 20: The Flex Shorthand Master',
    description: 'The `flex` property is shorthand for [flex-grow, flex-shrink, flex-basis]. Use the shorthand `flex: 0 1 200px` on the target to give it a basis of 200px, block it from growing, but allow it to shrink naturally.',
    defaultCss: `.container {
  display: flex;
  height: 200px;
}

.target {
  /* Use the flex shorthand! */
  
}`,
    html: `<div class="container">\n  <div class="box">1</div>\n  <div class="box target" style="background: var(--accent-info); color: black;">Master</div>\n  <div class="box">3</div>\n</div>`,
    validate: (css) => {
      const match = css.match(/\.target\s*\{([^}]*)\}/);
      if (!match) return false;
      const statement = match[1].toLowerCase();
      // Ensure flex is used and numbers match
      return /flex\s*:\s*0\s+1\s+200px/.test(statement);
    }
  }
];
