import ImageRickAndMorty from '../images/projects/rick-morty.jpg'
import ImageListsTodo from '../images/projects/todo.jpg'
import ImageSimpsons from '../images/projects/simpson.jpg'
import ImageGasolinera from '../images/projects/gasolinera.jpg'
import ImageDynamicForm from '../images/projects/dynamic.jpg'
import ImageMarvel from '../images/projects/marvel.jpg'
import ChakraImage from '../images/techs/chakra.png'
import CSSImage from '../images/techs/css.png'
import ReactBoostrapImage from '../images/techs/react-bootstrap.png'
import ReactRouterDomImage from '../images/techs/react-router-dom.png'
import SassImage from '../images/techs/sass.png'
import SemanticImage from '../images/techs/semantic.png'
import StyledImage from '../images/techs/styled-logo.png'
import ViteImage from '../images/techs/vite.png'
import ReactImage from '../images/techs/react.png'

export const projectsPortfolio = [
    {
        title: "Rick & Morty API",
        image: ImageRickAndMorty,
        techs: [
            {name: "React", src: ReactImage },
            {name: "CSS", src: CSSImage }            
        ],
        description: "A simple API to search for characters and episodes from the Rick and Morty series.",
        repository: "https://github.com/facuadaro/App-Rick-Morty",
        website: "https://rickandmortyalmafuerte.netlify.app/"
    },
    {
        title: "Lists Todo",
        image: ImageListsTodo,
        techs: [
            {name: "React", src: ReactImage },
            {name: "Semantic UI React", src: SemanticImage }            
        ],
        description: "Aplication created with React JS and Semantic UI to make a list of tasks where you can add or remove it",
        repository: "https://github.com/facuadaro/App-Tareas",
        website: "https://arpctareas.netlify.app/"
    },
    {
        title: "Simpsons API",
        image: ImageSimpsons,
        techs: [
            {name: "React", src: ReactImage },
            {name: "Styled Components", src: StyledImage }            
        ],
        description: "Application created with React JS and Styled Components to make a request an external API of Simpsons.",
        repository: "https://github.com/facuadaro/App-Simpsons",
        website: "https://rickandmortyalmafuerte.netlify.app/"
    },
    {
        title: "Marvel API",
        image: ImageMarvel,
        techs: [
          { name: "React", src: ReactImage },
          { name: "React Router ", src: ReactRouterDomImage },
          { name: "Sass", src: SassImage },
          { name: "Semantic", src: SemanticImage },
        ],
        description:
          "Application created with React JS, React Router and Sass to make a request an external API of Marvel.",
        repository: "https://github.com/facuadaro/Marvel-App",
        website: "#!",
      },
      {
        title: "Dynamic Form",
        image: ImageDynamicForm,
        techs: [
          { name: "React JS", src: ReactImage },
          { name: "React Bootstrap", src: ReactBoostrapImage },
        ],
        description:
          "Application of a landing page created with React JS and React Bootstrap to make a form with dynamic fields.",
        repository: "https://github.com/facuadaro/Dynamic-Form",
        website: "#!",
      },
      {
        title: "Fuel Station",
        image: ImageGasolinera,
        techs: [
          { name: "Vite", src: ViteImage },
          { name: "Chakra", src: ChakraImage },
          { name: "React Router DOM", src: ReactRouterDomImage },
        ],
        description:
          "Application created with Vite where you can save the information and see it on a summary",
        repository: "https://github.com/facuadaro/Gasolinera-App",
        website: "#!",
      },
]