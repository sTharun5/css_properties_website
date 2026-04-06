import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import PropertyCard from '../components/PropertyCard';
import { PatternCard } from '../components/Patterns.jsx';
import { unitsSections, unitsPatterns } from '../data/unitsData';

function UnitsCourse() {
  const [activeLevel, setActiveLevel] = useState('Absolute & Relative Basics');

  const selectedSection = unitsSections.find((s) => s.level === activeLevel);

  return (
    <div className="course-container fade-in">
      {/* Header & Intro */}
      <header className="course-header">
        <h1 className="gradient-text">CSS Units — Architecture</h1>
        <p className="course-subtitle">
          Master px, rem, em, vh, and the exact mathematics of layout measurement.
        </p>
      </header>

      {/* Level Filter Tabs */}
      <nav className="level-tabs">
        {unitsSections.map((section) => (
          <button
            key={section.level}
            className={`tab-btn ${activeLevel === section.level ? 'active' : ''}`}
            onClick={() => setActiveLevel(section.level)}
          >
            {section.level}
          </button>
        ))}
      </nav>

      {/* Main Content Render */}
      <div className="properties-list">
        {selectedSection.intro && (
          <div className="section-intro card hover-glow">
            <h2>{selectedSection.intro.title}</h2>
            {/* Split paragraphs by line break for clean rendering */}
            {selectedSection.intro.body.split('\\n').map((paragraph, idx) => (
              <p key={idx} dangerouslySetInnerHTML={{ __html: paragraph.replace(/\\*\\*(.*?)\\*\\*/g, '<strong>$1</strong>') }} />
            ))}
          </div>
        )}

        {selectedSection.properties.map((prop) => (
          <PropertyCard key={prop.id} prop={prop} isUnit={true} />
        ))}
      </div>

      <div className="section-group">
        <div className="section-header">
          <h2>Modern Measurement Architecture</h2>
          <span className="level-pill pill-advanced">Practice</span>
        </div>
        {unitsPatterns.map((p,i) => <PatternCard key={i} pattern={p} />)}
      </div>

      {/* Guided Navigation Breadcrumbs */}
      <div className="guided-nav">
        <NavLink to="/grid" className="nav-btn prev-btn">
          <span className="arrow">←</span> Previous Module: CSS Grid
        </NavLink>
        {/* Units is currently the final course, so no forward link */}
        <div className="nav-btn next-btn disabled" style={{ opacity: 0.5, cursor: 'not-allowed' }}>
          Curriculum Complete <span className="arrow">★</span>
        </div>
      </div>
    </div>
  );
}

export default UnitsCourse;
