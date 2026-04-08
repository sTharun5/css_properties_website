import React, { useState, useEffect } from 'react';
import Editor from '@monaco-editor/react';
import { Award, ChevronRight, Gamepad2, CheckCircle2, XCircle } from 'lucide-react';

const challengeLevels = [
  {
    id: 1,
    title: 'Level 1: The Centering Ritual',
    description: 'Flexbox is famous for making centering easy. Use Flexbox to center the glowing orb perfectly in the middle of the container.',
    defaultCss: `.container {
  display: flex;
  height: 100vh;
  /* Add your flex properties below */
  
}
`,
    html: `<div class="container">\n  <div class="box orb"></div>\n</div>`,
    // Verify user used justify-content center and align-items center
    validate: (css) => {
      const lower = css.toLowerCase();
      const hasJustifyCenter = /justify-content\s*:\s*center/.test(lower);
      const hasAlignCenter = /align-items\s*:\s*center/.test(lower);
      return hasJustifyCenter && hasAlignCenter;
    }
  },
  {
    id: 2,
    title: 'Level 2: Maximum Separation',
    description: 'You have a logo and a navigation menu. Push them as far away from each other as possible, pinning them to the opposite edges of the navbar.',
    defaultCss: `.navbar {
  display: flex;
  height: 60px;
  background: rgba(255,255,255,0.05);
  border-bottom: 1px solid rgba(255,255,255,0.1);
  padding: 0 24px;
  /* Add property to push items apart */
  
}
`,
    html: `<div class="navbar">\n  <div class="box logo">LOGO</div>\n  <div class="box nav">MENU</div>\n</div>`,
    validate: (css) => {
      const lower = css.toLowerCase();
      return /justify-content\s*:\s*space-between/.test(lower);
    }
  },
  {
    id: 3,
    title: 'Level 3: The Holy Grail Grid',
    description: 'Build a classic CSS Grid layout. Make the container a grid, give it two columns (one 200px wide, and one taking up the remaining fraction of space).',
    defaultCss: `.app-layout {
  /* 1. Turn on grid */
  
  /* 2. Set the 2 columns */
  
  gap: 16px;
  height: 100vh;
}
`,
    html: `<div class="app-layout">\n  <div class="box sidebar">Sidebar</div>\n  <div class="box main">Main Content</div>\n</div>`,
    validate: (css) => {
      const lower = css.toLowerCase();
      const isGrid = /display\s*:\s*grid/.test(lower);
      const hasCols = /grid-template-columns\s*:\s*200px\s+1fr/.test(lower);
      return isGrid && hasCols;
    }
  }
];

