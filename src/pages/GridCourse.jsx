import { useLocation, Link } from 'react-router-dom';
import PropertyCard from '../components/PropertyCard.jsx';
import { PatternCard } from '../components/Patterns.jsx';
import { gridSections, gridPatterns } from '../data/gridData.js';
import { useMemo } from 'react';

function SectionIntro({ intro }) {
  if (!intro) return null;
  const html = (t) => t
    .replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>')
    .replace(/`([^`]+)`/g, '<code style="font-family:\'Fira Code\',monospace;color:var(--accent-info);background:rgba(62,207,255,.1);padding:1px 6px;border-radius:4px;font-size:.85em">$1</code>');
  return (
    <div className="intro-card grid-intro">
      <h3>{intro.title}</h3>
      <p dangerouslySetInnerHTML={{ __html: html(intro.body) }} />
      <div className="axis-visual-row">
        <div className="axis-box">
          <div className="axis-lbl">Columns (inline axis)</div>
          <div style={{ display:'grid', gridTemplateColumns:'repeat(3,1fr)', gap:'4px', marginTop:'8px' }}>
            {[1,2,3,4,5,6].map(n => <div key={n} className={`gi gi-${n}`} style={{ height:'26px',fontSize:'.66rem' }}>{n}</div>)}
          </div>
        </div>
        <div className="axis-box">
          <div className="axis-lbl">Rows (block axis)</div>
          <div style={{ display:'grid', gridTemplateColumns:'1fr', gap:'4px', marginTop:'8px' }}>
            {['Row 1','Row 2','Row 3'].map((r,i) => <div key={r} className={`gi gi-${i+1}`} style={{ height:'24px',fontSize:'.66rem' }}>{r}</div>)}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function GridCourse() {
  const { search } = useLocation();
  const query = new URLSearchParams(search);
  const activeLevel = query.get('level') || 'All';

  const filtered = useMemo(() => {
    if (activeLevel === 'All') return gridSections;
    return gridSections.filter(sec => sec.level === activeLevel);
  }, [activeLevel]);

  return (
    <div className="fade-in">
      <div className="course-header" style={{ marginBottom: '32px' }}>
        <h1 style={{ fontSize: '2.5rem', marginBottom: '8px' }}><span className="grid-word" style={{ background: 'linear-gradient(90deg, #0fdb8c, #3ef5a8)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent'}}>Grid</span> Module</h1>
        <p style={{ color: 'var(--text-dim)' }}>{activeLevel === 'All' ? 'Complete Course' : `${activeLevel} Level`}</p>
      </div>

      {filtered.map((section, i) => (
        <div key={i} className="section-group">
          <div className="section-header">
            <h2>{section.level}</h2>
            <span className={`level-pill pill-${section.level.toLowerCase()}`}>{section.level}</span>
          </div>
          {/* Only show intro on All or Beginner */}
          {(section.level === 'Beginner' && (activeLevel === 'All' || activeLevel === 'Beginner')) && (
             <SectionIntro intro={section.intro} />
          )}
          {section.properties.map(prop => (
            <PropertyCard key={prop.id} prop={prop} isGrid={true} />
          ))}
        </div>
      ))}

      {(activeLevel === 'All' || activeLevel === 'Advanced') && (
        <div className="section-group">
          <div className="section-header">
            <h2>Real-World Patterns</h2>
            <span className="level-pill pill-advanced">Practice</span>
          </div>
          <p style={{ color:'var(--text-dim)', fontSize:'.9rem', marginBottom:'24px' }}>
            Copy-paste ready patterns for standard Grid use cases.
          </p>
          {gridPatterns.map((p,i) => <PatternCard key={i} pattern={p} isGrid={true} />)}
        </div>
      )}

      {/* Guided Navigation */}
      <div className="guided-nav" style={{ marginTop: '60px', paddingTop: '30px', borderTop: '1px solid var(--border)', display: 'flex', justifyContent: 'flex-start'}}>
        <Link to="/flex" className="nav-breadcrumb flex-breadcrumb" style={{ display: 'inline-flex', flexDirection: 'column', alignItems: 'flex-start', textDecoration:'none', padding: '16px 24px', background: 'rgba(124,106,255,.06)', border: '1px solid rgba(124,106,255,.2)', borderRadius: 'var(--radius)' }}>
          <span style={{ fontSize: '.75rem', textTransform: 'uppercase', letterSpacing: '.05em', color: 'var(--text-dim)', marginBottom:'4px'}}>➔ Previous Module</span>
          <span style={{ fontSize: '1.2rem', fontWeight: 600, color: 'var(--accent-flex2)'}}>CSS Flexbox</span>
        </Link>
      </div>
    </div>
  );
}
