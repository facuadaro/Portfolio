import styled from 'styled-components'
import { colors } from '../../styles/colors'

export const ContainerNavbar = styled.div`

max-height: 100vh;
height: 100px;
box-shadow: ${colors.BOX_SHADOW};
display: flex;
align-items: center;
justify-content: space-between;
padding: 0 2px;
background: ${colors.TEXT_WHITE};

`

export const ContainerLogo = styled.div`
    display: flex;
    align-items: center;
    h1, h2 {
        font-weight: 700;
        font-size: 700;
        color: ${colors.TEXT_BLACK};
        margin: 0;
    }

    h1 {
        font-size: 2rem;
    }

    h2 {
        background: linear-gradient(135deg , #cb5eee 0%, #4be1ec 100% );
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }

    @media (max-width: 768px) {
        h1, h2 {
            font-weight: 700;
            font-size: 700;
        }
    }

    @media (max-width: 667px) {
        h1, h2 {
            font-size: 15px;
        }
    }
`

export const ImageLogo = styled.img`
    width: 90px;
    padding-right: 20px;

    @media (max-width: 768px) {
        width: 70px;
        padding-right: 5px;
    }
`

export const ContainerItems = styled.div`
    display: flex;
    align-items: center;
    p{
        cursor: pointer;
        padding: 0 13px;
        text-decoration: none;
        color: ${colors.TEXT_BLACK};
        font-weight: 500;
    }

    @media (max-width: 768px) {
        display: ${(props) => (props.showMenuBurger ? 'inline-grid' : 'none')};
        position: absolute;
        top: 100px;
        background: ${colors.TEXT_WHITE};
        box-shadow: ${colors.BOX_SHADOW};
        padding: 10px 0 20px 0;
        width: 100%;
        left: 0;
        
        a {
            padding: 10px 20px;
        }
    }
`

export const Button = styled.button`
    color: ${colors.TEXT_BLACK};
    box-shadow: ${colors.BOX_SHADOW_BUTTON};
    background: linear-gradient(135deg , #cb5eee 0%, #4be1ec 100% );
    padding: 12px 20px;
    border-radius: 999px;
    border: none;
    margin: 10px 0;
    font-size: 16px;
    font-weight: 700;
    cursor: pointer;
    
    @media (max-width: 768px) {
        width: 50%;
        margin: 5px 10px 0 10px;
    }
`

export const ContainerBurger = styled.div`
    display: none;

    @media (max-width: 768px) {
        padding: 0 15px;
        display: block;
    }

    
    @media (max-width: 667px) {
        padding: 2px;
    }
`

export const BurgerMenu = styled.div`
    width: 35px;
    height: 2px;
    background-color: ${colors.TEXT_BLACK};
    margin: 6px 0;
`


