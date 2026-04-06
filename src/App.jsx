import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout.jsx';
import Home from './pages/Home.jsx';
import FlexCourse from './pages/FlexCourse.jsx';
import GridCourse from './pages/GridCourse.jsx';
import UnitsCourse from './pages/UnitsCourse.jsx';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="flex" element={<FlexCourse />} />
        <Route path="grid" element={<GridCourse />} />
        <Route path="units" element={<UnitsCourse />} />
      </Route>
    </Routes>
  );
}
