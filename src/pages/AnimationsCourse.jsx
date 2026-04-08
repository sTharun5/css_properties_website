import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import PropertyCard from '../components/PropertyCard';
import { Layers } from 'lucide-react';
import { animationsSections } from '../data/animationsData';

export default function AnimationsCourse() {
  const [activeLevel, setActiveLevel] = useState('1. Smooth Transitions');
  const selectedSection = animationsSections.find((s) => s.level === activeLevel);

  return (
    <div className="course-container fade-in">
      {/* Header & Intro */}
      <header className="course-header" style={{ marginBottom: '40px' }}>
        <h1 style={{ fontSize: '2.5rem', marginBottom: '8px' }}>
          <span style={{ background: 'linear-gradient(90deg, #c084fc, #f472b6)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Animations</span>
        </h1>
        <p className="course-subtitle">
          Master transitions, hardware-accelerated transforms, and keyframe micro-interactions.
        </p>
      </header>

      {/* Level Filter Tabs */}
      <nav className="level-tabs" style={{ marginBottom: '32px' }}>
        {animationsSections.map((section) => (
          <button
            key={section.level}
            className={`tab-btn ${activeLevel === section.level ? 'active' : ''}`}
            onClick={() => setActiveLevel(section.level)}
            style={activeLevel === section.level ? { background: 'linear-gradient(90deg, #c084fc, #f472b6)', color: 'white', borderColor: 'transparent' } : {}}
          >
            {section.level}
          </button>
        ))}
      </nav>

      {/* Main Content Render */}
      <div className="properties-list">
        {selectedSection.intro && (
          <div className="section-intro card hover-glow" style={{ borderLeft: '4px solid #f472b6' }}>
            <h2 style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px' }}>
              <Layers color="#f472b6" size={24} />
              {selectedSection.intro.title}
            </h2>
            {selectedSection.intro.body.split('\\n').map((paragraph, idx) => (
              <p key={idx} dangerouslySetInnerHTML={{ __html: paragraph.replace(/`(.*?)`/g, '<code style="color:#f472b6; background:rgba(244,114,182,0.1)">$1</code>') }} />
            ))}
          </div>
        )}

        {selectedSection.properties.map((prop) => (
          <PropertyCard key={prop.id} prop={prop} />
        ))}
      </div>

      <div className="guided-nav">
        <NavLink to="/units" className="nav-btn prev-btn">
          <span className="arrow">←</span> Previous Module: CSS Units
        </NavLink>
        <NavLink to="/responsive" className="nav-btn next-btn">
          Next Module: Responsive Design <span className="arrow">→</span>
        </NavLink>
      </div>
    </div>
  );
}
