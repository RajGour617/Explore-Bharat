//! Simple demo product data
const BASE_PRODUCTS = [
    { id: 'p1', title: 'MP Gond Art', price: 129, img: 'images/gondart.jpg', category: 'paintings' },
    { id: 'p2', title: 'Ruby Stone Necklace', price: 1499, img: 'images/necklace.jpg', category: 'jewelry' },
    { id: 'p3', title: 'Rajasthan Blue Pottery', price: 199, img: 'images/blockprint.jpg', category: 'pottery' },
    { id: 'p4', title: 'Musical Instruments', price: 799, img: 'images/folkmusic.jpg', category: 'music' },
    { id: 'p5', title: 'Kerala Coir', price: 79, img: 'images/coir.jpg', category: 'craft' },
    { id: 'p6', title: 'Rangoli Style Pottery', price: 149, img: 'images/pottery1.jpg', category: 'pottery' },
    { id: 'p7', title: 'Metal Elephant', price: 649, img: 'images/elephant.jpg', category: 'art' },
    { id: 'p8', title: 'UP Chikankari', price: 999, img: 'images/chikankari.jpg', category: 'weaving' },
];

// ** YAHAN BADLAV KIYA GAYA HAI **
// Function to load all products (base + approved from local storage)
function loadAllProducts() {
    const approvedProducts = JSON.parse(localStorage.getItem('all_products') || '[]');
    // Rename 'name' to 'title' to match the existing product structure
    const formattedApprovedProducts = approvedProducts.map(p => ({
        id: p.id,
        title: p.name, // 'name' ko 'title' mein badla
        price: parseFloat(p.price),
        img: p.imageUrl,
        category: 'new-arrivals' // Aap chahein to category bhi set kar sakte hain
    }));
    return [...BASE_PRODUCTS, ...formattedApprovedProducts];
}

// Ab PRODUCTS variable function call se initialize hoga
const PRODUCTS = loadAllProducts();

