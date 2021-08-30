import { render } from '@testing-library/react'
import React from 'react'
import axios from 'axios'
import styled from 'styled-components'

const ContainerCadastro = styled.div`
display: grid;
grid-template-rows: 1fr 3fr 1fr 1fr 3fr;
height: 100%;
width: 100%;
align-items: center;
padding: 10px;
justify-content: space-between;
justify-items: center;


`
const TituloApp = styled.h2`
    color: black;
    margin-left: 50px;


`

export default class TelaDeCadastro extends React.Component{
    state = {
        nome: "",
        email: "",
    }

    handleNome = (event) => {
        this.setState({nome: event.target.value})
    }

    handleEmail = (event) => {
        this.setState({email: event.target.value})
    }

    fazerCadastro = () => {
        const url = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users"
        const body = {
            name: this.state.nome,
            email: this.state.email
        }

        axios.post(url, body, {
            headers: {
                Authorization: "emerson-morais"
            }
        })
       .then((res) => {
           alert ("Usuário cadastrado com sucesso!")
           this.setState({nome:"", email: "",})

       })

       .catch((err) => {
           alert (err.response.data.messase)
       })
    }

    render() {
        return(
            <ContainerCadastro> 

            <button onClick={this.props.irParaLista}>Lista de usuários cadastrados </button>
            <TituloApp> Tela de cadastro </TituloApp>
            <input placeholder={"Nome"}
            value={this.state.nome}
            onChange={this.handleNome}        
            />
            <input placeholder={"E-mail"}
            value={this.state.email}
            onChange={this.handleEmail}
            />
            <button onClick={this.fazerCadastro}> Cadastrar </button>
            </ContainerCadastro>
        )
    }
}