import React, { useState } from 'react';
import Editor from '@monaco-editor/react';

export default function Sandbox() {
  const defaultCSS = `.box {
  width: 100px;
  height: 100px;
  background: var(--accent-flex);
  border-radius: 12px;
  transition: all 0.3s ease;
}

/* Edit the flex properties below to see live updates! */
.container {
  display: flex;
  gap: 16px;
  padding: 24px;
}`;
  const [cssCode, setCssCode] = useState(defaultCSS);

  const srcDoc = `
    <!DOCTYPE html>
    <html>
      <head>
        <style>
          :root { --accent-flex: #7c6aff; --accent-grid: #0fdb8c; --accent-info: #3ecfff; }
          body { font-family: sans-serif; background: #0b0d1a; color: white; margin: 0; display: grid; place-items: center; min-height: 100vh; }
          ${cssCode}
        </style>
      </head>
      <body>
        <div class="container">
          <div class="box"></div>
          <div class="box" style="background: var(--accent-grid); height: 140px;"></div>
          <div class="box" style="background: var(--accent-info); height: 80px;"></div>
        </div>
      </body>
    </html>
  `;

  return (
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', height: '100%', borderTop: '1px solid var(--border)' }}>
      <div style={{ borderRight: '1px solid var(--border)', display: 'flex', flexDirection: 'column' }}>
        <div style={{ padding: '12px 20px', background: 'var(--surface)', borderBottom: '1px solid var(--border)', fontSize: '.8rem', color: 'var(--text-dim)', fontWeight: 600 }}>Editor — style.css</div>
        <div style={{ flex: 1 }}>
          <Editor
            height="100%"
            defaultLanguage="css"
            theme="vs-dark"
            value={cssCode}
            onChange={val => setCssCode(val)}
            options={{ minimap: { enabled: false }, fontSize: 15, fontFamily: 'Fira Code', padding: { top: 20 } }}
          />
        </div>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <div style={{ padding: '12px 20px', background: 'rgba(124, 106, 255, 0.05)', borderBottom: '1px solid rgba(124, 106, 255, 0.1)', fontSize: '.8rem', color: 'var(--accent-flex2)', fontWeight: 600 }}>Live Browser Render (Isolated DOM)</div>
        <iframe
          srcDoc={srcDoc}
          title="output"
          sandbox="allow-scripts"
          style={{ width: '100%', flex: 1, border: 'none', background: '#0b0d1a' }}
        />
      </div>
    </div>
  );
}
