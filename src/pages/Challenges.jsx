import React, { useState } from 'react';
import Editor from '@monaco-editor/react';

export default function Challenges() {
  const challengeCSS = `/* Challenge 1: Center the items! */
.container {
  display: flex;
  height: 200px;
  /* Add your properties below */
  
}
`;
  const [cssCode, setCssCode] = useState(challengeCSS);

  const srcDoc = `
    <!DOCTYPE html>
    <html>
      <head>
        <style>
          :root { --accent-flex: #7c6aff; --accent-grid: #0fdb8c; --accent-info: #3ecfff; }
          body { font-family: sans-serif; background: #0b0d1a; color: white; margin: 0; padding: 24px;}
          .box { width: 50px; height: 50px; background: var(--accent-flex); border-radius: 8px; display: grid; place-items: center; font-weight: bold; }
          .container { border: 2px dashed #2e3459; border-radius: 12px; }
          ${cssCode}
        </style>
      </head>
      <body>
        <div class="container">
          <div class="box" style="background: var(--accent-grid)">A</div>
          <div class="box" style="background: var(--accent-info)">B</div>
        </div>
      </body>
    </html>
  `;

  return (
    <div style={{ padding: '32px 48px', height: '100%', overflowY: 'auto' }}>
      <div style={{ marginBottom: '32px' }}>
        <h1 className="gradient-text" style={{ fontSize: '2.5rem', marginBottom: '8px' }}>Layout Challenges</h1>
        <p style={{ color: 'var(--text-dim)' }}>Write the correct CSS to complete the visual objective.</p>
      </div>
      
      <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1fr) minmax(0, 1.2fr)', gap: '24px', height: 'calc(100vh - 200px)', minHeight: '500px' }}>
        <div style={{ borderRadius: '12px', overflow: 'hidden', border: '1px solid var(--border)', display: 'flex', flexDirection: 'column' }}>
          <div style={{ padding: '12px 20px', background: 'var(--surface)', fontSize: '.8rem', color: 'var(--text-dim)', fontWeight: 600 }}>Editor — style.css</div>
          <div style={{ flex: 1 }}>
            <Editor
              height="100%"
              defaultLanguage="css"
              theme="vs-dark"
              value={cssCode}
              onChange={val => setCssCode(val)}
              options={{ minimap: { enabled: false }, fontSize: 14, fontFamily: 'Fira Code', padding: { top: 16 } }}
            />
          </div>
        </div>
        
        <div style={{ borderRadius: '12px', overflow: 'hidden', border: '1px solid rgba(56, 189, 248, 0.2)', display: 'flex', flexDirection: 'column', boxShadow: '0 8px 32px rgba(0,0,0,0.2)' }}>
          <div style={{ padding: '12px 20px', background: 'rgba(56, 189, 248, 0.05)', borderBottom: '1px solid rgba(56, 189, 248, 0.1)', fontSize: '.8rem', color: 'var(--accent-info)', fontWeight: 600 }}>Live Verification</div>
          <iframe
            srcDoc={srcDoc}
            title="challenge-output"
            style={{ width: '100%', flex: 1, border: 'none', background: 'var(--card)' }}
          />
        </div>
      </div>
    </div>
  );
}
