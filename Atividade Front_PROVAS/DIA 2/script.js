function add() {
    const container = document.getElementById("Cards");

    const card = document.createElement("div");
    card.className = "card";
    card.style.width = "22rem";
    card.style.marginLeft = "20px";

    const img = document.createElement("img");
    img.src = "img/Lucas_Paqueta.webp";
    img.className = "card-img-top";
    img.alt = "Lucas Paquetá";

    const cardBody = document.createElement("div");
    cardBody.className = "card-body";

    cardBody.innerHTML = `
        <h5 class="card-title">
            <span class="card-title">Lucas Paquetá</span>
            <span class="badge text-bg-secondary">8,8</span>
        </h5>

        <p class="card-text">
            <strong>Nascimento:</strong> 27/08/1997 (28 anos)<br>
            <strong>Altura:</strong> 1,80 m<br>
            <strong>Posição:</strong> Meio-campista
        </p>
    `;

    card.appendChild(img);
    card.appendChild(cardBody);

    container.appendChild(card);
}