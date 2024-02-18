//import { useState } from 'react'
import { Navbar } from "./components/navbar/navbar";
import { Home } from "./components/Home/home";
import { SobreMi } from "./components/SobreMi/sobreMi";
import { Experiencia } from "./components/experiencia/experiencia";
import { Proyectos } from "./components/proyectos/proyectos";
import { Contacto } from "./components/contacto/contacto";
import styles from "./App.module.css";

function App() {


  return (
    <>
      <div className={styles.App}>
        <Navbar />
        <Home />
        <SobreMi />
        <Experiencia />
        <Proyectos />
        <Contacto />
      </div>
    </>
  );
}

export default App
