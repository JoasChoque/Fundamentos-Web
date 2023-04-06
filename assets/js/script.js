let nome = window.document.getElementById("nome");
let email = document.getElementById("email");
let artista = document.getElementById("artista");
let musica = document.getElementById("musica");
let mensagem = document.getElementById("mensagem");

let vNome = false;
let vArtista = false;
let vMusica = false;
let vMensagem = false;
let vEmail = false;

function validaNome() {
  let txtNome = document.querySelector("#txtNome");

  if (nome.value.length <= 2) {
    txtNome.innerHTML = "O nome deve conter no mínimo 3 caracteres!";
    txtNome.style.color = "#f6f1f1";
    txtNome.style.padding = "5px 0 0 0";
    txtNome.style.display = "block";
  } else {
    txtNome.style.display = "none";
    vNome = true;
  }
}

function validaEmail() {
  let txtEmail = document.querySelector("#txtEmail");

  if (email.value.indexOf("@") == -1 || email.value.indexOf(".") == -1) {
    txtEmail.innerHTML = "O email deve ser um email válido";
    txtEmail.style.color = "#f6f1f1";
    txtEmail.style.padding = "5px 0 0 0";
    txtEmail.style.display = "block";
  } else {
    txtEmail.style.display = "none";
    vEmail = true;
  }
}

function validaArtista() {
  let txtArtista = document.querySelector("#txtArtista");
  txtArtista.style.color = "#f6f1f1";

  if (artista.value.length < 3) {
    txtArtista.innerHTML = "O nome do Artista deve conter no mínimo 2 caracteres";
    txtArtista.style.padding = "5px 0 0 0";
  } else {
    txtArtista.style.display = "none";
    vArtista = true;
  }
}

function validaMusica() {
  let txtMusica = document.querySelector("#txtMusica");
  txtMusica.style.color = "#f6f1f1";

  if (musica.value.length <= 1) {
    txtMusica.innerHTML = "O nome da música deve conter no mínimo 1 caracter";
  } else {
    txtMusica.style.display = "none";
    vMusica = true;
  }
}

function tamanhoArea() {
  let txtMensagem = document.querySelector("#txtMensagem");
  txtMensagem.style.color = "#f6f1f1";

  if (mensagem.value.length >= 100) {
    txtMensagem.innerHTML = "O tamanho máximo é de 100 caracteres";
    vMensagem = false;
  } else {
    txtMensagem.style.display = "none";
    vMensagem = true;
  }
}

function enviar() {
  if (vNome == true && vArtista == true && vMensagem == true && vMusica == true) {
    alert("Formulário Recebido! Obrigado pela recomendação! :D");
  } else {
    alert("Por favor, preencha o formulário corretamente!");
  }
}
