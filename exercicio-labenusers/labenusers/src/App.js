import React from 'react'
import TelaDeCadastro from './Components/TelaDeCadastro'
import TelaListaDeUsuarios from './Components/TelaListaDeUsuarios'
import styled from 'styled-components'

const ContainerApp = styled.div `
border: 1px solid white;
height: 400px;
width: 300px;
margin: 0 auto;
border-radius: 10px;
`

export default class App extends React.Component {
  state = {
    telaAtual: "cadastro"
  }

  escolherTela = () => {
    switch(this.state.telaAtual) {
      case "cadastro":
        return <TelaDeCadastro irParaLista={this.irParaLista} />
        case "lista":
          return <TelaListaDeUsuarios irParaCadastro={this.irParaCadastro} />
          default:
            return <div> Erro!</div>
    }
  }

  irParaCadastro = () => {
    this.setState({telaAtual: "cadastro"})
  }

  irParaLista = () => {
    this.setState({telaAtual: "lista"})
  }

render(){
  return (
    <ContainerApp>
      {this.escolherTela()}
    </ContainerApp>
  )
}
}