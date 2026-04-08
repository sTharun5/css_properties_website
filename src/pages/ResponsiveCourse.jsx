import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import PropertyCard from '../components/PropertyCard';
import { Maximize } from 'lucide-react';
import { responsiveSections } from '../data/responsiveData';

export default function ResponsiveCourse() {
  const [activeLevel, setActiveLevel] = useState('1. Viewport Media Queries');
  const selectedSection = responsiveSections.find((s) => s.level === activeLevel);

  return (
    <div className="course-container fade-in">
      {/* Header & Intro */}
      <header className="course-header" style={{ marginBottom: '40px' }}>
        <h1 style={{ fontSize: '2.5rem', marginBottom: '8px' }}>
          <span style={{ background: 'linear-gradient(90deg, #fb923c, #fcd34d)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Responsive Design</span>
        </h1>
        <p className="course-subtitle">
          Master global media queries, scoped container queries, and fluid layout mathematics.
        </p>
      </header>

      {/* Level Filter Tabs */}
      <nav className="level-tabs" style={{ marginBottom: '32px' }}>
        {responsiveSections.map((section) => (
          <button
            key={section.level}
            className={`tab-btn ${activeLevel === section.level ? 'active' : ''}`}
            onClick={() => setActiveLevel(section.level)}
            style={activeLevel === section.level ? { background: 'linear-gradient(90deg, #fb923c, #fcd34d)', color: 'black', borderColor: 'transparent' } : {}}
          >
            {section.level}
          </button>
        ))}
      </nav>

      {/* Main Content Render */}
      <div className="properties-list">
        {selectedSection.intro && (
          <div className="section-intro card hover-glow" style={{ borderLeft: '4px solid #fb923c' }}>
            <h2 style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px' }}>
              <Maximize color="#fb923c" size={24} />
              {selectedSection.intro.title}
            </h2>
            {selectedSection.intro.body.split('\n').map((paragraph, idx) => (
              <p key={idx} dangerouslySetInnerHTML={{ __html: paragraph.replace(/`(.*?)`/g, '<code style="color:#fb923c; background:rgba(251,146,60,0.1)">$1</code>') }} />
            ))}
          </div>
        )}

        {selectedSection.properties.map((prop) => (
          <PropertyCard key={prop.id} prop={prop} />
        ))}
      </div>

      <div className="guided-nav">
        <NavLink to="/animations" className="nav-btn prev-btn">
          <span className="arrow">←</span> Previous Module: Animations
        </NavLink>
        <NavLink to="/theming" className="nav-btn next-btn">
          Next Module: CSS Variables <span className="arrow">→</span>
        </NavLink>
      </div>
    </div>
  );
}
