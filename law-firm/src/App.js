import "./App.css";
import Hero from "./components/HeroSection/Hero";
import Navbar from "./components/NavBar/Navbar";
import styles from "../src/App.module.css";
import Intro from "./components/Intro/Intro";
import Choose from "./components/Choose/Choose";
import Aop from "./components/AOP/Aop";
import Ourteam from "./components/OurTeam/Ourteam";
import Faq from "./components/FAQ/Faq";
import Newsletter from "./components/NewsLetter/Newsletter";
import Footer from "./components/Footer/Footer";



function App() {
  return (
    <>
      <div className={styles.landingWrapper}>
        <Navbar  islogo={true}/>
        <Hero />
      </div>
      <div className={styles.bodyWrapper}>
      <Intro/>
      <Choose/>
      <Aop/>
      <Ourteam/>
      <Faq/>
      <Newsletter/>
      </div>
      <div>
        <Footer/>
      </div>
      </>
  );
}

export default App;
