//=========== VERIFICAR SE A INTRO JÁ FOI VISTA =============
document.getElementById("principal").style.display = "none";

if (localStorage.getItem("intro") === "ok") {
  // pula animação
  document.getElementById("titulo").style.display = "none";
  document.querySelector(".subt").style.display = "none";
  document.getElementById("principal").style.display = "flex";
  document.querySelector(".container1").style.cssText = "opacity:1;";
  document.querySelector("#fundo").style.cssText =
    "filter: grayscale(100%) brightness(0.8);";
} else {
  // intro normal
  setTimeout(() => {
    document.querySelector(".subt").style.cssText =
      "color: #0021a7ff ; border-color: #04398355;     margin-top: 60px; border-radius: 20px;  ";
  }, 1000);
}

//========= FUNÇÃO DE COMEÇAR (PRIMEIRA VEZ) =========
function começar() {
  setTimeout(() => {
    document.getElementById("titulo").style.cssText =
      "background-color:#00000000; background-size:300%; background-position: -120vw 0px;";
  }, 100);

  setTimeout(() => {
    document.getElementById("titulo").style.cssText =
      "background-color:#00000000; color: #00000000 background-size:300%; background-position: -120vw 0px; color:white; opacity:0;";
    document.querySelector(".subt").style.cssText =
      "color:#00000000; margin-top: 60px ;";
  }, 1200);

  setTimeout(() => {
    document.getElementById("titulo").style.display = "none";
    document.querySelector(".subt").style.display = "none";
  }, 3000);

  // Liberar tela principal
  setTimeout(() => {
    document.getElementById("principal").style.display = "flex ";
  }, 3000);

  setTimeout(() => {
    document.querySelector(".container1").style.cssText = "opacity:1 ; ";
    document.querySelector("#fundo").style.cssText = "filter: grayscale(100%);";
  }, 3100);

  //==== SALVANDO QUE A INTRO FOI VISTA =====
  localStorage.setItem("intro", "ok");
}

//========= OUTRAS FUNÇÕES ==========
function mostrarTelefones() {
  setTimeout(() => {
    document.getElementById("principal").style.display = "none";

    document.getElementById("SOS").style.display = "block";
  }, 300);
}

function voltar() {
  setTimeout(() => {
    document.getElementById("principal").style.display = "block";
  }, 300);
  setTimeout(() => {
    document.getElementById("SOS").style.display = "none";
  }, 300);
}

//========= SERVICE WORKER ===========
if ("serviceWorker" in navigator) {
  window.addEventListener("load", function () {
    navigator.serviceWorker
      .register("service-worker.js")
      .then(() => console.log("✅ Service Worker registrado!"))
      .catch((err) =>
        console.log("❌ Falha ao registrar o Service Worker:", err)
      );
  });
}
