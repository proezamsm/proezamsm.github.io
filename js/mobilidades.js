document.addEventListener("DOMContentLoaded", function () {
  // Apenas executa se estivermos na página principal de mobilidades
  if (document.body.getAttribute("data-page") !== "mobilidades") return;

  const container = document.getElementById("page-content");
  if (!container || !window.PAGE_DATA) return;

  const data = window.PAGE_DATA;

  let html = `
    <section class="section">
      <div class="container">
        <span class="eyebrow">${data.eyebrow}</span>
        <h1 class="heading-main">${data.heading}</h1>
        <p class="intro-text">${data.intro}</p>

        <div class="cards-grid" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 1.5rem; margin-top: 2rem;">
  `;

  data.mobilities.forEach((mob) => {
    html += `
      <article class="card">
        <div class="card-content">
          <h3>${mob.title}</h3>
          <p class="location" style="color: var(--primary-color, #e11d48); margin-bottom: 0.25rem;">📍 ${mob.location}</p>
          ${mob.dates ? `<p class="dates" style="color: var(--secondary-color, #0d9488); font-size: 0.9rem; margin-bottom: 0.75rem;">🗓️ ${mob.dates}</p>` : ''}
          <p class="description" style="margin-bottom: 1.25rem;">${mob.description}</p>
        </div>
        <div class="card-action">
          <a href="${mob.link}" class="btn btn-primary">Ver detalhes &rarr;</a>
        </div>
      </article>
    `;
  });

  html += `
        </div>
      </div>
    </section>
  `;

  container.innerHTML = html;
});
