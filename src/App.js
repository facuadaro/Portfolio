import './App.css';
import NavBar from './components/NavBar/NavBar';
import AboutMe from './components/aboutme/AboutMe';
import Container from './components/container/Container';

function App() {
  return (
    <>
      <NavBar />
      <Container>
         <AboutMe />
      </Container>
    </>
  );
}

export default App;
