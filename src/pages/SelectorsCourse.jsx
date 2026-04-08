import { MousePointerClick } from 'lucide-react';

export default function SelectorsCourse() {
  return (
    <div className="course-container fade-in">
      <header className="course-header" style={{ marginBottom: '40px' }}>
        <h1 style={{ fontSize: '2.5rem', marginBottom: '8px' }}>
          <span style={{ background: 'linear-gradient(90deg, #f87171, #ef4444)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Advanced Selectors</span>
        </h1>
        <p className="course-subtitle">Going beyond classes with hierarchy and structure.</p>
      </header>

      <div className="intro-card" style={{ background: 'linear-gradient(135deg, rgba(248,113,113,.1), rgba(239,68,68,.05))', borderColor: 'rgba(248,113,113,.3)' }}>
        <h3 style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <MousePointerClick color="#f87171" size={24} />
          Under Construction
        </h3>
        <p style={{ marginTop: '16px', color: 'var(--text-dim)' }}>
          This module is currently being built. It will cover writing deeply structural CSS without adding useless HTML classes. We will dive into <code>:nth-child</code>, <code>:hover</code> vs <code>:focus-within</code>, and the new incredibly powerful <code>:has()</code> parent selector.
        </p>
      </div>
    </div>
  );
}
