import './App.css';
import NavBar from './components/NavBar/NavBar';
import AboutMe from './components/aboutme/AboutMe';
import Container from './components/container/Container';
import Projects from './components/projects/Projects';

function App() {
  return (
    <>
      <NavBar />
      <Container>
         <AboutMe />
         <Projects />
      </Container>
    </>
  );
}

export default App;
