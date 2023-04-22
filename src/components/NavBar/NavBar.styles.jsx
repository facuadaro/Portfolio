import styled from 'styled-components'
import { colors } from '../../styles/colors'

export const ContainerNavbar = styled.div`
position: fixed;
width: 100%;
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
    padding: 0 10px;
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
        background: linear-gradient(#00d8ff 55%, #1dadff 65%);
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
            font-size: 22px;
        }
    }

    @media (max-width: 360px) {
        h1 {
            font-size: 15px;
        }

        h2 {
            font-size: 13px;
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
        
        border-radius: 999px;
        padding: 12px 20px;
        
    }

    @media (max-width: 768px) {
        display: ${(props) => (props.showMenuBurger ? 'inline-grid' : 'none')};
        position: absolute;
        text-align: center;
        justify-content: center;
        top: 100px;
        background: ${colors.TEXT_WHITE};
        font-weight: 700;
        box-shadow: ${colors.BOX_SHADOW};
        padding: 10px 0 20px 0;
        width: 100%;
        left: 0;
        
        a {
            padding: 10px 20px;
        }

        p {
            color: ${colors.TEXT_WHITE};
            background: linear-gradient(170deg,#00d8ff 45%, #1dadff 60%);
            text-shadow: black 1px 2px 2px;
        }
    }
`

export const Button = styled.button`
    color: ${colors.TEXT_WHITE};
    box-shadow: ${colors.BOX_SHADOW_BUTTON};
    text-shadow: black 1px 1.5px 2px;
    background: linear-gradient(170deg,#00d8ff 45%, #1dadff 60%);
    padding: 12px 20px;
    border-radius: 999px;
    border: none;
    margin: 10px 10px;
    font-size: 16px;
    font-weight: 700;
    cursor: pointer;
    
    @media (max-width: 768px) {
        width: 100%;
        /* margin: 5px 10px 0 10px; */
        margin: 10px 0; 
        /* padding: 0; */
        text-align: center;
        display: flex;
        justify-content: center;
        align-items: center;

    }
`

export const ContainerBurger = styled.div`
    display: none;

    @media (max-width: 768px) {
        padding: 0 15px;
        display: block;
    }

    
    @media (max-width: 667px) {
        padding: 5px;
    }
`

export const BurgerMenu = styled.div`
    width: 35px;
    height: 2px;
    background-color: ${colors.TEXT_BLACK};
    margin: 6px 0;
`


