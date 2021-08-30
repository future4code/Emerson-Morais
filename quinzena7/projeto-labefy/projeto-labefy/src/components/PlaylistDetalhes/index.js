import React from 'react'
import styled from 'styled-components'
import TrackCard from '../TrackCard/TrackCard'
import axios from 'axios'
import { baseUrl, axiosConfig } from '../../constants/index'


const PlaylistDetalhesContainer= styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 15px;
`
const FormularioDeCriarMusica = styled.form`
    display: flex;
    width: 100vw;
    height: 100px;
    align-items: center;
    justify-content: center;
    border-radius: 15px;
`

class PlaylistDetalhes extends React.Component {
    state = {
        tracks: [],
        trackName: "",
        artist: "",
        url: "",
    };

    componentDidMount = () => {
        this.pegarMusicas()
    };

    pegarMusicas = () => {
        axios.get(`${baseUrl}/${this.props.playlistId}/tracks`, axiosConfig).then(response => {
            this.setState({tracks: response.data.result.tracks})
        }).catch(err => {
            console.log(err)
        });
    };


    excluirMusicaDaPlaylist = (trackId) => {
        axios.delete(`${baseUrl}/${this.props.playlistId}/tracks/${trackId}`, axiosConfig).then(response => {
            this.pegarMusicas()
        }).catch(err => {
            console.log(err)
        });
    };


    changeInputValues = (e) => {
        this.setState( {[e.target.name]: e.target.value} )
    }


    adicionarMusicaNaPlaylist = (e) => {
        e.preventDefault()

        const body = {
            name: this.state.trackName,
	        artist: this.state.artist,
            url: this.state.url
        }
        axios.post(`${baseUrl}/${this.props.playlistId}/tracks`, body, axiosConfig).then( () => {
            this.pegarMusicas();
            this.setState({trackName: "", artist: "", url: ""});
        }).catch(err => {
            console.log(err)
        })
    }

    render () {
        const tracks = this.state.tracks.map(track => {
            return <TrackCard 
                key={track.id}
                trackName={track.name}
                artist={track.artist}
                url={track.url}
                trackId={track.id}
                excluirMusicaDaPlaylist={this.excluirMusicaDaPlaylist}
            />
            
        })
    return (
        <PlaylistDetalhesContainer>
            <FormularioDeCriarMusica onSubmit={this.adicionarMusicaNaPlaylist}>
                <div>
                    <label> Nome da música: </label>
                    <input 
                        placeholder="Nome da música"
                        name="trackName"
                        value={this.setState.trackName}
                        onChange={this.changeInputValues}
                    />
                </div>
                <div>
                    <label> Artista: </label>
                    <input 
                        placeholder="Nome do artista "
                        name="artist"
                        value={this.setState.artist}
                        onChange={this.changeInputValues}
                    />
                </div>
                <div>
                    <label> URL: </label>
                    <input 
                        placeholder="URL da música"
                        name="url"
                        value={this.state.url}
                        onChange={this.changeInputValues}
                    />
                </div>
                <button type="submit"> Adicionar música </button>
            </FormularioDeCriarMusica>
                {tracks}
                <button onClick={() => this.props.mudarPagina("playlists", "")}> Voltar para playlists </button>
        </PlaylistDetalhesContainer>
        );
    };    
};

export default PlaylistDetalhes