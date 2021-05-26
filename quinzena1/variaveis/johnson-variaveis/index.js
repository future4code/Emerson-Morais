// Comentário de linha

/* Comentário
de
bloco */

// Console.log()

// console.log("Bananinha")
// console.log("Salve famíia! Bom dia Johnson!")

// Prompt

// const abobrinha = prompt("Qual seu nome?")
// console.log(abobrinha)

// Variáveis const
// const novaVariavel = 23

// console.log(novaVariavel) // apareceu check

// novaVariavel = 24 // isso dá erro

// console.log(novaVariavel) // nem aparece


// Variáveis let
// let custoPorBrigadeiro = 23
// console.log(custoPorBrigadeiro) // apareceu check

// custoPorBrigadeiro = 24 // isso dá erro
// console.log(custoPorBrigadeiro) // nem aparece

// Console.log com vários argumentos
// const nome = "Bruno"
// const idade = 89

// console.log("Ola!", "Meu nome é", nome, ". E eu tenho", idade, "anos!")


// Exercício 1
// const nome = "Bruno"
// const sobrenome = "Móvio"
// let idade = null
// const checkEstudante = false

// console.log("Meu nome é", nome, sobrenome, ", eu tenho", idade, "anos.", "Status de estudante:", checkEstudante)
// console.log(typeof nome)
// console.log(typeof idade)
// console.log(typeof checkEstudante)


// Exercício 2
// const nome = prompt("Qual o seu nome?")
// const idade = prompt("Qual a sua idade?")

// console.log(typeof nome)
// console.log(typeof idade)


// Conversão Número => String
// const numeroAleatorio = 63
// console.log(numeroAleatorio)
// console.log(typeof numeroAleatorio)

// const numeroAleatorioEmTexto = numeroAleatorio.toString()
// console.log(numeroAleatorioEmTexto)
// console.log(typeof numeroAleatorioEmTexto)

// Conversão String => Number
// const nome = prompt("Qual o seu nome?")
// const idade = Number(prompt("Qual a sua idade?"))

// console.log(typeof nome)
// console.log(typeof idade)

// let horasDeTrabalho = prompt("Quantas horas você trabalha por dia?")
// let SalarioDiario = prompt("Quanto você recebe por dia?")
// alert(`Voce recebe ${horasDeTrabalho/SalarioDiario} por hora`)


// exercício 1

/* const nome = prompt("Qual é o seu nome?")
const idade  = prompt("Qual é a sua idade?")
console.log(typeof nome)
console.log(typeof idade)
console.log(nome)
console.log(idade)
console.log("Olá", nome, "você tem", idade, "anos!") */


// exercício 2

/*const pergunta1 = prompt("Você está vestido?")
const pergunta2 = prompt("Você é humano?")
const pergunta3 = prompt("Você tem algum animal de estimação?")

console.log("Você está vestido?", pergunta1)
console.log("Você é humano?", pergunta2)
console.log("Você tem algum animal de estimação?", pergunta3)*/


//exercicio 3

let a = 10
let b = 25
let c = a

a = b
b = a
b = c

console.log("O novo valor de a é", a)
console.log("O novo valor de b é", b)


