import { Palette } from 'lucide-react';

export default function VariablesCourse() {
  return (
    <div className="course-container fade-in">
      <header className="course-header" style={{ marginBottom: '40px' }}>
        <h1 style={{ fontSize: '2.5rem', marginBottom: '8px' }}>
          <span style={{ background: 'linear-gradient(90deg, #34d399, #10b981)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Variables & Theming</span>
        </h1>
        <p className="course-subtitle">CSS custom properties and dark mode architecture.</p>
      </header>

      <div className="intro-card" style={{ background: 'linear-gradient(135deg, rgba(52,211,153,.1), rgba(16,185,129,.05))', borderColor: 'rgba(52,211,153,.3)' }}>
        <h3 style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <Palette color="#34d399" size={24} />
          Under Construction
        </h3>
        <p style={{ marginTop: '16px', color: 'var(--text-dim)' }}>
          This module is currently being built. It will explore massive scale <code>--var</code> management, implementing dynamic Design Tokens, and the absolute best practices for building bulletproof <code>prefers-color-scheme</code> dark modes.
        </p>
      </div>
    </div>
  );
}
