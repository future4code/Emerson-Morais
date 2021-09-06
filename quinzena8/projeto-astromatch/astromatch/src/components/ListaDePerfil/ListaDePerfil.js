import React from "react"
import {ListaContainer, ImagemAleatoria} from "./styled"

export const ListaDePerfil = () => {
    return (
        <ListaContainer>
            <ImagemAleatoria src={"https://picsum.photos/500/500?=6"} />
            <h2> Nome da pessoa</h2>
        </ListaContainer>
    )
}