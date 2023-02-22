function calcularNovoPreco(precoOriginal: number, taxaReajuste: number) : number{ //:number declara que o retorno deve ser number
    let novoPreco = precoOriginal * ( 1 + taxaReajuste / 100);
    return novoPreco;
}


let precoAjustado = calcularNovoPreco(100, -50); // passa os valores de parametro para a função

console.log(precoAjustado); //imprime o valor do preco ajustado