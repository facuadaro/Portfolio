import React, { useState } from 'react'
import * as S from './NavBar.styles'


function NavBar() {

    const [showMenuBurger, setShowMenuBurger] = useState(false)

    const clickItemNav = item => (
        document.getElementById(item).scrollIntoView({behavior: "smooth"})
    )

    console.log(showMenuBurger)

  return (
    <S.ContainerNavbar>
        <S.ContainerLogo>
            <S.ImageLogo src="/img/aguila.png" alt="Logo Facundo Adaro" />
            <div>
                <h1>Facundo Adaro</h1>
                <h2>Frontend Developer</h2>
            </div>
        </S.ContainerLogo>
        <S.ContainerBurger onClick={() => setShowMenuBurger(!showMenuBurger)}>
            <S.BurgerMenu></S.BurgerMenu>
            <S.BurgerMenu></S.BurgerMenu>
            <S.BurgerMenu></S.BurgerMenu>
        </S.ContainerBurger>
        <S.ContainerItems showMenuBurger={showMenuBurger}>
            <p onClick={() => clickItemNav("about-me")}>About Me</p>
            <p onClick={() => clickItemNav("projects")}>Projects</p>
            <S.Button onClick={() => clickItemNav("contact")}>🤙🏼Contact Me</S.Button>
        </S.ContainerItems>
    </S.ContainerNavbar>
  )
}

export default NavBar