import React from 'react'
import styled from 'styled-components'
import PlaylistDetalhes from '../PlaylistDetalhes'
import Playlists from '../Playlists/index'

const GerenciarPlaylistContainer= styled.div`
border-radius: 10px 20px 30px;

`


class GerenciarPlaylist extends React.Component {
    state = {
        paginaAtual: "playlists",
        playlistId: ""
    }

    mudarPagina = (paginaAtual, playlistId) => {
        this.setState({
            paginaAtual: paginaAtual,
            playlistId: playlistId
        })
    }

    render () {
       const renderizarPaginaAtual = () => {
            if (this.state.paginaAtual === "playlists"){
                return <Playlists 
                    mudarPagina={this.mudarPagina}
                />
            } else if (this.state.paginaAtual === "playlistDetalhes") {
                return <PlaylistDetalhes
                    mudarPagina={this.mudarPagina}
                    playlistId={this.state.playlistId}
                />
            }
        }
    return (
        <GerenciarPlaylistContainer>
                {renderizarPaginaAtual()}
        </GerenciarPlaylistContainer>
        );
    };    
};

export default GerenciarPlaylist