let listaDeNumerosSorteados = [];
let numeroLimite = 10;
let numeroSecreto = gerarNumeroAleatorio();
let  tentativas = 1;

function exibirTextoNatela(teg, texto) {
    let campo = document.querySelector(teg);
    campo.innerHTML = texto;
    responsivevoice.speak(texto, 'Brazilian Portuguese Female',  {rate:1.2});
}

function exibirMensagenInicial() {
    exibirTextoNatela('h1', 'Jogo do número secreto');
    exibirTextoNatela('p', 'Escolha um número entre 1 e 10');
}

exibirMensagenInicial();

function  verificarChute()  {
   let chute = document.querySelector('input').value;
   console.log(chute == numeroSecreto);
   if (chute == numeroSecreto) {
    exibirTextoNatela('h1', 'Parabéns!');
    let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
    let mensagemTentativas = `Você descubriu o número secreto com ${tentativas} ${palavraTentativa}!`;
    exibirTextoNatela('p', mensagemTentativas);
     document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
    if (chute > numeroSecreto) {
        exibirTextoNatela('p', 'O número secreto é menor');
    } else {
       exibirTextoNatela('p', 'Onumero secreto é maior');
    }
    tentativas++;
    limparCampo();
  }
}
function gerarNumeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random() * 10 + 1);
    let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length;

    if (quantidadeDeElementosNaLista == numeroLimite) {
        listaDeNumerosSorteados = [];
    }

    if (listaDeNumerosSorteados.includes(numeroEscolhido)) {
        return gerarNumeroAleatorio();
    } else {
        listaDeNumerosSorteados.push(numeroEscolhido);
        console.log(listaDeNumerosSorteados)
        return numeroEscolhido;
    }
}

function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '';
}


function reiniciarJogo() {
   numeroSecreto = gerarNumeroAleatorio();
   limparCampo();
   tentativas = 1;
   exibirMensagenInicial();
   document.getElementById('reiniciar').setAttribute('disabled', true);
}