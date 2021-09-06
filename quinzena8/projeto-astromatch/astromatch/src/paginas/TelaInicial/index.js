import React, { useState, useEffect} from 'react'
import { TelaContainer, Perfil, ImagemPerfil} from './styled'
import axios from 'axios'

export const TelaInicial = (props) => {
    const [profile, setProfile] = useState({})

    const url = "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/emerson-morais-johnson/person"

    useEffect(() =>{
        pegarPerfil()
    }, [])

    
    const pegarPerfil = () => {
        axios.get(url)
        .then((res) => {
            setProfile(res.data.profile)
        })

        .catch((err) => {
            console.log(err.response)
        })

    }

    const escolherPessoa = () => {
        axios
          .post(
            "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/emerson/choose-person",
            {
              id: profile.id,
              choice: true,
            }
          )
          .then((res) => {
            pegarPerfil();
          })
          .catch((err) => {
            alert("Erro ao curtir o perfil", err);
          });
      };
    
      const recusarPessoa = () => {
        axios
          .post(
            "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/emerson/choose-person",
            {
              id: profile.id,
              choice: false,
            }
          )
          .then((res) => {
            pegarPerfil();
        
          })
          .catch((err) => {
            alert("Erro ao dispensar o perfil", err);
          });
      };
    

    return(
      <TelaContainer>
          {!profile ? <div>Acabaram os perfis. Limpe os matches!</div> : 
          <Perfil>
              <ImagemPerfil src={profile.photo} />
              <h2> {profile.name}, {profile.age} </h2>
              <p> {profile.bio} </p>
              <div>
                  <button onClick={recusarPessoa}> X </button>
                  <button onClick={escolherPessoa}> ♥ </button >
              </div>
          </Perfil>
        }
      </TelaContainer>
    )

}