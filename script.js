function mudarSemaforo(cor, texto) {
    const imagem = document.getElementById("imagemSemaforo");

    imagem.src = "Imagens/" + cor + ".png";
    imagem.alt = "Semáforo " + texto.toLowerCase();

    document.getElementById("mensagem").textContent = texto;
}

function ligarVermelho() {
    mudarSemaforo("vermelho", "Semáforo vermelho!");
}

function ligarAmarelo() {
    mudarSemaforo("amarelo", "Semáforo amarelo!");
}

function ligarVerde() {
    mudarSemaforo("verde", "Semáforo verde!");
}

function desligar() {
    mudarSemaforo("desligado", "Semáforo desligado");
}
