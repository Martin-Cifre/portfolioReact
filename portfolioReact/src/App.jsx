//import { useState } from 'react'
import { Navbar } from "./components/navbar/navbar";
import { Home } from "./components/Home/home";
import { SobreMi } from "./components/SobreMi/sobreMi";
import styles from "./App.module.css";

function App() {


  return (
    <>
      <div className={styles.App}>
        < Navbar />
        < Home />
        < SobreMi />
      </div>
    </>
  );
}

export default App
