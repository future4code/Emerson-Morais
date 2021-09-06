import React, {useState} from "react"
import { TelaMatchContainer, ListaMatches} from './styled'
import { ListaContainer } from '../../components/ListaDePerfil/styled'
import axios from "axios"
import { useEffect } from "react/cjs/react.development"


export const TelaMatch = () => {
    const [matches, setMatches] = useState([])


    useEffect(() => {
        pegarListaMatches();
    }, []);


    const pegarListaMatches = () => {
        axios
        .get(
            "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/emerson/matches"
        )
        .then((res) => {
            console.log(res)
            setMatches(res.data.matches)

        })
        .catch((err) => {
            console.log(err)
            alert("Erro")
        });
    };

   


    const listaDeMatches = matches.map((listaDeMatches) => {
        return(
            <TelaMatchContainer>
                <ListaMatches>
                    {listaDeMatches}
                </ListaMatches>

            </TelaMatchContainer>
        )
    })
    
    

    return(
        <TelaMatchContainer>
        <ListaMatches>
        {listaDeMatches}
        </ListaMatches>
        </TelaMatchContainer>
    )
}