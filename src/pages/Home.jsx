import { Link } from 'react-router-dom';

export default function Home() {
  const rows = [
    ['Axis', '1D — one direction at a time', '2D — rows AND columns simultaneously'],
    ['Best for', 'Navigation bars, tool rows, button groups, centering', 'Page layouts, card grids, complex 2D placement'],
    ['Items control', 'Their own size via flex-grow/shrink/basis', 'Placed into cells defined by the container'],
    ['Alignment', 'justify-content (main) + align-items (cross)', 'justify-items + align-items + place-items'],
    ['Order', 'order property / flex-direction: reverse', 'grid-column, grid-row, grid-template-areas'],
    ['Wrapping', 'flex-wrap: wrap creates new rows', 'Automatic — define columns, rows auto-create'],
    ['Responsive', 'Works well with flex-wrap + min-width', 'auto-fit + minmax() — zero media queries!'],
    ['Use when', 'Content drives the layout', 'Layout drives the content'],
  ];

  return (
    <div className="home-page fade-in">
      {/* Hero */}
      <header className="hero" style={{ borderRadius: 'var(--radius-lg)', marginBottom: '40px' }}>
        <div className="hero-badge">🎓 Interactive CSS Reference Curriculum</div>
        <h1 style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)' }}>
          Master <span className="flex-word">Flexbox</span> &{' '}
          <span className="grid-word">Grid</span>
        </h1>
        <p>A structured, module-by-module course. Code on the left. Live demo on the right.</p>

        <div style={{ marginTop: '32px', display: 'flex', gap: '16px', justifyContent: 'center' }}>
          <Link to="/flex" className="course-btn flex-course-btn">Start Flexbox Module</Link>
          <Link to="/grid" className="course-btn grid-course-btn">Start Grid Module</Link>
        </div>
      </header>

      {/* Compare section moved to Home overview */}
      <div className="vs-section" style={{ paddingTop: '10px' }}>
        <div className="section-header">
          <h2>⚡ Flexbox vs Grid Overview — When to Use What</h2>
        </div>
        <div className="vs-card">
          <div className="vs-header-row">
            <div className="vs-col-label" />
            <div className="vs-col-label flex-col">
              <span className="nav-dot nav-dot-flex" style={{ display:'inline-block', marginRight:'6px' }} />
              CSS Flexbox
            </div>
            <div className="vs-col-label grid-col">
              <span className="nav-dot nav-dot-grid" style={{ display:'inline-block', marginRight:'6px' }} />
              CSS Grid
            </div>
          </div>
          {rows.map(([aspect, flex, grid], i) => (
            <div key={aspect} className={`vs-row \${i%2===0 ? 'vs-row-alt' : ''}`}>
              <div className="vs-aspect">{aspect}</div>
              <div className="vs-flex">{flex}</div>
              <div className="vs-grid">{grid}</div>
            </div>
          ))}
        </div>
        <div className="vs-tip-row">
          <div className="vs-tip flex-tip">
            <div className="vs-tip-title">📦 Use Flexbox for</div>
            <ul>
              <li>Navbars and toolbars</li>
              <li>Button groups and pill tabs</li>
              <li>Centering a single item</li>
              <li>Icon + text side by side</li>
              <li>Equal-height columns</li>
            </ul>
          </div>
          <div className="vs-tip grid-tip">
            <div className="vs-tip-title">🔲 Use Grid for</div>
            <ul>
              <li>Full page layouts</li>
              <li>Photo / card galleries</li>
              <li>Dashboard widgets</li>
              <li>Magazine / editorial layouts</li>
              <li>Anything with explicit row & column alignment</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
