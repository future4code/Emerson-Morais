import React from 'react'
import axios from 'axios'
import styled from 'styled-components'

const CardUsuario = styled.div`
    border: 1px solid blue;
    padding: 15px;
    margin: 10px;
    width: 250px;
    display: flex;
    justify-content: space-between;
`

const TituloLista = styled.h2`
    margin-left: 50px;

`

export default class TelaListaDeUsuarios extends React.Component{

    state = {
        usuarios: []
    }

    componentDidMount () {
        this.pegarUsuarios()
    }

    pegarUsuarios = () => {
        const url = 'https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users'
        axios.get(url, {
            headers: {
                Authorization: "emerson-morais"
            }
        })
        .then((res) => {
            this.setState({usuarios: res.data})
        })
        .catch((err) => {
            alert ("Erro. tente novamente!")
        })
    }


    deletarUsuario = (id) => {
        const url = `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${id}`
        axios.delete(url, {
            headers: {
                Authorization: "emerson-morais"
            }
        })
        .then((res) => {
            alert ("Usuário deletado")
            this.pegarUsuarios()
        })

        .catch((err) => {
            alert("Erro ao deletar usuário")
        })
    }



    render() {
        console.log(this.state.usuarios)
        const listaUsuarios = this.state.usuarios.map((user) => {
            return <CardUsuario key={user.id}> 
            {user.name} 
            <button onClick={() => this.deletarUsuario(user.id)}>x</button>
            </CardUsuario>
        })

        return(
            <div> 

                <button onClick={this.props.irParaCadastro}>Voltar para tela de cadastro</button>
                <TituloLista>Lista de usuários</TituloLista>
                {listaUsuarios}
            </div>
        )
    }
}