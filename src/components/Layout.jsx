import { NavLink, Outlet, useLocation } from 'react-router-dom';
import { Home, Rocket, BookOpen, Code2, Gamepad2, Layers, Maximize, Palette, MousePointerClick } from 'lucide-react';

export default function Layout() {
  const { pathname } = useLocation();
  const isPlayground = pathname.startsWith('/sandbox') || pathname.startsWith('/challenges');

  return (
    <>
      <nav className="global-nav">
        <NavLink to="/" className={`nav-tab ${pathname === '/' ? 'active-flex' : ''}`}>
          <Home size={16} /> Home
        </NavLink>
        <NavLink to="/flex" className={`nav-tab ${(!isPlayground && pathname !== '/') ? 'active-flex' : ''}`}>
          <BookOpen size={16} /> Curriculum
        </NavLink>
        <NavLink to="/sandbox" className={({ isActive }) => `nav-tab ${isActive ? 'active-units' : ''}`}>
          <Code2 size={16} /> Sandbox
        </NavLink>
        <NavLink to="/challenges" className={({ isActive }) => `nav-tab ${isActive ? 'active-grid' : ''}`}>
          <Gamepad2 size={16} /> Challenges
        </NavLink>
      </nav>

      {isPlayground ? (
        <div className="playground-main" style={{ minHeight: 'calc(100vh - 120px)' }}>
          <Outlet />
        </div>
      ) : (
        <div className="app-two-col">
          <nav className="prop-sidebar curriculum-sidebar">
            <div className="sidebar-title">Curriculum</div>
            
            <div className="sidebar-group">
              <div className="sidebar-level">Core Layout</div>
              <NavLink to="/flex" end className={({ isActive }) => `sidebar-link ${isActive ? 'active-sidebar-link' : ''}`}>
                <span className="sidebar-dot dot-container" /> Flexbox
              </NavLink>
              <NavLink to="/grid" className={({ isActive }) => `sidebar-link grid-link ${isActive ? 'active-sidebar-grid-link' : ''}`}>
                <span className="sidebar-dot dot-container" style={{borderColor: 'var(--accent-grid)', background: 'transparent'}} /> CSS Grid
              </NavLink>
              <NavLink to="/units" className={({ isActive }) => `sidebar-link ${isActive ? 'active-sidebar-link' : ''}`} style={({isActive}) => isActive ? {borderLeftColor: '#ff5277', background: 'rgba(255, 82, 119, 0.05)', color: '#ff5277'} : {}}>
                <span className="sidebar-dot dot-container" style={{borderColor: '#ff5277', background: 'transparent'}} /> Units & Space
              </NavLink>
            </div>

            <div className="sidebar-group">
              <div className="sidebar-level">Advanced UI</div>
              <NavLink to="/animations" className={({ isActive }) => `sidebar-link ${isActive ? 'active-sidebar-link' : ''}`}>
                <Layers size={14} style={{ marginRight: 6, color: 'var(--text-dim)' }} /> Animations
              </NavLink>
              <NavLink to="/responsive" className={({ isActive }) => `sidebar-link ${isActive ? 'active-sidebar-link' : ''}`}>
                <Maximize size={14} style={{ marginRight: 6, color: 'var(--text-dim)' }} /> Container Queries
              </NavLink>
              <NavLink to="/theming" className={({ isActive }) => `sidebar-link ${isActive ? 'active-sidebar-link' : ''}`}>
                <Palette size={14} style={{ marginRight: 6, color: 'var(--text-dim)' }} /> CSS Variables
              </NavLink>
              <NavLink to="/selectors" className={({ isActive }) => `sidebar-link ${isActive ? 'active-sidebar-link' : ''}`}>
                <MousePointerClick size={14} style={{ marginRight: 6, color: 'var(--text-dim)' }} /> Selectors
              </NavLink>
            </div>
          </nav>

          <div className="app-main curriculum-main">
            <Outlet />
          </div>
        </div>
      )}
      
      <footer style={{ textAlign:'center', padding:'30px', color:'var(--text-dim)', fontSize:'.8rem', borderTop:'1px solid var(--border)', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}>
        Built for CSS learners <Rocket size={14} color="var(--accent-flex)" /> &nbsp;·&nbsp; <BookOpen size={14} color="var(--accent-info)" /> Organized Curriculum
      </footer>
    </>
  );
}
