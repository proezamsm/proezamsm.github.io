document.addEventListener("DOMContentLoaded", function () {
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
      <article class="card" style="border: 1px solid #e2e8f0; border-radius: 8px; padding: 1.5rem; background: #fff;">
        <h3 style="margin-bottom: 0.5rem;">${mob.title}</h3>
        <p style="color: #64748b; font-size: 0.9rem; margin-bottom: 0.5rem;"><strong>📍 ${mob.location}</strong></p>
        ${mob.dates ? `<p style="color: #0d9488; font-size: 0.85rem; margin-bottom: 1rem;">🗓️ ${mob.dates}</p>` : ''}
        <p style="margin-bottom: 1.5rem;">${mob.description}</p>
        <a href="${mob.link}" class="btn btn-primary" style="display: inline-block; padding: 0.5rem 1rem; background: #1e3a8a; color: #fff; text-decoration: none; border-radius: 4px;">Ver detalhes &rarr;</a>
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
