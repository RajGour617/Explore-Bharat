document.addEventListener('DOMContentLoaded', () => {
    // Elements
    const loginView = document.getElementById('login-view');
    const dashboardView = document.getElementById('dashboard-view');
    const loginForm = document.getElementById('admin-login-form');
    const passwordInput = document.getElementById('admin-password');
    const logoutBtn = document.getElementById('logout-btn');
    const pendingProductsTableBody = document.querySelector('#pending-products-table tbody');

    // Admin Password (Ise aap baad mein badal sakte hain)
    const ADMIN_PASSWORD = "admin123";

    // Check if admin is already logged in
    if (sessionStorage.getItem('isAdminLoggedIn') === 'true') {
        showDashboard();
    } else {
        showLogin();
    }

    // Login logic
    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        if (passwordInput.value === ADMIN_PASSWORD) {
            sessionStorage.setItem('isAdminLoggedIn', 'true');
            showDashboard();
        } else {
            alert('Incorrect Password!');
        }
    });

    // Logout logic
    logoutBtn.addEventListener('click', () => {
        sessionStorage.removeItem('isAdminLoggedIn');
        showLogin();
    });

    function showLogin() {
        loginView.style.display = 'block';
        dashboardView.style.display = 'none';
    }

    function showDashboard() {
        loginView.style.display = 'none';
        dashboardView.style.display = 'block';
        loadPendingProducts();
    }

    // Function to load pending products from localStorage
    function loadPendingProducts() {
        pendingProductsTableBody.innerHTML = ''; // Clear existing table
        const pendingProducts = JSON.parse(localStorage.getItem('pending_products') || '[]');
        
        if (pendingProducts.length === 0) {
            pendingProductsTableBody.innerHTML = '<tr><td colspan="5" style="text-align:center;">No pending products found.</td></tr>';
            return;
        }

        pendingProducts.forEach((product, index) => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${product.name}</td>
                <td>$${parseFloat(product.price).toFixed(2)}</td>
                <td><img src="${product.imageUrl}" alt="${product.name}"></td>
                <td>${product.bankDetails}</td>
                <td>
                    <button class="btn btn-approve" data-index="${index}">Approve</button>
                    <button class="btn btn-reject" data-index="${index}">Reject</button>
                </td>
            `;
            pendingProductsTableBody.appendChild(row);
        });
    }

    // Event delegation for approve/reject buttons
    pendingProductsTableBody.addEventListener('click', (e) => {
        const target = e.target;
        const index = target.dataset.index;

        if (target.classList.contains('btn-approve')) {
            approveProduct(index);
        } else if (target.classList.contains('btn-reject')) {
            rejectProduct(index);
        }
    });

    function approveProduct(index) {
        let pendingProducts = JSON.parse(localStorage.getItem('pending_products') || '[]');
        let allProducts = JSON.parse(localStorage.getItem('all_products') || '[]');

        // Product ko pending se approved (all_products) mein move karein
        const approvedProduct = pendingProducts[index];
        
        // Ek unique ID banayein
        approvedProduct.id = 'prod_' + Date.now(); 
        allProducts.push(approvedProduct);
        
        // Pending list se hatayein
        pendingProducts.splice(index, 1);

        // localStorage update karein
        localStorage.setItem('pending_products', JSON.stringify(pendingProducts));
        localStorage.setItem('all_products', JSON.stringify(allProducts));

        alert(`${approvedProduct.name} has been approved and is now live on the marketplace!`);
        loadPendingProducts(); // Table refresh karein
    }

    function rejectProduct(index) {
        let pendingProducts = JSON.parse(localStorage.getItem('pending_products') || '[]');
        const rejectedProduct = pendingProducts[index];

        // Pending list se hatayein
        pendingProducts.splice(index, 1);

        // localStorage update karein
        localStorage.setItem('pending_products', JSON.stringify(pendingProducts));

        alert(`${rejectedProduct.name} has been rejected.`);
        loadPendingProducts(); // Table refresh karein
    }
});