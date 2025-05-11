document.querySelectorAll('.product-panel').forEach(panel => {
  const file = panel.getAttribute('data-md');
  const container = panel.querySelector('.markdown');

  fetch(file)
    .then(res => res.text())
    .then(md => {
      container.innerHTML = marked.parse(md);
    })
    .catch(err => {
      container.innerHTML = `<p style="color:red;">Error loading ${file}</p>`;
    });
});