import { useState } from 'react';

// ── Rich description renderer ──────────────────────────────
function DescriptionBlock({ text, accentClass }) {
  if (!text) return null;

  const inlineFormat = (str) =>
    str
      .replace(/`([^`]+)`/g, (_, code) => {
        const safe = code.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
        return `<code class="desc-code">${safe}</code>`;
      })
      .replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>');

  // Split on <span></span> section boundaries used in data files
  const rawSections = text.split(/<span><\/span>/g).map(s => s.trim()).filter(Boolean);

  const blocks = rawSections
    .map((section, idx) => {
      const lines = section.split('\n').map(l => l.trim()).filter(Boolean);
      if (!lines.length) return null;  // ← null-safety fix

      // Detect bold-only heading lines: **Title:** or **Title**
      const headingMatch = lines[0].match(/^\*\*([^*]+)\*\*[:\s]*$/);
      const heading = headingMatch ? headingMatch[1].replace(/:$/, '').trim() : null;
      const body = heading ? lines.slice(1) : lines;

      return { heading, body, idx };
    })
    .filter(Boolean);  // ← remove nulls before rendering

  return (
    <div className="desc-block-wrap">
      {blocks.map(({ heading, body, idx }) => (
        <div key={idx} className={`desc-block ${heading ? `desc-block--section ${accentClass || ''}` : 'desc-block--lead'}`}>
          {heading && <div className="desc-section-title">{heading}</div>}
          <div className="desc-block-body">
            {body.map((line, li) => (
              <p key={li} className="desc-para" dangerouslySetInnerHTML={{ __html: inlineFormat(line) }} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

// ── Syntax-highlighted code panel ──────────────────────────
function CodeDisplay({ code, isGrid }) {
  const [copied, setCopied] = useState(false);
  const copy = () => { navigator.clipboard.writeText(code); setCopied(true); setTimeout(() => setCopied(false), 1800); };

  const colorize = (line) => {
    if (/^\s*\/\*/.test(line)) return <span className="tok-comment">{line}</span>;
    const m = line.match(/^(\s*)([\w-]+)(\s*:\s*)(.*?)(;?\s*)$/);
    if (m) return (
      <>{m[1]}<span className="tok-prop">{m[2]}</span><span className="tok-colon">{m[3]}</span><span className="tok-val">{m[4]}</span><span className="tok-semi">{m[5]}</span></>
    );
    if (/^[\w.#\s,]+\{/.test(line.trim())) return <span className="tok-selector">{line}</span>;
    return <span className="tok-brace">{line}</span>;
  };


  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
      <div className="panel-label">
        <span style={{ background: isGrid ? 'var(--accent-grid)' : 'var(--accent-flex)' }} />
        CSS Code
        <button className={`copy-btn ${copied ? 'copied' : ''}`} onClick={copy}>{copied ? '✓ Copied!' : 'Copy'}</button>
      </div>
      <div className="code-display" style={{ flex: 1 }}>
        {code.split('\n').map((line, i) => <div key={i}>{colorize(line)}</div>)}
      </div>
    </div>
  );
}

// ── Flex Demo Renderer ─────────────────────────────────────
function FlexDemo({ prop, activeVal }) {
  const count = prop.renderItems || 4;
  const items = Array.from({ length: count }, (_, i) => i + 1);
  const v = activeVal;

  const cStyle = { display: 'flex', gap: '8px', transition: 'all .35s ease', minHeight: '100px' };
  const css = prop.cssProperty;

  if (css === 'display') cStyle.display = v;
  else if (css === 'flex-direction') { cStyle.flexDirection = v; if (v.includes('column')) cStyle.height = '200px'; }
  else if (css === 'justify-content') cStyle.justifyContent = v;
  else if (css === 'align-items') { cStyle.alignItems = v; cStyle.height = '150px'; }
  else if (css === 'flex-wrap') cStyle.flexWrap = v;
  else if (css === 'align-content') { cStyle.flexWrap = 'wrap'; cStyle.alignContent = v; cStyle.height = '220px'; }
  else if (css === 'gap') { cStyle.gap = v; cStyle.flexWrap = 'wrap'; }
  else if (css === 'flex-flow') {
    const parts = v.split(' ');
    cStyle.flexDirection = parts[0];
    cStyle.flexWrap = parts.slice(1).join(' ') || 'nowrap';
    if (parts[0].includes('column')) cStyle.height = '220px';
    else cStyle.flexWrap !== 'nowrap' && (cStyle.height = '180px');
  }
  else if (css === 'place-content') { cStyle.flexWrap = 'wrap'; cStyle.height = '220px'; const [ac, jc] = v.split(' '); cStyle.alignContent = ac; cStyle.justifyContent = jc || ac; }

  const getItemStyle = (idx) => {
    const s = { minWidth: '40px', minHeight: '40px', padding: '8px', transition: 'all .35s ease', flexShrink: 0 };
    if (prop.wideItems) s.minWidth = '78px';
    if (prop.tallItems) { const h = [50,85,62,90]; s.height = `${h[idx%4]}px`; s.alignSelf = 'auto'; }
    if (prop.growDemo) { if (idx === 1) { s.flexGrow = parseInt(v)||0; s.flexShrink=0; } else s.flexGrow = 0; }
    if (prop.shrinkDemo) { s.minWidth = '110px'; if (idx===1) { s.flexShrink = parseInt(v)||0; s.flexGrow=0; } else { s.flexShrink=1; } }
    if (prop.basisDemo) { if (idx===1) s.flexBasis = v; }
    if (prop.selfDemo) { if (idx===1) s.alignSelf = v; else s.height = [0,50,0,35,60][idx]+'px' || '50px'; }
    if (prop.orderDemo && idx===2) s.order = parseInt(v)||0;
    if (prop.flexShorthand) s.flex = v;
    if (prop.minWidthDemo) { s.minWidth = '0'; s.flex = '1'; if (idx===1) { s.minWidth = v; s.overflow='hidden'; s.textOverflow='ellipsis'; } }
    if (prop.placeContent) { s.minWidth='78px'; }
    return s;
  };

  const containerStyle = prop.selfDemo ? { ...cStyle, alignItems: 'flex-start', height: '170px' } : cStyle;

  return (
    <div className="demo-container" style={containerStyle}>
      {items.map((n, i) => (
        <div key={i} className={`fi fi-${(i%6)+1}`} style={getItemStyle(i)}>
          {prop.orderDemo ? `Box ${n}` : n}
        </div>
      ))}
    </div>
  );
}

// ── Grid Demo Renderer ─────────────────────────────────────
function GridDemo({ prop, activeVal }) {
  const v = activeVal;
  const css = prop.cssProperty;
  const count = prop.renderItems || 9;
  const items = Array.from({ length: count }, (_, i) => i + 1);

  // named areas demo
  if (prop.areasDemo) {
    const isColumn = v.trim().startsWith('"header"') && !v.includes('sidebar');
    return (
      <div className="demo-container" style={{ display:'grid', gridTemplateAreas: isColumn ? '"header" "main" "footer"' : '"header header" "sidebar main" "footer footer"', gridTemplateColumns: isColumn ? '1fr' : '70px 1fr', gridTemplateRows:'36px 1fr 36px', gap:'5px', height:'190px' }}>
        {['header','sidebar','main','footer'].filter(a => !isColumn || a!=='sidebar').map((area,i) => (
          <div key={area} className={`gi gi-${i+1}`} style={{ gridArea:area, fontSize:'.68rem', minHeight:0 }}>{area}</div>
        ))}
      </div>
    );
  }

  // span demos
  if (prop.spanDemo) {
    return (
      <div className="demo-container" style={{ display:'grid', gridTemplateColumns:'repeat(3, 1fr)', gridTemplateRows:'repeat(2, 55px)', gap:'5px' }}>
        {items.slice(0,7).map((n,i) => {
          const s = {};
          if (i===0) { if (prop.spanAxis==='col') s.gridColumn = v; else s.gridRow = v; }
          return <div key={i} className={`gi gi-${(i%9)+1}`} style={s}>{n}</div>;
        })}
      </div>
    );
  }

  const cStyle = { display:'grid', gap:'8px', transition:'all .35s ease' };
  if (css==='display') { cStyle.display=v; cStyle.gridTemplateColumns='repeat(3,1fr)'; }
  else if (css==='gridTemplateColumns') cStyle.gridTemplateColumns = v;
  else if (css==='gridTemplateRows') { cStyle.gridTemplateColumns='repeat(3,1fr)'; cStyle.gridTemplateRows=v; }
  else if (css==='gap') { cStyle.gridTemplateColumns='repeat(3,1fr)'; cStyle.gap=v; }
  else if (css==='justifyItems') { cStyle.gridTemplateColumns='repeat(3,1fr)'; cStyle.justifyItems=v; }
  else if (css==='alignItems') { cStyle.gridTemplateColumns='repeat(3,1fr)'; cStyle.alignItems=v; cStyle.height='180px'; }
  else if (css==='gridAutoRows') { cStyle.gridTemplateColumns='repeat(3,1fr)'; cStyle.gridAutoRows=v; }
  else if (css==='gridAutoFlow') { cStyle.gridTemplateColumns='repeat(3,1fr)'; cStyle.gridAutoFlow=v; }
  else if (css==='placeItems') { cStyle.gridTemplateColumns='repeat(3,1fr)'; cStyle.placeItems=v; cStyle.height='180px'; }
  else if (css==='justifyContent') { cStyle.gridTemplateColumns='repeat(3,100px)'; cStyle.justifyContent=v; }
  else if (css==='alignContent') { cStyle.gridTemplateColumns='repeat(3,1fr)'; cStyle.alignContent=v; cStyle.height='220px'; }
  else if (css==='justifySelf') { cStyle.gridTemplateColumns='repeat(3,1fr)'; cStyle.justifyItems='stretch'; }

  const getGridItemStyle = (idx) => {
    const s = {};
    if (prop.denseDemo && (idx===1||idx===3)) s.gridColumn='span 2';
    if (prop.selfGridDemo && idx===1) s.justifySelf=v;
    return s;
  };

  return (
    <div className="demo-container" style={cStyle}>
      {items.map((n,i) => (
        <div key={i} className={`gi gi-${(i%9)+1}`} style={getGridItemStyle(i)}>{n}</div>
      ))}
    </div>
  );
}

// ── Unit Demo Renderer ─────────────────────────────────────
function UnitDemo({ prop, activeVal }) {
  const isWidth = prop.cssProperty === 'width';
  const boxStyle = {
    background: 'var(--accent-info)',
    height: '50px',
    display: 'flex',
    alignItems: 'center',
    padding: '0 8px',
    color: '#fff',
    fontWeight: 'bold',
    fontSize: '0.8rem',
    borderRadius: '4px',
    transition: 'all 0.3s ease',
  };

  if (isWidth) boxStyle.width = activeVal;

  return (
    <div className="demo-container" style={{ padding: '20px', background: 'var(--code-bg)', minHeight: '150px' }}>
      <div style={boxStyle}>
        {prop.isTextNode ? 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis.' : activeVal}
      </div>
    </div>
  );
}

// ── PropertyCard ───────────────────────────────────────────
export default function PropertyCard({ prop, isGrid, isUnit }) {
  const [activeVal, setActiveVal] = useState(prop.default);
  const code = prop.getCode(activeVal);

  const accentClass = isGrid ? 'desc-accent--grid' : isUnit ? 'desc-accent--unit' : '';

  // Badge label: units use a neutral 'any' instead of container/item
  const applyLabel = prop.applies === 'container'
    ? '📦 container'
    : prop.applies === 'any'
    ? '📐 any element'
    : '🧩 item';
  const applyClass = prop.applies === 'container'
    ? 'applies-container'
    : prop.applies === 'any'
    ? 'applies-any'
    : 'applies-item';

  return (
    <div className="prop-card" id={prop.id}>
      <div className="prop-card-header">
        <div style={{ flex:1 }}>
          <div style={{ display:'flex', alignItems:'center', gap:'10px', marginBottom:'12px', flexWrap:'wrap' }}>
            <span className="prop-name">{prop.name}</span>
            <span className={`prop-applies ${applyClass}`}>{applyLabel}</span>
          </div>
          <DescriptionBlock text={prop.description} accentClass={accentClass} />
        </div>
      </div>

      <div className="split-panel">
        <div className="panel-code">
          <CodeDisplay code={code} isGrid={isGrid} />
        </div>
        <div className="panel-demo">
          <div className="panel-label">
            <span style={{ background: isGrid ? 'var(--accent-grid)' : 'var(--accent-info)' }} />
            Live Preview — Click a value!
          </div>
          <div className="demo-controls">
            {prop.values.map(val => (
              <button key={val} className={`val-btn ${activeVal===val ? (isGrid ? 'active grid-btn':'active') : ''}`} onClick={() => setActiveVal(val)}>
                {val}
              </button>
            ))}
          </div>
          <div className="demo-stage">
            {isUnit ? <UnitDemo prop={prop} activeVal={activeVal} /> : 
             isGrid ? <GridDemo prop={prop} activeVal={activeVal} /> : 
             <FlexDemo prop={prop} activeVal={activeVal} />}
          </div>
        </div>
      </div>

      {prop.chips && (
        <div className="value-chips">
          {prop.chips.map(c => (
            <div key={c.key} className="chip">
              <span className="chip-key">{c.key}</span>
              <span className="chip-sep">—</span>
              <span className="chip-meaning">{c.meaning}</span>
            </div>
          ))}
        </div>
      )}

      {prop.practice && (
        <div className={`practice-box ${isGrid ? 'grid-practice' : ''}`}>
          <div className={`practice-title ${isGrid ? 'grid-t' : ''}`}>✏️ Practice Tip</div>
          <p dangerouslySetInnerHTML={{ __html: prop.practice.replace(/`([^`]+)`/g,'<code>$1</code>') }} />
        </div>
      )}
    </div>
  );
}
