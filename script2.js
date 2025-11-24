const conteudo = document.querySelector(".conteudo");
const tutorial = document.getElementById("tutorial");

const tutoriais = {
  foto: `
      <h2>📷 Mandar foto no WhatsApp</h2>
      <ol>
        <li>Abrir conversa</li>
        <li>Tocar no clipe</li>
        <li>Escolher "Galeria"</li>
        <li>Enviar</li>
      </ol>
      <button onclick="voltar()">🔙 Voltar</button>
    `,
  videochamada: `
      <h2>🎥 Fazer chamada de vídeo</h2>
      <ol>
        <li>Abrir conversa   <img src="ensino/passo.jpg"/ alt="">
</li>

        <li>Tocar na câmera <img src="ensino/passo2.jpg"/ alt=""></li>
        <li>Aguardar a resposta <img src="ensino/passo3.png"/ alt=""></li>
      </ol>
      <button onclick="voltar()">🔙 Voltar</button>
    `,
  voz: `
      <h2>📞 Fazer ligação de voz</h2>
      <ol>
        <li>Abrir conversa</li>
        <li>Clicar no telefone</li>
        <li>Esperar a ligação</li>
      </ol>
      <button onclick="voltar()">🔙 Voltar</button>
    `,
};

document.querySelectorAll(".opcao").forEach((btn) => {
  btn.onclick = () => {
    conteudo.style.display = "none";
    tutorial.style.display = "block";
    tutorial.innerHTML = tutoriais[btn.dataset.acao];
  };
});

window.voltar = () => {
  tutorial.style.display = "none";
  conteudo.style.display = "grid";
};
