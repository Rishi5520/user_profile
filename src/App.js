
import './App.css';
import About from './component/About/About';
import Contact from './component/Contact/Contact';
import Footer from './component/Footer/Footer';
import HeroSection from './component/HeroSection/HeroSection';
import Projects from './component/Projects/Projects';
import Skills from './component/Skills/Skills';
import NavigationBar from './component/navbar/NavigationBar';


function App() {
  return (

 <>
 <NavigationBar />
 <HeroSection/>
 <About/>  
 <Skills/>
 {/* <Projects/> */}
 <Contact />
 
 <Footer />
 </>
  
  );
}

export default App;
