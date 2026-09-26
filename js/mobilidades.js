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
            <h3 class="card-title">${x.nome}</h3>
            
            <div class="card-meta">
              <span class="meta-item">
                <span class="meta-icon">📍</span> ${x.localizacao}
              </span>
              <span class="meta-item">
                <span class="meta-icon">📅</span> ${x.data}
              </span>
            </div>

            <p class="card-text">${x.resumo}</p>

            <div class="card-action">
              <a href="${x.link}" target="_blank" rel="noopener noreferrer" class="btn-primary">
                Ver detalhes <span class="arrow">&rarr;</span>
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
