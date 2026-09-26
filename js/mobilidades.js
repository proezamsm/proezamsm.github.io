document.addEventListener("DOMContentLoaded", function () {
    const container = document.getElementById("lista-mobilidades");

    if (!container) return;

    container.innerHTML = ""; // Limpa qualquer conteúdo residual

    mobilidades.forEach(item => {
        const cartao = document.createElement("div");
        cartao.className = "cartao";

        cartao.innerHTML = `
            <div class="cartao-imagem">
                <img src="${item.imagem}" alt="${item.titulo}">
            </div>
            <div class="cartao-conteudo">
                <h3>${item.titulo}</h3>
                <p class="cartao-info"><strong>Data:</strong> ${item.data}</p>
                <p class="cartao-info"><strong>Localização:</strong> ${item.localizacao}</p>
                <p class="cartao-info"><strong>Participantes:</strong> ${item.participantes}</p>
                <p class="cartao-descricao">${item.descricao}</p>
            </div>
        `;

        container.appendChild(cartao);
    });
});
