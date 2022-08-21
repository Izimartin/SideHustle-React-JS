/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import "./App.css";

import Hero from "./components/Hero/Hero";
import Projects from "./components/Projects/Projects";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";

function App() {
  return (
    <div className="App">
      <Hero />
      <About />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
