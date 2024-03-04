import logo from "./logo.svg";
import "./App.css";
import Navbars from "./components/1-navbar/Navbar";
import Hero from "./components/2-hero/Hero";
import About from "./components/3-about/About";
import Navs from "./components/1-navbar/Navs";
import AboutBanner from "./components/4-AboutBanner/AboutBanner";
import AboutSection2 from "./components/3-about/AboutSection2";
import Teams from "./components/5-teams/Teams";
import AccordionSection from "./components/6-accordionSection/AccordionSection";

function App() {
  return (
    <div className="App">
      <Navbars />
      <Navs />
      <Hero />
      <About />
      <AboutBanner />
      <AboutSection2 />
      <Teams />
      <AccordionSection />
    </div>
  );
}

export default App;
