export const animationsChallenges = [
  {
    id: 1,
    title: 'Level 1: The Harsh Snap',
    description: 'Hover over the output window box. Notice how violently it snaps to red? Add a CSS transition to make the background color shift smoothly over a snappy `0.3s`.',
    defaultCss: `.box {
  background: var(--accent-flex);
  /* Add your smooth transition below! */
  
}

.box:hover {
  background: #ef4444; /* Snaps to Red! */
}`,
    html: `<div style="height: 100vh; display: grid; place-items: center">
  <div class="box" style="width: 100px; height: 100px; border-radius: 12px; cursor: pointer; display:grid; place-items:center; font-weight:bold;">HOVER</div>
</div>`,
    validate: (css) => /transition\s*:\s*(background|all)?\s*0\.3s/.test(css.toLowerCase()) || /transition-duration\s*:\s*0\.3s/.test(css.toLowerCase())
  },
  {
    id: 2,
    title: 'Level 2: Easing the Tension',
    description: 'The transition is working, but it feels robotic. Change the physics curve by explicitly setting the `transition-timing-function` to `ease-in-out`.',
    defaultCss: `.box {
  background: var(--accent-flex);
  transition-duration: 0.8s;
  /* Add the timing function below! */
  
}

.box:hover {
  background: #ef4444;
}`,
    html: `<div style="height: 100vh; display: grid; place-items: center">
  <div class="box" style="width: 100px; height: 100px; border-radius: 12px; cursor: pointer;"></div>
</div>`,
    validate: (css) => /transition-timing-function\s*:\s*ease-in-out/.test(css.toLowerCase())
  },
  {
    id: 3,
    title: 'Level 3: The UI Lift (Translate)',
    description: 'Let us make a professional button. When hovered, use the hardware-accelerated `transform` property to lift the button exactly `translateY(-10px)`.',
    defaultCss: `.btn {
  background: var(--accent-info);
  color: black;
  transition: transform 0.2s ease;
}

.btn:hover {
  /* Lift it off the ground! */
  
}`,
    html: `<div style="height: 100vh; display: grid; place-items: center">
  <div class="box btn" style="padding: 16px 32px; font-weight: bold; border-radius: 8px; cursor: pointer; width: auto; height: auto;">Submit</div>
</div>`,
    validate: (css) => {
      const match = css.match(/\.btn:hover\s*\{([^}]*)\}/);
      if (!match) return false;
      return /transform\s*:\s*translatey\(\s*-10px\s*\)/.test(match[1].toLowerCase());
    }
  },
  {
    id: 4,
    title: 'Level 4: The Heartbeat (Scale)',
    description: 'Make the icon grow when hovered to draw attention! Use `transform: scale()` to increase its size to exactly `1.2`.',
    defaultCss: `.icon {
  background: #f472b6;
  transition: transform 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275); /* Bouncy! */
}

.icon:hover {
  /* Scale it up! */
  
}`,
    html: `<div style="height: 100vh; display: grid; place-items: center">
  <div class="box icon" style="width: 80px; height: 80px; border-radius: 50%; cursor: pointer;">❤️</div>
</div>`,
    validate: (css) => {
      const match = css.match(/\.icon:hover\s*\{([^}]*)\}/);
      if (!match) return false;
      return /transform\s*:\s*scale\(\s*1\.2\s*\)/.test(match[1].toLowerCase());
    }
  },
  {
    id: 5,
    title: 'Level 5: The Matrix Combo',
    description: 'You can chain transforms! We need the card to lift up (-10px) AND rotate slightly (-5deg) at the same time. Remember to just put a space between them!',
    defaultCss: `.card {
  background: var(--surface);
  border: 1px solid var(--border);
  transition: transform 0.3s ease;
}

.card:hover {
  /* Write the combo transform below */
  
}`,
    html: `<div style="height: 100vh; display: grid; place-items: center">
  <div class="box card" style="width: 150px; height: 200px; border-radius: 12px; cursor: pointer;">Card</div>
</div>`,
    validate: (css) => {
      const match = css.match(/\.card:hover\s*\{([^}]*)\}/);
      if (!match) return false;
      const statement = match[1].toLowerCase();
      return statement.includes('transform:') && statement.includes('translatey(-10px)') && statement.includes('rotate(-5deg)');
    }
  },
  {
    id: 6,
    title: 'Level 6: Activating Keyframes',
    description: 'Transitions require a hover. Animations run immediately! I have written a `@keyframes pulse` block for you. Bind it to the `.core` using `animation-name`.',
    defaultCss: `@keyframes pulse {
  0% { transform: scale(1); }
  50% { transform: scale(1.1); box-shadow: 0 0 40px #0fdb8c; }
  100% { transform: scale(1); }
}

.core {
  background: var(--accent-grid);
  animation-duration: 2s;
  /* Bind the animation name below! */
  
}`,
    html: `<div style="height: 100vh; display: grid; place-items: center">
  <div class="box core" style="width: 100px; height: 100px; border-radius: 50%; color: black;">CORE</div>
</div>`,
    validate: (css) => {
      const match = css.match(/\.core\s*\{([^}]*)\}/);
      if (!match) return false;
      return /animation-name\s*:\s*pulse/.test(match[1].toLowerCase());
    }
  },
  {
    id: 7,
    title: 'Level 7: The Infinite Loop',
    description: 'The core pulsed... exactly once, then died. Set `animation-iteration-count` so that it runs gracefully `infinite` times.',
    defaultCss: `@keyframes pulse {
  0% { transform: scale(1); }
  50% { transform: scale(1.1); box-shadow: 0 0 40px #0fdb8c; }
  100% { transform: scale(1); }
}

.core {
  background: var(--accent-grid);
  animation-name: pulse;
  animation-duration: 2s;
  /* Keep it alive forever! */
  
}`,
    html: `<div style="height: 100vh; display: grid; place-items: center">
  <div class="box core" style="width: 100px; height: 100px; border-radius: 50%; color: black;">CORE</div>
</div>`,
    validate: (css) => {
      const match = css.match(/\.core\s*\{([^}]*)\}/);
      if (!match) return false;
      return /animation-iteration-count\s*:\s*infinite/.test(match[1].toLowerCase());
    }
  },
  {
    id: 8,
    title: 'Level 8: The Smooth Alternate',
    description: 'Instead of defining a 50% and 100% stop, we can just define 100% and tell the engine to naturally play backwards! Set `animation-direction` to `alternate`.',
    defaultCss: `@keyframes slide {
  0% { transform: translateX(-100px); }
  100% { transform: translateX(100px); }
}

.patrol {
  background: #f472b6;
  animation-name: slide;
  animation-duration: 1.5s;
  animation-iteration-count: infinite;
  /* Make it bounce back and forth smoothly */
  
}`,
    html: `<div style="height: 100vh; display: grid; place-items: center">
  <div class="box patrol" style="width: 50px; height: 50px; border-radius: 8px; color: black;"></div>
</div>`,
    validate: (css) => {
      const match = css.match(/\.patrol\s*\{([^}]*)\}/);
      if (!match) return false;
      return /animation-direction\s*:\s*alternate/.test(match[1].toLowerCase());
    }
  },
  {
    id: 9,
    title: 'Level 9: The Loader Master Shorthand',
    description: 'Like transitions, animations have a master shorthand: `animation: [name] [duration] [timing] [iteration]`. Write exactly `animation: spin 1s linear infinite` to build the perfect loading spinner.',
    defaultCss: `@keyframes spin {
  100% { transform: rotate(360deg); }
}

.spinner {
  width: 50px;
  height: 50px;
  border: 4px solid rgba(255,255,255,0.1);
  border-top-color: #c084fc;
  border-radius: 50%;
  /* Write the magic shorthand below! */
  
}`,
    html: `<div style="height: 100vh; display: grid; place-items: center">
  <div class="spinner"></div>
</div>`,
    validate: (css) => {
      const match = css.match(/\.spinner\s*\{([^}]*)\}/);
      if (!match) return false;
      return /animation\s*:\s*spin\s+1s\s+linear\s+infinite/.test(match[1].toLowerCase());
    }
  },
  {
    id: 10,
    title: 'Level 10: The Ultimate Architect',
    description: 'You must build a glowing radar. You need BOTH an infinite animation AND an easing curve. Shorthand: `animation: ping 2s cubic-bezier(0, 0, 0.2, 1) infinite`.',
    defaultCss: `@keyframes ping {
  75%, 100% { transform: scale(2); opacity: 0; }
}

.radar {
  width: 30px;
  height: 30px;
  background: var(--accent-info);
  border-radius: 50%;
  /* Deploy the radar pulse shorthand! */
  
}`,
    html: `<div style="height: 100vh; display: grid; place-items: center">
  <div style="position: relative; display: grid; place-items: center">
    <div class="radar" style="position: absolute"></div>
    <div style="width: 15px; height: 15px; background: white; border-radius: 50%; z-index: 2"></div>
  </div>
</div>`,
    validate: (css) => {
      const match = css.match(/\.radar\s*\{([^}]*)\}/);
      if (!match) return false;
      return /animation\s*:\s*ping\s+2s\s+cubic-bezier\(0,\s*0,\s*0\.2,\s*1\)\s+infinite/.test(match[1].toLowerCase());
    }
  }
];
