/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */

    

      console.log("Seja bem-vindo(a) ao Black Jack!")
   
      

    if(confirm("Deseja iniciar uma nova rodada?")) 
      
      
      if (confirm) {
         console.log("Iniciou uma nova rodada")
         
         let carta1Jogador = comprarCarta()
         let carta2Jogador = comprarCarta()

         let carta1Pc = comprarCarta()
         let carta2Pc = comprarCarta()

         let pontuacaoDoJogador = carta1Jogador.valor + carta2Jogador.valor
         
         let pontuacaoDoPc = carta1Pc.valor + carta2Pc.valor

         
         console.log(`Jogador - cartas ${carta1Jogador.texto} - ${carta2Jogador.texto} - pontuação: ${pontuacaoDoJogador}`)

         console.log(`Computador - cartas ${carta1Pc.texto} - ${carta2Pc.texto} - pontuação: ${pontuacaoDoPc}`)

      

      if (pontuacaoDoJogador > pontuacaoDoPc) {
         console.log("Jogador ganhou!")
         
      } else if (pontuacaoDoPc > pontuacaoDoJogador) {
         console.log("Computador venceu!")

      } else if (pontuacaoDoJogador === pontuacaoDoPc) {
         console.log("Empate!")
      }


   } else {
      console.log("O jogo acabou")
   
   }
    
