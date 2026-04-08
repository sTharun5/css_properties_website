import { useState } from 'react';
import { LayoutTemplate } from 'lucide-react';

// Flex real-world pattern demos
function FlexPatternDemo({ type }) {
  if (type === 'center') return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '120px', background: 'var(--code-bg)', borderRadius: '10px', border: '2px dashed var(--border-light)' }}>
      <div style={{ padding: '12px 24px', background: 'linear-gradient(135deg, #7c6aff, #3ecfff)', borderRadius: '8px', color: '#fff', fontWeight: 700 }}>Centered! ✨</div>
    </div>
  );
  if (type === 'navbar') return (
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0 16px', height: '52px', background: 'var(--code-bg)', borderRadius: '10px', border: '1px solid var(--border)' }}>
      <div style={{ fontWeight: 800, color: 'var(--accent-flex2)', fontFamily: 'Fira Code' }}>Logo</div>
      <div style={{ display: 'flex', gap: '16px' }}>
        {['Home','About','Work','Contact'].map(l => <span key={l} style={{ fontSize: '.78rem', color: 'var(--text-dim)' }}>{l}</span>)}
      </div>
      <div style={{ padding: '5px 14px', background: 'var(--accent-flex)', borderRadius: '6px', fontSize: '.78rem', color: '#fff', fontWeight: 600 }}>Sign In</div>
    </div>
  );
  if (type === 'cards') return (
    <div style={{ display: 'flex', gap: '10px' }}>
      {['A','B','C'].map((c,i) => (
        <div key={c} style={{ flex:1, padding:'14px 10px', background:`linear-gradient(135deg,${['#7c6aff','#3ecfff','#ff6b9d'][i]},${['#5a49d6','#1aa8d4','#cc4470'][i]})`, borderRadius:'8px', color:'#fff', fontSize:'.8rem', fontWeight:700, textAlign:'center' }}>Card {c}</div>
      ))}
    </div>
  );
  if (type === 'holy') return (
    <div style={{ display:'flex', flexDirection:'column', gap:'6px', height:'160px' }}>
      <div style={{ background:'#7c6aff', borderRadius:'6px', padding:'6px 10px', fontSize:'.7rem', fontWeight:700, color:'#fff' }}>Header</div>
      <div style={{ display:'flex', flex:1, gap:'6px' }}>
        <div style={{ width:'70px', background:'#3ecfff', borderRadius:'6px', display:'flex', alignItems:'center', justifyContent:'center', fontSize:'.66rem', fontWeight:700, color:'#000' }}>Sidebar</div>
        <div style={{ flex:1, background:'var(--border)', borderRadius:'6px', display:'flex', alignItems:'center', justifyContent:'center', fontSize:'.7rem', color:'var(--text-dim)' }}>Main Content</div>
      </div>
      <div style={{ background:'#ff6b9d', borderRadius:'6px', padding:'6px 10px', fontSize:'.7rem', fontWeight:700, color:'#fff' }}>Footer</div>
    </div>
  );
  return null;
}

// Grid real-world pattern demos
function GridPatternDemo({ type }) {
  if (type === 'cards') return (
    <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit, minmax(70px, 1fr))', gap:'8px' }}>
      {[1,2,3,4,5].map(n => <div key={n} style={{ background:'linear-gradient(135deg, #0fdb8c, #0aba74)', borderRadius:'8px', padding:'10px', fontSize:'.72rem', fontWeight:700, color:'#000', textAlign:'center' }}>Card {n}</div>)}
    </div>
  );
  if (type === 'layout') return (
    <div style={{ display:'grid', gridTemplateAreas:'"header header" "sidebar main" "footer footer"', gridTemplateColumns:'70px 1fr', gridTemplateRows:'30px 1fr 30px', gap:'6px', height:'140px' }}>
      {[['header','#0fdb8c'],['sidebar','#3ef5a8'],['main','var(--border)'],['footer','#56e0a0']].map(([area,bg]) => (
        <div key={area} style={{ gridArea:area, background:bg, borderRadius:'6px', display:'flex', alignItems:'center', justifyContent:'center', fontSize:'.66rem', fontWeight:700, color: area==='main'?'var(--text-dim)':'#000' }}>{area}</div>
      ))}
    </div>
  );
  if (type === 'magazine') return (
    <div style={{ display:'grid', gridTemplateColumns:'repeat(3, 1fr)', gridAutoRows:'45px', gap:'6px' }}>
      {[true,...Array(5).fill(false)].map((featured, i) => (
        <div key={i} style={{ background:`linear-gradient(135deg, ${['#0fdb8c','#3ef5a8','#56e0a0','#80ffcc','#a3ffda','#c0ffec'][i]}, #0aba74)`, borderRadius:'6px', gridColumn:featured?'span 2':undefined, gridRow:featured?'span 2':undefined, display:'flex', alignItems:'center', justifyContent:'center', fontSize:'.7rem', fontWeight:700, color:'#000' }}>{featured?'★ Featured':i+1}</div>
      ))}
    </div>
  );
  return null;
}

export function PatternCard({ pattern, isGrid }) {
  const [copied, setCopied] = useState(false);
  const copy = () => {
    navigator.clipboard.writeText(pattern.code);
    setCopied(true);
    setTimeout(() => setCopied(false), 1600);
  };
  return (
    <div className="pattern-card">
      <div className="pattern-title">
        <LayoutTemplate size={18} color="var(--text-dim)" />
        {pattern.name}
        <button className={`copy-btn ${copied ? 'copied' : ''}`} style={{ marginLeft: 'auto' }} onClick={copy}>
          {copied ? '✓ Copied!' : 'Copy'}
        </button>
      </div>
      <div className="pattern-body">
        <div className="pattern-code">{pattern.code}</div>
        <div className="pattern-preview">
          {isGrid ? <GridPatternDemo type={pattern.demo} /> : <FlexPatternDemo type={pattern.demo} />}
        </div>
      </div>
    </div>
  );
}
