import "./App.css";
import Hero from "./components/HeroSection/Hero";
import Navbar from "./components/NavBar/Navbar";
import styles from "../src/App.module.css";
import Intro from "./components/Intro/Intro";



function App() {
  return (
    <>
      <div className={styles.landingWrapper}>
        <Navbar />
        <Hero />
      </div>
      <div className={styles.bodyWrapper}>
      <Intro/>
      </div>
      </>
  );
}

export default App;
