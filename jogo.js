//cria variáveis
const lvlFacil = 2000;
const lvlMedio = 750;
const lvlDificil = 560;

const v1 = document.querySelector('#v1');
const v2 = document.querySelector('#v2');
const v3 = document.querySelector('#v3');

const cronometro = document.querySelector('.cronometro');
let tempo = 60;
let vidas = 1;

let browserHeight;
let browserWidth;
let posicaoX;
let posicaoY;

//Adapta o tamanho da tela
window.addEventListener('resize', ()=> {
  browserHeight = window.innerHeight;
  browserWidth = window.innerWidth; 
  
  posicaoX = Math.floor(browserWidth * Math.random()) - 90;
  posicaoY = Math.floor(browserHeight * Math.random()) - 90;

  posicaoX = posicaoX < 0 ? 0 : posicaoX;
  posicaoY = posicaoY < 0 ? 0 : posicaoY;

});

//define as regras do jogo
const criaMosca = () =>{
  
  browserHeight = window.innerHeight;
  browserWidth = window.innerWidth; 
  
  posicaoX = Math.floor(browserWidth * Math.random()) - 90;
  posicaoY = Math.floor(browserHeight * Math.random()) - 90;
  
  posicaoX = posicaoX < 0 ? 0 : posicaoX;
  posicaoY = posicaoY < 0 ? 0 : posicaoY;
  
  let mosca = document.createElement('img');
  mosca.src = './assets/imagens/mosca.png';
  mosca.style.top = posicaoY + 'px';
  mosca.style.left = posicaoX + 'px'; 
  mosca.style.position = 'absolute';
  mosca.className = ladoAleatorio() + ' ' + tamanhoAleatorio();
  document.body.appendChild(mosca);
  
  mosca.addEventListener('click', ()=>{
    mosca.remove();
  });
  
  if(mosca) {
    setInterval(() => {
      mosca.remove();
      document.querySelector('#v' + vidas).src = './assets/imagens/coracao_vazio.png';
      vidas++;
    }, 1000);
  
    if(vidas >= 3) {
      clearInterval(criaMosca);
      window.location.href='./game-over.html';
    }

  }  
}

//controla imagem das moscas
const tamanhoAleatorio = () =>{
  const a = Math.floor(Math.random() * 3);
  
  switch(a){
    case 0:
      return 'mosca1';
    case 1:
      return 'mosca2';
    case 2:
      return 'mosca3';
  }
}

const ladoAleatorio = ()=>{
  const a = Math.random() * 2;
  if(a >=1) {
    return 'ladoA';
  } else{
    return 'ladoB'
  }
}

//controla cronometro
setInterval(() => {
  if(tempo > 0){
    tempo--;
    cronometro.textContent = tempo;
  } else {
    window.location.href='./vitoria.html';
  }
}, 1000);

//Inicia o jogo
setInterval(()=>{
  criaMosca();
}, lvlFacil)
