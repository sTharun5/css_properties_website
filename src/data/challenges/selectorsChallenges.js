export const selectorsChallenges = [
  {
    id: 1,
    title: 'Level 1: The Direct Child',
    description: 'We have a wrapper with multiple links. Use the Direct Child combinator (`>`) to target ONLY the massive top-level link and turn it `#f97316`, leaving the nested dropdown links alone.',
    defaultCss: `.nav {
  display: flex; gap: 16px; align-items: center; justify-content: center;
  /* Use the exact direct child combinator below! */
  
}

.nav a { color: white; text-decoration: none; font-weight: bold; }`,
    html: `<div style="display:grid; place-items:center; height:100vh;">
  <div class="nav">
    <a href="#">Top-Level Link</a>
    <div class="dropdown" style="border: 1px dashed white; padding: 12px; margin-left: 32px;">
      <a href="#">Nested Dropdown Link</a>
    </div>
  </div>
</div>`,
    validate: (css) => {
      const lower = css.toLowerCase();
      // Look for the direct child > combined with color assignment
      return /\.nav\s*>\s*a/.test(lower) && lower.includes('#f97316');
    }
  },
  {
    id: 2,
    title: 'Level 2: The Sibling Gap',
    description: 'There is no margin between the paragraphs! Use the Adjacent Sibling Combinator (`+`) so that ONLY paragraphs that immediately follow another paragraph get a `margin-top` of `24px`.',
    defaultCss: `.article {
  width: 300px;
}

p {
  background: var(--surface);
  padding: 12px;
  border: 1px solid var(--border);
}

/* Use the p + p adjacent sibling selector below! */
`,
    html: `<div style="display:grid; place-items:center; height:100vh;">
  <div class="article">
    <h2>Article Title</h2>
    <p>Paragraph 1</p>
    <p>Paragraph 2</p>
    <p>Paragraph 3</p>
  </div>
</div>`,
    validate: (css) => {
      const lower = css.toLowerCase();
      return /p\s*\+\s*p\s*\{[^}]*margin-top\s*:\s*24px/.test(lower);
    }
  },
  {
    id: 3,
    title: 'Level 3: The Even Striping',
    description: 'We have a list of items. Use the `:nth-child(even)` pseudo-class on the list items to change their background to `#334155`, creating a classic zebra-stripe effect.',
    defaultCss: `.list-item {
  color: white; padding: 12px 24px; border: 1px solid rgba(255,255,255,0.1); width: 250px;
}

/* Zebra stripe it below! */
`,
    html: `<div style="display:grid; place-items:center; height:100vh;">
  <div>
    <div class="list-item">Row 1</div>
    <div class="list-item">Row 2</div>
    <div class="list-item">Row 3</div>
    <div class="list-item">Row 4</div>
  </div>
</div>`,
    validate: (css) => {
      const lower = css.toLowerCase();
      return /\.list-item:nth-child\(\s*even\s*\)\s*\{[^}]*background\s*:\s*#334155/.test(lower);
    }
  },
  {
    id: 4,
    title: 'Level 4: The Mathematical Nth',
    description: 'Let\'s get purely mathematical. Target specifically the 3rd element in the grid using exactly `:nth-child(3)` and scale it up using `transform: scale(1.2)`.',
    defaultCss: `.grid-item {
  width: 50px; height: 50px; background: var(--accent-grid); border-radius: 4px;
}

/* Target exactly the 3rd box below! */
`,
    html: `<div style="display:grid; place-items:center; height:100vh;">
  <div style="display: flex; gap: 16px;">
    <div class="grid-item">1</div>
    <div class="grid-item">2</div>
    <div class="grid-item">3</div>
    <div class="grid-item">4</div>
  </div>
</div>`,
    validate: (css) => {
      const lower = css.toLowerCase();
      return /\.grid-item:nth-child\(\s*3\s*\)\s*\{[^}]*transform\s*:\s*scale\(\s*1\.2\s*\)/.test(lower);
    }
  },
  {
    id: 5,
    title: 'Level 5: The Ghost Node',
    description: 'The ultimate CSS trick. Use the `::before` pseudo-element on the target. You MUST define `content: ""` to make it spawn! Make its background `white` and give it `width: 20px`, `height: 20px`.',
    defaultCss: `.target {
  position: relative;
  width: 100px; height: 100px;
  background: #3b82f6; border-radius: 8px;
}

/* Spawn the ghost element! */
`,
    html: `<div style="display:grid; place-items:center; height:100vh;">
  <div class="target"></div>
</div>`,
    validate: (css) => {
      const lower = css.toLowerCase();
      const hasPseudo = /\.target::before/.test(lower);
      const hasContent = /content\s*:\s*(["']["']|""|'')/.test(lower);
      const hasBg = /background\s*:\s*white/.test(lower);
      return hasPseudo && hasContent && hasBg;
    }
  }
];
