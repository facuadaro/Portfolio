import styled from "styled-components"
import { colors } from "../../styles/colors"


export const ContainerSkills = styled.div`
    display: grid;
    grid-template-columns: repeat(13, 1fr);
    text-align: center;
    /* align-items: center;
    justify-content: center; */

`

export const IdSkills = styled.h3`
    font-size: 25px;
    margin-right: 10px;
    background: linear-gradient(#00d8ff 45%, #1dadff 60%);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;

    @media (max-width: 768px){
        font-size: 20px;        
    }

    @media (max-width: 340px){
        font-size: 17px;
    }
`


export const ImageSkills = styled.div`

    display: grid;
    align-items: center;
    justify-content: center;
    font-size: 2px;
    
    div{        
        text-align: center;
    }

    img {
        width: 30px;
        height: auto;
    }

    p{
        text-align: center;
        font-size: 8px;
        color: ${colors.TEXT_GREY_NEUTRAL};
        
    }

    @media (max-width: 768px){
        img{
             width: 20px;
        }

    @media (max-width: 340px){
        img{
            width: 15px;
        }
    }
}
`

export const ContainerAll = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 100px;
    /* background: linear-gradient(#00d8ff 45%, #1dadff 60%); */
    /* border-style: solid; */

    @media (max-width: 768px){
        margin-top: 60px;
    }
`