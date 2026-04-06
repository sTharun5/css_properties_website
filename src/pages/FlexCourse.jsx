import { useLocation, Link } from 'react-router-dom';
import PropertyCard from '../components/PropertyCard.jsx';
import { PatternCard } from '../components/Patterns.jsx';
import { flexSections, flexPatterns } from '../data/flexData.js';
import { useMemo } from 'react';

function SectionIntro({ intro }) {
  if (!intro) return null;
  const html = (t) => t
    .replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>')
    .replace(/`([^`]+)`/g, '<code style="font-family:\'Fira Code\',monospace;color:var(--accent-info);background:rgba(62,207,255,.1);padding:1px 6px;border-radius:4px;font-size:.85em">$1</code>');
  return (
    <div className="intro-card">
      <h3>{intro.title}</h3>
      <p dangerouslySetInnerHTML={{ __html: html(intro.body) }} />
      <div className="axis-visual-row">
        <div className="axis-box">
          <div className="axis-lbl">Main Axis → (justify-content)</div>
          <div style={{ display:'flex', gap:'6px', justifyContent:'center', marginTop:'8px' }}>
            {[1,2,3].map(n => <div key={n} className={`fi fi-${n}`} style={{ width:'36px',height:'36px',fontSize:'.72rem' }}>{n}</div>)}
          </div>
        </div>
        <div className="axis-box">
          <div className="axis-lbl">Cross Axis ↓ (align-items)</div>
          <div style={{ display:'flex', flexDirection:'column', gap:'4px', alignItems:'center', marginTop:'8px' }}>
            {[1,2,3].map(n => <div key={n} className={`fi fi-${n}`} style={{ width:'36px',height:'24px',fontSize:'.72rem' }}>{n}</div>)}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function FlexCourse() {
  const { search } = useLocation();
  const query = new URLSearchParams(search);
  const activeLevel = query.get('level') || 'All';

  const filtered = useMemo(() => {
    if (activeLevel === 'All') return flexSections;
    return flexSections.filter(sec => sec.level === activeLevel);
  }, [activeLevel]);

  return (
    <div className="fade-in">
      <div className="course-header" style={{ marginBottom: '32px' }}>
        <h1 style={{ fontSize: '2.5rem', marginBottom: '8px' }}><span className="flex-word" style={{ background: 'linear-gradient(90deg, #7c6aff, #9f91ff)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent'}}>Flexbox</span> Module</h1>
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
            <PropertyCard key={prop.id} prop={prop} isGrid={false} />
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
            Copy-paste ready patterns for standard Flexbox use cases.
          </p>
          {flexPatterns.map((p,i) => <PatternCard key={i} pattern={p} isGrid={false} />)}
        </div>
      )}

      {/* Guided Navigation */}
      <div className="guided-nav" style={{ marginTop: '60px', paddingTop: '30px', borderTop: '1px solid var(--border)', display: 'flex', justifyContent: 'flex-end'}}>
        <Link to="/grid" className="nav-breadcrumb grid-breadcrumb" style={{ display: 'inline-flex', flexDirection: 'column', alignItems: 'flex-end', textDecoration:'none', padding: '16px 24px', background: 'rgba(15,219,140,.05)', border: '1px solid rgba(15,219,140,.2)', borderRadius: 'var(--radius)' }}>
          <span style={{ fontSize: '.75rem', textTransform: 'uppercase', letterSpacing: '.05em', color: 'var(--text-dim)', marginBottom:'4px'}}>Next Module ➔</span>
          <span style={{ fontSize: '1.2rem', fontWeight: 600, color: 'var(--accent-grid2)'}}>CSS Grid</span>
        </Link>
      </div>
    </div>
  );
}
