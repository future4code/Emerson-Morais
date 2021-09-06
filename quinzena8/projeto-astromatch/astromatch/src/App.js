import React from "react"
import { TelaInicial } from "./paginas/TelaInicial"
import { TelaMatch} from "./paginas/TelaMatch"
import { useState } from "react"


const App = () => {
  const [paginaAtual, setPaginaAtual] = useState("home")

const mudarPagina = () => {
  if(paginaAtual === "home") {
    setPaginaAtual("matches")
  } else {
    setPaginaAtual("home")
  }
}

const limparMatches = () => {
  console.log("limpar matches")

}


    return(
      <div>
        {paginaAtual === "home" ? <TelaInicial /> : <TelaMatch />}
        <button onClick={mudarPagina}>{paginaAtual === "home" ? "Ir para Matches" : "Ir para Home"}</button>
        <button onClick={limparMatches}>Limpar matches</button>
      </div>
    )
 }

 export default App