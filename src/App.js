import './App.css';
import NavBar from './components/NavBar/NavBar';
import AboutMe from './components/aboutme/AboutMe';
import Contact from './components/contact/Contact';
import Container from './components/container/Container';
import Projects from './components/projects/Projects';
import Skills from './components/skills/Skills';

function App() {
  return (
    <>
      <NavBar />
      <Container>
         <AboutMe />
         <Skills />
         <Projects />
         <Contact />
      </Container>
    </>
  );
}

export default App;
