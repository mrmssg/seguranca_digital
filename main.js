const numeroSenha = document.querySelector('.parametro-senha__texto');
let tamanhoSenha = 12;
numeroSenha.textContent = tamanhoSenha;

const botoes = document.querySelectorAll('.parametro-senha__botao');

botoes[0].onclick = diminuiTamanho;

function diminuiTamanho(){ 
    if(tamanhoSenha >1){
    tamanhoSenha--;
    }
   numeroSenha.textContent = tamanhoSenha
}

botoes[1].onclick = aumentaTamanho;

function aumentaTamanho(){
    if(tamanhoSenha <20){
    tamanhoSenha ++;
    }
    numeroSenha.textContent = tamanhoSenha

}