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
          <article class="card-mobility">
            <h3 class="mobility-title">${x.nome}</h3>

            <div class="mobility-info">
              <p class="info-item location">
                <span class="info-icon">📍</span>
                <span>${x.localizacao}</span>
              </p>
              <p class="info-item date">
                <span class="info-icon">📅</span>
                <span>${x.data}</span>
              </p>
            </div>

            <p class="mobility-text">${x.resumo}</p>

            <div class="mobility-footer">
              <a href="${x.link}" target="_blank" rel="noopener noreferrer" class="btn-mob-link">
                Ver detalhes &rarr;
              </a>
            </div>
          </article>
        `
          )
          .join("")}
      </div>
    </div>
  </section>
`;
