function revelar() {
    const imagem = document.querySelector(".card-img-top");
    imagem.src = "img/_vinicius_junior.png";
    imagem.classList.remove("placeholder");

    const nome = document.getElementById("Nome");
    const rank = document.getElementById("Rank");
    const nascimento = document.getElementById("Data_Nas");
    const altura = document.getElementById("Alutra");
    const posicao = document.getElementById("Posição ");

    nome.querySelector("span").textContent =
        "Vinícius José Paixão de Oliveira Júnior";

    rank.textContent = "9,5";
    nascimento.textContent = "12/07/2000 (25 anos)";
    altura.textContent = "1,76 m";
    posicao.textContent = "Ponta-esquerda / Atacante";

    const spans = document.querySelectorAll(".placeholder");
    spans.forEach(function (span) {
        span.classList.remove("placeholder");
        span.classList.add("card-text");
    });
}