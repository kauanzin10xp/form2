

const URL_PLANILHA = "https://script.google.com/macros/s/AKfycbz6a0rcEgoUZru3E8qDv19kom2wtYIyVDlceCiphoLsMZz6bb4TqfJsy82UEya5kvLLzw/exec";

const form = document.getElementById("formulario");
const aviso = document.getElementById("aviso");
const botao = form.querySelector("button");

form.addEventListener("submit", async function(evento) {
  evento.preventDefault();

  if (URL_PLANILHA === "COLE_A_URL_AQUI") {
    aviso.textContent = "Configure a URL do Google Apps Script.";
    return;
  }

  aviso.textContent = "Enviando candidatura...";
  botao.disabled = true;

  try {
    await fetch(URL_PLANILHA, {
      method: "POST",
      mode: "no-cors",
      body: new FormData(form)
    });

    aviso.textContent =
      "Candidatura enviada! Confira o registro na planilha.";

    form.reset();

  } catch (erro) {
    aviso.textContent =
      "Não foi possível enviar. Verifique sua conexão e tente novamente.";
  } finally {
    botao.disabled = false;
  }
});
