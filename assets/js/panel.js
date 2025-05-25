// const markdownFile = 'https://david-miller.life/pages/asset_tagging.md';

const PRODUCT_DIR = 'https://david-miller.life/';
const PRODUCT_LIST_JSON = PRODUCT_DIR + 'assets/js/post_list.json';
const MAX_PRODUCTS = 5;

const container = document.getElementById("product-container");

// Utility to turn "product-one.md" into "Product One"
function deriveTitleFromFilename(path) {
  const filename = path.split("/").pop().replace(".md", "");
  return filename
    .split("-")
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

// Load the list of markdown file paths from external JSON
fetch(PRODUCT_LIST_JSON)
  .then(res => res.json())
  .then(markdownFiles => {
    markdownFiles.forEach((url, index) => {
      const title = deriveTitleFromFilename(url);

      const cardCol = document.createElement("div");
      cardCol.className = "col-12";

      const card = document.createElement("div");
      card.className = "card";

      const header = document.createElement("div");
      header.className = "card-header";
      header.style.cursor = "pointer";
      header.setAttribute("data-bs-toggle", "collapse");
      header.setAttribute("data-bs-target", `#product-${index}`);
      header.setAttribute("aria-expanded", "false");
      header.setAttribute("aria-controls", `product-${index}`);

      // Title
      const titleElem = document.createElement("div");
      titleElem.textContent = title;
      titleElem.style.fontWeight = "bold";

      // Container for main image preview
      const imgPreview = document.createElement("img");
      imgPreview.style.maxWidth = "100%";
      imgPreview.style.maxHeight = "150px";
      imgPreview.style.display = "block";
      imgPreview.style.margin = "0.25rem 0";

      // Preview line placeholder
      const previewElem = document.createElement("div");
      previewElem.style.fontSize = "0.9em";
      previewElem.style.color = "#666";
      previewElem.textContent = "Loading preview...";

      header.appendChild(titleElem);
      header.appendChild(imgPreview);
      header.appendChild(previewElem);

      const body = document.createElement("div");
      body.className = "collapse";
      body.id = `product-${index}`;

      const content = document.createElement("div");
      content.className = "card-body markdown-content";
      content.innerHTML = `<em>Loading...</em>`;

      body.appendChild(content);
      card.appendChild(header);
      card.appendChild(body);
      cardCol.appendChild(card);
      container.appendChild(cardCol);

      fetch(url)
        .then(res => res.text())
        .then(markdownText => {
          // Extract first image with 'MainImage' in alt text:
          const regex = /!\[([^\]]*MainImage[^\]]*)\]\(([^)]+)\)/i;
          const match = markdownText.match(regex);
          if (match) {
            const imageUrl = match[2];

            const tempImg = new Image();
            tempImg.onload = () => {
              // Set width and height based on actual image size, scaled down if needed
              const maxHeight = 150;
              let width = tempImg.width;
              let height = tempImg.height;

              if (height > maxHeight) {
                const scale = maxHeight / height;
                height = maxHeight;
                width = width * scale;
              }

              imgPreview.style.width = width + "px";
              imgPreview.style.height = height + "px";
              imgPreview.style.objectFit = "contain";
              imgPreview.src = imageUrl; // set actual image after sizing
            };

            tempImg.src = imageUrl;
          } else {
            imgPreview.style.display = "none"; // hide if no image found
          }

          // Strip markdown for preview text
          const plainText = markdownText
            .replace(/[#_*~`>!-]/g, "")
            .replace(/\[.*?\]\(.*?\)/g, "")
            .replace(/\s+/g, " ")
            .trim();

          previewElem.textContent = plainText.substring(0, 100) + (plainText.length > 100 ? "…" : "");
        })
        .catch(() => {
          previewElem.textContent = "Preview unavailable";
          imgPreview.style.display = "none";
        });

      // Lazy-load markdown content on first open
      let hasLoaded = false;
      header.addEventListener("click", () => {
        if (!hasLoaded) {
          fetch(url)
            .then(res => res.text())
            .then(markdown => {
              content.innerHTML = marked.parse(markdown);
              hasLoaded = true;

              const bsCollapse = bootstrap.Collapse.getOrCreateInstance(body);
              bsCollapse.show();
            })
            .catch(() => {
              content.innerHTML = `<div class="text-danger">Failed to load content.</div>`;
            });
        }
      });
    });
  })
  .catch(() => {
    container.innerHTML = `<div class="text-danger">Failed to load product list.</div>`;
  });

// Parse frontmatter manually (YAML between --- ... ---)
function parseFrontMatter(markdown) {
  const frontMatterRegex = /^---\s*([\s\S]*?)\s*---/;
  const match = markdown.match(frontMatterRegex);
  if (!match) return { data: {}, content: markdown };
  try {
    const data = jsyaml.load(match[1]);
    const content = markdown.slice(match[0].length).trim();
    return { data, content };
  } catch {
    return { data: {}, content: markdown };
  }
}

// Load and parse a single markdown product file
async function loadProductFile(filename) {
  try {
    const res = await fetch(PRODUCT_DIR + filename);
    const raw = await res.text();

    const { data, content } = parseFrontMatter(raw);
    const html = marked.parse(content);

    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = html;

    // Title priority: frontmatter title, else first h3, else fallback
    const title = data.title || tempDiv.querySelector('h3')?.innerText || 'No Title';

    // Find image with alt="Main Image" OR fallback to frontmatter mainImage
    let imgSrc = data.mainImage || '';
    if (!imgSrc) {
      const mainImg = Array.from(tempDiv.querySelectorAll('img'))
        .find((img) => img.alt.trim().toLowerCase() === 'mainimage');
      if (mainImg) imgSrc = mainImg.src;
    }

    // Remove title and main image from tempDiv content so description is clean
    if (tempDiv.querySelector('h3')) tempDiv.querySelector('h3').remove();
    if (imgSrc && tempDiv.querySelector(`img[src="${imgSrc}"]`))
      tempDiv.querySelector(`img[src="${imgSrc}"]`).remove();

    // Collect all paragraphs text, truncate to ~100 chars without cutting words
    const descText = Array.from(tempDiv.querySelectorAll('p'))
      .map((p) => p.innerText)
      .join(' ')
      .trim();

    const truncated =
      descText.length > 100
        ? descText.slice(0, 100).split(' ').slice(0, -1).join(' ') + '...'
        : descText;

    // Return product data with date fallback
    return {
      title,
      imgSrc,
      truncated,
      date: data.date ? new Date(data.date) : new Date('1970-01-01'),
      filename,
    };
  } catch (e) {
    console.error('Failed to load', filename, e);
    return null;
  }
}

// Render a product card DOM element
function renderProductCard({ title, imgSrc, truncated }) {
  const col = document.createElement('div');
  col.className = 'col-md-6 col-lg-4 mb-4';

  col.innerHTML = `
    <div class="card shadow-sm product-card h-100">
      <div class="product-img-wrapper">
        <img class="product-img" src="${imgSrc}" alt="${title}" />
      </div>
      <div class="card-body">
        <h5 class="card-title">${title}</h5>
        <p class="card-text">${truncated}</p>
      </div>
    </div>
  `;

  const img = col.querySelector('img');
  const card = col.querySelector('.product-card');
  img.onload = () => {
    img.classList.add('loaded');
    card.classList.add('show');
  };

  return col;
}
