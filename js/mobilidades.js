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
            <div class="card-mobility-header">
              <span class="mobility-tag">${x.nome}</span>
            </div>

            <p class="meta-item location">
              <span class="meta-icon">📍</span> ${x.localizacao}
            </p>
            <p class="meta-item date">
              <span class="meta-icon">📅</span> ${x.data}
            </p>

            <p class="card-mobility-text">${x.resumo}</p>

            <div class="card-mobility-footer">
              <a href="${x.link}" target="_blank" rel="noopener noreferrer" class="btn-mobility-action">
                <span>Ver detalhes</span>
                <svg class="arrow-icon" viewBox="0 0 20 20" fill="currentColor" width="18" height="18">
                  <path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd" />
                </svg>
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
