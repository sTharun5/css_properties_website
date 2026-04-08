export const responsiveChallenges = [
  {
    id: 1,
    title: 'Level 1: The Mobile Breakpoint',
    description: 'We have a box that is green on desktop. Write a media query that turns the box blue ONLY when the viewport shrinks below `600px`.',
    defaultCss: `.box {
  background: #10b981;
  width: 100px; height: 100px; border-radius: 8px;
}

/* Add your media query below! */
`,
    html: `<div style="height: 100vh; display: grid; place-items: center">
  <div class="box"></div>
</div>`,
    validate: (css) => {
      const lower = css.toLowerCase();
      // Match the query block and the property inside
      return /@media\s*\(\s*max-width\s*:\s*600px\s*\)/.test(lower) && /\.box\s*\{[^}]*background\s*:\s*blue/.test(lower);
    }
  },
  {
    id: 2,
    title: 'Level 2: The Desktop Enhancement',
    description: 'Mobile-first design means you build the mobile view first, then enhance for large monitors. Write a `min-width: 1024px` media query that changes the flex-direction from column to `row`.',
    defaultCss: `.layout {
  display: flex;
  flex-direction: column;
}

/* Add the Desktop Enhancement below! */
`,
    html: `<div class="layout" style="gap: 8px">
  <div style="background:var(--accent-grid); width:50px; height:50px"></div>
  <div style="background:var(--accent-flex); width:50px; height:50px"></div>
</div>`,
    validate: (css) => {
      const lower = css.toLowerCase();
      return /@media\s*\(\s*min-width\s*:\s*1024px\s*\)/.test(lower) && /flex-direction\s*:\s*row/.test(lower);
    }
  },
  {
    id: 3,
    title: 'Level 3: Container Query Activation',
    description: 'We want the card to style itself based on its parent container, NOT the screen screen viewport. Define the `.wrapper` as a formal Container by setting `container-type: inline-size`.',
    defaultCss: `.wrapper {
  width: 300px;
  border: 1px dashed white;
  padding: 16px;
  /* Activate container query capabilities below! */
  
}

.card {
  background: var(--surface);
  padding: 24px; border-radius: 8px;
}`,
    html: `<div style="display:grid; place-items:center; height:100vh;">
  <div class="wrapper">
    <div class="card">I listen to my wrapper!</div>
  </div>
</div>`,
    validate: (css) => /container-type\s*:\s*inline-size/.test(css.toLowerCase())
  },
  {
    id: 4,
    title: 'Level 4: Listening to the Parent',
    description: 'Now that the wrapper is set up, ping it! Write a `@container` rule targeting a `max-width` of `400px` that changes the `.card` background to `#f472b6`.',
    defaultCss: `.wrapper {
  container-type: inline-size;
  width: 300px;
}

.card {
  background: #334155;
  padding: 24px; border-radius: 8px;
}

/* Write the @container query below! */
`,
    html: `<div style="display:grid; place-items:center; height:100vh;">
  <div class="wrapper">
    <div class="card">Squeeze Me!</div>
  </div>
</div>`,
    validate: (css) => {
      const lower = css.toLowerCase();
      return /@container\s*\(\s*max-width\s*:\s*400px\s*\)/.test(lower) && /\.card\s*\{[^}]*background\s*:\s*#f472b6/.test(lower);
    }
  },
  {
    id: 5,
    title: 'Level 5: Fluid Typography',
    description: 'Hardcoded pixel breakpoints are clunky. Use the `clamp()` function! Set `.title` font-size to clamp between `16px` (min), `4vw` (fluid preferred), and `32px` (max).',
    defaultCss: `.title {
  color: #fb923c;
  /* Use the clamp() function below! */
  
}`,
    html: `<div style="display:grid; place-items:center; height:100vh;">
  <h1 class="title">Fluid Water</h1>
</div>`,
    validate: (css) => {
      const lower = css.toLowerCase();
      // Remove all spaces for easier testing
      const spaceless = lower.replace(/\s/g, '');
      return /font-size:clamp\(16px,4vw,32px\)/.test(spaceless);
    }
  }
];
