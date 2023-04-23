import React from 'react'
import ChakraImage from '../images/techs/chakra.png'
import CSSImage from '../images/techs/css.png'
import ReactBoostrapImage from '../images/techs/react-bootstrap.png'
import ReactRouterDomImage from '../images/techs/react-router-dom.png'
import SassImage from '../images/techs/sass.png'
import SemanticImage from '../images/techs/semantic.png'
import StyledImage from '../images/techs/styled-logo.png'
import ViteImage from '../images/techs/vite.png'
import NodeImage from '../images/techs/Node.png'
import ReactImage from '../images/techs/react.png'
import GitHubLogo from '../../svg/github.svg'
import JavascriptImage from '../images/techs/Javascript.png'
import HtmlImage from '../images/techs/HTML.png'
import * as S from './SkillsStyles'

const Skills = () => {

    const skills = [
        {
            title: "HTML",
            image: HtmlImage
        },
        {
            title: "CSS",
            image: CSSImage
        },
        {
            title: "JavaScript",
            image: JavascriptImage
        },
        {
            title: "React JS",
            image: ReactImage
        },
        {
            title: "NodeJS",
            image: NodeImage
        },
        {
            title: "GitHub",
            image: GitHubLogo
        },
        {
            title: "Semantic UI React",
            image: SemanticImage
        },
        {
            title: "Styled Components",
            image: StyledImage
        },
        {
            title: "React Router Dom",
            image: ReactRouterDomImage
        },
        {
            title: "Sass ",
            image: SassImage
        },
        {
            title: "React Bootstrap",
            image: ReactBoostrapImage
        },
        {
            title: "Vite",
            image: ViteImage
        },
        {
            title: "Chakra",
            image: ChakraImage
        }
    ]

    return (
        <S.ContainerAll>
            <S.IdSkills>
                Skills:
            </S.IdSkills>
            <S.ContainerSkills>
                {skills.map((skill, index) => (
                    <S.ImageSkills>
                        <div key={index}>
                            <img src={skill.image} alt={skill.title} />
                            {/* <p>{skill.title}</p> */}
                        </div>
                    </S.ImageSkills>

                ))}
            </S.ContainerSkills>
        </S.ContainerAll>
    )
}

export default Skills