const elementoChute = document.getElementById('chute');

window.SpeechRecognition = window.SpeechRecognition || webkitSpeechRecognition;

const recognition = new SpeechRecognition();
recognition.lang = 'pt-Br';
recognition.start();

recognition.addEventListener('result', onSpeak);

function onSpeak(e) {
    let chute = e.results[0][0].transcript;
    exibeChuteNaTela(chute);
    verificaSeOChuteEValido(chute);
};

function exibeChuteNaTela(chute) {
    elementoChute.innerHTML = `
        <p>Você disse:</p>
        <p class="box">${chute}</p>
    `
}

recognition.addEventListener('end', () => recognition.start())