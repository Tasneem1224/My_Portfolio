import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Hero from "./components/hero/hero";
import Header from "./components/header/header";
import About from "./components/pages/aboutme";
import Projects from "./components/pages/projects";
import Contact from "./components/pages/contact";
import Footer from "./components/footer/footer";

function App() {
  return (
    <Router>
      <div className="cont">
        <Header />
        <div className="divider"></div>
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <div className="divider"></div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
