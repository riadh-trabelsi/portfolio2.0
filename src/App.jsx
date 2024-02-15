import { BrowserRouter as Router } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import About from "./components/About";
import Herox from "./components/Herox";
import Contact from "./components/Contact";
import Projects from "./components/Projects";
import "./App.css";

function App() {
  return (
    <Router>
      <Header />
    <Herox />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </Router>
  );
}

export default App;
