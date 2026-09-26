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

  <!-- SECÇÃO DE TESTEMUNHOS EM VÍDEO (.mp4) -->
  <section class="section section-soft testimonies-section">
    <div class="container">
      <div class="section-heading centered">
        <span class="eyebrow">TESTEMUNHOS</span>
        <h2>O que dizem os participantes</h2>
        <p>Assista aos testemunhos em vídeo sobre as experiências vividas nas nossas mobilidades Erasmus+.</p>
      </div>

      <div class="testimonies-grid">
        <!-- Vídeo 1 -->
        <div class="card-testemunho">
          <video controls preload="metadata" class="testimony-video">
            <source src="videos/video1.mp4" type="video/mp4">
            O seu navegador não suporta o elemento de vídeo.
          </video>
          <div>
            <h3>Testemunho 1</h3>
            <p>Partilha de experiências e vivências.</p>
          </div>
        </div>

        <!-- Vídeo 2 -->
        <div class="card-testemunho">
          <video controls preload="metadata" class="testimony-video">
            <source src="videos/video2.mp4" type="video/mp4">
            O seu navegador não suporta o elemento de vídeo.
          </video>
          <div>
            <h3>Testemunho 2</h3>
            <p>Impacto das atividades de aprendizagem.</p>
          </div>
        </div>

        <!-- Vídeo 3 -->
        <div class="card-testemunho">
          <video controls preload="metadata" class="testimony-video">
            <source src="videos/video3.mp4" type="video/mp4">
            O seu navegador não suporta o elemento de vídeo.
          </video>
          <div>
            <h3>Testemunho 3</h3>
            <p>Aprendizagens culturais e desenvolvimento.</p>
          </div>
        </div>

        <!-- Vídeo 4 -->
        <div class="card-testemunho">
          <video controls preload="metadata" class="testimony-video">
            <source src="videos/video4.mp4" type="video/mp4">
            O seu navegador não suporta o elemento de vídeo.
          </video>
          <div>
            <h3>Testemunho 4</h3>
            <p>Conclusões e perspetivas futuras.</p>
          </div>
        </div>
      </div>
    </div>
  </section>
`;
