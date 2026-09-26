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
        ${d.items.map(x => `
          <article>
            <h3>${x.title}</h3>
            <p class="location">${x.location}</p>
            <p class="date">${x.date}</p>
            <p>${x.text}</p>
            <a href="${x.link}" class="btn-details">Ver detalhes &rarr;</a>
          </article>
        `).join("")}
      </div>
    </div>
  </section>
`;