document.addEventListener("DOMContentLoaded", () => {
    // ===== Flash Message Logic =====
    function showFlashMessage(message, type = 'success') {
        const container = document.getElementById('flash-message-container');
        const flashMessage = document.createElement('div');
        flashMessage.className = `flash-message ${type}`;
        flashMessage.textContent = message;

        container.appendChild(flashMessage);

        // Remove the message after the animation ends
        setTimeout(() => {
            flashMessage.remove();
        }, 4000); // 4 seconds
    }

    // ===== Elements =====
    const hero = document.getElementById('hero-carousel');
    const slidesEl = hero.querySelector('.slides');
    const slides = Array.from(slidesEl.children);
    const dots = document.getElementById('hero-dots');
    const prevBtn = hero.querySelector('.carousel-btn.prev');
    const nextBtn = hero.querySelector('.carousel-btn.next');

    // Role Toggle Elements
    const userRoleToggle = document.getElementById('user-role-toggle');
    const buyerView = document.getElementById('buyer-view');
    const sellerView = document.getElementById('seller-view');
    const productListingForm = document.getElementById('product-listing-form');

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

    hero.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowLeft') goTo(currentIndex - 1);
        if (e.key === 'ArrowRight') goTo(currentIndex + 1);
    });

    (function addSwipe(el) {
        let startX = 0, dx = 0, touching = false;
        el.addEventListener('touchstart', (e) => { touching = true; startX = e.touches[0].clientX; });
        el.addEventListener('touchmove', (e) => { if (!touching) return; dx = e.touches[0].clientX - startX; });
        el.addEventListener('touchend', () => { touching = false; if (Math.abs(dx) > 50) { if (dx > 0) goTo(currentIndex - 1); else goTo(currentIndex + 1); } dx = 0; });
    })(hero);

    function startAutoplay() { autoplayTimer = setInterval(() => goTo(currentIndex + 1), AUTOPLAY_MS); }
    function stopAutoplay() { clearInterval(autoplayTimer); autoplayTimer = null; }
    function resetAutoplay() { stopAutoplay(); startAutoplay(); }
    hero.addEventListener('mouseenter', stopAutoplay);
    hero.addEventListener('mouseleave', startAutoplay);
    startAutoplay();

    function renderRow(containerId, products) {
        const container = document.getElementById(containerId);
        container.innerHTML = '';
        products.forEach(p => {
            const card = document.createElement('div');
            card.className = 'card';
            card.setAttribute('role', 'listitem');
            card.innerHTML = `
                <button class="wishlist-btn" data-id="${p.id}" aria-label="Add to wishlist">♡</button>
                <img src="${p.img}" alt="${p.title}">
                <div class="title">${p.title}</div>
                <div class="price">₹${p.price.toFixed(2)}</div>
                <div class="meta">
                    <button class="add" data-id="${p.id}">Add</button>
                    <button class="btn-view" data-id="${p.id}">View</button>
                </div>
            `;
            container.appendChild(card);
        });
    }

    document.querySelectorAll('.product-row').forEach(row => {
        const track = row.querySelector('.row-track');
        const left = row.querySelector('.row-arrow.left');
        const right = row.querySelector('.row-arrow.right');
        left?.addEventListener('click', () => track.scrollBy({ left: -320, behavior: 'smooth' }));
        right?.addEventListener('click', () => track.scrollBy({ left: 320, behavior: 'smooth' }));
    });

    const trending = PRODUCTS.slice(0, 8); // Trending mein zyada products dikhayein
    renderRow('trending-track', trending);
    renderRow('drops-track', PRODUCTS); // Drops mein sabhi products

    // ===== Modals, Drawers, and Auth =====
    const modal = document.getElementById('product-modal');
    const modalBody = document.getElementById('modal-body');
    const modalClose = document.getElementById('modal-close');
    const cartDrawer = document.getElementById('cart-drawer');
    const openCartBtn = document.getElementById('open-cart');
    const closeCartBtn = document.getElementById('close-cart');
    const cartBody = document.getElementById('cart-body');
    const cartCountEl = document.getElementById('cart-count');
    const cartSubtotal = document.getElementById('cart-subtotal');
    const wishlistDrawer = document.getElementById('wishlist-drawer');
    const openWishlistBtn = document.getElementById('open-wishlist');
    const wishlistCountEl = document.getElementById('wishlist-count');
    const checkoutOverlay = document.getElementById('checkout-overlay');
    const closeCheckout = document.getElementById('close-checkout');
    const checkoutForm = document.getElementById('checkout-form');
    const guestView = document.getElementById('guest-view');
    const userView = document.getElementById('user-view');
    const signinModal = document.getElementById('signin-modal');
    const signupModal = document.getElementById('signup-modal');
    const signinBtnOpen = document.getElementById('signin-btn-open');
    const signupBtnOpen = document.getElementById('signup-btn-open');
    const signinModalClose = document.getElementById('signin-modal-close');
    const signupModalClose = document.getElementById('signup-modal-close');
    const switchToSignup = document.getElementById('switch-to-signup');
    const switchToSignin = document.getElementById('switch-to-signin');
    const signoutBtn = document.getElementById('signout-btn');
    const signinForm = document.getElementById('signin-form');
    const signupForm = document.getElementById('signup-form');
    const bharatPointsEl = document.getElementById('bharat-points');

    // ===== State Management =====
    let CART = JSON.parse(localStorage.getItem('demo_cart') || '{}');
    let WISHLIST = JSON.parse(localStorage.getItem('demo_wishlist') || '{}');
    let BHARAT_POINTS = parseInt(localStorage.getItem('demo_points') || '0', 10);
    let IS_LOGGED_IN = localStorage.getItem('demo_loggedin') === 'true';
    let IS_SELLER = false;

    // ===== Role (Buyer/Seller) Logic =====
    function showBuyerView() {
        buyerView.style.display = 'block';
        sellerView.style.display = 'none';
        openCartBtn.style.display = 'block';
    }

    function showSellerView() {
        if (!IS_LOGGED_IN) {
            showFlashMessage("Please sign in to access the seller dashboard.", 'error');
            userRoleToggle.checked = false;
            openSigninModal();
            return;
        }
        buyerView.style.display = 'none';
        sellerView.style.display = 'block';
        openCartBtn.style.display = 'none';
    }

    userRoleToggle.addEventListener('change', () => {
        IS_SELLER = userRoleToggle.checked;
        if (IS_SELLER) {
            showSellerView();
        } else {
            showBuyerView();
        }
    });

    // ===== Cart Logic =====
    function saveCart() { localStorage.setItem('demo_cart', JSON.stringify(CART)); updateCartUI(); }
    function updateCartUI() {
        const items = Object.values(CART);
        const count = items.reduce((s, i) => s + i.qty, 0);
        cartCountEl.textContent = count;
        cartBody.innerHTML = '';
        if (items.length === 0) {
            cartBody.innerHTML = '<p>Your cart is empty.</p>';
            cartSubtotal.textContent = '₹0.00';
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
                    <div style="color:#888;margin-top:6px">₹${it.price.toFixed(2)}</div>
                    <div style="margin-top:8px" class="qty">
                        <button class="qty-dec" data-id="${it.id}">−</button>
                        <span style="min-width:26px;text-align:center">${it.qty}</span>
                        <button class="qty-inc" data-id="${it.id}">+</button>
                        <button class="remove" data-id="${it.id}" style="margin-left:12px;color:#c33;background:none;border:0;cursor:pointer">Remove</button>
                    </div>
                </div>`;
            cartBody.appendChild(el);
        });
        cartSubtotal.textContent = `₹${total.toFixed(2)}`;
    }

    function openCart() { cartDrawer.setAttribute('aria-hidden', 'false'); }
    function closeCart() { cartDrawer.setAttribute('aria-hidden', 'true'); }

    openCartBtn.addEventListener('click', openCart);
    closeCartBtn.addEventListener('click', closeCart);

    // ===== Wishlist Logic =====
    function saveWishlist() { localStorage.setItem('demo_wishlist', JSON.stringify(WISHLIST)); updateWishlistUI(); }
    function updateWishlistUI() {
        const items = Object.values(WISHLIST);
        wishlistCountEl.textContent = items.length;
        wishlistDrawer.innerHTML = `
            <div class="cart-header">
                <h3>Your Wishlist</h3>
                <button id="close-wishlist" aria-label="Close wishlist">✕</button>
            </div>
            <div class="cart-body" id="wishlist-body"></div>`;

        const wishlistBody = wishlistDrawer.querySelector('#wishlist-body');
        if (items.length === 0) {
            wishlistBody.innerHTML = '<p>Your wishlist is empty.</p>';
        } else {
            items.forEach(it => {
                const el = document.createElement('div');
                el.className = 'cart-item';
                el.innerHTML = `
                    <img src="${it.img}" alt="${it.title}">
                    <div style="flex:1">
                        <div style="font-weight:600">${it.title}</div>
                        <div style="color:#888;margin-top:6px">₹${it.price.toFixed(2)}</div>
                        <div style="margin-top:8px">
                            <button class="add" data-id="${it.id}">Move to Cart</button>
                            <button class="remove-wishlist" data-id="${it.id}" style="margin-left:12px;color:#c33;background:none;border:0;cursor:pointer">Remove</button>
                        </div>
                    </div>`;
                wishlistBody.appendChild(el);
            });
        }
        document.querySelectorAll('.wishlist-btn').forEach(btn => {
            btn.classList.toggle('active', !!WISHLIST[btn.dataset.id]);
            btn.innerHTML = WISHLIST[btn.dataset.id] ? '❤️' : '♡';
        });
        wishlistDrawer.querySelector('#close-wishlist').addEventListener('click', closeWishlist);
    }

    function openWishlist() { wishlistDrawer.setAttribute('aria-hidden', 'false'); }
    function closeWishlist() { wishlistDrawer.setAttribute('aria-hidden', 'true'); }

    openWishlistBtn.addEventListener('click', openWishlist);

    // ===== Bharat Points Logic =====
    function updatePointsUI() {
        bharatPointsEl.textContent = BHARAT_POINTS;
        localStorage.setItem('demo_points', BHARAT_POINTS);
    }

    function addPoints(amount) {
        if (!IS_LOGGED_IN) return;
        BHARAT_POINTS += Math.floor(amount);
        updatePointsUI();
    }

    // ===== Event Delegation for Body =====
    document.body.addEventListener('click', e => {
        const addBtn = e.target.closest('.add');
        if (addBtn) {
            const id = addBtn.dataset.id;
            addToCart(id, 1);
            if (WISHLIST[id]) {
                delete WISHLIST[id];
                saveWishlist();
            }
            return;
        }
        const viewBtn = e.target.closest('.btn-view');
        if (viewBtn) {
            const id = viewBtn.dataset.id;
            showProductModal(id);
            return;
        }
        const wishlistBtn = e.target.closest('.wishlist-btn');
        if (wishlistBtn) {
            if (!IS_LOGGED_IN) {
                showFlashMessage("Please sign in to use the wishlist!", 'error');
                openSigninModal();
                return;
            }
            toggleWishlist(wishlistBtn.dataset.id);
            return;
        }
    });

    function showProductModal(id) {
        const p = PRODUCTS.find(x => x.id === id);
        if (!p) return;
        modalBody.innerHTML = `
            <img src="${p.img}" alt="${p.title}">
            <div class="info">
                <h2 style="margin-top:0">${p.title}</h2>
                <p style="color:#666">Description of ${p.title}. This is sample copy for the demo product showing features and materials.</p>
                <div style="font-weight:700;margin-top:8px">₹${p.price.toFixed(2)}</div>
                <div style="margin-top:12px">
                    <button class="btn" id="modal-add" data-id="${p.id}">Add to cart</button>
                </div>
            </div>`;
        modal.setAttribute('aria-hidden', 'false');
        modal.focus();
    }
    modalClose.addEventListener('click', () => modal.setAttribute('aria-hidden', 'true'));
    modal.addEventListener('click', (e) => { if (e.target === modal) modal.setAttribute('aria-hidden', 'true'); });

    function addToCart(id, qty = 1) {
        const p = PRODUCTS.find(x => x.id === id);
        if (!p) return;
        if (CART[id]) CART[id].qty += qty;
        else CART[id] = { ...p, qty };
        saveCart();
        openCart();
    }

    function toggleWishlist(id) {
        const p = PRODUCTS.find(x => x.id === id);
        if (!p) return;

        if (WISHLIST[id]) {
            delete WISHLIST[id];
        } else {
            WISHLIST[id] = { ...p };
        }
        saveWishlist();
    }

    document.body.addEventListener('click', e => {
        if (e.target && e.target.id === 'modal-add') {
            addToCart(e.target.dataset.id, 1);
            modal.setAttribute('aria-hidden', 'true');
        }
    });

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

    wishlistDrawer.addEventListener('click', e => {
        const removeBtn = e.target.closest('.remove-wishlist');
        if (removeBtn) {
            delete WISHLIST[removeBtn.dataset.id];
            saveWishlist();
        }
    });

    document.getElementById('checkout-btn').addEventListener('click', () => {
        if (Object.keys(CART).length === 0) {
            showFlashMessage('Your cart is empty.', 'error');
            return;
        }
        if (!IS_LOGGED_IN) {
            showFlashMessage('Please sign in to proceed to checkout.', 'error');
            openSigninModal();
            return;
        }
        checkoutOverlay.setAttribute('aria-hidden', 'false');
    });
    
    closeCheckout.addEventListener('click', () => checkoutOverlay.setAttribute('aria-hidden', 'true'));

    checkoutForm.addEventListener('submit', (e) => {
    e.preventDefault();
    let subtotal = Object.values(CART).reduce((sum, item) => sum + item.price * item.qty, 0);

    const couponInput = document.getElementById('coupon-input');
    const couponCode = couponInput.value.trim();
    const userCoupon = JSON.parse(localStorage.getItem('userCoupon'));

    if (couponCode && userCoupon && couponCode === userCoupon.code) {
        // Points ko 0 set karein
        localStorage.setItem('bharatPoints', '0');
        showFlashMessage('Coupon applied successfully! Your points have been reset.');
    }

    addPoints(subtotal);
    showFlashMessage('Order placed successfully! Thank you.');
    CART = {};
    saveCart();
    checkoutOverlay.setAttribute('aria-hidden', 'true');
    closeCart();
});

    productListingForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const formData = new FormData(productListingForm);
        const newProduct = {
            name: formData.get('productName'),
            description: formData.get('description'),
            price: formData.get('price'),
            imageUrl: formData.get('imageUrl'),
            bankDetails: formData.get('bankDetails'),
            status: 'pending'
        };
        console.log("New Product for Approval:", newProduct);
        let pendingProducts = JSON.parse(localStorage.getItem('pending_products') || '[]');
        pendingProducts.push(newProduct);
        localStorage.setItem('pending_products', JSON.stringify(pendingProducts));
        showFlashMessage('Product submitted for approval!');
        productListingForm.reset();
    });

    function openSigninModal() { signupModal.setAttribute('aria-hidden', 'true'); signinModal.setAttribute('aria-hidden', 'false'); }
    function openSignupModal() { signinModal.setAttribute('aria-hidden', 'true'); signupModal.setAttribute('aria-hidden', 'false'); }
    function closeAuthModals() { signinModal.setAttribute('aria-hidden', 'true'); signupModal.setAttribute('aria-hidden', 'true'); }

    signinBtnOpen.addEventListener('click', openSigninModal);
    signupBtnOpen.addEventListener('click', openSignupModal);
    signinModalClose.addEventListener('click', closeAuthModals);
    signupModalClose.addEventListener('click', closeAuthModals);
    switchToSignup.addEventListener('click', openSignupModal);
    switchToSignin.addEventListener('click', openSigninModal);

    function setLoggedInState(loggedIn) {
        IS_LOGGED_IN = loggedIn;
        localStorage.setItem('demo_loggedin', loggedIn);
        if (loggedIn) {
            guestView.style.display = 'none';
            userView.style.display = 'flex';
        } else {
            guestView.style.display = 'flex';
            userView.style.display = 'none';
            WISHLIST = {};
            BHARAT_POINTS = 0;
            saveWishlist();
            updatePointsUI();
            if (IS_SELLER) {
                userRoleToggle.checked = false;
                IS_SELLER = false;
                showBuyerView();
            }
        }
    }

    signinForm.addEventListener('submit', (e) => {
        e.preventDefault();
        showFlashMessage("Signed in successfully!");
        setLoggedInState(true);
        closeAuthModals();
    });

    signupForm.addEventListener('submit', (e) => {
        e.preventDefault();
        showFlashMessage("Account created! You are now signed in.");
        setLoggedInState(true);
        closeAuthModals();
    });

    signoutBtn.addEventListener('click', () => {
        setLoggedInState(false);
        showFlashMessage("You have been signed out.", 'error');
    });

    function initializeUI() {
        updateCartUI();
        updateWishlistUI();
        updatePointsUI();
        setLoggedInState(IS_LOGGED_IN);
        showBuyerView();
    }

    initializeUI();
});
