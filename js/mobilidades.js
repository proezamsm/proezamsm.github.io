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
      <div class="topic-grid mobility-grid">
        ${d.items.map(item => `
          <article class="mobility-card">
            <div class="card-header-badge">
              <span class="badge-number">${item.number}</span>
              <span class="badge-country">${item.country}</span>
            </div>
            
            <h3 class="card-title">${item.title}</h3>
            
            <div class="card-meta-info">
              <div class="meta-item">
                <span class="meta-icon" aria-hidden="true">📍</span>
                <span>${item.location}</span>
              </div>
              <div class="meta-item">
                <span class="meta-icon" aria-hidden="true">📅</span>
                <span>${item.date}</span>
              </div>
            </div>

            <p class="card-description">${item.text}</p>

            <div class="card-footer">
              <a href="${item.detailsUrl}" class="btn-details">
                Ver detalhes <span class="arrow">&rarr;</span>
              </a>
            </div>
          </article>
        `).join("")}
      </div>
    </div>
  </section>
`;
