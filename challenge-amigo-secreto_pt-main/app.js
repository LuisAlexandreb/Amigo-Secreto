let listaAmigos = document.getElementById('listaAmigos');
let resultado = document.getElementById('resultado');
let inputAmigo = document.getElementById('amigo');

let amigos = [];

function adicionarAmigo() {
  let nomeAmigo = inputAmigo.value.trim();

  if (nomeAmigo === '') {
    alert('Por favor, insira um nome.');
    return;
  }

  if (amigos.includes(nomeAmigo)) {
    alert('Este nome já foi adicionado.');
    return;
  }

  amigos.push(nomeAmigo);

  let li = document.createElement('li');
  li.textContent = nomeAmigo;
  listaAmigos.appendChild(li);

  inputAmigo.value = '';
}

function sortearAmigo() {
  if (amigos.length < 2) {
    alert('É necessário adicionar pelo menos dois amigos.');
    return;
  }

  let amigosCopia = [...amigos];
  let sorteio = {};

  amigos.forEach(amigo => {
    let indiceAleatorio = Math.floor(Math.random() * amigosCopia.length);
    let amigoSecreto = amigosCopia[indiceAleatorio];
    amigosCopia.splice(indiceAleatorio, 1);
    sorteio[amigo] = amigoSecreto;
  });

  resultado.innerHTML = '';

  for (let amigo in sorteio) {
    let li = document.createElement('li');
    li.textContent = `${amigo} tirou: ${sorteio[amigo]}`;
    resultado.appendChild(li);
  }

  listaAmigos.style.display = 'none';
  resultado.style.display = 'block';
}