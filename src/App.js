
import './App.css';
import About from './component/About/About';
import Footer from './component/Footer/Footer';
import HeroSection from './component/HeroSection/HeroSection';
import Skills from './component/Skills/Skills';
import NavigationBar from './component/navbar/NavigationBar';


function App() {
  return (

 <>
 <NavigationBar />
 <HeroSection/>
 <About/>  
 <Skills/>
 
 <Footer />
 </>
  
  );
}

export default App;
