import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import PropertyCard from '../components/PropertyCard';
import { MousePointerClick } from 'lucide-react';
import { selectorsSections } from '../data/selectorsData';

export default function SelectorsCourse() {
  const [activeLevel, setActiveLevel] = useState('1. Relational Selectors');
  const selectedSection = selectorsSections.find((s) => s.level === activeLevel);

  return (
    <div className="course-container fade-in">
      {/* Header & Intro */}
      <header className="course-header" style={{ marginBottom: '40px' }}>
        <h1 style={{ fontSize: '2.5rem', marginBottom: '8px' }}>
          <span style={{ background: 'linear-gradient(90deg, #ef4444, #f97316)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Advanced Selectors</span>
        </h1>
        <p className="course-subtitle">
          Master the DOM tree targeting engine: combinators, pseudo-classes, and ghost pseudo-elements.
        </p>
      </header>

      {/* Level Filter Tabs */}
      <nav className="level-tabs" style={{ marginBottom: '32px' }}>
        {selectorsSections.map((section) => (
          <button
            key={section.level}
            className={`tab-btn ${activeLevel === section.level ? 'active' : ''}`}
            onClick={() => setActiveLevel(section.level)}
            style={activeLevel === section.level ? { background: 'linear-gradient(90deg, #ef4444, #f97316)', color: 'white', borderColor: 'transparent' } : {}}
          >
            {section.level}
          </button>
        ))}
      </nav>

      {/* Main Content Render */}
      <div className="properties-list">
        {selectedSection.intro && (
          <div className="section-intro card hover-glow" style={{ borderLeft: '4px solid #ef4444' }}>
            <h2 style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px' }}>
              <MousePointerClick color="#ef4444" size={24} />
              {selectedSection.intro.title}
            </h2>
            {selectedSection.intro.body.split('\n').map((paragraph, idx) => (
              <p key={idx} dangerouslySetInnerHTML={{ __html: paragraph.replace(/`(.*?)`/g, '<code style="color:#ef4444; background:rgba(239,68,68,0.1)">$1</code>') }} />
            ))}
          </div>
        )}

        {selectedSection.properties.map((prop) => (
          <PropertyCard key={prop.id} prop={prop} />
        ))}
      </div>

      <div className="guided-nav">
        <NavLink to="/theming" className="nav-btn prev-btn">
          <span className="arrow">←</span> Previous Module: CSS Variables
        </NavLink>
        <NavLink to="/sandbox" className="nav-btn next-btn">
          Finish: Jump to Sandbox <span className="arrow">→</span>
        </NavLink>
      </div>
    </div>
  );
}
