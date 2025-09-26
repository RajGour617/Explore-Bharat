(() => {
  // Replace or extend this object, or create states.json with the same structure and the script will fetch it.
  const DATA = {
    states: [
      {
        id: "Madhya Pradesh",
        short: "MP",
        banner: "images/MP/mpbanner.jpg",
        intro: "Madhya Pradesh — the heart of India; home to ancient caves, wildlife and tribal arts.",
        intro_hi: "मध्य प्रदेश — अपने मंदिरों और राष्ट्रीय उद्यानों के लिए जाना जाता है।",
        cities: [
          { name: "Indore", img: "images/MP/rajwada.jpg", desc: "Cleanest City of India", link: "Indore/index.html" },
          { name: "Ujjain", img: "images/MP/ujjain.jpg", desc: "Famous for Mahakaleshwar Temple", link: "Ujjain/index.html" },
          { name: "Khajuraho", img: "images/MP/khajuraho.jpg", desc: "Famous for its UNESCO-listed temples", link: "Khajuraho/index.html" },
          { name: "Sanchi", img: "images/MP/sanchi.jpg", desc: "Buddhist stupas and ancient heritage", link: "Sanchi/index.html" },
          { name: "Sehore", img: "images/MP/sehore.jpg", desc: "Famous for Sharbati Wheat", link: "Sehore/index.html" },
          { name: "Katni", img: "images/MP/katni.jpg", desc: "City of Marbles", link: "Katni/index.html" },
          { name: "Mandsaur", img: "images/MP/mandsaur.jpg", desc: "Famous for its poppy seed cultivation", link: "Mandsaur/index.html" },
          { name: "Neemuch", img: "images/MP/neemuch.jpg", alt: "Neemuch", desc: "North India Mounted Artillary and Cavalry Headquarters", link: "Neemuch/index.html" }
        ],
        festivals: [
          {name: "Teej", img: "images/MP/teej.jpg", desc: "Monsoon festival celebrated with songs and swings." },
          { name: "Holi", img: "images/MP/holi1.jpg", desc: "Vibrant festival of colours" },
          { name: "Khajuraho Dance Festival", img: "images/MP/khajurahoDance.jpg", desc: "Classical dance under the temple lights." }
        ],
        food: [
          { name: "Dal Bafla", img: "images/MP/dalbafla.jpg", desc: "A dish of baked wheat balls with dal." },
          { name: "Poha", img: "images/MP/poha.jpg", desc: "Flattened rice snack, popular breakfast." },
          { name: "Sabudana Khichdi", img: "images/MP/khichdi.jpg", desc: "A popular dish during fasting periods. Tapioca pearls cooked with peanuts and spices." }
        ],
        danceMusic: [
          { name: "Gond Dance", img: "images/MP/gondDance.jpg", desc: "Tribal dance of Gond community." },
          { name: "Rai", img: "images/MP/rai.jpg", desc: "Traditional dance form of the region." },
          { name: "Matki Dance", img: "images/MP/matki.jpg", desc: "Traditional dance with pots on head." }
        ],
        crafts: [
          { name: "Pithora Paintings", img: "images/MP/pithora.jpg", desc: "Ritual paintings by tribal artists." },
          { name: "Bhitti Chitra", img: "images/MP/bhitti.jpg", desc: "Traditional handicrafts of Madhya Pradesh." }
        ],
        categories: ["Festivals", "Food", "Dance & Music", "Arts & Crafts"]
      },
      {
        id: "Uttar Pradesh",
        short: "UP",
        banner: "images/UP/upbanner.jpg",
        intro: "Uttar Pradesh — land of Mughal monuments, classical music and colourful fairs.",
        intro_hi: "उत्तर प्रदेश — मुगल स्मारकों, शास्त्रीय संगीत और रंगीन मेलों की भूमि।",
        cities: [
          { name: "Lucknow", img: "images/UP/lucknow.jpg", desc: "Capital city known for its heritage." },
          { name: "Agra", img: "images/UP/tajmahal.jpg", desc: "Taj Mahal and Mughal history." },
          { name: "Varanasi", img: "images/UP/varanasi.jpg", desc: "One of the world’s oldest living cities." }
        ],
        festivals: [
          { name: "Diwali", img: "images/UP/diwali.jpg", desc: "Festival of lights celebrated with great fervor." },
          { name: "Kumbh Mela", img: "images/UP/kumbh.jpg", desc: "Major religious congregation at the Sangam." },
          { name: "Holi", img: "images/MP/holi1.jpg", desc: "Vibrant festival of colours." }
        ],
        food: [
          { name: "Awadhi Biryani", img: "images/UP/awadhiBiryani.jpg", desc: "Royal flavours of Lucknow." },
          { name: "Bedai", img: "images/UP/bedai.jpg", desc: "Popular breakfast from Lucknow." }
        ],
        danceMusic: [
          { name: "Thumri & Dadra", img: "images/UP/thumri.jpg", desc: "Classical vocal forms from Awadh." }
        ],
        crafts: [
          { name: "Zardozi Embroidery", img: "images/UP/zardozi.jpg", desc: "Luxurious metal-thread embroidery." }
        ],
        categories: ["Festivals", "Food", "Dance & Music", "Arts & Crafts"]
      },
      {
        id: "Kerala",
        short: "KL",
        banner: "images/Kerala/keralaBanner.jpg",
        intro: "Kerala — backwaters, Ayurveda, and a rich performing-art tradition.",
        intro_hi: "केरल — अपने बैकवाटर्स, आयुर्वेद और समृद्ध प्रदर्शन कला परंपरा के लिए जाना जाता है।",
        cities: [
          { name: "Kochi", img: "images/Kerala/kochi.jpg", desc: "Historic port city with colonial past." },
          { name: "Thiruvananthapuram", img: "images/Kerala/thiru.jpg", desc: "State capital and cultural hub." }
        ],
        festivals: [
          { name: "Onam", img: "images/Kerala/onam.jpg", desc: "Harvest festival celebrated statewide." }
        ],
        food: [
          { name: "Kerala Sadya", img: "images/Kerala/sadya.jpg", desc: "Banquet served on banana leaf." },
          { name: "Appam & Stew", img: "images/Kerala/appam.jpg", desc: "Light fermented pancakes with stew." }
        ],
        danceMusic: [
          { name: "Kathakali", img: "images/Kerala/kathakali.jpg", desc: "Classical dance-drama with elaborate makeup." }
        ],
        crafts: [
          { name: "Coir Products", img: "images/Kerala/coir.jpg", desc: "Coir-based handicrafts and ropes." }
        ],
        categories: ["Festivals", "Food", "Dance & Music", "Arts & Crafts"]
      },
      {
        id: "Rajasthan",
        short: "RJ",
        banner: "images/Rajasthan/rajbanner.jpg",
        intro: "Rajasthan — deserts, forts, folk music and vibrant textile crafts.",
        intro_hi: "राजस्थान — अपने रेगिस्तान, किलों, लोक संगीत और जीवंत वस्त्र शिल्प के लिए जाना जाता है।",
        cities: [
          { name: "Jaipur", img: "images/Rajasthan/jaipur.jpg", desc: "Pink city with palaces & bazaars." },
          { name: "Jaisalmer", img: "images/Rajasthan/jaisalmer.jpg", desc: "Golden city in the Thar desert." }
        ],
        festivals: [
          { name: "Pushkar Camel Fair", img: "images/Rajasthan/pushkar.avif", desc: "Camel trading fair + cultural events." },
          { name: "Desert Festival", img: "images/Rajasthan/desertfest.jpg", desc: "Folk performances and camel races." }
        ],
        food: [
          { name: "Dal Baati Churma", img: "images/Rajasthan/dalbaati.jpg", desc: "Signature Rajasthani meal." }
        ],
        danceMusic: [
          { name: "Ghoomar", img: "images/Rajasthan/ghoomar.jpg", desc: "Traditional circular women's dance." }
        ],
        crafts: [
          { name: "Block Printing & Blue Pottery", img: "images/Rajasthan/blockprint.jpg", desc: "Iconic handicrafts." }
        ],
        categories: ["Festivals", "Food", "Dance & Music", "Arts & Crafts"]
      }
    ]
  };

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
      // Only show view link to city html page
      if (item.link) {
        cardContent += `<a href="${item.link}" class="btn btn-primary" style="float:left; margin-top:8px;">Explore</a>`;
      }
    } else {
      // Show view button for modal as before
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
    div.className = "card state-card"; // Add a specific class for styling/selection
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
    const selects = Array.from(document.querySelectorAll("#stateFilter, #stateDropdown"));
    selects.forEach(sel => {
      // remove existing except the first
      const existing = Array.from(sel.querySelectorAll("option[data-generated]"));
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
    // Collect unique categories across DATA
    const catSet = new Set();
    states.forEach(s => (s.categories || []).forEach(c => catSet.add(c)));
    const categories = Array.from(catSet).sort();
    const sel = document.querySelector("#categoryFilter, #categoryDropdown");
    if (!sel) return;
    // remove previously added
    Array.from(sel.querySelectorAll("option[data-generated-cat]")).forEach(o => o.remove());
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
      // If no state is selected, show the main grid and hide details
      document.body.classList.remove('state-selected');
      // Reset dropdown to placeholder
      const stateSelect = $("#stateFilter");
      if (stateSelect) stateSelect.value = "";
      return;
    }
    const state = DATA.states.find(s => s.id === stateId);
    if (!state) return;

    // Banner
    const banner = $("#stateBanner");
    if (banner) {
        banner.innerHTML = `
        <div style="display:flex;gap:12px;align-items:center">
          <img src="${state.banner || 'images/placeholder.jpg'}" alt="${state.id}" style="height:140px;border-radius:12px;object-fit:cover;">
          <div>
            <h1 style="color: var(--navy);">${state.id}</h1>
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
      const node = document.getElementById(g.id);
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

    // Show the detail view
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
    // state selection(s)
    const stateSelects = Array.from(document.querySelectorAll("#stateFilter, #stateDropdown"));
    stateSelects.forEach(sel => {
      sel.addEventListener("change", e => {
        const val = e.target.value;
        // when change on state page, render state
        if (location.pathname.endsWith("state.html") || location.pathname.endsWith("/state.html") || document.getElementById("stateBanner")) {
          renderStatePage(val);
        }
        // also allow search/filters in category page
        if (document.getElementById("categoryGrid")) {
          // simple filtering: re-render category grid to show only items from selected state
          filterCategoryGrid(val, $("#categoryFilter") ? $("#categoryFilter").value : "");
        }
      });
    });

    // category filter change
    const catSel = $("#categoryFilter") || $("#categoryDropdown");
    if (catSel) {
      catSel.addEventListener("change", () => {
        const stateVal = $("#stateFilter") ? $("#stateFilter").value : "";
        filterCategoryGrid(stateVal, catSel.value);
      });
    }

    // global search
    const globalSearch = $("#globalSearch");
    if (globalSearch) {
      globalSearch.addEventListener("input", (e) => {
        const q = e.target.value.trim().toLowerCase();
        // if on state page, search within content
        if (document.getElementById("stateBanner")) {
          searchWithinState(q);
        } else if (document.getElementById("categoryGrid")) {
          searchCategoryGrid(q);
        }
      });
    }

    // modal close
    const modalClose = $("#modalClose");
    if (modalClose) modalClose.addEventListener("click", closeModal);
    const modal = $("#modal");
    if (modal) modal.addEventListener("click", (evt) => {
      if (evt.target === modal) closeModal();
    });

    // Back to states button
    const backBtn = $("#backToStates");
    if (backBtn) {
      backBtn.addEventListener("click", () => renderStatePage(null));
    }

    // delegate card view buttons
    document.body.addEventListener("click", (e) => {
      const btn = e.target.closest(".view-detail");
      if (!btn) return;
      // find nearest card and metadata
      const card = btn.closest(".card");
      const meta = card && card._meta ? card._meta : null;
      const name = btn.dataset.name;
      const type = btn.dataset.type;
      // find item by name across DATA
      let found = null;
      DATA.states.forEach(s => {
        ["cities", "festivals", "food", "danceMusic", "crafts"].forEach(k => {
          (s[k] || []).forEach(it => {
            if (it.name === name) found = { item: it, state: s.id, key: k };
          });
        });
      });
      if (!found && meta) {
        found = { item: meta.item, state: null, key: meta.type };
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

  // ---------- SEARCH / FILTER helpers ----------
  function filterCategoryGrid(stateName, categoryName) {
    // rebuild grid with filter criteria
    const grid = $("#categoryGrid");
    if (!grid) return;
    grid.innerHTML = "";
    const entries = [];
    DATA.states.forEach(st => {
      if (stateName && st.id !== stateName) return;
      (["festivals", "food", "danceMusic", "crafts", "cities"]).forEach(key => {
        const items = st[key] || [];
        items.forEach(it => {
          const category =
            key === "festivals" ? "Festivals" :
            key === "food" ? "Food" :
            key === "danceMusic" ? "Dance & Music" :
            key === "crafts" ? "Arts & Crafts" :
            "Cities & Attractions";
          if (categoryName && category !== categoryName) return;
          entries.push({ state: st.id, item: it, category });
        });
      });
    });
    if (entries.length === 0) {
      grid.innerHTML = `<div class="placeholder">No items match your filter.</div>`;
      return;
    }
    // group by category
    const grouped = entries.reduce((acc, e) => {
      acc[e.category] = acc[e.category] || [];
      acc[e.category].push(e);
      return acc;
    }, {});
    Object.keys(grouped).forEach(cat => {
      const section = document.createElement("section");
      section.className = "card";
      section.style.padding = "12px";
      section.innerHTML = `<h3>${cat}</h3><div class="grid" style="margin-top:10px"></div>`;
      const inner = section.querySelector(".grid");
      grouped[cat].forEach(entry => {
        const card = createCard(entry.item, cat);
        const caption = document.createElement("div");
        caption.style.fontSize = "0.8rem";
        caption.style.color = "#4b5563";
        caption.textContent = `State: ${entry.state}`;
        card.appendChild(caption);
        inner.appendChild(card);
      });
      grid.appendChild(section);
    });
  }

  function searchWithinState(query) {
    // Display only cards which match query in current state page
    const stateSelect = document.querySelector("#stateFilter");
    if (!stateSelect) return;
    const stateId = stateSelect.value;
    if (!stateId) return;
    const state = DATA.states.find(s => s.id === stateId);
    if (!state) return;
    // simple filter: render only items whose name/desc contains query
    const matches = (list) => (list || []).filter(it => {
      return String(it.name + (it.desc || "")).toLowerCase().includes(query);
    });
    ["cities", "festivals", "food", "danceMusic", "crafts"].forEach(key => {
      const gridId = key === "cities" ? "citiesGrid" :
        key === "festivals" ? "festivalsGrid" :
        key === "food" ? "foodGrid" :
        key === "danceMusic" ? "danceGrid" : "craftGrid";
      const node = document.getElementById(gridId);
      if (!node) return;
      const found = matches(state[key]);
      node.innerHTML = "";
      if (found.length === 0) {
        node.innerHTML = `<div class="placeholder">No results.</div>`;
      } else {
        found.forEach(it => node.appendChild(createCard(it, key)));
      }
    });
  }

  function searchCategoryGrid(q) {
    // simple full-text filter across category grid
    const grid = $("#categoryGrid");
    if (!grid) return;
    const lower = q.trim().toLowerCase();
    if (!lower) return renderCategoryGrid();
    // gather matches
    const entries = [];
    DATA.states.forEach(st => {
      (["cities", "festivals", "food", "danceMusic", "crafts"]).forEach(k => {
        (st[k] || []).forEach(it => {
          if ((it.name + " " + (it.desc || "") + " " + st.id).toLowerCase().includes(lower)) {
            const category =
              k === "festivals" ? "Festivals" :
              k === "food" ? "Food" :
              k === "danceMusic" ? "Dance & Music" :
              k === "crafts" ? "Arts & Crafts" :
              "Cities & Attractions";
            entries.push({ state: st.id, item: it, category });
          }
        });
      });
    });
    if (entries.length === 0) {
      grid.innerHTML = `<div class="placeholder">No results for "${q}".</div>`;
      return;
    }
    grid.innerHTML = "";
    // show grouped
    const grouped = entries.reduce((acc, e) => {
      acc[e.category] = acc[e.category] || [];
      acc[e.category].push(e);
      return acc;
    }, {});
    Object.keys(grouped).forEach(cat => {
      const section = document.createElement("section");
      section.className = "card";
      section.style.padding = "12px";
      section.innerHTML = `<h3>${cat}</h3><div class="grid" style="margin-top:10px"></div>`;
      const innerGrid = section.querySelector(".grid");
      grouped[cat].forEach(entry => {
        const card = createCard(entry.item, cat);
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

  //---------- INITIALIZATION ----------
  function init() {
    // attempt to fetch external states.json (optional) - fallback to embedded DATA
    fetch("states.json").then(r => {
      if (!r.ok) throw new Error("no external json");
      return r.json();
    }).then(json => {
      if (json && Array.isArray(json.states)) {
        // merge or replace
        DATA.states = json.states;
      }
    }).catch(() => {
      // silent fallback to embedded DATA
    }).finally(() => {
      // populate dropdowns & categories
      populateStateDropdown(DATA.states);
      populateCategoryDropdown(DATA.states);
      renderStatesGrid(DATA.states);
      // if on state page and a default is selected, render it
      const pageStateSelect = document.querySelector("#stateFilter");
      if (pageStateSelect && pageStateSelect.value) {
        renderStatePage(pageStateSelect.value);
      } else {
        // if only one of the selects has a non-empty value, render that (helpful during navigation)
        const val = pageStateSelect ? pageStateSelect.value : "";
        if (val) renderStatePage(val);
      }
      renderCategoryGrid();
      bindEvents();
    });
  }

  // run on DOM ready
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }

  // expose some helpers (optional)
  window.CULTURE_DATA = DATA;
  window.renderStatePage = renderStatePage;
})();



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

  document.addEventListener("DOMContentLoaded", () => {
  const track = document.querySelector(".carousel-track");
  const slides = Array.from(track.children);
  const prevButton = document.querySelector(".carousel-arrow.left");
  const nextButton = document.querySelector(".carousel-arrow.right");

  let currentIndex = 0;
  const slideInterval = 2000; // 2 seconds per slide
  let autoSlide;

  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.classList.toggle("active", i === index);
    });
    currentIndex = index;
  }

  function nextSlide() {
    const nextIndex = (currentIndex + 1) % slides.length;
    showSlide(nextIndex);
  }

  function prevSlide() {
    const prevIndex = (currentIndex - 1 + slides.length) % slides.length;
    showSlide(prevIndex);
  }

  // Button listeners
  nextButton.addEventListener("click", () => {
    nextSlide();
    resetAutoSlide();
  });

  prevButton.addEventListener("click", () => {
    prevSlide();
    resetAutoSlide();
  });

  // Auto-play
  function startAutoSlide() {
    autoSlide = setInterval(nextSlide, slideInterval);
  }

  function resetAutoSlide() {
    clearInterval(autoSlide);
    startAutoSlide();
  }

  // Start carousel
  showSlide(0);
  startAutoSlide();
});