
(() => {
  // Replace or extend this object, or create states.json with the same structure and the script will fetch it.
  window.DATA= {
    states: [
      {
        id: "Madhya Pradesh",
        short: "MP",
        banner: "images/MP/mpbanner.jpg",
        intro: "Madhya Pradesh — the heart of India; home to ancient caves, wildlife and tribal arts.",
        intro_hi: "मध्य प्रदेश — अपने मंदिरों और राष्ट्रीय उद्यानों के लिए जाना जाता है।",
        cities: [
          { name: "Indore", img: "images/MP/rajwada.jpg", desc: "Cleanest City of India", link: "Indore/index.html",
            map_embed_code:`<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d84489.30308035825!2d75.86384989999999!3d22.723972749999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962fcad1b410ddb%3A0x96ec4da356240f4!2z4KSH4KSo4KWN4KSm4KWM4KSwLCDgpK7gpKfgpY3gpK8g4KSq4KWN4KSw4KSm4KWH4KS2!5e1!3m2!1shi!2sin!4v1758986135879!5m2!1shi!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`,
            attractions: [
    {
      name: "Rajwada Palace",
      desc: "Historic palace in the city center.",
      vr_embed_code: '<iframe src="https://www.google.com/maps/embed?pb=!4v1759215429407!6m8!1m7!1sCAoSFkNJSE0wb2dLRUlDQWdJREJ6dVN3Tnc.!2m2!1d22.71779384484497!2d75.85443508220321!3f346.02288225019197!4f10.240626580398754!5f0.7820865974627469" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>'
    },
    {
      name: "Lal Bagh Palace",
      desc: "Grand 19th-century palace on the banks of Khan River.",
      img:"Indore/images/lalbagh.jpg",
     "vr_embed_code": `<iframe src="https://www.google.com/maps/embed?pb=!4v1758963204239!6m8!1m7!1sCAoSF0NJSE0wb2dLRUlDQWdJQ0VrYURaeWdF!2m2!1d22.7007388764764!2d75.84715274126395!3f194.79083215190397!4f0.21574413372469792!5f0.4000000000000002" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`
    },
   {
     name: "Anpuran temple",
     desc:"Temple",
     img:"Indore/images/annapurna.jpg",
     vr_embed_code:`<iframe src="https://www.google.com/maps/embed?pb=!4v1758979775837!6m8!1m7!1sCAoSFkNJSE0wb2dLRUlDQWdJRFZtNEtsWlE.!2m2!1d22.69016207370078!2d75.83775543967256!3f260!4f0!5f0.7820865974627469" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`

   },
   {
     name: "Khajrana Ganesh Temple",
     desc:"Temple",
     img:"Indore/images/khajrana.jpg",
     vr_embed_code:`<iframe src="https://www.google.com/maps/embed?pb=!4v1758980273377!6m8!1m7!1sCAoSF0NJSE0wb2dLRUlDQWdJRHVfcm1jN3dF!2m2!1d22.73114779109273!2d75.90824307795309!3f280!4f0!5f0.7820865974627469" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`


   },
  ]
           },
          { name: "Ujjain", img: "images/MP/ujjain.jpg", desc: "Famous for Mahakaleshwar Temple", link: "Ujjain/index.html",
            map_embed_code:`<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d42105.96120230388!2d75.79722045!3d23.16899865!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39637469de00ff23%3A0x7f82abdf7899d412!2z4KSJ4KSc4KWN4KSc4KWI4KSoLCDgpK7gpKfgpY3gpK8g4KSq4KWN4KSw4KSm4KWH4KS2!5e1!3m2!1shi!2sin!4v1759002738764!5m2!1shi!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`,
             attractions: [
              {
                name: "Mahakaleshwar Jyotirlinga",
               desc:" One of the twelve Jyotirlingas, Mahakaleshwar is a sacred temple dedicated to Lord Shiva.",
               img:"Ujjain/images/mahakaleshwar.jpg",
              vr_embed_code:`<iframe src="https://www.google.com/maps/embed?pb=!4v1758980735716!6m8!1m7!1sCAoSFkNJSE0wb2dLRUlDQWdJRDY2YWpaTVE.!2m2!1d23.18308777624259!2d75.76813760427645!3f239.32487073946626!4f3.9538514572167998!5f0.7820865974627469" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`


              },
             ]
           },

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
          {
            name: "Pithora Paintings",
            img: "images/MP/pithora.jpg",
            desc: "Ritual paintings by tribal artists.",
            artisans: [
                { name: "Smt. Bhuri Bai", story: "A renowned Bhil artist who has been preserving this ancient art form for decades.", product_link: "Marketplace/index.html" }
            ]
          },
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
          { name: "Agra",
             img: "images/UP/tajmahal.jpg",
              desc: "Taj Mahal and Mughal history.",
             link: "Agra/index.html",
             vr_embed_code: '<iframe src="https://www.google.com/maps/embed?pb=!4v1758960834211!6m8!1m7!1sCAoSF0NJSE0wb2dLRUlDQWdJQ2swT185LWdF!2m2!1d27.17323980938655!2d78.04214660138477!3f352.45119996156996!4f0.3755578837235021!5f0.7820865974627469" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>'
            },
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
          {
            name: "Zardozi Embroidery",
            img: "images/UP/zardozi.jpg",
            desc: "Luxurious metal-thread embroidery.",
            artisans: [
                { name: "Shri Kaleem Ahmed", story: "A master craftsman carrying forward the legacy of Zardozi from Lucknow.", product_link: "Marketplace/index.html" }
            ]
          }
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
    div.dataset.itemName = item.name; // For point tracking

    let cardContent = `
      <img src="${item.img || 'images/placeholder.jpg'}" alt="${item.name}">
      <h4>${item.name}</h4>
      <p>${item.desc || ''}</p>
      <div style="margin-top:auto; display: flex; gap: 8px; align-items: center;">
    `;

    if ((type === "City" || type === "Cities & Attractions") && item.link) {
        cardContent += `<a href="${item.link}" class="btn btn-primary city-explore-btn">Explore</a>`;
    }

    if ((type === "City" || type === "Cities & Attractions") && item.map_embed_code) {
        cardContent += `<button
                          class="btn btn-secondary view-map-button city-explore-btn"
                          data-map-name="${item.name}">
                          View Location
                        </button>`;
    }

    if ((type === "City" || type === "Cities & Attractions") && item.vr_embed_code) {
        const sanitizedVREmbedCode = item.vr_embed_code.replace(/"/g, "'");
        cardContent += `<button
                          class="btn btn-secondary vr-button city-explore-btn"
                          data-vr-embed-code='${sanitizedVREmbedCode}'>
                          🥽 360° View
                        </button>`;
    }
    if ((type === "Art/Craft" || type === "Arts & Crafts") && item.artisans && item.artisans.length > 0) {
        cardContent += `<button
                      class="btn btn-secondary view-artisan-button"
                      style="background-color: #2a9d8f;">
                      Meet the Artisan
                    </button>`;
    }
    if (!(type === "City" || type === "Cities & Attractions")) {
        cardContent += `<button class="btn btn-link view-detail" data-type="${type}" data-name="${item.name}">View</button>`;
    }

    cardContent += `</div>`;
    div.innerHTML = cardContent;

    if (item.map_embed_code) {
        const mapButton = div.querySelector(".view-map-button");
        if (mapButton) {
            mapButton._mapEmbedCode = item.map_embed_code;
        }
    }

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

    const isIndexPage = window.location.pathname.endsWith('/') || window.location.pathname.endsWith('index.html');

    const action = () => {
        if (isIndexPage) {
            window.location.href = `state.html?state=${encodeURIComponent(state.id)}`;
        } else {
            selectState(state.id);
        }
    };

    div.addEventListener('click', action);
    div.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        action();
      }
    });
    return div;
  }
  function showModal(title, htmlContent) {
    const modal = $("#modal");
    const body = $("#modalBody");
    if (!modal || !body) return;
    body.innerHTML = `<h3>${title}</h3><div class="modal-inner-content">${htmlContent}</div>`;
    modal.classList.add("show");
    modal.setAttribute("aria-hidden", "false");
  }

  function closeModal() {
    const modal = $("#modal");
    if (!modal) return;
    modal.classList.remove("show");
    modal.setAttribute("aria-hidden", "true");
  }
   window.showNotification = function(message, type = 'success') {
    const notification = document.createElement('div');
    notification.className = `toast-notification ${type}`; // 'success' or 'warning'
    notification.textContent = message;
    document.body.appendChild(notification);
    setTimeout(() => notification.classList.add('show'), 100);
    setTimeout(() => {
        notification.classList.remove('show');
        setTimeout(() => document.body.removeChild(notification), 500);
    }, 5000);
  }

   window.showPointsModal = function() {
    const currentPoints = getPoints();
    const modalHTML = `
        <div style="text-align: center;">
            <h2 style="font-size: 2.5rem; color: var(--saffron);">${currentPoints} Points</h2>
            <p>You earn points by exploring India's rich culture!</p>
            <p><strong>Redeem your points for exclusive discount coupons on our Artisan Marketplace.</strong></p><br>
            <div style="display: flex; gap: 10px; justify-content: center;">
                 <button id="earnMoreBtn" class="btn btn-secondary">Take a Quiz!</button>
                 <button id="redeemBtn" class="btn btn-primary">Redeem for Coupon</button>
            </div>
        </div>`;
    showModal('My Cultural Points', modalHTML);

    $("#earnMoreBtn").addEventListener('click', () => { window.location.href = 'quiz.html'; });
    $("#redeemBtn").addEventListener('click', () => {
        if (getPoints() < 5) {
            showNotification("You need at least 5 points to redeem a coupon.", "warning");
            return;
        }

        const couponCode = `BHARAT${Math.floor(Math.random() * 1000)}`;
        const discounts = [5, 8, 10];
        const randomDiscount = discounts[Math.floor(Math.random() * discounts.length)];

        localStorage.setItem('userCoupon', JSON.stringify({ code: couponCode, discount: randomDiscount }));
        savePoints(getPoints() - 5);
        closeModal();

        const couponModalHTML = `
            <div class="coupon-modal-content">
                <h3>Congratulations!</h3>
                <p>Here is your unique coupon for a <strong>${randomDiscount}% discount!</strong></p>
                <div class="coupon-code-display" id="couponCodeText">${couponCode}</div>
                <button class="copy-coupon-btn" id="copyCouponBtn">Copy Code</button>
                 <p style="font-size: 0.8rem; margin-top: 1rem;">You will now be redirected to the Marketplace.</p>
            </div>`;

        showModal('Your Coupon is Ready!', couponModalHTML);

        setTimeout(() => {
            window.location.href = 'Marketplace/index.html';
        }, 4000); // Redirect after 4 seconds
    });
  }

  // ---------- RENDERING ----------
  function populateStateDropdown(states) {
    const selects = Array.from(document.querySelectorAll("#stateFilter, #stateDropdown"));
    selects.forEach(sel => {
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
    const catSet = new Set();
    states.forEach(s => (s.categories || []).forEach(c => catSet.add(c)));
    const categories = Array.from(catSet).sort();
    const sel = document.querySelector("#categoryFilter, #categoryDropdown");
    if (!sel) return;
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
      document.body.classList.remove('state-selected');
      const stateSelect = $("#stateFilter");
      if (stateSelect) stateSelect.value = "";
      return;
    }
    const state = DATA.states.find(s => s.id === stateId);
    if (!state) return;

    localStorage.setItem('lastVisitedState', state.id);

    const visitedStates = JSON.parse(localStorage.getItem('visitedStates') || '{}');
    if (!visitedStates[stateId]) {
        setTimeout(() => {
             addPoints(1, `+1 Point for visiting ${stateId}!`);
        }, 1000);
        visitedStates[stateId] = true;
        localStorage.setItem('visitedStates', JSON.stringify(visitedStates));
    }

    const banner = $("#stateBanner");
    if (banner) {
        banner.innerHTML = `
          <img src="${state.banner || 'images/placeholder.jpg'}" alt="${state.id}" style="height:140px;border-radius:12px;object-fit:cover;">
          <div>
            <h1 style="color: var(--navy);">${state.id}</h1>
            <p>${state.intro}</p>
          </div>
        `;
    }

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

    document.body.classList.add('state-selected');
    setupVRViewButtons();
}

  function renderCategoryGrid() {
    const grid = $("#categoryGrid");
    if (!grid) return;
    grid.innerHTML = "";
    const map = {};
    DATA.states.forEach(st => {
      (["festivals", "food", "danceMusic", "crafts", "cities"]).forEach(key => {
        const items = st[key] || [];
        items.forEach(it => {
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
    if (stateSelect) {
        stateSelect.value = stateId;
    }
    renderStatePage(stateId);
  }
   // --- Language Toggle Logic ---

// --- Language Toggle Logic ---

let currentLang = localStorage.getItem('exploreBharatLang') || 'en';
const langToggleBtn = document.getElementById('langToggle');


function applyTranslations(lang) {
   
    const translationsData = window.translations; 

    if (!translationsData) {
       
        console.error("Translations data is not loaded. Please ensure translations.js file path is correct.");
        return;
    }

    const translatableElements = document.querySelectorAll('[data-translate-key]');

    translatableElements.forEach(element => {
        const key = element.getAttribute('data-translate-key');
        const translationObject = translationsData[key]; 

        if (translationObject && translationObject[lang]) {
            const translatedText = translationObject[lang];

            if (element.tagName === 'INPUT' && element.hasAttribute('placeholder')) {
                 element.setAttribute('placeholder', translatedText);
            }
            // Title element ko alag se handle karein
            else if (key === 'title' || element.tagName === 'TITLE') {
                window.document.title = translatedText;
            }
            else {
                
                element.innerHTML = translatedText; 
            }
        }
    });
}

// **2. toggleLanguage: Language ko switch karta hai**
function toggleLanguage() {
    let currentLang = localStorage.getItem('exploreBharatLang') || 'en';
    const langToggleBtn = document.getElementById('langToggle');
    
    currentLang = (currentLang === 'en') ? 'hi' : 'en';
    
    applyTranslations(currentLang);
    
    // Button ka text update karein
    langToggleBtn.textContent = (currentLang === 'en') ? 'EN/हिं' : 'हिं/EN';
    
    localStorage.setItem('exploreBharatLang', currentLang);
}

function initLanguageToggle() {
    const langToggleBtn = document.getElementById('langToggle');
    if (!langToggleBtn) return;
    
    let currentLang = localStorage.getItem('exploreBharatLang') || 'en';

    // 1. Button par click listener add karein
    langToggleBtn.addEventListener('click', toggleLanguage);

    // 2. Initial state set karein
    if (currentLang === 'hi') {
        langToggleBtn.textContent = 'हिं/EN';
    } else {
        langToggleBtn.textContent = 'EN/हिं';
    }
    

    applyTranslations(currentLang); 
}

function initMenuToggle() {
    const menuToggle = document.getElementById('menu-toggle');
    const topNav = document.querySelector('.top-nav'); // Sirf navigation links ko target karein
    
    if (menuToggle && topNav) {
        menuToggle.addEventListener('click', () => {
            topNav.classList.toggle('active');
            
            // Icon ko badalna (Hamburger <-> X)
            if (topNav.classList.contains('active')) {
                menuToggle.innerHTML = '✕'; 
            } else {
                menuToggle.innerHTML = '&#9776;'; // Hamburger icon
            }
        });
        
        // Menu item par click hone par menu band ho jaaye
        topNav.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                topNav.classList.remove('active');
                menuToggle.innerHTML = '&#9776;';
            });
        });
    }
}


  // ---------- EVENT BINDINGS ----------
  function bindEvents() {

    const heroButtons = document.querySelectorAll('.cta-row a, .quick-cards a');
    heroButtons.forEach(button => {
        button.addEventListener('click', function(event) {
            event.preventDefault(); // Stop the default link behavior
            const href = this.getAttribute('href');
            if (href && href !== '#') {
                window.location.href = href; // Manually navigate to the link
            }
        });
    });

    const stateSelects = Array.from(document.querySelectorAll("#stateFilter, #stateDropdown"));
    stateSelects.forEach(sel => {
      sel.addEventListener("change", e => {
        const val = e.target.value;
        if (location.pathname.endsWith("state.html") || location.pathname.endsWith("/state.html") || document.getElementById("stateBanner")) {
          renderStatePage(val);
        }
        if (document.getElementById("categoryGrid")) {
          filterCategoryGrid(val, $("#categoryFilter") ? $("#categoryFilter").value : "");
        }
      });
    });

    const catSel = $("#categoryFilter") || $("#categoryDropdown");
    if (catSel) {
      catSel.addEventListener("change", () => {
        const stateVal = $("#stateFilter") ? $("#stateFilter").value : "";
        filterCategoryGrid(stateVal, catSel.value);
      });
    }

   const globalSearch = $("#globalSearch");
    if (globalSearch) {
      globalSearch.addEventListener("keydown", e => {
        if (e.key === "Enter") {
          const q = e.target.value.trim().toLowerCase();
          e.preventDefault(); // Default form submit ko roken
          if (!q) return;

          const pathname = location.pathname;

          if (pathname.endsWith("index.html") || pathname === "/") {
            
            
            const matchingState = DATA.states.find(state => 
              state.id.toLowerCase() === q
            );

            if (matchingState) {
             
              window.location.href = `state.html?state=${encodeURIComponent(matchingState.id)}`;
              return;
            }

            
            let matchingCityStateId = null;

            for (const state of DATA.states) {
              
                const cityMatch = state.cities.find(city => city.name.toLowerCase() === q);
                if (cityMatch) {
                    matchingCityStateId = state.id;
                    break;
                }
            }

            if (matchingCityStateId) {
              
              window.location.href = `state.html?state=${encodeURIComponent(matchingCityStateId)}`;
              return;
            }

           
            window.location.href = `category.html?search=${encodeURIComponent(q)}`;
            return;

          } else if (pathname.includes("state.html")) {
            
            searchWithinState(q); 
            return;
          } else if (pathname.includes("category.html")) {
            
            searchCategoryGrid(q);
            return;
          }
           // Default fallback
           window.location.href = `category.html?search=${encodeURIComponent(q)}`;
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
        const cityBtn = e.target.closest(".city-explore-btn");
        if (cityBtn) {
            const card = cityBtn.closest(".card");
            if(card) {
                const itemName = card.dataset.itemName;
                const visitedCities = JSON.parse(sessionStorage.getItem('visitedCities') || '{}');
                if (!visitedCities[itemName]) {
                    addPoints(1, `+1 point for exploring ${itemName}!`);
                    visitedCities[itemName] = true;
                    sessionStorage.setItem('visitedCities', JSON.stringify(visitedCities));
                }
            }
        }

        if (e.target.id === 'copyCouponBtn') {
            const couponText = $('#couponCodeText').textContent;
            navigator.clipboard.writeText(couponText).then(() => {
                e.target.textContent = 'Copied!';
                setTimeout(() => { e.target.textContent = 'Copy Code'; }, 2000);
            }).catch(err => {
                console.error('Failed to copy: ', err);
            });
        }


      const btn = e.target.closest(".view-detail");
      if (btn) {
        const card = btn.closest(".card");
        if (card) {
            const itemName = card.dataset.itemName;
            // Check if on category page to award points for viewing an item
            if (window.location.pathname.includes('category.html')) {
                const viewedCategoryItems = JSON.parse(sessionStorage.getItem('viewedCategoryItems') || '{}');
                if (!viewedCategoryItems[itemName]) {
                    addPoints(1, `+1 point for discovering ${itemName}!`);
                    viewedCategoryItems[itemName] = true;
                    sessionStorage.setItem('viewedCategoryItems', JSON.stringify(viewedCategoryItems));
                }
            }
        }

        const meta = card && card._meta ? card._meta : null;
        const name = btn.dataset.name;
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
        return;
      }

      const mapBtn = e.target.closest(".view-map-button");
      if (mapBtn) {
        e.preventDefault();
        e.stopPropagation();
        const embedCode = mapBtn._mapEmbedCode;
        const mapName = mapBtn.getAttribute('data-map-name');
        if (embedCode && mapName) {
            showMapPopup(embedCode, mapName);
        } else {
            console.error("Map data missing on button:", mapBtn);
        }
        return;
      }
   
      const artisanBtn = e.target.closest(".view-artisan-button");
      if (artisanBtn) {
          const card = artisanBtn.closest(".card");
          const item = card._meta.item;
          if (item.artisans && item.artisans.length > 0) {
              const artisan = item.artisans[0];
              const modalHTML = `
                  <h3>${artisan.name}</h3>
                  <p style="font-style: italic;">"${artisan.story}"</p>
                  <br>
                  <a href="${artisan.product_link}" class="btn btn-primary" target="_blank" rel="noopener noreferrer">Support ${artisan.name}</a>
              `;
              showModal(`Artisan behind ${item.name}`, modalHTML);
          }
      }
    });
  }


  // ---------- SEARCH / FILTER helpers ----------
  function filterCategoryGrid(stateName, categoryName) {
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
    const stateSelect = document.querySelector("#stateFilter");
    if (!stateSelect) return;
    const stateId = stateSelect.value;
    if (!stateId) return;
    const state = DATA.states.find(s => s.id === stateId);
    if (!state) return;
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
    const grid = $("#categoryGrid");
    if (!grid) return;
    const lower = q.trim().toLowerCase();
    if (!lower) return renderCategoryGrid();
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
 
function renderHomeStatesGrid(states) {
    const grid = document.getElementById("statesGridHome");
    if (!grid) return;
    grid.innerHTML = "";
   
    states.slice(0, 4).forEach(state => {
     
      const card = createStateCard(state);
      grid.appendChild(card);
    });
}



  //---------- INITIALIZATION ----------
  function init() {
    fetch("states.json").then(r => {
      if (!r.ok) throw new Error("no external json");
      return r.json();
    }).then(json => {
      if (json && Array.isArray(json.states)) {
        DATA.states = json.states;
      }
    }).catch(() => {
    }).finally(() => {
      populateStateDropdown(DATA.states);
      populateCategoryDropdown(DATA.states);
      renderStatesGrid(DATA.states);
      renderHomeStatesGrid(DATA.states);

      const urlParams = new URLSearchParams(window.location.search);
      const stateFromUrl = urlParams.get('state');

      if (stateFromUrl) {
          const pageStateSelect = document.querySelector("#stateFilter");
          if (pageStateSelect) {
              pageStateSelect.value = stateFromUrl;
              renderStatePage(stateFromUrl);
          }
      } else {
        const pageStateSelect = document.querySelector("#stateFilter");
        if (pageStateSelect && pageStateSelect.value) {
          renderStatePage(pageStateSelect.value);
        } else {
          const val = pageStateSelect ? pageStateSelect.value : "";
          if (val) renderStatePage(val);
        }
      }
      renderCategoryGrid();
      bindEvents();
      initLanguageToggle(); 
      initMenuToggle(); 
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }

  window.CULTURE_DATA = DATA;
  window.renderStatePage = renderStatePage;


// ===============================================
// ## GAMIFICATION & POINTS SYSTEM (FINAL VERSION) ##
// ===============================================

document.addEventListener('DOMContentLoaded', () => {
    // Bell icon par click event lagayein
    const pointsBell = document.getElementById('pointsBell');
    if(pointsBell) {
        pointsBell.addEventListener('click', showPointsModal);
    }
});

// Points ko get karne ka aam function
function getPoints() {
    return parseInt(localStorage.getItem('quizScore') || '0');
}

// Points ko save karne ka aam function
function savePoints(points) {
    localStorage.setItem('quizScore', points);
    
    // common.js mein maujood function ko call karke display update karein
    if (typeof updateScoreDisplay === 'function') {
        updateScoreDisplay();
    }
}

// Points add karne ka aam function
window.addPoints = function(amount, message) {
    let currentPoints = getPoints();
    currentPoints += amount;
    savePoints(currentPoints);
    if (window.showNotification) {
        window.showNotification(message, 'success');
    }
}

// State page visit karne par points dene waala code
const originalRenderStatePage = window.renderStatePage;
window.renderStatePage = function(stateId) {
    if (stateId) {
        const stamps = JSON.parse(localStorage.getItem('culturalPassport') || '{}');
        if (!stamps[stateId]) {
             addPoints(1, 'Stamp Collected! +1 point for visiting a new state!');
             stamps[stateId] = true;
             localStorage.setItem('culturalPassport', JSON.stringify(stamps));
        }
    }
    // Purane function ko waise hi chalayein
    if(originalRenderStatePage) {
       originalRenderStatePage.apply(this, arguments);
    }
};
})();

function setupVRViewButtons() {
    document.querySelectorAll('.vr-button').forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            const embedCode = e.currentTarget.getAttribute('data-vr-embed-code');
            if (embedCode) {
                localStorage.setItem('currentVREmbed', embedCode);
                window.location.href = `vr_viewer.html`;
            } else {
                alert('360° view is currently not available for this location.');
            }
        });
    });
}
 function getVREnabledCities() {
    const vrCities = [];
    if (!window.DATA || !window.DATA.states) return [];
    window.DATA.states.forEach(state => {
        if (state.cities) {
            state.cities.forEach(city => {
                if (city.vr_embed_code) {
                    vrCities.push({
                        name: city.name,
                        desc: city.desc,
                        img: city.img,
                        vr_embed_code: city.vr_embed_code,
                        stateId: state.id,
                        isAttraction: false
                    });
                }
                if (city.attractions && Array.isArray(city.attractions)) {
                    city.attractions.forEach(attraction => {
                        if (attraction.vr_embed_code) {
                            vrCities.push({
                                name: attraction.name,
                                desc: attraction.desc,
                                img: attraction.img || city.img,
                                vr_embed_code: attraction.vr_embed_code,
                                stateId: state.id,
                                parentCity: city.name,
                                isAttraction: true
                            });
                        }
                    });
                }
            });
        }
    });
    return vrCities;
}

function renderVRCities(cities) {
    const grid = document.getElementById('vrCitiesGrid');
    if (!grid) return;
    grid.innerHTML = '';
    if (cities.length === 0) {
        grid.innerHTML = '<p style="grid-column: 1 / -1; text-align: center;">No 360° tours found for this selection.</p>';
        return;
    }
    cities.forEach(city => {
        const cardHTML = `
            <article class="card">
                <img src="${city.img || 'images/placeholder.jpg'}" alt="${city.name}">
                <h4>${city.name} (${city.stateId})</h4>
                <p>${city.desc || '360° Virtual Tour Available'}</p>
                <div style="margin-top:auto;">
                    <button class="vr-button" data-vr-embed-code='${city.vr_embed_code}'>🥽 View 360°</button>
                    ${city.link ? `<a href="${city.link}" class="btn btn-primary" style="float:right; margin-top:8px;">Explore</a>` : ''}
                </div>
            </article>
        `;
        grid.innerHTML += cardHTML;
    });
    setupVRViewButtons();
}
function initVRTourPage() {
    const stateFilter = document.getElementById('stateFilter');
    if (!stateFilter) return;
    const allVRCities = getVREnabledCities();
    const uniqueStates = [...new Set(allVRCities.map(city => city.stateId))];
    uniqueStates.forEach(stateId => {
        const option = document.createElement('option');
        option.value = stateId;
        option.textContent = stateId;
        stateFilter.appendChild(option);
    });
    renderVRCities(allVRCities);
    stateFilter.addEventListener('change', (e) => {
        const selectedState = e.target.value;
        let filteredCities = allVRCities;
        if (selectedState) {
            filteredCities = allVRCities.filter(city => city.stateId === selectedState);
        }
        renderVRCities(filteredCities);
    });
}
document.addEventListener('DOMContentLoaded', () => {
    if (window.location.pathname.endsWith('vr_tour.html')) {
        initVRTourPage();
    }
});
function initSearch() {
    qsa("#globalSearch").forEach(inp => {
      if(!inp) return;
      inp.addEventListener("keydown", e => {
        if (e.key === "Enter") {
          const q = e.target.value.trim().toLowerCase();
          if (!q) return;
          const matches = [];
          DATA.states.forEach(s => {
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
        setLangButtonText();
        location.reload();
      });
    });
    setLangButtonText();
  }



  document.addEventListener("DOMContentLoaded", () => {
  const track = document.querySelector(".carousel-track");
    if (!track) return;
  const slides = Array.from(track.children);
  const prevButton = document.querySelector(".carousel-arrow.left");
  const nextButton = document.querySelector(".carousel-arrow.right");

  let currentIndex = 0;
  const slideInterval = 2000;
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

  nextButton.addEventListener("click", () => {
    nextSlide();
    resetAutoSlide();
  });

  prevButton.addEventListener("click", () => {
    prevSlide();
    resetAutoSlide();
  });

  function startAutoSlide() {
    autoSlide = setInterval(nextSlide, slideInterval);
  }

  function resetAutoSlide() {
    clearInterval(autoSlide);
    startAutoSlide();
  }

  showSlide(0);
  startAutoSlide();
});

function showMapPopup(embedCode, name) {
    const newWindow = window.open("", "_blank", "width=800,height=600,scrollbars=no");

    if (newWindow) {
        const htmlContent = `
            <!DOCTYPE html>
            <html lang="en">
            <head>
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>${name} Location</title>
                <style>
                    body { margin: 0; overflow: hidden; font-family: sans-serif; }
                    iframe { width: 100%; height: 100vh; border: none; }
                    .back-button {
                        position: fixed;
                        top: 70px;
                        left: 15px;
                        z-index: 1000;
                        background: rgba(0, 0, 0, 0.65);
                        color: white;
                        padding: 10px 16px;
                        border: none;
                        border-radius: 50px;
                        cursor: pointer;
                        font-size: 16px;
                        font-weight: 500;
                        box-shadow: 0 3px 8px rgba(0,0,0,0.2);
                        transition: background-color 0.2s;
                    }
                    .back-button:hover {
                        background: rgba(0, 0, 0, 0.8);
                    }
                </style>
            </head>
            <body>
                <button class="back-button" onclick="window.close()">← Back</button>

                ${embedCode}
            </body>
            </html>
        `;
        newWindow.document.write(htmlContent);
        newWindow.document.close();
    } else {
        showNotification("Pop-up was blocked. Please allow pop-ups for this site.", "warning");
    }
}