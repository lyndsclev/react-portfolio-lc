
import { useState } from 'react'; 
import './App.css';

// import components
import About from './components/About'; 
import Nav from './components/Nav'; 
import Contact from './components/Contact'; 
import Project from './components/Project';
import Footer from './components/Footer'; 

function App() {
  const [currentPage, setCurrentPage] = useState('about')
  return (
    <div>
      <section className='section'>
        <Nav 
        currentPage = {currentPage}
        setCurrentPage = {setCurrentPage}
        >
        </Nav>
      </section>
      <section id="about" className='section is-medium'>
        {currentPage === 'about' && <About />}
        {currentPage === 'projects' && <Project />}
        {currentPage === 'contact' && <Contact />}
      </section>
      <section className='section'>
        <Footer />
      </section>
    </div>
  );
}

export default App;
