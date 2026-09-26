const d = PAGE_DATA;

document.getElementById("page-content").innerHTML = `
  <section class="page-intro">
    <div class="container">
      <p class="eyebrow">${d.eyebrow}</p>
      <h1>${d.heading}</h1>
      <p>${d.intro}</p>
    </div>
  </section>

  <section class="section">
    <div class="container">
      <div class="topic-grid">
        ${d.items
          .map(
            (x) => `
          <article>
            <h3>${x.nome}</h3>
            <p class="meta-location"><strong>${x.localizacao}</strong></p>
            <p class="meta-date">${x.data}</p>
            <p class="resumo-text">${x.resumo}</p>
            <a href="${x.link}" target="_blank" rel="noopener noreferrer" class="btn-detalhes">
              Ver detalhes &rarr;
            </a>
          </article>
        `
          )
          .join("")}
      </div>
    </div>
  </section>
`;
