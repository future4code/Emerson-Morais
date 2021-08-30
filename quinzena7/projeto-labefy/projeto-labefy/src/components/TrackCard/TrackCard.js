import React from "react";
import styled from "styled-components";

const TrackCardContainer = styled.div`
   margin: 20px;
   display: flex;
   align-items: center;
   flex-direction: column;
   margin-bottom: 30px;
   
   div {
       display: flex;
       align-items: center;
   }
`
const TrackContainer = styled.h4`
    margin: 15px;

`

const BotaoDeletar = styled.p`
    color: red;
`
const ArtistaContainer = styled.p`
    margin-right: 10px;
`

const TrackCard = (props) => {
    return (
        <TrackCardContainer>
            <div>
                <TrackContainer>{props.trackName} - </TrackContainer>
                <ArtistaContainer>{props.artist}</ArtistaContainer>
                <BotaoDeletar
                    onlick={() => props.excluirMusicaDaPlaylist(props.trackId)}
                > X 
                
                </BotaoDeletar>
            </div>
            <audio controls="controls">
                <source src={props.url} type="audio/ogg" />"
            </audio>
        </TrackCardContainer>
    )
}

export default TrackCard