const livros = require('./lista-livros');

const menorValor = require('./menorValor')

for (let atual = 0 ; atual < livros.length -1 ; atual++){ // -1 pois o ultimo array ja vai ser colocado la como maior na troca anterior e nao tem necessidade de mais um loop.
    let menor = menorValor(livros, atual) //chama a função que vai retornar o indice do menor valor

    let livroAtual = livros[atual] // guarda o valor do livro na posição atual para comparar com o menor valor e fazer a possível troca
        console.log('Livro atual', livros[atual])
    let livroMenorPreco = livros[menor] //usa o resultado da função (menor), pegando o indice da variavel menor para atribuir ao array e atribuir o livro de menor valor nesta variavel
        console.log('livro menor preço', livros[menor])

    livros[atual] = livroMenorPreco; //joga o preço menor pro atual (indice 0) 

    livros[menor] = livroAtual; // pega o valor do indice 0 e passa pro lugar do menor que estava em outro indice.
}
//quando a function recomeçar, ja vai recomeçar pelo indice 1 (for) e o menor ja estara reservado na posição 0.
console.log(livros)