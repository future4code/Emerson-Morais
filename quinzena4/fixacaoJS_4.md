´´´function contaOcorrencias(arrayDeNumeros, numeroEscolhido) {
  let ocorrencias = 0
  
  for(let numero of arrayDeNumeros) {
    if(numero === numeroEscolhido) {
      ocorrencias++
    }
  }
  
  if(ocorrencias === 0) {
    return "Número não encontrado"
  }
  
  return `O número ${numeroEscolhido} aparece ${ocorrencias}x`
} ´´´