import { BrowserRouter as Router } from 'react-router-dom';
import Header from "./components/Header";
import Footer from "./components/Footer";
import About from "./components/About";
import Hero from "./components/Hero";
import Contact from "./components/Contact";
import Projects from "./components/Projects";
import './App.css';

function App() {
  return (
    <Router>
      <Header />
      <Hero />
      <About />
      <Projects />
      <Contact />
      <Footer />  
    </Router>
  )
}

export default App;
