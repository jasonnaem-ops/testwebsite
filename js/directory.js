(function () {
  const grid = document.getElementById('listing-grid');
  const searchInput = document.getElementById('search-input');
  const chipRow = document.getElementById('chip-row');
  const resultCount = document.getElementById('result-count');

  if (!grid) return; // not on the directory page

  let activeCategory = 'All';
  let query = '';

  function renderChips() {
    chipRow.innerHTML = '';
    CATEGORIES.forEach((cat) => {
      const btn = document.createElement('button');
      btn.className = 'chip' + (cat === activeCategory ? ' active' : '');
      btn.textContent = cat;
      btn.setAttribute('aria-pressed', cat === activeCategory ? 'true' : 'false');
      btn.addEventListener('click', () => {
        activeCategory = cat;
        renderChips();
        renderListings();
      });
      chipRow.appendChild(btn);
    });
  }

  function matches(listing) {
    const inCategory = activeCategory === 'All' || listing.category === activeCategory;
    const q = query.trim().toLowerCase();
    const inQuery =
      q === '' ||
      listing.name.toLowerCase().includes(q) ||
      listing.area.toLowerCase().includes(q) ||
      listing.tags.some((t) => t.toLowerCase().includes(q)) ||
      listing.note.toLowerCase().includes(q);
    return inCategory && inQuery;
  }

  function renderListings() {
    const results = LISTINGS.filter(matches).sort((a, b) => {
      if (!!b.featured !== !!a.featured) return b.featured ? 1 : -1;
      return a.name.localeCompare(b.name);
    });

    resultCount.textContent = `${results.length} place${results.length === 1 ? '' : 's'} found`;

    if (results.length === 0) {
      grid.innerHTML = '<div class="no-results">No matches — try a different search or category.</div>';
      return;
    }

    grid.innerHTML = results
      .map(
        (l) => `
      <div class="listing ${l.featured ? 'featured' : ''}">
        ${l.featured ? '<span class="featured-tag">Featured</span>' : ''}
        <span class="category-tag">${l.category} · ${l.area}</span>
        <div class="listing-top">
          <h3>${l.name}</h3>
        </div>
        <div class="addr">${l.addr}</div>
        <div class="tags">
          ${l.tags.map((t) => `<span class="tag-pill">${t}</span>`).join('')}
        </div>
        <p class="note">${l.note}</p>
      </div>
    `
      )
      .join('');
  }

  searchInput.addEventListener('input', (e) => {
    query = e.target.value;
    renderListings();
  });

  renderChips();
  renderListings();
})();
