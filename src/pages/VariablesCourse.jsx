import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import PropertyCard from '../components/PropertyCard';
import { Palette } from 'lucide-react';
import { themingSections } from '../data/themingData';

export default function VariablesCourse() {
  const [activeLevel, setActiveLevel] = useState('1. CSS Custom Properties');
  const selectedSection = themingSections.find((s) => s.level === activeLevel);

  return (
    <div className="course-container fade-in">
      {/* Header & Intro */}
      <header className="course-header" style={{ marginBottom: '40px' }}>
        <h1 style={{ fontSize: '2.5rem', marginBottom: '8px' }}>
          <span style={{ background: 'linear-gradient(90deg, #10b981, #3b82f6)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Variables & Theming</span>
        </h1>
        <p className="course-subtitle">
          Construct robust Design Systems using Custom Properties and the CSS layout mathematics engine.
        </p>
      </header>

      {/* Level Filter Tabs */}
      <nav className="level-tabs" style={{ marginBottom: '32px' }}>
        {themingSections.map((section) => (
          <button
            key={section.level}
            className={`tab-btn ${activeLevel === section.level ? 'active' : ''}`}
            onClick={() => setActiveLevel(section.level)}
            style={activeLevel === section.level ? { background: 'linear-gradient(90deg, #10b981, #3b82f6)', color: 'white', borderColor: 'transparent' } : {}}
          >
            {section.level}
          </button>
        ))}
      </nav>

      {/* Main Content Render */}
      <div className="properties-list">
        {selectedSection.intro && (
          <div className="section-intro card hover-glow" style={{ borderLeft: '4px solid #10b981' }}>
            <h2 style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px' }}>
              <Palette color="#10b981" size={24} />
              {selectedSection.intro.title}
            </h2>
            {selectedSection.intro.body.split('\n').map((paragraph, idx) => (
              <p key={idx} dangerouslySetInnerHTML={{ __html: paragraph.replace(/`(.*?)`/g, '<code style="color:#10b981; background:rgba(16,185,129,0.1)">$1</code>') }} />
            ))}
          </div>
        )}

        {selectedSection.properties.map((prop) => (
          <PropertyCard key={prop.id} prop={prop} />
        ))}
      </div>

      <div className="guided-nav">
        <NavLink to="/responsive" className="nav-btn prev-btn">
          <span className="arrow">←</span> Previous Module: Responsive
        </NavLink>
        <NavLink to="/selectors" className="nav-btn next-btn">
          Next Module: Advanced Selectors <span className="arrow">→</span>
        </NavLink>
      </div>
    </div>
  );
}
