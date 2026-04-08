export const themingChallenges = [
  {
    id: 1,
    title: 'Level 1: The Global Root',
    description: 'We need to establish a color palette! Declare a CSS variable named `--brand-core` on the `:root` pseudo-class and set it to `#3b82f6` (blue).',
    defaultCss: `/* Target the root pseudo-class below! */
 {
  
}

.box {
  background: var(--brand-core, gray);
}`,
    html: `<div style="display:grid; place-items:center; height:100vh;">
  <div class="box" style="width: 100px; height: 100px; border-radius: 8px;"></div>
</div>`,
    validate: (css) => {
      const lower = css.toLowerCase();
      return /:root\s*\{[^}]*--brand-core\s*:\s*#3b82f6/.test(lower);
    }
  },
  {
    id: 2,
    title: 'Level 2: The Injection',
    description: 'Now that the layout has `--card-bg` defined, inject it into the `.card` classes background property using the `var()` function.',
    defaultCss: `:root {
  --card-bg: #1e293b;
}

.card {
  width: 200px; height: 100px; border: 1px solid white;
  /* Use the var() function below */
  
}`,
    html: `<div style="display:grid; place-items:center; height:100vh;">
  <div class="card"></div>
</div>`,
    validate: (css) => {
      const lower = css.toLowerCase();
      // Remove all spaces to make regex checking foolproof
      return lower.replace(/\s/g, '').includes('background:var(--card-bg)');
    }
  },
  {
    id: 3,
    title: 'Level 3: The Safe Fallback',
    description: 'Oops! The senior developer deleted the `--primary-color` globally, and now our button is invisible! Add a fallback to the `var()` function to make it `red` if the variable is missing.',
    defaultCss: `.btn {
  /* Add the comma fallback to the variable below! */
  background: var(--primary-color);
  
  color: white; padding: 12px 24px; border-radius: 4px;
}`,
    html: `<div style="display:grid; place-items:center; height:100vh;">
  <div class="btn">Submit</div>
</div>`,
    validate: (css) => {
      const lower = css.toLowerCase();
      return /background\s*:\s*var\(\s*--primary-color\s*,\s*red\s*\)/.test(lower);
    }
  },
  {
    id: 4,
    title: 'Level 4: Mathematical Subtraction',
    description: 'Use the `calc()` engine! Set the width of the box to exactly `100% - 40px`. Make sure to leave spaces around the minus sign!',
    defaultCss: `.container {
  width: 300px;
  background: var(--surface);
  border: 1px dashed white;
}

.box {
  background: var(--accent-grid);
  height: 50px;
  /* Write the calc() function below! */
  
}`,
    html: `<div style="display:grid; place-items:center; height:100vh;">
  <div class="container">
    <div class="box"></div>
  </div>
</div>`,
    validate: (css) => {
      const lower = css.toLowerCase();
      return /width\s*:\s*calc\(\s*100%\s*-\s*40px\s*\)/.test(lower);
    }
  },
  {
    id: 5,
    title: 'Level 5: Dynamic Variable Mathematics',
    description: 'Multiply our baseline CSS variable by 3 to create the `padding` for the giant hero section.',
    defaultCss: `:root {
  --space-sm: 8px;
}

.hero {
  background: #3b82f6;
  border-radius: 8px;
  /* Multiply space-sm by 3 inside a calc() ! */
  
}`,
    html: `<div style="display:grid; place-items:center; height:100vh;">
  <div class="hero">Massive Hero Padding</div>
</div>`,
    validate: (css) => {
      const lower = css.toLowerCase();
      return /padding\s*:\s*calc\(\s*var\(\s*--space-sm\s*\)\s*\*\s*3\s*\)/.test(lower);
    }
  }
];