export default function Challenges() {
  const [currentLevelIdx, setCurrentLevelIdx] = useState(0);
  const level = challengeLevels[currentLevelIdx];
  
  const [cssCode, setCssCode] = useState(level.defaultCss);
  const [verdict, setVerdict] = useState('pending'); // pending, success, fail

  // Reset state when level changes
  useEffect(() => {
    setCssCode(level.defaultCss);
    setVerdict('pending');
  }, [level]);

  // Live validation
  useEffect(() => {
    const timer = setTimeout(() => {
      const isPass = level.validate(cssCode);
      if (isPass) setVerdict('success');
      else setVerdict('pending');
    }, 500);
    return () => clearTimeout(timer);
  }, [cssCode, level]);

  const nextLevel = () => {
    if (currentLevelIdx < challengeLevels.length - 1) {
      setCurrentLevelIdx(curr => curr + 1);
    }
  };

  const srcDoc = `
    <!DOCTYPE html>
    <html>
      <head>
        <style>
          :root { --accent-flex: #7c6aff; --accent-grid: #0fdb8c; --accent-info: #3ecfff; }
          body { font-family: system-ui, sans-serif; background: #0b0d1a; color: white; margin: 0; box-sizing: border-box; }
          .box { background: var(--accent-flex); display: grid; place-items: center; font-weight: bold; font-size: .8rem; border-radius: 8px; box-shadow: 0 4px 12px rgba(0,0,0,0.5); }
          
          /* Level Specific Classes for aesthetics */
          .orb { width: 80px; height: 80px; border-radius: 50%; background: radial-gradient(circle at 30% 30%, #7c6aff, #3c2bb3); box-shadow: 0 0 40px rgba(124,106,255,0.6); }
          .logo { padding: 8px 16px; background: var(--accent-info); color: black; }
          .nav { padding: 8px 16px; background: rgba(255,255,255,0.1); border: 1px solid rgba(255,255,255,0.2); }
          .sidebar { background: var(--accent-grid); color: black; }
          .main { background: var(--surface); border: 1px dashed rgba(255,255,255,0.2); color: var(--text-dim); }

          /* User Code */
          ${cssCode}
        </style>
      </head>
      <body>
        ${level.html}
      </body>
    </html>
  `;

  return (
    <div style={{ padding: '32px 48px', height: '100%', overflowY: 'auto' }}>
      
      {/* Header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '32px' }}>
        <div>
          <h1 className="gradient-text" style={{ fontSize: '2.5rem', marginBottom: '8px', display: 'flex', alignItems: 'center', gap: '12px' }}>
            <Gamepad2 size={36} color="var(--accent-flex)" /> CSS Layout Challenges
          </h1>
          <p style={{ color: 'var(--text-dim)', fontSize: '1.05rem', maxWidth: '600px', lineHeight: 1.6 }}>
            {level.description}
          </p>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', background: 'var(--surface)', padding: '12px 24px', borderRadius: '12px', border: '1px solid var(--border)' }}>
          <Award size={24} color={verdict === 'success' ? 'var(--accent-grid)' : 'var(--text-dim)'} />
          <div>
            <div style={{ fontSize: '.7rem', textTransform: 'uppercase', letterSpacing: '.1em', color: 'var(--text-dim)', fontWeight: 700 }}>Progress</div>
            <div style={{ fontWeight: 800 }}>Level {level.id} of {challengeLevels.length}</div>
          </div>
        </div>
      </div>
      
      {/* App Space */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.2fr', gap: '24px', height: 'calc(100vh - 220px)', minHeight: '500px' }}>
        
        {/* Editor */}
        <div style={{ borderRadius: '12px', overflow: 'hidden', border: verdict === 'success' ? '1px solid var(--accent-grid)' : '1px solid var(--border)', display: 'flex', flexDirection: 'column', transition: 'border-color 0.3s ease' }}>
          <div style={{ padding: '12px 20px', background: 'var(--surface)', fontSize: '.8rem', color: 'var(--text-dim)', fontWeight: 600, display: 'flex', justifyContent: 'space-between' }}>
            <span>Editor — style.css</span>
            {verdict === 'success' && <span style={{ color: 'var(--accent-grid)', display: 'flex', alignItems: 'center', gap: '6px' }}><CheckCircle2 size={14} /> Solved!</span>}
          </div>
          <div style={{ flex: 1, position: 'relative' }}>
            <Editor
              height="100%"
              defaultLanguage="css"
              theme="vs-dark"
              value={cssCode}
              onChange={val => setCssCode(val || '')}
              options={{ minimap: { enabled: false }, fontSize: 15, fontFamily: 'Fira Code', padding: { top: 20 }, wordWrap: 'on' }}
            />
            {verdict === 'success' && currentLevelIdx < challengeLevels.length - 1 && (
              <div className="fade-in" style={{ position: 'absolute', bottom: '24px', right: '24px', zIndex: 10 }}>
                <button onClick={nextLevel} style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '12px 24px', background: 'var(--accent-grid)', color: 'black', border: 'none', borderRadius: '8px', fontWeight: 800, fontSize: '1rem', cursor: 'pointer', boxShadow: '0 8px 24px rgba(15,219,140,0.4)', transition: 'transform 0.2s' }}>
                  Next Level <ChevronRight size={18} />
                </button>
              </div>
            )}
            {verdict === 'success' && currentLevelIdx === challengeLevels.length - 1 && (
              <div className="fade-in" style={{ position: 'absolute', bottom: '24px', right: '24px', zIndex: 10 }}>
                <div style={{ padding: '12px 24px', background: 'linear-gradient(90deg, #c084fc, #f472b6)', color: 'white', borderRadius: '8px', fontWeight: 800, fontSize: '1rem', boxShadow: '0 8px 24px rgba(192,132,252,0.4)' }}>
                  🎉 Course Completed!
                </div>
              </div>
            )}
          </div>
        </div>
        
        {/* Output */}
        <div style={{ borderRadius: '12px', overflow: 'hidden', border: '1px solid rgba(56, 189, 248, 0.2)', display: 'flex', flexDirection: 'column', boxShadow: '0 8px 32px rgba(0,0,0,0.2)' }}>
          <div style={{ padding: '12px 20px', background: 'rgba(56, 189, 248, 0.05)', borderBottom: '1px solid rgba(56, 189, 248, 0.1)', fontSize: '.8rem', color: 'var(--accent-info)', fontWeight: 600 }}>Live Output Visualization</div>
          <iframe
            srcDoc={srcDoc}
            title="challenge-output"
            sandbox="allow-scripts"
            style={{ width: '100%', flex: 1, border: 'none', background: 'var(--card)' }}
          />
        </div>

      </div>
    </div>
  );
}
