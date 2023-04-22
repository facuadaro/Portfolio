import styled from "styled-components";
import { colors } from "../../styles/colors";

export const ContainerAboutMe = styled.div`
    
`

export const ContainerFlex = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    max-width: 900px;
    margin: 0 auto;

    @media (max-width: 768px) {
        display: block;
        padding: 0;
        width: 100%;
    }
`

export const ContainerText = styled.div`
    padding: 0 30px;
    width: 100%;
    @media (max-width: 768px) {
        padding: 0px;
        text-align: center;
    }
`

export const Title = styled.h1`
    margin: 0;
    p {
        font-size: 35px;
        margin: 0;
        width: 100%;
    }

    p:nth-child(2) {
        font-size: 37px;
        /* background: ${colors.TEXT_GRADIENT_PURPLE}; */
        background: linear-gradient(#00d8ff 60%, #1dadff 65%);
        background-clip: text !important;
        -webkit-background-clip: text !important;
        -webkit-text-fill-color: transparent !important;
    }

    @media (max-width: 768px) {
        padding: 0;
        text-align: center;
        p{
            font-size: 30px;
        }

        p:nth-child(2) {
                font-size: 2rem;
            }
    }

    @media (max-width: 468px){
        p{
            font-size: 25px;
        }
        p:nth-child(2) {
                font-size: 1.7rem;
            }
    }
`

export const DescriptionText = styled.div`
    font-size: 16px;
    color: ${colors.TEXT_GREY_NEUTRAL};
    padding-right: 100px;

    @media (max-width: 768px) {
        padding-right: 0;
    }
`

export const ContainerIcons = styled.div`
    display: flex;
    img {
        width: 32px;
        height: 32px;
        margin: 10px;
    }
    @media (max-width: 768px){
            justify-content: center;

            img {
                justify-content: center;
            }
        }
`

export const ContainerImage = styled.div`
    text-align: center;
    max-width: 250px;

    img {
        width: 250px;
        border-radius: 50%;
        background: linear-gradient(#00d8ff 55%, #1dadff 65%);
    }

    @media (max-width: 768px) {
        width: 100%;
        padding: 10px 0;
        margin: 0 auto;

        img {
            width: 100%;
        }
    }
`