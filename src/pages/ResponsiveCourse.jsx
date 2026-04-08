import { Maximize } from 'lucide-react';

export default function ResponsiveCourse() {
  return (
    <div className="course-container fade-in">
      <header className="course-header" style={{ marginBottom: '40px' }}>
        <h1 style={{ fontSize: '2.5rem', marginBottom: '8px' }}>
          <span style={{ background: 'linear-gradient(90deg, #fb923c, #fcd34d)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Responsive Design</span>
        </h1>
        <p className="course-subtitle">Queries, fluid typography, and dynamic viewports.</p>
      </header>

      <div className="intro-card" style={{ background: 'linear-gradient(135deg, rgba(251,146,60,.1), rgba(252,211,77,.05))', borderColor: 'rgba(251,146,60,.3)' }}>
        <h3 style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <Maximize color="#fb923c" size={24} />
          Under Construction
        </h3>
        <p style={{ marginTop: '16px', color: 'var(--text-dim)' }}>
          This module is currently being built. It will cover traditional <code>@media</code> queries, the new <code>@container</code> modern specifications, and how to architect standard mobile-first scaling systems.
        </p>
      </div>
    </div>
  );
}
