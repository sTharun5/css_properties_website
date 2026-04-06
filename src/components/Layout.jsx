import { NavLink, Outlet } from 'react-router-dom';

export default function Layout() {
  return (
    <>
      <nav className="global-nav">
        <NavLink to="/" className={({ isActive }) => `nav-tab ${isActive ? 'active-flex' : ''}`}>
           🏠 Home
        </NavLink>
        <NavLink to="/flex" className={({ isActive }) => `nav-tab ${isActive ? 'active-flex' : ''}`}>
          <span className="nav-dot nav-dot-flex" /> Flexbox Module
        </NavLink>
        <NavLink to="/grid" className={({ isActive }) => `nav-tab ${isActive ? 'active-grid' : ''}`}>
          <span className="nav-dot nav-dot-grid" /> Grid Module
        </NavLink>
      </nav>

      {/* Main layout now uses the app-two-col grid */}
      <div className="app-two-col">
        {/* Persistent Curriculum Sidebar */}
        <nav className="prop-sidebar curriculum-sidebar">
          <div className="sidebar-title">Curriculum</div>
          
          <div className="sidebar-group">
            <div className="sidebar-level">Course 1</div>
            <NavLink to="/flex" end className={({ isActive }) => `sidebar-link ${isActive ? 'active-sidebar-link' : ''}`}>
              <span className="sidebar-dot dot-container" /> Introduction
            </NavLink>
            <NavLink to="/flex?level=Beginner" className={({ isActive }) => `sidebar-link ${isActive ? 'active-sidebar-link' : ''}`}>
              <span className="sidebar-dot dot-item" /> Beginner
            </NavLink>
            <NavLink to="/flex?level=Intermediate" className={({ isActive }) => `sidebar-link ${isActive ? 'active-sidebar-link' : ''}`}>
              <span className="sidebar-dot dot-item" /> Intermediate
            </NavLink>
            <NavLink to="/flex?level=Advanced" className={({ isActive }) => `sidebar-link ${isActive ? 'active-sidebar-link' : ''}`}>
              <span className="sidebar-dot dot-item" /> Advanced & Patterns
            </NavLink>
          </div>

          <div className="sidebar-group">
            <div className="sidebar-level">Course 2</div>
            <NavLink to="/grid" end className={({ isActive }) => `sidebar-link grid-link ${isActive ? 'active-sidebar-grid-link' : ''}`}>
              <span className="sidebar-dot dot-container" /> Introduction
            </NavLink>
            <NavLink to="/grid?level=Beginner" className={({ isActive }) => `sidebar-link grid-link ${isActive ? 'active-sidebar-grid-link' : ''}`}>
              <span className="sidebar-dot dot-item" /> Beginner
            </NavLink>
            <NavLink to="/grid?level=Intermediate" className={({ isActive }) => `sidebar-link grid-link ${isActive ? 'active-sidebar-grid-link' : ''}`}>
              <span className="sidebar-dot dot-item" /> Intermediate
            </NavLink>
            <NavLink to="/grid?level=Advanced" className={({ isActive }) => `sidebar-link grid-link ${isActive ? 'active-sidebar-grid-link' : ''}`}>
              <span className="sidebar-dot dot-item" /> Advanced & Patterns
            </NavLink>
          </div>
        </nav>

        {/* Selected Page Content */}
        <div className="app-main curriculum-main">
          <Outlet />
        </div>
      </div>
      
      <footer style={{ textAlign:'center', padding:'30px', color:'var(--text-dim)', fontSize:'.8rem', borderTop:'1px solid var(--border)' }}>
        Built for CSS learners 🚀 &nbsp;·&nbsp; Organized Curriculum
      </footer>
    </>
  );
}
