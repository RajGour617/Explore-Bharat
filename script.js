/* js/script.js
   Data-driven multi-page behaviors: index, state.html, category.html.
   Place this file at js/script.js and add images under assets/.
*/

(() => {
  // ---------- Sample data store (placeholder demo-ready) ----------
  // Add / extend items for SIH demo
  const DATA = {
    meta: {
      trivia: [
        "India has 22 official languages and over 700 dialects.",
        "Kumbh Mela is visible from space during peak days.",
        "The classical dance forms in India include Bharatanatyam, Kathakali, Odissi and Kathak."
      ]
    },
    states: [
      {
        id: "uttar-pradesh",
        name_en: "Uttar Pradesh",
        name_hi: "उत्तर प्रदेश",
        banner: "images/UP/tajmahal.jpg",
        intro_en: "Uttar Pradesh — home to the Taj Mahal and many festivals.",
        intro_hi: "उत्तर प्रदेश — ताज महल और कई त्योहारों का घर।",
        cities: [
          { name: "Taj Mahal", img: "images/UP/tajmahal.jpg", desc_en: "Agra", desc_hi: "ताज महल" }
        ],
        festivals: [
          { id: "kumbh", name: "Kumbh Mela", img: "images/UP/kumbh.jpg", desc_en: "Massive spiritual gathering", desc_hi: "विशाल धार्मिक सभा" }
        ],
        food: [
          { id: "pethaa", name: "Petha", img: "images/UP/petha.jpg", desc_en: "Agra's sweet", desc_hi: "आगरा का मिठाई" }
        ],
        arts: [
          { id: "mehndi", name: "Chikankari", img: "images/UP/chikankari.jpg", desc_en: "Embroidery tradition", desc_hi: "कढ़ाई की परंपरा" }
        ],
        dances: [
          { id: "kathak", name: "Kathak", img: "images/UP/kathak.jpg", desc_en: "Uttar Pradesh's classical dance", desc_hi: "उत्तर प्रदेश का शास्त्रीय नृत्य" }
        ]
      },
      {
        id: "kerala",
        name_en: "Kerala",
        name_hi: "केरल",
        banner: "images/Kerala/kathakali.jpg",
        intro_en: "Kerala — known for Kathakali dance and backwaters.",
        intro_hi: "केरल — कथकली नृत्य और बैकवाटर्स के लिए जाना जाता है।",
        cities: [
          { name: "Kochi", img: "images/Kerala/kochi.jpg", desc_en: "Historic port city", desc_hi: "ऐतिहासिक बंदरगाह शहर" }
        ],
        festivals: [
          { id: "onam", name: "Onam", img: "images/Kerala/onam.jpg", desc_en: "Harvest festival", desc_hi: "फसल त्योहार" }
        ],
        food: [
          { id: "sadya", name: "Sadya", img: "images/Kerala/sadya.jpg", desc_en: "Traditional vegetarian feast", desc_hi: "पारंपरिक शाकाहारी दावत" }
        ],
        arts: [
          { id: "kathakali", name: "Kathakali", img: "images/Kerala/kathakali.jpg", desc_en: "Classical dance-drama", desc_hi: "शास्त्रीय नाट्य नृत्य" }
        ],
        dances: [
          { id: "folkMusic", name: "Folk Music", img: "images/Kerala/folkmusic.jpg", desc_en: "Kerala's folk music", desc_hi: "केरल का लोक संगीत" }
        ]
      },
      {
        id: "rajasthan",
        name_en: "Rajasthan",
        name_hi: "राजस्थान",
        banner: "images/Rajasthan/pushkar.jpg",
        intro_en: "Rajasthan — deserts, forts and the Pushkar Camel Fair.",
        intro_hi: "राजस्थान — रेगिस्तान, किले और पुष्कर ऊँट मेला।",
        cities: [
          { name: "Pushkar", img: "images/Rajasthan/pushkarcity.jpg", desc_en: "Famous for camel fair", desc_hi: "ऊँट मेला के लिए प्रसिद्ध" }
        ],
        festivals: [
          { id: "pushkarFair", name: "Pushkar Camel Fair", img: "images/Rajasthan/pushkar.avif", desc_en: "Annual camel fair", desc_hi: "वार्षिक ऊंट मेला" }
        ],
        food: [
          { id: "dalBaati", name: "Dal Baati Churma", img: "images/Rajasthan/dalbaati.jpg", desc_en: "Rajasthani speciality", desc_hi: "राजस्थानी व्यंजन" }
        ],
        arts: [
          { id: "blockprint", name: "Block Printing", img: "images/Rajasthan/blockprint.jpg", desc_en: "Traditional textile printing", desc_hi: "पारंपरिक कपड़ा छपाई" }
        ],
        dances: [
          { id: "ghoomar", name: "Ghoomar", img: "images/Rajasthan/ghoomar.jpg", desc_en: "Folk dance", desc_hi: "लोक नृत्य" }
        ]
      },
      {
        id: "Madhya Pradesh",
        name_en: "Madhya Pradesh",
        name_hi: "मध्य प्रदेश",
        banner: "images/mpbanner.jpg",
        intro_en: "Madhya Pradesh — known for its temples and national parks.",
        intro_hi: "मध्य प्रदेश — अपने मंदिरों और राष्ट्रीय उद्यानों के लिए जाना जाता है।",
        cities: [
          { name: "Bhopal", img: "images/MP/bhopal.jpg", desc_en: "MP Capital city", desc_hi: "राजधानी शहर" }
        ],
        festivals: [
          { id: "holi", name: "Holi", img: "images/MP/holi1.jpg", desc_en: "Festival of colors", desc_hi: "रंगों का त्योहार" }
        ],
        food: [
          { id: "dalBafla", name: "Dal Bafla", img: "images/MP/dalbafla.jpg", desc_en: "Madhya Pradesh speciality", desc_hi: "मध्य प्रदेश का विशेष व्यंजन" }
        ],
        arts: [
          { id: "Gond", name: "Gond Art", img: "images/MP/gondart.jpg", desc_en: "Traditional tribal art", desc_hi: "पारंपरिक जनजातीय कला" }
        ],
        dances: [
          { id: "matki", name: "Matki Nritya", img: "images/MP/matki.jpg", desc_en: "Folk dance", desc_hi: "लोक नृत्य" }
        ]
      }
    ],

    // category-level index (for category.html)
    categories: [
      { id: "festivals", name_en: "Festivals", name_hi: "त्योहार", icon: "🎉" },
      { id: "food", name_en: "Food", name_hi: "खाना", icon: "🍛" },
      { id: "dance", name_en: "Dance", name_hi: "नृत्य", icon: "💃" },
      { id: "music", name_en: "Music", name_hi: "संगीत", icon: "🎶" },
      { id: "arts", name_en: "Arts & Crafts", name_hi: "कला और शिल्प", icon: "🖼️" },
      { id: "heritage", name_en: "Heritage", name_hi: "विरासत", icon: "🏛️" },
      { id: "languages", name_en: "Languages", name_hi: "भाषाएँ", icon: "🗣️" }
    ]
  };

  // ---------- Utilities ----------
  const qs = (s, el = document) => el.querySelector(s);
  const qsa = (s, el = document) => Array.from(el.querySelectorAll(s));
  const htmlEscape = s => String(s || "").replace(/[&<>]/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;'}[c]));

  // Determine current page
  const path = location.pathname.split("/").pop();
  const isIndex = path === "" || path === "index.html";
  const isState = path === "state.html";
  const isCategory = path === "category.html";

  // Language state
  let LANG = localStorage.getItem("lang") || "en";

  // ---------- UI functions ----------
  function setLangButtonText() {
    qsa("#langToggle").forEach(btn => {
      if(btn) btn.textContent = LANG === "en" ? "EN/हिं" : "EN/हिं";
    });
  }
  function t(en, hi) {
    return LANG === "hi" ? (hi || en) : en;
  }

  function showModal(html) {
    const modal = qs("#modal");
    const body = qs("#modalBody");
    body.innerHTML = html;
    modal.classList.add("show");
    modal.setAttribute("aria-hidden", "false");
  }
  function hideModal() {
    const modal = qs("#modal");
    if (!modal) return;
    modal.classList.remove("show");
    modal.setAttribute("aria-hidden", "true");
    qs("#modalBody").innerHTML = "";
  }

  // ---------- Index page behavior ----------
  function initIndex() {
    // Carousel auto and arrows
    const slides = qsa(".slide");
    let cur = 0;
    function show(i) {
      slides.forEach(s => s.classList.remove("active"));
      slides[i].classList.add("active");
    }
    const left = qs(".carousel-arrow.left"), right = qs(".carousel-arrow.right");
    if (left && right) {
      left.addEventListener("click", () => { cur = (cur - 1 + slides.length) % slides.length; show(cur); });
      right.addEventListener("click", () => { cur = (cur + 1) % slides.length; show(cur); });
    }
    setInterval(() => { cur = (cur + 1) % slides.length; show(cur); }, 4500);

    // Did you know rotates trivia
    const triviaText = qs("#triviaText");
    let ti = 0;
    setInterval(() => {
      ti = (ti + 1) % DATA.meta.trivia.length;
      if (triviaText) triviaText.textContent = DATA.meta.trivia[ti];
    }, 5000);
  }

  // ---------- State page behavior ----------
  function renderStatePage() {
    // read state param
    const params = new URLSearchParams(location.search);
    const stateIdOrName = params.get("state"); // id or name
    const defaultState = DATA.states[0];

    let state = DATA.states.find(s => s.id === stateIdOrName || s.name_en.toLowerCase() === (stateIdOrName||"").toLowerCase());
    if (!state) state = defaultState;

    // Banner
    const banner = qs("#stateBanner");
    banner.innerHTML = `
      <div class="banner-wrap" style="background: linear-gradient(180deg, rgba(0,0,0,0.25), rgba(0,0,0,0.25)), url('${state.banner || "assets/tajmahal.jpg"}') center/cover; padding:34px; border-radius:12px; color:#fff;">
        <h1 style="margin:0">${LANG==='hi'?state.name_hi:state.name_en}</h1>
        <p style="margin:6px 0">${LANG==='hi'?state.intro_hi:state.intro_en}</p>
        <a href="category.html" class="btn" style="background:#fff;color:#102a43;border-radius:10px;padding:8px 12px;text-decoration:none">Explore across categories →</a>
      </div>
    `;

    // Intro
    const intro = qs("#stateIntro");
    intro.innerHTML = `<p>${htmlEscape(LANG==='hi'?state.intro_hi:state.intro_en)}</p>`;

    // Populate grids
    const makeCard = (item, type, stateName) => {
      const title = htmlEscape(LANG === "hi" ? item.name_hi || item.name : item.name);
      const desc = htmlEscape(LANG === "hi" ? item.desc_hi || item.desc_en || "" : item.desc_en || "");
      const img = item.img || state.banner || "assets/tajmahal.jpg";
      return `
        <article class="card" data-type="${type}" data-state="${state.id}">
          <img src="${img}" alt="${title}">
          <h4>${title}</h4>
          <p>${desc}</p>
          <div style="display:flex;gap:8px;margin-top:6px">
            <button class="btn-small btn-open" data-id="${item.id||item.name}" data-type="${type}" data-state="${state.id}">More</button>
            <a class="btn-link" href="${type==='city'?`https://en.wikipedia.org/wiki/${encodeURIComponent(item.name)}`:'#'}" target="_blank">Learn →</a>
          </div>
        </article>
      `;
    };

    const citiesGrid = qs("#citiesGrid");
    const festivalsGrid = qs("#festivalsGrid");
    const foodGrid = qs("#foodGrid");
    const danceGrid = qs("#danceGrid");
    const craftGrid = qs("#craftGrid");

    citiesGrid.innerHTML = (state.cities||[]).map(it => makeCard(it,'city',state.name_en)).join("") || `<p class="placeholder">No data yet — add city cards.</p>`;
    festivalsGrid.innerHTML = (state.festivals||[]).map(it => makeCard(it,'festival',state.name_en)).join("") || `<p class="placeholder">No festivals listed.</p>`;
    foodGrid.innerHTML = (state.food||[]).map(it => makeCard(it,'food',state.name_en)).join("") || `<p class="placeholder">No food items yet.</p>`;
    danceGrid.innerHTML = (state.dances||[]).map(it => makeCard(it,'dance',state.name_en)).join("") || `<p class="placeholder">No dance items yet.</p>`;
    craftGrid.innerHTML = (state.arts||[]).map(it => makeCard(it,'craft',state.name_en)).join("") || `<p class="placeholder">No crafts listed.</p>`;

    // Attach listeners for "More" buttons (event delegation)
    document.querySelectorAll(".btn-open").forEach(btn => {
      btn.addEventListener("click", e => {
        const id = btn.dataset.id;
        const type = btn.dataset.type;
        const st = btn.dataset.state;
        // find item in the state collections
        const s = DATA.states.find(x => x.id === st);
        let coll = [];
        if (type === "city") coll = s.cities;
        if (type === "festival") coll = s.festivals;
        if (type === "food") coll = s.food;
        if (type === "dance") coll = s.dances;
        if (type === "craft") coll = s.arts;
        const item = coll.find(x => (x.id || x.name) === id) || coll[0];
        const title = LANG==='hi' ? item.name_hi || item.name : item.name;
        const description = LANG==='hi' ? item.desc_hi || item.desc_en || "" : item.desc_en || "";
        const image = item.img || s.banner || "assets/tajmahal.jpg";
        showModal(`
          <div style="display:flex;gap:12px;align-items:flex-start">
            <img src="${image}" alt="${title}" style="width:42%;height:auto;border-radius:10px;object-fit:cover">
            <div style="flex:1">
              <h3>${htmlEscape(title)}</h3>
              <p>${htmlEscape(description)}</p>
              <p><strong>State:</strong> ${LANG==='hi' ? s.name_hi : s.name_en}</p>
              <p><strong>Category:</strong> ${type}</p>
            </div>
          </div>
        `);
      });
    });
  }

  // ---------- Category page behavior ----------
  function renderCategoryPage() {
    // populate filters
    const stateFilter = qs("#stateFilter");
    const categoryFilter = qs("#categoryFilter");
    // states options
    DATA.states.forEach(s => {
      const opt = document.createElement("option");
      opt.value = s.id;
      opt.textContent = LANG === "hi" ? (s.name_hi || s.name_en) : s.name_en;
      stateFilter.appendChild(opt);
    });
    // categories
    DATA.categories.forEach(c => {
      const opt = document.createElement("option");
      opt.value = c.id;
      opt.textContent = LANG === "hi" ? (c.name_hi || c.name_en) : c.name_en;
      categoryFilter.appendChild(opt);

      // Also build a visual card in grid
    });

    // build a combined list of category items across states
    const items = [];
    DATA.states.forEach(s => {
      // festivals
      (s.festivals||[]).forEach(f => items.push({...f, type:"festivals", stateId:s.id, stateName:s.name_en}));
      (s.food||[]).forEach(f => items.push({...f, type:"food", stateId:s.id, stateName:s.name_en}));
      (s.dances||[]).forEach(f => items.push({...f, type:"dance", stateId:s.id, stateName:s.name_en}));
      (s.arts||[]).forEach(f => items.push({...f, type:"arts", stateId:s.id, stateName:s.name_en}));
      (s.cities||[]).forEach(f => items.push({...f, type:"heritage", stateId:s.id, stateName:s.name_en}));
    });

    function renderGrid(filterState, filterCategory) {
      const container = qs("#categoryGrid");
      container.innerHTML = ""; // reset
      const filtered = items.filter(it => {
        if (filterState && it.stateId !== filterState) return false;
        if (filterCategory && it.type !== filterCategory) return false;
        return true;
      });

      if (!filtered.length) {
        container.innerHTML = `<div class="placeholder">No items found for your filters.</div>`;
        return;
      }

      filtered.forEach(it => {
        const title = LANG === "hi" ? it.name_hi || it.name : it.name;
        const desc = LANG === "hi" ? it.desc_hi || it.desc_en || "" : it.desc_en || "";
        const img = it.img || "assets/tajmahal.jpg";
        const card = document.createElement("article");
        card.className = "card";
        card.innerHTML = `
          <img src="${img}" alt="${htmlEscape(title)}">
          <h4>${htmlEscape(title)}</h4>
          <p>${htmlEscape(desc)}</p>
          <div style="display:flex;gap:8px;margin-top:6px">
            <button class="btn-small btn-open-item" data-name="${htmlEscape(it.name)}" data-state="${it.stateId}" data-type="${it.type}">More</button>
            <a class="btn-link" href="state.html?state=${it.stateId}">${LANG==='hi'? 'राज्य देखें':'View state'}</a>
          </div>
        `;
        container.appendChild(card);
      });

      // attach events
      qsa(".btn-open-item").forEach(b => {
        b.addEventListener("click", () => {
          const nm = b.dataset.name;
          const st = b.dataset.state;
          const type = b.dataset.type;
          showModal(`
            <h3>${nm}</h3>
            <p>State: ${LANG==='hi' ? (DATA.states.find(s=>s.id===st).name_hi) : DATA.states.find(s=>s.id===st).name_en}</p>
            <p>Category: ${type}</p>
            <p>This is demo placeholder content — add detailed description, links, media and references here for SIH.</p>
          `);
        });
      });
    }

    // initial render
    renderGrid("", "");

    // listen filters
    stateFilter.addEventListener("change", () => {
      renderGrid(stateFilter.value, categoryFilter.value);
    });
    categoryFilter.addEventListener("change", () => {
      renderGrid(stateFilter.value, categoryFilter.value);
    });

    // also populate a quick category card list for visual browsing
    const catGrid = qs("#categoryGrid");
    if (catGrid && catGrid.children.length === 0) {
      // show cards grouped by category initially
      DATA.categories.forEach(c => {
        const col = document.createElement("article");
        col.className = "card";
        col.innerHTML = `
          <h3 style="font-size:1.1rem">${c.icon} ${LANG==='hi'? (c.name_hi || c.name_en) : c.name_en}</h3>
          <p>Explore curated ${c.name_en} across states.</p>
          <div style="display:flex;gap:8px;margin-top:8px">
            <button class="btn btn-primary btn-filter-by-cat" data-cat="${c.id}">Open</button>
            <a class="btn-link" href="index.html">Home</a>
          </div>
        `;
        catGrid.appendChild(col);
      });

      qsa(".btn-filter-by-cat").forEach(b => {
        b.addEventListener("click", (e) => {
          const catId = e.currentTarget.dataset.cat;
          categoryFilter.value = catId;
          // Apply category filter
          const evt = new Event("change");
          categoryFilter.dispatchEvent(evt);
        });
      });
    }
  }

  // ---------- Global search ----------
  function initSearch() {
    qsa("#globalSearch").forEach(inp => {
      if(!inp) return;
      inp.addEventListener("keydown", e => {
        if (e.key === "Enter") {
          const q = e.target.value.trim().toLowerCase();
          if (!q) return;
          // find item anywhere
          const matches = [];
          DATA.states.forEach(s => {
            // check state
            if (s.name_en.toLowerCase().includes(q) || (s.name_hi && s.name_hi.toLowerCase().includes(q))) {
              matches.push({type:"state", name:s.name_en, id:s.id});
            }
            (s.cities||[]).forEach(c => {
              if ((c.name || "").toLowerCase().includes(q)) matches.push({type:"city", name:c.name, state:s.id});
            });
            (s.festivals||[]).forEach(f => { if ((f.name||"").toLowerCase().includes(q)) matches.push({type:"festival", name:f.name, state:s.id}); });
            (s.food||[]).forEach(f => { if ((f.name||"").toLowerCase().includes(q)) matches.push({type:"food", name:f.name, state:s.id}); });
            (s.dances||[]).forEach(f => { if ((f.name||"").toLowerCase().includes(q)) matches.push({type:"dance", name:f.name, state:s.id}); });
            (s.arts||[]).forEach(f => { if ((f.name||"").toLowerCase().includes(q)) matches.push({type:"arts", name:f.name, state:s.id}); });
          });

          if (!matches.length) {
            showModal(`<h3>No results</h3><p>No matches found for "${htmlEscape(q)}". Try another term.</p>`);
          } else {
            // show a compact list and link to state or item
            const list = matches.slice(0,20).map(m => {
              const label = `${m.name} — ${m.type}`;
              let href = "#";
              if (m.type === "state") href = `state.html?state=${m.id}`;
              else href = `state.html?state=${m.state}#`;
              return `<li><a href="${href}">${htmlEscape(label)}</a></li>`;
            }).join("");
            showModal(`<h3>Search results (${matches.length})</h3><ul>${list}</ul>`);
          }
        }
      });
    });
  }

  // ---------- Language toggle ----------
  function initLangToggle() {
    qsa("#langToggle").forEach(btn => {
      if(!btn) return;
      btn.addEventListener("click", () => {
        LANG = LANG === "en" ? "hi" : "en";
        localStorage.setItem("lang", LANG);
        // simple full refresh to re-render pages with new language
        setLangButtonText();
        location.reload();
      });
    });
    setLangButtonText();
  }

  // ---------- Modal close handlers ----------
  function attachModalHandlers() {
    qsa("#modalClose").forEach(b => b.addEventListener("click", hideModal));
    document.addEventListener("click", e => {
      if (e.target.matches("#modal.show")) hideModal();
    });
    document.addEventListener("keydown", e => {
      if (e.key === "Escape") hideModal();
    });
  }

  // ---------- Initialize depending on page ----------
  function init() {
    initLangToggle();
    attachModalHandlers();
    initSearch();

    if (isIndex) {
      initIndex();
    }
    if (isState) {
      renderStatePage();
    }
    if (isCategory) {
      renderCategoryPage();
    }

    // Attach generic "did you know" button on index
    const didYouKnowBtn = qs("#didYouKnowBtn");
    if (didYouKnowBtn) {
      didYouKnowBtn.addEventListener("click", () => {
        const r = DATA.meta.trivia[Math.floor(Math.random()*DATA.meta.trivia.length)];
        showModal(`<h3>Did you know?</h3><p>${htmlEscape(r)}</p>`);
      });
    }

    // Generic internal anchor links protection + try to make navigation dynamic
    document.querySelectorAll('a[href^="#"]').forEach(a => {
      a.addEventListener("click", (e) => { e.preventDefault(); const t = e.currentTarget.getAttribute("href"); const el = document.querySelector(t); if(el) el.scrollIntoView({behavior:'smooth'}); });
    });
  }

  // run
  document.addEventListener("DOMContentLoaded", init);

})();
