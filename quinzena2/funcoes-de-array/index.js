// Exercícios de interpretação de código

// 1. a) Vai mapear os array em 0, 1 e 2 respectivamente.

// 2. b) Vai retornar apenas os nomes do array: Amanda Rangel, Laís Petra e Letícia Chijo.

// 3. a) Vai retornar somente os apelidos Mandi e Laura.


// Exercícios de escrita de código

// a) 

const pets = [
    { nome: "Lupin", raca: "Salsicha"},
    { nome: "Polly", raca: "Lhasa Apso"},
    { nome: "Madame", raca: "Poodle"},
    { nome: "Quentinho", raca: "Salsicha"},
    { nome: "Fluffy", raca: "Poodle"},
    { nome: "Caramelo", raca: "Vira-lata"},
 ]

 const pegarNomes = (pet) => {
     return pet.nome
 }

 const nomeDosPets = pets.map(pegarNomes)
 console.log(nomeDosPets) 

 
 // b)

 const pegarRacaSalsicha = pets.filter((pet, indice, array) => {
     return pet.raca === "Salsicha"
 })

 console.log(pegarRacaSalsicha) 

 
 // c)

 const petsPoodle = pets.filter((tipo) => {
     return tipo.raca === "Poodle"
 })
console.log(petsPoodle)

const mensagemDonosPoodle = petsPoodle.map((tipo) => {
    return `Você ganhou um cupom de desconto de 10% para tosar o/a ${tipo.nome}`
})

console.log(mensagemDonosPoodle)




 // 2. 
 
 const produtos = [
   { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
   { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
   { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
   { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
   { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
   { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
   { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
   { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
   { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
   { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }

 ]
 //     a) 

 const produtosNome = produtos.filter((produto) => {
    return produto.nome
})

const nomeDosProdutos= produtosNome.map((produto) => {
    return produto.nome
})

console.log("Produtos:", nomeDosProdutos)

//  b)

/* const preçoComDesconto = produtos.map((item => {

 let novoValorProduto = {
    nome : item.nome, preco
    preco : (item.preco - (item.preco * 0.05)).toFixed(2)

}

let listaNovoValorProduto = []
listaNovoValorProduto.push(novoValorProduto)
return listaNovoValorProduto

})

console.log(preçoComDesconto)  */



/* const preçoProdutosComDesconto = produtos.map((item) =>{
    return {nome: item.nome, preco: 0.95 * item.preco} })

    console.log(preçoProdutosComDesconto)  */


// c)

/* const produtoBebida = produtos.filter((produto) => {
    return produto.categoria === "Bebidas"

})

console.log("Bebidas:", produtoBebida)   */


// d)

/* let listaProdutos = produtos.filter((produto) => {
   return produto.nome.includes("Ypê")
  //if (produto.nome.includes("Ypê")) {
    //return produto.nome
  //}
  //return
})

console.log(listaProdutos) */

// e)

/* let listaProdutos2 = produtos.filter((inputProduto) => {
    return inputProduto.nome.includes("Ypê")
   //if (produto.nome.includes("Ypê")) {
     //return produto.nome
   //}
   //return
 })
 
 console.log(listaProdutos2)  */


