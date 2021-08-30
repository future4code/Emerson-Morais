import React from 'react'
import styled from 'styled-components'
import axios from 'axios'
import { baseUrl } from '../../constants/index'
import { axiosConfig } from '../../constants/index'

const CriarPlaylistContainer= styled.div`
display: flex;
flex-direction: column;
align-items: center;
height: 500px;
border-radius: 10px 20px 30px;
`

const CriarPlaylistFomulario = styled.form`
display: flex;
flex-direction: column;
align-items: center;
height: 100px;
justify-content: space-around;
border-radius: 10px 20px 30px;
`

class CriarPlaylist extends React.Component {
    state = {
        inputNameValue: "",
    }

    changeInputNameValue = (e) => {
        this.setState({inputNameValue: e.target.value})
    }

    criarPlaylistFuncao = (e) => {
        e.preventDefault()
        const body = {
            name: this.state.inputNameValue
        }
        axios.post(baseUrl, body, axiosConfig).then( () => {
            alert("Playlist cadastrada!")
        }).catch(err => { 
            console.log(err)
        })
        this.setState({inputNameValue: ""})
    };
    


    render () {
    return (
        <CriarPlaylistContainer>
            <h1>Cadastrar nova playlist</h1>
                <CriarPlaylistFomulario onSubmit={this.criarPlaylistFuncao}>
                <label> Cadastrar playlist </label>
                <input 
                    placeholder="Nome da playlist"
                    value={this.state.inputNameValue}
                    type="text"
                    onChange={this.changeInputNameValue}
                />
                <button type="submit"> Cadastrar playlist </button>
                </CriarPlaylistFomulario>
        </CriarPlaylistContainer>
    );
    };
};

export default CriarPlaylist