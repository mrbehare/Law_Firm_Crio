import "./App.css";
import Hero from "./components/HeroSection/Hero";
import Navbar from "./components/NavBar/Navbar";
import styles from "../src/App.module.css";
function App() {
  return (
    <>
      <div className={styles.landingWrapper}>
        <Navbar />
        <Hero />
      </div>
      
      </>
  );
}

export default App;
