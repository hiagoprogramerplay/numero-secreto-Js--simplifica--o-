let listaDeNumerosSorteados = [];
let numeroLimite = 10;
let numeroSecreto = 13; //gerarNumeroAleatorio();
let tentativas = 1;

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2});
}

function exibirMensagemInicial() {
    exibirTextoNaTela('h1', 'Jogo DO Adivinha');
    exibirTextoNaTela('p','ACERTE A DATA DO NOSSO CASAMENTO');
}

exibirMensagemInicial();

function verificarChute() {
    let chute =  document.querySelector('input').value;   
    if (chute == numeroSecreto) {
        
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativas = `Você descobriu com ${tentativas} ${palavraTentativa} PARABÉNS!!!`;

        exibirTextoNaTela('p', mensagemTentativas);
        exibirTextoNaTela('h1', 'acertou!');
        
        document.getElementById('reiniciar2').removeAttribute('disabled');
    } else {
        if (chute > numeroSecreto) {
            exibirTextoNaTela('p', 'O número secreto é menor');
        } else {
            exibirTextoNaTela('p', 'O número secreto é maior');
        }
        tentativas = tentativas + 1;
        limparCampo();
    }
}
function gerarNumeroAleatorio() {
   let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1); 
   let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length;

   if (quantidadeDeElementosNaLista == numeroLimite) {
    listaDeNumerosSorteados = [];
    
   }
   if (listaDeNumerosSorteados.includes(numeroEscolhido)) {
        return gerarNumeroAleatorio();
   } else {
        listaDeNumerosSorteados.push(numeroEscolhido);
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
    exibirMensagemInicial();    
    document.getElementById('reiniciar2').setAttribute('disabred', true);
}