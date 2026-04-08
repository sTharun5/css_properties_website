import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout.jsx';
import Home from './pages/Home.jsx';
import FlexCourse from './pages/FlexCourse.jsx';
import GridCourse from './pages/GridCourse.jsx';
import UnitsCourse from './pages/UnitsCourse.jsx';
import Sandbox from './pages/Sandbox.jsx';
import Challenges from './pages/Challenges.jsx';
import AnimationsCourse from './pages/AnimationsCourse.jsx';
import ResponsiveCourse from './pages/ResponsiveCourse.jsx';
import VariablesCourse from './pages/VariablesCourse.jsx';
import SelectorsCourse from './pages/SelectorsCourse.jsx';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        
        {/* Playgrounds */}
        <Route path="sandbox" element={<Sandbox />} />
        <Route path="challenges" element={<Challenges />} />

        {/* Courses */}
        <Route path="flex" element={<FlexCourse />} />
        <Route path="grid" element={<GridCourse />} />
        <Route path="units" element={<UnitsCourse />} />
        <Route path="animations" element={<AnimationsCourse />} />
        <Route path="responsive" element={<ResponsiveCourse />} />
        <Route path="theming" element={<VariablesCourse />} />
        <Route path="selectors" element={<SelectorsCourse />} />
      </Route>
    </Routes>
  );
}
