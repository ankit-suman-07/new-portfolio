import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import Home from "./pages/Home";
import AboutMe from "./components/AboutMe";
import Projects from "./pages/Projects";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/aboutme" element={<AboutMe/>} />
            <Route path="/projects" element={<Projects/>} />
            <Route path="/blog" element={<Blog/>} />
            <Route path="/contact" element={<Contact/>} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
