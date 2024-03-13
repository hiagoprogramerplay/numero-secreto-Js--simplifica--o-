//let título = document.querySelector ('h1');
título.innerHTML = 'Jogo do número secreto';

//let paragráfo = document.querySelector('p');
paragráfo.innerHTML = 'Escolha um número entre 1 e 10'; 

//function verificarChute() {
    console.log('O botão foi clicado!')
//};

let numeroSecreto = gerarNumeroAleatorio();

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;    
};

exibirTextoNaTela('h1', 'Jogo do número secreto');
exibirTextoNaTela('p','Escolha um número entre 1 e 100' );

function verificarChute() {
    console.log(numeroSecreto);
}

function gerarNumeroAleatorio() {
    return parseInt(Math.random() * 10 + 1); 
}