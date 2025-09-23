/* Simple demo product data */
const PRODUCTS = [
    { id: 'p1', title: 'MP Gond Art', price: 79, img: 'images/gondart.jpg', category: 'paintings' },
    { id: 'p2', title: 'Ruby Stone Necklace', price: 399, img: 'images/necklace.jpg', category: 'jewelry' },
    { id: 'p3', title: 'Rajasthan Blue Pottery', price: 199, img: 'images/blockprint.jpg', category: 'pottery' },
    { id: 'p4', title: 'Musical Instruments', price: 399, img: 'images/folkmusic.jpg', category: 'music' },
    { id: 'p5', title: 'Kerala Coir', price: 49, img: 'images/coir.jpg', category: 'craft' },
    { id: 'p6', title: 'Rangoli Style Pottery', price: 85, img: 'images/pottery1.jpg', category: 'pottery' },
    { id: 'p7', title: 'Metal Elephant', price: 249, img: 'images/elephant.jpg', category: 'art' },
    { id: 'p8', title: 'UP Chikankari', price: 129, img: 'images/chikankari.jpg', category: 'weaving' },
];

document.addEventListener('DOMContentLoaded', () => {
    // Elements
    const hero = document.getElementById('hero-carousel');
    const slidesEl = hero.querySelector('.slides');
    const slides = Array.from(slidesEl.children);
    const dots = document.getElementById('hero-dots');
    const prevBtn = hero.querySelector('.carousel-btn.prev');
    const nextBtn = hero.querySelector('.carousel-btn.next');

    let currentIndex = 0;
    let autoplayTimer = null;
    const AUTOPLAY_MS = 4000;

    // create dots
    slides.forEach((s, i) => {
        const btn = document.createElement('button');
        btn.className = i === 0 ? 'active' : '';
        btn.addEventListener('click', () => goTo(i));
        dots.appendChild(btn);
    });

    function updateSlides() {
        slidesEl.style.transform = `translateX(-${currentIndex * 100}%)`;
        dots.querySelectorAll('button').forEach((b, i) => b.classList.toggle('active', i === currentIndex));
        slides.forEach((s, i) => s.setAttribute('aria-hidden', i !== currentIndex));
    }

    function goTo(idx) {
        currentIndex = (idx + slides.length) % slides.length;
        updateSlides();
        resetAutoplay();
    }
    prevBtn.addEventListener('click', () => goTo(currentIndex - 1));
    nextBtn.addEventListener('click', () => goTo(currentIndex + 1));

    // keyboard
    hero.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowLeft') goTo(currentIndex - 1);
        if (e.key === 'ArrowRight') goTo(currentIndex + 1);
    });

    // touch/swipe
    (function addSwipe(el) {
        let startX = 0, dx = 0, touching = false;
        el.addEventListener('touchstart', (e) => { touching = true; startX = e.touches[0].clientX; });
        el.addEventListener('touchmove', (e) => { if (!touching) return; dx = e.touches[0].clientX - startX; });
        el.addEventListener('touchend', () => { touching = false; if (Math.abs(dx) > 50) { if (dx > 0) goTo(currentIndex - 1); else goTo(currentIndex + 1); } dx = 0; });
    })(hero);

    // autoplay
    function startAutoplay() { autoplayTimer = setInterval(() => goTo(currentIndex + 1), AUTOPLAY_MS); }
    function stopAutoplay() { clearInterval(autoplayTimer); autoplayTimer = null; }
    function resetAutoplay() { stopAutoplay(); startAutoplay(); }
    hero.addEventListener('mouseenter', stopAutoplay);
    hero.addEventListener('mouseleave', startAutoplay);
    startAutoplay();

    // ===== Product rows =====
    function renderRow(containerId, products) {
        const container = document.getElementById(containerId);
        container.innerHTML = '';
        products.forEach(p => {
            const card = document.createElement('div');
            card.className = 'card';
            card.setAttribute('role', 'listitem');
            card.innerHTML = `
        <img src="${p.img}" alt="${p.title}">
        <div class="title">${p.title}</div>
        <div class="price">$${p.price.toFixed(2)}</div>
        <div class="meta">
          <button class="add" data-id="${p.id}">Add</button>
          <button class="btn-view" data-id="${p.id}">View</button>
        </div>
      `;
            container.appendChild(card);
        });
    }

    // Row arrow handlers (scrolling)
    document.querySelectorAll('.product-row').forEach(row => {
        const track = row.querySelector('.row-track');
        const left = row.querySelector('.row-arrow.left');
        const right = row.querySelector('.row-arrow.right');
        left?.addEventListener('click', () => track.scrollBy({ left: -320, behavior: 'smooth' }));
        right?.addEventListener('click', () => track.scrollBy({ left: 320, behavior: 'smooth' }));
    });

    // initial rows
    const trending = PRODUCTS.slice(0, 6);
    renderRow('trending-track', trending);
    renderRow('drops-track', PRODUCTS);

    // Product modal & cart
    const modal = document.getElementById('product-modal');
    const modalBody = document.getElementById('modal-body');
    const modalClose = document.getElementById('modal-close');
    const cartDrawer = document.getElementById('cart-drawer');
    const openCartBtn = document.getElementById('open-cart');
    const closeCartBtn = document.getElementById('close-cart');
    const cartBody = document.getElementById('cart-body');
    const cartCountEl = document.getElementById('cart-count');
    const cartSubtotal = document.getElementById('cart-subtotal');
    const checkoutBtn = document.getElementById('checkout-btn');
    const checkoutOverlay = document.getElementById('checkout-overlay');
    const closeCheckout = document.getElementById('close-checkout');
    const checkoutForm = document.getElementById('checkout-form');

    let CART = JSON.parse(localStorage.getItem('demo_cart') || '{}');

    function saveCart() { localStorage.setItem('demo_cart', JSON.stringify(CART)); updateCartUI(); }
    function updateCartUI() {
        const items = Object.values(CART);
        const count = items.reduce((s, i) => s + i.qty, 0);
        cartCountEl.textContent = count;
        cartBody.innerHTML = '';
        if (items.length === 0) {
            cartBody.innerHTML = '<p>Your cart is empty.</p>';
            cartSubtotal.textContent = '$0.00';
            return;
        }
        let total = 0;
        items.forEach(it => {
            total += it.price * it.qty;
            const el = document.createElement('div');
            el.className = 'cart-item';
            el.innerHTML = `
        <img src="${it.img}" alt="${it.title}">
        <div style="flex:1">
          <div style="font-weight:600">${it.title}</div>
          <div style="color:#888;margin-top:6px">$${it.price.toFixed(2)}</div>
          <div style="margin-top:8px" class="qty">
            <button class="qty-dec" data-id="${it.id}">−</button>
            <span style="min-width:26px;text-align:center">${it.qty}</span>
            <button class="qty-inc" data-id="${it.id}">+</button>
            <button class="remove" data-id="${it.id}" style="margin-left:12px;color:#c33;background:none;border:0;cursor:pointer">Remove</button>
          </div>
        </div>
      `;
            cartBody.appendChild(el);
        });
        cartSubtotal.textContent = `$${total.toFixed(2)}`;
    }

    function openCart() { cartDrawer.setAttribute('aria-hidden', 'false'); }
    function closeCart() { cartDrawer.setAttribute('aria-hidden', 'true'); }

    openCartBtn.addEventListener('click', openCart);
    closeCartBtn.addEventListener('click', closeCart);

    // Attach add/view buttons (delegation)
    document.body.addEventListener('click', e => {
        const addBtn = e.target.closest('.add');
        if (addBtn) {
            const id = addBtn.dataset.id;
            addToCart(id, 1);
            return;
        }
        const viewBtn = e.target.closest('.btn-view');
        if (viewBtn) {
            const id = viewBtn.dataset.id;
            showProductModal(id);
            return;
        }
        if (e.target.id === 'checkout-btn') {
            if (Object.keys(CART).length === 0) { alert('Cart is empty'); return; }
            checkoutOverlay.setAttribute('aria-hidden', 'false');
        }
    });

    // modal open/close
    function showProductModal(id) {
        const p = PRODUCTS.find(x => x.id === id);
        if (!p) return;
        modalBody.innerHTML = `
      <img src="${p.img}" alt="${p.title}">
      <div class="info">
        <h2 style="margin-top:0">${p.title}</h2>
        <p style="color:#666">Description of ${p.title}. This is sample copy for the demo product showing features and materials.</p>
        <div style="font-weight:700;margin-top:8px">$${p.price.toFixed(2)}</div>
        <div style="margin-top:12px">
          <button class="btn" id="modal-add" data-id="${p.id}">Add to cart</button>
        </div>
      </div>
    `;
        modal.setAttribute('aria-hidden', 'false');
        modal.focus();
    }
    modalClose.addEventListener('click', () => modal.setAttribute('aria-hidden', 'true'));
    modal.addEventListener('click', (e) => { if (e.target === modal) modal.setAttribute('aria-hidden', 'true'); });

    // add to cart helper
    function addToCart(id, qty = 1) {
        const p = PRODUCTS.find(x => x.id === id);
        if (!p) return;
        if (CART[id]) CART[id].qty += qty;
        else CART[id] = { ...p, qty };
        saveCart();
        // small animation: open cart briefly
        openCart();
    }

    // modal add (delegated)
    document.body.addEventListener('click', e => {
        if (e.target && e.target.id === 'modal-add') {
            addToCart(e.target.dataset.id, 1);
            modal.setAttribute('aria-hidden', 'true');
        }
    });

    // cart item buttons
    cartBody.addEventListener('click', e => {
        const inc = e.target.closest('.qty-inc');
        const dec = e.target.closest('.qty-dec');
        const rem = e.target.closest('.remove');
        if (inc) {
            const id = inc.dataset.id;
            CART[id].qty++;
            saveCart();
        } else if (dec) {
            const id = dec.dataset.id;
            CART[id].qty = Math.max(1, CART[id].qty - 1);
            saveCart();
        } else if (rem) {
            const id = rem.dataset.id;
            delete CART[id];
            saveCart();
        }
    });

    // checkout handlers
    checkoutBtn.addEventListener('click', () => {
        if (Object.keys(CART).length === 0) return alert('Cart empty');
        checkoutOverlay.setAttribute('aria-hidden', 'false');
    });
    closeCheckout.addEventListener('click', () => checkoutOverlay.setAttribute('aria-hidden', 'true'));
    checkoutForm.addEventListener('submit', (e) => {
        e.preventDefault();
        // demo: "place order"
        alert('Order placed — thanks!');
        CART = {};
        saveCart();
        checkoutOverlay.setAttribute('aria-hidden', 'true');
        closeCart();
    });

    // initialize cart UI
    updateCartUI();

    // Wire up dynamic card add/view for already rendered cards
    // (Buttons are attached via body click delegation above.)
});
