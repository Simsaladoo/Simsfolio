// const markdownFile = 'https://david-miller.life/pages/asset_tagging.md';

const PRODUCT_DIR = 'https://david-miller.life/';
const PRODUCT_LIST_JSON = PRODUCT_DIR + 'assets/js/post_list.json';
const MAX_PRODUCTS = 5;


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

// Main loader function
async function loadAllProducts() {
  const loader = document.getElementById('loader');
  loader.style.display = 'block';

  let productFiles;
  try {
    const res = await fetch(PRODUCT_LIST_JSON);
    if (!res.ok) throw new Error('Failed to load product list');
    productFiles = await res.json();
  } catch (e) {
    console.error('Error loading product list JSON:', e);
    loader.style.display = 'none';
    return;
  }

  const productsRaw = await Promise.all(productFiles.map(loadProductFile));
  const products = productsRaw.filter(Boolean);

  products.sort((a, b) => b.date - a.date);
  const topProducts = products.slice(0, MAX_PRODUCTS);

  const grid = document.getElementById('product-grid');
  topProducts.forEach((p) => {
    const card = renderProductCard(p);
    grid.appendChild(card);
  });

  loader.style.display = 'none';
}

loadAllProducts();