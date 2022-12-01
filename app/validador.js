function verificaSeOChuteEValido(chute) {
    const numero = +chute;

    if (chute === 'game over') {
        document.body.innerHTML = `
            <h2>Game over!!!</h2>
            <h3>O número secreto era ${numeroSecreto}</h3>

            <button id="jogar-novamente" class="btn-jogar">Jogar novamente</button>
        `;
        document.body.classList.add('game-over');   
    }

    if (Number.isNaN(numero)) {
        elementoChute.innerHTML = `<p>Valor inválido</p>`;
        return
    };

    if (numero > maiorVlr || numero < menorVlr) {
        elementoChute.innerHTML = `<p>Valor inválido: Fale um número entre ${menorVlr} e ${maiorVlr}</p>`;
        return
    };

    if (numero === numeroSecreto) {
        document.body.innerHTML = `
            <h2>Você acertou!!!</h2>
            <h3>O número secreto era ${numeroSecreto}

            <button id="jogar-novamente" class="btn-jogar">Jogar novamente</button>
        `
    } else if (numero > numeroSecreto) {
        elementoChute.innerHTML = '<p>O número secreto é menor <i class="fa-solid fa-arrow-down-long"></i></p>' 
    } else {
        elementoChute.innerHTML = '<p>O número secreto é maior <i class="fa-solid fa-arrow-up-long"></i></p>'
    };
};

document.body.addEventListener('click', (e) => {
    if (e.target.id === 'jogar-novamente') {
        window.location.reload();
    }
})