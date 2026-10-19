// Programa para controlar uma lista de produtos de um mercado. 
// O programa cadastra produtos, verifica se existem na lista e filtra os nomes com mais de 5 letras.

// Criação de array com 10 produtos iniciais
let produtos = ["Arroz","Feijao","Macarrao","Leite","Acucar","Cafe","Chocolate","Biscoito","Manteiga","Detergente"];

// Exibindo a lista original de produtos
console.log("Lista original de produtos:");
console.log(produtos);

// Utilizando push() para cadastrar novos produtos
produtos.push("Farinha");
produtos.push("Refrigerante");

// Exibindo a lista atualizada após os cadastros
console.log("Lista atualizada com novos produtos:");
console.log(produtos);

// Utilizando includes() para verificar se um produto existe
let produtoBuscado = "Leite";

if (produtos.includes(produtoBuscado)) {
    // Mensagem exibida se o produto for encontrado
    console.log("O produto " + produtoBuscado + " está cadastrado!");
} else {
    // Mensagem exibida se o produto não for encontrado
    console.log("O produto " + produtoBuscado + " não está cadastrado!");
}

// Verificando um produto que não está na lista
let outroProduto = "Queijo";

if (produtos.includes(outroProduto)) {
    console.log("O produto " + outroProduto + " está cadastrado!");
} else {
    console.log("O produto " + outroProduto + " não está cadastrado!");
}

// Utilizando filter() para criar uma nova lista
// contendo apenas produtos com mais de 5 letras
let produtosFiltrados = produtos.filter(function(produto) {
    return produto.length > 5;
});
// Exibindo o array original e o array filtrado
console.log("Array original de produtos:");
console.log(produtos);

console.log("Array filtrado (nomes com mais de 5 letras):");
console.log(produtosFiltrados);
