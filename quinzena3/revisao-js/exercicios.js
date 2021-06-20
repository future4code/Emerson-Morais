// EXERCÍCIO 01
function inverteArray(array) {

  const arrayInverso = []
  for (let i = array.length - 1; i >= 0; i--) {
    arrayInverso.push(array[i])
  }
  return arrayInverso



}

// EXERCÍCIO 02
function retornaNumerosParesElevadosADois(array) {

  const filtrarNumeroPar = array.filter((inputArray) => {
    return inputArray % 2 === 0
  })
  const elevarPar = filtrarNumeroPar.map((inputArray) => {
    return inputArray ** 2
  })
  return elevarPar

}

// EXERCÍCIO 03
function retornaNumerosPares(array) {

  const filtrarNumeroPar2 = array.filter((inputArray) => {
    return inputArray % 2 === 0
  })
  return filtrarNumeroPar2


}

// EXERCÍCIO 04
function retornaMaiorNumero(array) {

  let maior = 0
  array.forEach((element, index) => {
    if (maior < array[index]) {
      maior = element
    }
  });
  return maior

}

// EXERCÍCIO 05
function retornaQuantidadeElementos(array) {
  return array.length  
}

// EXERCÍCIO 06
function retornaExpressoesBooleanas() {

    const booleano2 = false
    const booleano3 = !booleano2
    const booleano4 = !booleano3
    let expressoes = []
    respostas.length = 5
    for (let i = 0; i < respostas.length; i++) {
      switch (i) {
        case 0:
          respostas[i] = (booleano1 && booleano2 && !booleano4)
          break;
        case 1:
          respostas[i] = ((booleano1 && booleano2) || !booleano3)
          break;
        case 2:
          respostas[i] = (booleano2 || booleano3) && (booleano4 || booleano1)
          break;
        case 3:
          respostas[i] = (!(booleano2 && booleano3) || !(booleano1 && booleano3))
          break;
        case 4:
          respostas[i] = (!(booleano1) && !(booleano3) || (!booleano4 && booleano3 && booleano3))
          break;
        default:
          break;
      }
    }
    
    return expressoes


}

// EXERCÍCIO 07
function retornaNNumerosPares(n) {

  const numerosPares = []
  for (let i = 0; i < n * 2; i++) {
    if (i % 2 === 0) {
      primeirosNumerosPares.push(i)
    }
  }
  return numerosPares

}

// EXERCÍCIO 08
function checaTriangulo(a, b, c) {
  if (a === b && b === c) {
    return 'Equilátero'
  } else if (a === b || b === c || c === a) {
    return 'Isósceles'
  } else {
    return ('Escaleno')
  
  }

// EXERCÍCIO 09
function comparaDoisNumeros(num1, num2) {
  // Formato do objeto a ser retornado:
  // {
  //   maiorNumero: X,
  //   maiorDivisivelPorMenor: Y,
  //   diferenca: Z
  // }

  let maior = num1
  let menor = num1
  if (num2 > maior) {
    maior = num2
  }
  if (num2 < menor) {
    menor = num2
  }
  let Y = maior % menor === 0
  let diferencaNum = Number(maior - menor)
  return { 'maiorNumero': maior, 'maiorDivisivelPorMenor': Y, 'diferenca': diferencaNum }


}

// EXERCÍCIO 10
function segundoMaiorEMenor(array) {

}

// EXERCÍCIO 11
function ordenaArray(array) {

}

// EXERCÍCIO 12
function filmeFavorito() {

  const favoritoDoAstrodev = {
    nome: 'Questão de Tempo',
    ano: 2013,
    diretor: 'David Richard Curtis',
    atores: [`Domhnall Gleeson`, `Bill Nighy`, `Richard Curtis`]
  }
  return favoritoDoAstrodev



}

// EXERCÍCIO 13
function imprimeChamada() {
  // "Venha assistir ao filme NOME_DO_FILME, de ANO, dirigido por DIRECAO e estrelado por ELENCO."

  const chamadaFavorito = filmeFavorito()
  return (`Venha assistir ao filme ${chamadaFavorito.nome}, de ${chamadaFavorito.ano}, dirigido por 
  ${chamadaFavorito.diretor} e estrelado por ${chamadaFavorito.atores.join(', ')}.`)

}

// EXERCÍCIO 14
function criaRetangulo(lado1, lado2) {

  const retangulo = {
    largura: lado1,
    altura: lado2,
    perimetro: (2 * Number(lado1 + lado2)),
    area: Number(lado1 * lado2)
  }
  return retangulo


}

// EXERCÍCIO 15
function anonimizaPessoa(pessoa) {

  const informacoesPessoais = {
    ...pessoa,
    nome: 'anômimo'
  }
  return informacoesPessoais

}

// EXERCÍCIO 16A
function maioresDe18(arrayDePessoas) {

  const resultado = arrayDePessoas.filter((parametros) => {
    return parametros.idade >= 18
  })
  return resultado

}

// EXERCÍCIO 16B
function menoresDe18(arrayDePessoas) {
  const resultado = arrayDePessoas.filter((parametros) => {
    return parametros.idade < 18
  })
  return resultado

}

// EXERCÍCIO 17A
function multiplicaArrayPor2(array) {

  const resultado = array.map((parametro) => {
    return parametro * 2
  })
  return resultado

}

// EXERCÍCIO 17B
function multiplicaArrayPor2S(array) {

  const resultado = multiplicaArrayPor2(array)
  const resultado2 = resultado.map((input) => {
    return input.toString()
  })
  return resultado2

}

// EXERCÍCIO 17C
function verificaParidade(array) {

  const resultado = array.map((input) => {
    if (input % 2 === 0) {
      return `${input} é par`
    } else {
      return `${input} é ímpar`
    }
  })
  return resultado


}

// EXERCÍCIO 18A
function retornaPessoasAutorizadas(pessoas) {
  
  const filtrarPessoas = pessoas.filter((input) => {
    if ((input.altura >= 1.5) && (input.idade > 14) && (input.idade < 60)) {
      return input
    }
  })
  return filtrarPessoas


}

// EXERCÍCIO 18B
function retornaPessoasNaoAutorizadas(pessoas) {

  const filtrarPessoas = pessoas.filter((input) => {
    if (!((input.altura >= 1.5) && (input.idade > 14) && (input.idade < 60))) {
      return input
    }
  })
  return filtrarPessoas

}

// EXERCÍCIO 19A
function ordenaPorNome(consultasNome) {

}

// EXERCÍCIO 19B
function ordenaPorData(consultasData) {

}

// EXERCÍCIO 20
function calculaSaldo(contas) {

  for (let i=0; i<contas.length; i++){
    let soma
    soma = 0
    for (creditos of contas[i].compras){
      soma += Number(creditos)
    }
    contas[i].saldoTotal = contas[i].saldoTotal - soma
    console.log (contas[i].saldoTotal)
  }
  return contas

}}
