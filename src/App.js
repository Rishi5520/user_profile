
import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './component/About/About';
import Contact from './component/Contact/Contact';
import Footer from './component/Footer/Footer';
import HeroSection from './component/HeroSection/HeroSection';
import Skills from './component/Skills/Skills';
import NavigationBar from './component/navbar/NavigationBar';
import ProjectsPage from './Pages/ProjectsPage';
import projectData from './component/Data/projectData';
import Homepage from './Pages/Homepage';


function App() {
  const  filterData = projectData.slice(0,4);
  return (
  <>
 <NavigationBar />
    <Routes>
      <Route path='/'  element={<HeroSection/>}/>
      <Route path='/About'  element={<About/>}/>
      <Route path='/Home' element={<Homepage data ={filterData}/>}/>
      <Route path='/Projects'  element={<ProjectsPage projectData={projectData}/>}/>
      <Route path='/Contact'  element={<Contact/>}/>
      <Route path='/Skills'  element={<Skills/>}/>

    </Routes>
 
 <Footer />
 </>
  
  );
}

export default App;
