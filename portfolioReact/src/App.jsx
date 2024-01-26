//import { useState } from 'react'
import { Navbar } from "./components/navbar/navbar";
import { Home } from "./components/Home/home";
import styles from "./App.module.css";

function App() {


  return (
    <>
      <div className={styles.App}>
        < Navbar />
        < Home />
      </div>
    </>
  );
}

export default App
