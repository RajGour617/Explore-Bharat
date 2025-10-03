(() => {
  // Default data, can be overridden by fetching states.json
  let DATA = { states: [] };

  // ---------- UTILITIES ----------
  const $ = (sel, ctx = document) => ctx.querySelector(sel);
  const $$ = (sel, ctx = document) => Array.from(ctx.querySelectorAll(sel));

  function createCard(item, type) {
    const div = document.createElement("article");
    div.className = "card";
    let cardContent = `
      <img src="${item.img || 'images/placeholder.jpg'}" alt="${item.name}">
      <h4>${item.name}</h4>
      <p>${item.desc || ''}</p>
      <div style="margin-top:auto;">
    `;
    if (type === "City" || type === "Cities & Attractions") {
      if (item.link) {
        cardContent += `<a href="${item.link}" class="btn btn-primary" style="float:left; margin-top:8px;">Explore</a>`;
      }
    } else {
      cardContent += `<button class="btn btn-link view-detail" data-type="${type}" data-name="${item.name}">View</button>`;
      if (item.link) {
        cardContent += `<a href="${item.link}" class="btn btn-primary" style="float:right; margin-top:8px;">Explore</a>`;
      }
    }
    cardContent += `</div>`;
    div.innerHTML = cardContent;
    div._meta = { item, type };
    return div;
  }

  function createStateCard(state) {
    const div = document.createElement("article");
    div.className = "card state-card";
    div.dataset.stateId = state.id;
    div.setAttribute('role', 'button');
    div.setAttribute('tabindex', '0');
    div.innerHTML = `
      <img src="${state.banner || 'images/placeholder.jpg'}" alt="Banner for ${state.id}">
      <h4>${state.id}</h4>
      <p>${state.intro.split('—')[1]?.trim() || state.intro}</p>
    `;
    div.addEventListener('click', () => selectState(state.id));
    div.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') selectState(state.id);
    });
    return div;
  }

  function showModal(title, htmlContent) {
    const modal = $("#modal");
    const body = $("#modalBody");
    if (!modal || !body) return;
    body.innerHTML = `<h3>${title}</h3><div>${htmlContent}</div>`;
    modal.classList.add("show");
    modal.setAttribute("aria-hidden", "false");
  }

  function closeModal() {
    const modal = $("#modal");
    if (!modal) return;
    modal.classList.remove("show");
    modal.setAttribute("aria-hidden", "true");
  }

  // ---------- RENDERING ----------
  function populateStateDropdown(states) {
    const selects = $$("#stateFilter, #stateDropdown");
    selects.forEach(sel => {
      if (!sel) return;
      const existing = $$("option[data-generated]", sel);
      existing.forEach(o => o.remove());
      states.forEach(s => {
        const opt = document.createElement("option");
        opt.value = s.id;
        opt.textContent = s.id;
        opt.dataset.generated = "1";
        sel.appendChild(opt);
      });
    });
  }

  function populateCategoryDropdown(states) {
    const catSet = new Set();
    states.forEach(s => (s.categories || []).forEach(c => catSet.add(c)));
    const categories = Array.from(catSet).sort();
    const sel = $("#categoryFilter, #categoryDropdown");
    if (!sel) return;
    $$("option[data-generated-cat]", sel).forEach(o => o.remove());
    categories.forEach(c => {
      const opt = document.createElement("option");
      opt.value = c;
      opt.textContent = c;
      opt.dataset.generatedCat = "1";
      sel.appendChild(opt);
    });
  }

  function renderStatesGrid(states) {
    const grid = $("#statesGrid");
    if (!grid) return;
    grid.innerHTML = "";
    states.forEach(state => {
      const card = createStateCard(state);
      grid.appendChild(card);
    });
  }

  function renderStatePage(stateId) {
    if (!stateId) {
      document.body.classList.remove('state-selected');
      const stateSelect = $("#stateFilter");
      if (stateSelect) stateSelect.value = "";
      return;
    }
    const state = DATA.states.find(s => s.id === stateId);
    if (!state) return;

    const stateDetailContainer = $("#stateDetailContainer");
    if (stateDetailContainer) {
      stateDetailContainer.innerHTML = `
            <div class="state-page-layout">
                <div class="state-info">
                    <button id="backToStates" class="btn btn-primary" style="margin-bottom: 1.5rem;">← Back to All States</button>
                    <div id="stateBanner" class="state-banner" aria-label="State banner"></div>
                    <section id="stateIntro" class="state-intro"></section>
                </div>
                <div class="state-details">
                    <section class="cards-grid" aria-live="polite">
                        <h2>Cities & Attractions</h2>
                        <div id="citiesGrid" class="grid"></div>

                        <h2>Festivals</h2>
                        <div id="festivalsGrid" class="grid"></div>

                        <h2>Food</h2>
                        <div id="foodGrid" class="grid"></div>

                        <h2>Dance & Music</h2>
                        <div id="danceGrid" class="grid"></div>

                        <h2>Arts & Crafts</h2>
                        <div id="craftGrid" class="grid"></div>
                    </section>
                </div>
            </div>
        `;
    }


    // Banner
    const banner = $("#stateBanner");
    if (banner) {
      banner.innerHTML = `
        <div style="display:flex;gap:12px;align-items:center">
          <img src="${state.banner || 'images/placeholder.jpg'}" alt="${state.id}" style="height:140px;border-radius:12px;object-fit:cover;">
          <div>
            <h1>${state.id}</h1>
            <p style="max-width:640px">${state.intro}</p>
          </div>
        </div>
      `;
    }

    // Intro section
    const intro = $("#stateIntro");
    if (intro) {
      intro.innerHTML = `<p>${state.intro}</p>`;
    }

    // Populate grids
    const grids = [
      { key: "cities", id: "citiesGrid", type: "City" },
      { key: "festivals", id: "festivalsGrid", type: "Festival" },
      { key: "food", id: "foodGrid", type: "Food" },
      { key: "danceMusic", id: "danceGrid", type: "Dance/Music" },
      { key: "crafts", id: "craftGrid", type: "Art/Craft" }
    ];

    grids.forEach(g => {
      const node = $(`#${g.id}`);
      if (!node) return;
      node.innerHTML = "";
      const items = state[g.key] || [];
      if (items.length === 0) {
        node.innerHTML = `<div class="placeholder">No ${g.type} info available.</div>`;
        return;
      }
      items.forEach(item => {
        const card = createCard(item, g.type);
        node.appendChild(card);
      });
    });

    document.body.classList.add('state-selected');
  }

  function renderCategoryGrid() {
    // If category page exists, populate cards grouped by category
    const grid = $("#categoryGrid");
    if (!grid) return;
    grid.innerHTML = "";
    // Flatten items by category across states
    const map = {}; // category -> array of { state, item, type }
    DATA.states.forEach(st => {
      (["festivals", "food", "danceMusic", "crafts", "cities"]).forEach(key => {
        const items = st[key] || [];
        items.forEach(it => {
          // map categories for simple grouping
          const category =
            key === "festivals" ? "Festivals" :
              key === "food" ? "Food" :
                key === "danceMusic" ? "Dance & Music" :
                  key === "crafts" ? "Arts & Crafts" :
                    "Cities & Attractions";
          map[category] = map[category] || [];
          map[category].push({ state: st.id, item: it, type: category });
        });
      });
    });

    Object.keys(map).forEach(cat => {
      const section = document.createElement("section");
      section.className = "card";
      section.style.padding = "12px";
      section.innerHTML = `<h3>${cat}</h3><div class="grid" style="margin-top:10px"></div>`;
      const innerGrid = section.querySelector(".grid");
      map[cat].slice(0, 9).forEach(entry => {
        const card = createCard(Object.assign({}, entry.item, { img: entry.item.img }), cat);
        // small caption showing state
        const caption = document.createElement("div");
        caption.style.fontSize = "0.8rem";
        caption.style.color = "#4b5563";
        caption.textContent = `State: ${entry.state}`;
        card.appendChild(caption);
        innerGrid.appendChild(card);
      });
      grid.appendChild(section);
    });
  }

  function selectState(stateId) {
    const stateSelect = $("#stateFilter");
    if (stateSelect) stateSelect.value = stateId;
    renderStatePage(stateId);
  }

  // ---------- EVENT BINDINGS ----------
  function bindEvents() {
    const stateSelects = $$("#stateFilter, #stateDropdown");
    stateSelects.forEach(sel => {
      sel.addEventListener("change", e => {
        const val = e.target.value;
        if (location.pathname.includes("state.html")) {
          renderStatePage(val);
        } else if (location.pathname.includes("category.html")) {
          renderCategoryGrid(val, $("#categoryFilter")?.value || '');
        }
      });
    });

    const catSel = $("#categoryFilter, #categoryDropdown");
    if (catSel) {
      catSel.addEventListener("change", () => {
        const stateVal = $("#stateFilter")?.value || '';
        renderCategoryGrid(stateVal, catSel.value);
      });
    }

    const globalSearch = $("#globalSearch");
    if (globalSearch) {
      globalSearch.addEventListener("keydown", e => {
        if (e.key === "Enter") {
          const q = e.target.value.trim().toLowerCase();
          if (!q) return;

          // if (location.pathname.endsWith("index.html") || location.pathname === "/") {
          //   window.location.href = `./category.html?search=${q}`;
          //   return;
          // }
          const path = location.pathname.toLowerCase();

          // Check if current page is home (index.html OR project root path)
          const isHomePage = path.endsWith("index.html") || path.endsWith("/") || path.endsWith("/explore-bharat/");

          if (isHomePage) {
            window.location.href = `./category.html?search=${q}`;
            return;
          }


          searchCategoryGrid(q);
          // renderStatePage(q);

        }
      });
    }

    const modalClose = $("#modalClose");
    if (modalClose) modalClose.addEventListener("click", closeModal);
    const modal = $("#modal");
    if (modal) modal.addEventListener("click", (evt) => {
      if (evt.target === modal) closeModal();
    });

    const backBtn = $("#backToStates");
    if (backBtn) {
      backBtn.addEventListener("click", () => renderStatePage(null));
    }

    document.body.addEventListener("click", (e) => {
      const btn = e.target.closest(".view-detail");
      if (!btn) return;
      const card = btn.closest(".card");
      const meta = card?._meta;
      const name = btn.dataset.name;
      let found = null;
      if (meta) {
        found = { item: meta.item, state: null, key: meta.type };
      } else {
        DATA.states.forEach(s => {
          const all_categories = ["cities", "festivals", "food", "danceMusic", "crafts"];
          all_categories.forEach(k => {
            (s[k] || []).forEach(it => {
              if (it.name === name) found = { item: it, state: s.id, key: k };
            });
          });
        });
      }

      if (found) {
        const html = `
          <img src="${found.item.img || 'images/placeholder.jpg'}" alt="${found.item.name}" style="width:100%;max-height:260px;object-fit:cover;border-radius:8px">
          <p style="margin-top:10px">${found.item.desc || ""}</p>
          ${found.state ? `<p><strong>State:</strong> ${found.state}</p>` : ""}
        `;
        showModal(found.item.name, html);
      } else {
        showModal(name || "Details", "<p>No further details available.</p>");
      }
    });
  }

  function searchCategoryGrid(q) {
    const grid = $("#categoryGrid");
    if (!grid) return;
    if (!q) {
      renderCategoryGrid($("#stateFilter")?.value || '', $("#categoryFilter")?.value || '');
      return;
    }

    let entries = [];
    DATA.states.forEach(st => {
      const all_categories = ["cities", "festivals", "food", "danceMusic", "crafts"];
      all_categories.forEach(key => {
        const items = st[key] || [];
        items.forEach(it => {
          if ((it.name + " " + (it.desc || "") + " " + st.id).toLowerCase().includes(q)) {
            const category = key === "cities" ? "Cities & Attractions" : key.charAt(0).toUpperCase() + key.slice(1).replace(/([A-Z])/g, ' $1');
            entries.push({ state: st.id, item: it, category });
          }
        });
      });
    });

    grid.innerHTML = "";
    if (entries.length === 0) {
      grid.innerHTML = `<div class="placeholder">No results for "${q}".</div>`;
      return;
    }

    const grouped = entries.reduce((acc, e) => {
      acc[e.category] = acc[e.category] || [];
      acc[e.category].push(e);
      return acc;
    }, {});

    Object.keys(grouped).sort().forEach(cat => {
      const section = document.createElement("section");
      section.className = "category-section";
      section.innerHTML = `<h2>${cat}</h2><div class="grid"></div>`;
      const innerGrid = section.querySelector(".grid");
      grouped[cat].forEach(entry => {
        const card = createCard(entry.item, cat);
        const caption = document.createElement("div");
        caption.className = "card-caption";
        caption.textContent = `State: ${entry.state}`;
        card.appendChild(caption);
        innerGrid.appendChild(card);
      });
      grid.appendChild(section);
    });
  }

  function searchWithinState(query) {
    const stateSelect = $("#stateFilter");
    if (!stateSelect || !stateSelect.value) return;
    const state = DATA.states.find(s => s.id === stateSelect.value);
    if (!state) return;

    const matches = (list) => (list || []).filter(it =>
      (it.name + " " + (it.desc || "")).toLowerCase().includes(query)
    );

    const grids = [
      { key: "cities", id: "citiesGrid", type: "City" },
      { key: "festivals", id: "festivalsGrid", type: "Festival" },
      { key: "food", id: "foodGrid", type: "Food" },
      { key: "danceMusic", id: "danceGrid", type: "Dance/Music" },
      { key: "crafts", id: "craftGrid", type: "Art/Craft" }
    ];

    grids.forEach(g => {
      const node = $(`#${g.id}`);
      if (!node) return;
      const found = matches(state[g.key]);
      node.innerHTML = "";
      if (found.length === 0) {
        node.innerHTML = `<div class="placeholder">No results.</div>`;
      } else {
        found.forEach(it => node.appendChild(createCard(it, g.type)));
      }
    });
  }

  // ---------- THEME TOGGLE ----------
  function initThemeToggle() {
    const themeToggle = $('#themeToggle');
    if (!themeToggle) return;
    const body = document.body;

    themeToggle.addEventListener('click', () => {
      body.classList.toggle('dark-mode');
      const isDarkMode = body.classList.contains('dark-mode');
      localStorage.setItem('darkMode', isDarkMode);
      themeToggle.textContent = isDarkMode ? '☀️' : '🌙';
    });

    if (localStorage.getItem('darkMode') === 'true') {
      body.classList.add('dark-mode');
      themeToggle.textContent = '☀️';
    }
  }

  //---------- INITIALIZATION ----------
  function init() {
    fetch("data/states.json")
      .then(r => r.ok ? r.json() : Promise.reject("Failed to load states.json"))
      .then(json => {
        if (json && Array.isArray(json.states)) {
          DATA.states = json.states;
        }
      })
      .catch(err => {
        console.warn(err); // Fallback to default data
      })
      .finally(() => {
        window.CULTURE_DATA = DATA;
        populateStateDropdown(DATA.states);
        populateCategoryDropdown(DATA.states);

        const urlParams = new URLSearchParams(window.location.search);
        const stateId = urlParams.get('state');
        const searchQuery = urlParams.get('search');

        if (location.pathname.includes("state.html")) {
          renderStatesGrid(DATA.states);
          if (stateId) {
            selectState(stateId);
          }
        } else if (location.pathname.includes("category.html")) {
          if (searchQuery) {
            $("#globalSearch").value = searchQuery;
            searchCategoryGrid(searchQuery);
          } else {
            renderCategoryGrid();
          }
        }

        bindEvents();
        initLangToggle();
        initTriviaCarousel();
        initThemeToggle();
        initCarousel();
        initScrollToTop();
        initSearch();
      });
  }

  function initCarousel() {
    const track = $(".carousel-track");
    if (!track) return;
    const slides = $$(".slide", track);
    const prevButton = $(".carousel-arrow.left");
    const nextButton = $(".carousel-arrow.right");
    if (slides.length === 0) return;

    let currentIndex = 0;
    const slideInterval = 2000;
    let autoSlide;

    function showSlide(index) {
      slides.forEach((slide, i) => slide.classList.toggle("active", i === index));
      currentIndex = index;
    }

    function nextSlide() {
      showSlide((currentIndex + 1) % slides.length);
    }

    prevButton.addEventListener("click", () => { nextSlide(); resetAutoSlide(); });
    nextButton.addEventListener("click", () => { nextSlide(); resetAutoSlide(); });

    function startAutoSlide() {
      autoSlide = setInterval(nextSlide, slideInterval);
    }

    function resetAutoSlide() {
      clearInterval(autoSlide);
      startAutoSlide();
    }

    showSlide(0);
    startAutoSlide();
  }

  function initTriviaCarousel() {
    const triviaSlides = $$(".trivia-slide");
    if (triviaSlides.length === 0) return;
    let currentSlide = 0;
    setInterval(() => {
      triviaSlides[currentSlide].classList.remove("active");
      currentSlide = (currentSlide + 1) % triviaSlides.length;
      triviaSlides[currentSlide].classList.add("active");
    }, 3000);
  }

  function initLangToggle() {
    const langToggle = $('#langToggle');
    if (!langToggle) return;
    let currentLang = localStorage.getItem('lang') || 'en';

    function translatePage() {
      document.querySelectorAll('[data-translate-key]').forEach(el => {
        const key = el.dataset.translateKey;
        if (window.translations && translations[key] && translations[key][currentLang]) {
          el.innerHTML = translations[key][currentLang];
        }
      });
      document.documentElement.lang = currentLang;
    }

    langToggle.addEventListener('click', () => {
      currentLang = currentLang === 'en' ? 'hi' : 'en';
      localStorage.setItem('lang', currentLang);
      translatePage();
    });

    translatePage();
  }

  function initScrollToTop() {
    const scrollToTopBtn = $("#scrollToTopBtn");
    if (!scrollToTopBtn) return;
    window.onscroll = () => {
      if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        scrollToTopBtn.style.display = "block";
      } else {
        scrollToTopBtn.style.display = "none";
      }
    };
    scrollToTopBtn.addEventListener("click", () => {
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }

  window.CULTURE_DATA = DATA;
  window.renderStatePage = renderStatePage;
  window.selectState = selectState;
})();