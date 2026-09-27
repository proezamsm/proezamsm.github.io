const d = PAGE_DATA;

document.getElementById("page-content").innerHTML = `
  <section class="page-intro">
    <div class="container">
      <p class="eyebrow">${d.eyebrow}</p>
      <h1>${d.heading}</h1>
      <p>${d.intro}</p>
    </div>
  </section>

  <!-- 1.º BLOCO: CARTAZ DE SAÚDE MENTAL (CENTRADO) -->
  <section class="section">
    <div class="container">
      <div class="section-heading centered">
        <p class="eyebrow">DESTAQUE</p>
        <h2>${d.cartaz.title}</h2>
        <p>${d.cartaz.description}</p>
      </div>

      <div class="cartaz-center-wrapper" style="text-align: center; max-width: 650px; margin: 0 auto;">
        <button class="dissemination-photo" type="button" onclick="openCartazLightbox()" style="background: none; border: none; cursor: pointer; padding: 0; width: 100%;">
          <img src="${d.cartaz.image}" alt="${d.cartaz.title}" loading="lazy" style="width: 100%; height: auto; border-radius: 12px; box-shadow: 0 8px 25px rgba(0,60,100,0.12); transition: transform 0.25s ease;">
        </button>
      </div>
    </div>
  </section>

  <!-- 2.º BLOCO: OS PARCEIROS (TABELA INVISÍVEL DE 2 COLUNAS) -->
  <section class="section-soft">
    <div class="container">
      <div class="section-heading">
        <p class="eyebrow">PARCERIAS</p>
        <h2>Os Parceiros</h2>
        <p>Conheça as entidades parceiras e colaboradoras no âmbito do projeto.</p>
      </div>

      <div class="partners-table-wrapper" style="max-width: 800px; margin: 0 auto;">
        <table class="partners-invisible-table" style="width: 100%; border-collapse: collapse;">
          <tbody>
            ${d.partners.map(partner => `
              <tr style="border-bottom: 1px solid #d7e8ef;">
                <td style="padding: 16px 12px; font-weight: 700; color: var(--blue); font-size: 1.05rem;">
                  ${partner.nome}
                </td>
                <td style="padding: 16px 12px; text-align: right;">
                  <a class="btn btn-outline dissemination-btn" href="${partner.url}" target="_blank" rel="noopener" style="margin: 0;">
                    Aceder &rarr;
                  </a>
                </td>
              </tr>
            `).join("")}
          </tbody>
        </table>
      </div>
    </div>
  </section>

  <!-- 3.º BLOCO: FOTOGRAFIAS (APENAS IMAGENS) -->
  <section class="section">
    <div class="container">
      <div class="section-heading">
        <p class="eyebrow">FOTOGRAFIAS</p>
        <h2>Momentos do projeto</h2>
        <p>Registo fotográfico das atividades, encontros e momentos de partilha.</p>
      </div>

      <div class="dissemination-photo-grid">
        ${d.photos.map((photo, index) => `
          <article class="dissemination-photo-card">
            <button class="dissemination-photo" type="button" onclick="openDisseminationPhoto(${index})" style="background: none; border: none; cursor: pointer; padding: 0; width: 100%;">
              <img src="${photo.image}" alt="${photo.title || 'Foto do projeto'}" loading="lazy">
            </button>
          </article>
        `).join("")}
      </div>
    </div>
  </section>

  <!-- 4.º BLOCO: DOCUMENTOS DO PROJETO -->
  <section class="section-soft">
    <div class="container">
      <div class="section-heading">
        <p class="eyebrow">DOCUMENTOS</p>
        <h2>Documentos PDF</h2>
        <p>Consulte os documentos e materiais produzidos no âmbito do projeto.</p>
      </div>

      <div class="dissemination-resource-grid">
        ${d.documents.map(document => `
          <article class="dissemination-resource-card">
            <div class="resource-icon">📄</div>
            <div>
              <h3>${document.title}</h3>
              <p>${document.description}</p>
              <a class="btn btn-outline dissemination-btn" href="${document.url}" target="_blank" rel="noopener">
                Abrir PDF
              </a>
            </div>
          </article>
        `).join("")}
      </div>
    </div>
  </section>

  <!-- LIGHTBOX PARA FOTOS E CARTAZ -->
  <div id="dissemination-lightbox" class="gallery-lightbox" aria-hidden="true">
    <button class="gallery-close" type="button" onclick="closeDisseminationPhoto()" aria-label="Fechar">×</button>
    <img id="dissemination-large-image" src="" alt="">
  </div>
`;

let disseminationPhotoIndex = 0;

function openCartazLightbox() {
  const lightbox = document.getElementById("dissemination-lightbox");
  const image = document.getElementById("dissemination-large-image");

  image.src = d.cartaz.image;
  image.alt = d.cartaz.title;
  lightbox.classList.add("active");
  lightbox.setAttribute("aria-hidden", "false");
}

function openDisseminationPhoto(index) {
  disseminationPhotoIndex = index;
  const photo = d.photos[index];
  const lightbox = document.getElementById("dissemination-lightbox");
  const image = document.getElementById("dissemination-large-image");

  image.src = photo.image;
  image.alt = photo.title || "";
  lightbox.classList.add("active");
  lightbox.setAttribute("aria-hidden", "false");
}

function closeDisseminationPhoto() {
  const lightbox = document.getElementById("dissemination-lightbox");
  lightbox.classList.remove("active");
  lightbox.setAttribute("aria-hidden", "true");
}

document.addEventListener("keydown", function(event) {
  const lightbox = document.getElementById("dissemination-lightbox");

  if (!lightbox || !lightbox.classList.contains("active")) return;

  if (event.key === "Escape") {
    closeDisseminationPhoto();
  }
});
