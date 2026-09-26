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

        <div class="cards-grid" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 1.5rem; margin-top: 2.5rem;">
  `;

  data.mobilities.forEach((mob) => {
    html += `
      <article class="card" style="border: 1px solid #e2e8f0; border-radius: 12px; padding: 1.75rem; background: #ffffff; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05); display: flex; flex-direction: column; justify-content: space-between;">
        <div>
          <h3 style="font-size: 1.25rem; font-weight: 700; color: #1e293b; margin-bottom: 0.75rem;">${mob.title}</h3>
          <p style="color: #e11d48; font-size: 0.9rem; margin-bottom: 0.35rem; display: flex; align-items: center; gap: 0.4rem;">
            📍 <span>${mob.location}</span>
          </p>
          <p style="color: #0d9488; font-size: 0.85rem; margin-bottom: 1.25rem; display: flex; align-items: center; gap: 0.4rem;">
            🗓️ <span>${mob.dates}</span>
          </p>
          <p style="color: #475569; font-size: 0.95rem; line-height: 1.5; margin-bottom: 1.5rem;">${mob.description}</p>
        </div>
        <div>
          <a href="${mob.link}" class="btn" style="display: inline-block; background: #1e3a8a; color: #ffffff; padding: 0.6rem 1.25rem; font-weight: 700; font-size: 0.9rem; text-decoration: none; border-radius: 6px; transition: background 0.2s;">Ver detalhes &rarr;</a>
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
