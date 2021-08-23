import React from 'react';
import styled from 'styled-components';
import Header from './components/Header';
import GerenciarPlaylist from './components//GerenciarPlaylist/index'
import CriarPlaylist from './components/CriarPlaylist/index'


const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  background-color: grey;

`


class App extends React.Component {
  
  state = {
    paginaAtual: "gerenciarPlaylist"
  }

mudarPagina = (paginaAtual) => {
  this.setState({paginaAtual: paginaAtual })
}

  render () {
    const renderizarPaginaAtual = () => {
      if (this.state.paginaAtual === "criarPlaylist") {
        return <CriarPlaylist />
      } else if (this.state.paginaAtual === "gerenciarPlaylist") {
        return <GerenciarPlaylist />
      }
    }

    return (
    <AppContainer>
      <Header 
      mudarPagina={this.mudarPagina}
      />
      {renderizarPaginaAtual()}

    </AppContainer>
  );
  }  
}

export default App;
