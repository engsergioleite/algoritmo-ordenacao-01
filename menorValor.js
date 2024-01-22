const livros = require('./lista-livros');

function menorValor(arrProdutos, posicaoInicial){
    let maisBarato = posicaoInicial; //esta se referindo a posicao do array 

    for (let atual = posicaoInicial ; atual < arrProdutos.length ; atual++){
        if (arrProdutos[atual].preco < arrProdutos[maisBarato].preco){
            maisBarato = atual
        }
    }
    return maisBarato; // retornará a variável maisbarato, que será uma posição no array.     
}

module.exports = menorValor