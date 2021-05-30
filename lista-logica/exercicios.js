// Exemplos

// Exercício 0A
function soma() {
  // escreva seu código aqui
  const num1 = prompt('Digite o primeiro número')
  const num2 = prompt('Digite o segundo número')

  console.log(Number(num1) + Number(num2))
}

// Exercício 0B
function imprimeMensagem() {
  // escreva seu código aqui
  const mensagem = prompt('Digite sua mensagem')

  console.log(mensagem)
}

// ---------------------------------------------------
// Exercícios

// Exercício 1
function calculaAreaRetangulo() {
  
  let altura = Number(prompt("Qual a sua altura?"))
  let largura = Number(prompt("Qual a sua largura?"))
  console.log(altura * largura)

}

// Exercício 2
function imprimeIdade() {
  
  let anoAtual = Number(prompt("Em que ano estamos?"))
  let anoNascimento = Number(prompt("Qual é o ano do seu nascimento?"))
  console.log(anoAtual - anoNascimento)

}

// Exercício 3
function calculaIMC() {
  
  let peso = Number(prompt("Quantos kg você pesa?"))
  let altura = Number(prompt("Qual é a sua altura?"))
  console.log(peso / (altura * altura))

}

// Exercício 4
function imprimeInformacoesUsuario() {
  
const nome = prompt("Qual é o seu nome?")
const idade = prompt("Qual a sua idade?")
const email = prompt("Qual é o seu email?")
console.log(`Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}.`)

}

// Exercício 5
function imprimeTresCoresFavoritas() {

  const cor1 = prompt("Qual é a sua cor favorita número 01?")
  const cor2 = prompt("Qual é a sua segunda cor favorita?")
  const cor3 = prompt("Qual é a sua terceira cor favorita?")
  console.log([cor1, cor2, cor3])

}

// Exercício 6
function retornaStringEmMaiuscula() {
  
  const frase = prompt("Digite uma frase de sua preferência:")
  console.log(frase.toUpperCase())

}

// Exercício 7
function calculaIngressosEspetaculo() {

  const custoEspetaculo = Number(prompt("Qual o custo total da peça OS MISERÁVEIS?"))
  const valorIngresso = Number(prompt("Qual o valor individual dos ingressos?"))
  console.log(custoEspetaculo / valorIngresso)

}

// Exercício 8
function checaStringsMesmoTamanho() {
  
  const string1 = prompt("Escreva uma palavra:")
  const string2 = prompt("Escreva outra palavra:")
  console.log(string1.length === string2.length)


}

// Exercício 9
function checaIgualdadeDesconsiderandoCase() {
  
  const fruta1 = prompt("Digite o nome da sua fruta favorita:")
  const fruta2 = prompt("Digite o nome de outra fruta:")
  console.log(fruta1.toUpperCase() === fruta2.toUpperCase()) 

}

// Exercício 10
function checaRenovacaoRG() {
  
  const anoAtual = prompt("Em que ano estamos?")
const anoNascimento = prompt("Em que ano você nasceu?")
const anoIdentidade = prompt("Em que ano sua carteira de identidade foi emitida?")

const idade = anoAtual - anoNascimento
const id = anoAtual - anoIdentidade

console.log((idade<=20&&id>=5||(idade>20&&idade<=50&&id>=10)||(idade>50&&id>=15)))

}

// Exercício 11
function checaAnoBissexto() {
  
  const anoAtual = prompt("Digite um ano:")
const resultado = (anoAtual % 400 ==0) || (anoAtual % 4 == 0 && anoAtual % 100 != 0)

console.log(resultado)

}

// Exercício 12
function checaValidadeInscricaoLabenu() {
  
  const idade = (prompt("Você tem mais de 18 anos?"))
const ensinoMedio = (prompt("Você possui ensino médio completo?"))
const disponibilidade = (prompt("Você possui disponibilidade exclusiva durante os horários do curso?"))

console.log((idade =="sim" && ensinoMedio== "sim" && disponibilidade== "sim"))
}