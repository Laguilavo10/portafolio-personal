import { useState, useEffect } from "react";
import {LanguajeProvider} from './context/languajes'

import { Header } from "./components/Header";
import { AboutMe } from "./components/AboutMe";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import "./index.css"

function App() {
  return (
    <>
      <LanguajeProvider>
        <Header />
        <AboutMe />
        <Skills/>
        <Projects />
        <Contact />
      </LanguajeProvider>
    </>
  );
}

export default App;
