import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from "./App";
import About from "./components/About";
import Marketplace from "./components/Marketplace";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import AddCar from "./components/AddCar";
import CarSpecific from "./components/CarSpecific";

export default function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/about" element={<About />} />
        <Route path="/marketplace" element={<Marketplace />} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/addCar" element={<AddCar />} />
        <Route path="*" element={<h1>404 - Page Not Found</h1>} />
        <Route path="/marketplace/:carName" element={<CarSpecific />} />
      </Routes>
    </Router>
  );
}
