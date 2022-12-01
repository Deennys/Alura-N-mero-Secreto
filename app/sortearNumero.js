const menorVlr = 1;
const maiorVlr = 1000;
const numeroSecreto = gerarNumeroAleatorio();

function gerarNumeroAleatorio() {
    return parseInt(Math.random() * maiorVlr + 1);
}

document.querySelector("#menor-valor").innerHTML = menorVlr;
document.querySelector("#maior-valor").innerHTML = maiorVlr;