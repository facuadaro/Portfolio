import React from 'react'
import * as S from './Container.styles'


const Container = ({ children }) => {
    return (
        <S.ContainerContent>
            <h1>{children}</h1>
        </S.ContainerContent>
    )
}

export default Container