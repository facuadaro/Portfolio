import React from 'react'
import * as S from './AboutMe.styles'
import LogoGitHub from '../../svg/github.svg'
import LogoLinkedin from '../../svg/linkedin.svg'
import LogoUdemy from '../../svg/udemy.svg'
import LogoYoutube from '../../svg/youtube.svg'
import LogoWebsite from '../../svg/website.svg'
import Logo from '../../svg/logo.svg'
import LogoInstagram from '../../svg/instagram.svg'

const AboutMe = () => {

    const socialNetworks = [
        {
            name: "GitHub",
            link: "https://github.com/facuadaro",
            logo: LogoGitHub
        },
        {
            name: "Linkedin",
            link: "https://www.linkedin.com/in/facundo-adaro-0b7168223",
            logo: LogoLinkedin
        },
        {
            name: "Udemy",
            link: "https://www.udemy.com/user/facundo-adrian-adaro/",
            logo: LogoUdemy
        },
        {
            name: "Instagram",
            link: "https://www.instagram.com/facuu.adaro/",
            logo: LogoInstagram
        }


    ]

    return (
        <S.ContainerAboutMe id='about-me'>
            <S.ContainerFlex>
                <S.ContainerText>
                    <S.Title>
                        <p>👋🏼Hello, i am</p>
                        <p>Facundo Adaro</p>
                        <p>Frontend Developer</p>
                    </S.Title>
                    <S.DescriptionText>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis nobis repudiandae, voluptatem obcaecati quos amet provident unde quia dolore vero culpa aspernatur quidem architecto eligendi dolorum.</p>
                    </S.DescriptionText>
                    <S.ContainerIcons>
                        {socialNetworks.map((network, index) => (
                            <a key={index} href={network.link} target='_blank' rel='noreferrer'>
                                <img src={network.logo} alt={network.name} />
                            </a>
                        ))}
                    </S.ContainerIcons>
                </S.ContainerText>
                <S.ContainerImage>
                    <img src="/img/profile.png" alt="Facu Adaro - Frontend Developer" />
                </S.ContainerImage>
            </S.ContainerFlex>
        </S.ContainerAboutMe>
    )
}

export default AboutMe