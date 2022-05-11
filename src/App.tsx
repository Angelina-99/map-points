import { Toaster } from "react-hot-toast";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Header from "./components/Header";
import AddPointPage from "./pages/AddPointPage";
import MapWithPoints from "./pages/MapWithPoints";
import PointsList from "./pages/PointsList";

function App() {
  return (
    <Router>
      <Header />
      <Toaster />
      <Routes>
        <Route path="/" element={<MapWithPoints />} />
        <Route path="/add-point" element={<AddPointPage />} />
        <Route path="/points-list" element={<PointsList />} />
      </Routes>
    </Router>
  );
};

export default App;
