//import { useState } from 'react'
import { Navbar } from "./components/navbar/navbar";
import { Home } from "./components/Home/home";
import { SobreMi } from "./components/SobreMi/sobreMi";
import { Experiencia } from "./components/experiencia/experiencia";
import styles from "./App.module.css";

function App() {


  return (
    <>
      <div className={styles.App}>
        <Navbar />
        <Home />
        <SobreMi />
        <Experiencia />
      </div>
    </>
  );
}

export default App
