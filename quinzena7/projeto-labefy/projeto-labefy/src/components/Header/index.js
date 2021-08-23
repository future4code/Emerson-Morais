import React from 'react'
import styled from 'styled-components'


const HeaderContainer = styled.div`
height: 70px;
display: flex;
align-items: center;
justify-content: space-around;
border-bottom-style: solid;

`
const ButtonContainer = styled.div`
width: 300px;
display: flex;
justify-content: space-around;
border-radius: 15px;

`

const Header = (props) => {
    return (
        <HeaderContainer>
            <h1> Labefy </h1>
            <ButtonContainer> 
                <button onClick={() => props.mudarPagina("criarPlaylist")}> Cadastrar Playlist </button>
                <button onClick={() => props.mudarPagina("gerenciarPlaylist")}> Gerenciar Playlists </button>
            </ButtonContainer>
                
        </HeaderContainer>
    )
}

export default Header