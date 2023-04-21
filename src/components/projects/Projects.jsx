import React from 'react'
import * as S from './Project.styles'
import { projectsPortfolio } from './ProjectsData'
import  GitHubLogo  from '../../svg/github.svg'
import  WebsiteLogo  from '../../svg/website.svg'

const Projects = () => {

    return (
        <S.Projects>
            <S.Title>
                Some of
                <span>
                    <br />
                    My Projects
                </span>
            </S.Title>
            <S.ContentProjects>
                {projectsPortfolio.map((project, index) => (
                    <S.projectContent key={index}>
                        <S.TitleProject>
                            {project.title}
                        </S.TitleProject>
                        <S.ContainerImage>
                            <img src={project.image} alt={project.title} loazy="true"/>
                        </S.ContainerImage>
                        <S.ContainerTechs>
                            {project.techs.map((tech, index) => (
                                <div key={index}>
                                    <img src={tech.src} alt={tech.name} />
                                    <p>{tech.name}</p>
                                </div>
                            ))}
                        </S.ContainerTechs>
                        <S.Description>
                            {project.description}
                        </S.Description>
                        <S.ContainerFooter>
                            {project.repository && (
                                <a href={project.repository} target='_blank' rel='noreferrer'>
                                    <img src={GitHubLogo} alt={project.description} />
                                </a>
                            )}
                            {project.website && (
                                <a href={project.website} target='_blank' rel='noreferrer'>
                                    <img src={WebsiteLogo} alt={project.description} />
                                </a>
                            )}
                        </S.ContainerFooter>
                    </S.projectContent>
                ))}
            </S.ContentProjects>
        </S.Projects>
    )
}

export default Projects