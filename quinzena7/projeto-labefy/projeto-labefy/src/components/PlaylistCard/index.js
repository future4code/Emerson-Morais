import React from "react";
import styled from "styled-components";

const PlaylistCardContainer = styled.div`
   margin: 20px;
   display: flex;
   align-items: center;
   border-radius: 15px;
`
const NomeContainer = styled.p`
    margin: 15px;

`

const BotaoDeletar = styled.p`
    color: red;
`

const PlaylistCard = (props) => {
    return (
        <PlaylistCardContainer>
           <button onClick={() => props.mudarPagina("playlistDetalhes", props.playlistId)}>Abrir playlist</button>
            <NomeContainer>{props.name}</NomeContainer>
            <BotaoDeletar onClick={() => props.deletarPlaylist(props.playlistId)}>X</BotaoDeletar>
        </PlaylistCardContainer>
    )
}

export default PlaylistCard