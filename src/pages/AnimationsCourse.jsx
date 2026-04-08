import { Layers } from 'lucide-react';

export default function AnimationsCourse() {
  return (
    <div className="course-container fade-in">
      <header className="course-header" style={{ marginBottom: '40px' }}>
        <h1 style={{ fontSize: '2.5rem', marginBottom: '8px' }}>
          <span style={{ background: 'linear-gradient(90deg, #c084fc, #f472b6)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Animations</span>
        </h1>
        <p className="course-subtitle">Master transitions, keyframes, and micro-interactions.</p>
      </header>

      <div className="intro-card" style={{ background: 'linear-gradient(135deg, rgba(192,132,252,.1), rgba(244,114,182,.05))', borderColor: 'rgba(192,132,252,.3)' }}>
        <h3 style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <Layers color="#c084fc" size={24} />
          Under Construction
        </h3>
        <p style={{ marginTop: '16px', color: 'var(--text-dim)' }}>
          This advanced curriculum module is currently being built. It will cover <code>transition-timing-functions</code>, hardware-accelerated <code>transform</code> properties, and orchestrating complex <code>@keyframes</code> loops.
        </p>
      </div>
    </div>
  );
}
