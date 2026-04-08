import React, { useState, useEffect } from 'react';
import Editor from '@monaco-editor/react';
import { LayoutTemplate, FileCode2, Maximize, Play } from 'lucide-react';

export default function Sandbox() {
  const [activeTab, setActiveTab] = useState('css');
  
  const defaultHTML = `<div class="container">
  <div class="box">1</div>
  <div class="box highlight">2</div>
  <div class="box">3</div>
</div>`;

  const defaultCSS = `/* Welcome to the CSS Sandbox! */
/* Edit this code to see the layout update instantly. */

:root {
  --flex-color: #7c6aff;
  --grid-color: #0fdb8c;
  --info-color: #3ecfff;
  --surface: #111327;
}

body {
  margin: 0;
  min-height: 100vh;
  background: #0b0d1a;
  color: white;
  font-family: system-ui, sans-serif;
}

.container {
  display: flex;
  gap: 16px;
  padding: 32px;
  background: var(--surface);
  min-height: 50vh;
  border-radius: 12px;
  border: 1px dashed rgba(255,255,255,0.2);
}

.box {
  width: 80px;
  height: 80px;
  background: var(--flex-color);
  border-radius: 12px;
  display: grid;
  place-items: center;
  font-size: 1.5rem;
  font-weight: bold;
  box-shadow: 0 4px 12px rgba(0,0,0,0.5);
  transition: all 0.3s ease;
}

.box.highlight {
  background: var(--grid-color);
  color: black;
}`;

  const [htmlCode, setHtmlCode] = useState(defaultHTML);
  const [cssCode, setCssCode] = useState(defaultCSS);
  const [debouncedHtml, setDebouncedHtml] = useState(defaultHTML);
  const [debouncedCss, setDebouncedCss] = useState(defaultCSS);

  // Debounce to prevent iframe flashing on every single keystroke
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedHtml(htmlCode);
      setDebouncedCss(cssCode);
    }, 400);
    return () => clearTimeout(timer);
  }, [htmlCode, cssCode]);

  const srcDoc = `
    <!DOCTYPE html>
    <html>
      <head>
        <style>
          ${debouncedCss}
        </style>
      </head>
      <body>
        ${debouncedHtml}
      </body>
    </html>
  `;

  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1fr) minmax(0, 1.2fr)', height: 'calc(100vh - 65px)', borderTop: '1px solid var(--border)' }}>
      {/* Editor Pane */}
      <div style={{ borderRight: '1px solid var(--border)', display: 'flex', flexDirection: 'column' }}>
        
        {/* Editor Tabs */}
        <div style={{ display: 'flex', background: 'var(--surface)', borderBottom: '1px solid var(--border)' }}>
          <button 
            onClick={() => setActiveTab('css')}
            style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '12px 24px', background: activeTab === 'css' ? 'rgba(255,255,255,0.05)' : 'transparent', border: 'none', borderBottom: activeTab === 'css' ? '2px solid var(--accent-info)' : '2px solid transparent', color: activeTab === 'css' ? 'var(--text)' : 'var(--text-dim)', fontSize: '.8rem', fontWeight: 600, cursor: 'pointer', outline: 'none' }}
          >
            <LayoutTemplate size={16} /> style.css
          </button>
          <button 
            onClick={() => setActiveTab('html')}
            style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '12px 24px', background: activeTab === 'html' ? 'rgba(255,255,255,0.05)' : 'transparent', border: 'none', borderBottom: activeTab === 'html' ? '2px solid #fb923c' : '2px solid transparent', color: activeTab === 'html' ? 'var(--text)' : 'var(--text-dim)', fontSize: '.8rem', fontWeight: 600, cursor: 'pointer', outline: 'none' }}
          >
            <FileCode2 size={16} /> index.html
          </button>
        </div>

        {/* Monaco Editor */}
        <div style={{ flex: 1 }}>
          <Editor
            height="100%"
            language={activeTab}
            theme="vs-dark"
            value={activeTab === 'css' ? cssCode : htmlCode}
            onChange={val => activeTab === 'css' ? setCssCode(val || '') : setHtmlCode(val || '')}
            options={{ 
              minimap: { enabled: false }, 
              fontSize: 15, 
              fontFamily: 'Fira Code', 
              padding: { top: 20 },
              wordWrap: 'on',
              formatOnPaste: true
            }}
          />
        </div>
      </div>

      {/* Preview Pane */}
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <div style={{ padding: '12px 20px', background: 'rgba(124, 106, 255, 0.05)', borderBottom: '1px solid rgba(124, 106, 255, 0.1)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <span style={{ fontSize: '.8rem', color: 'var(--accent-flex2)', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Play size={14} /> Live Browser Render (Isolated DOM)
          </span>
          <span style={{ fontSize: '.7rem', color: 'var(--text-dim)' }}>Updates automatically</span>
        </div>
        
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
