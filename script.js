/* 
  Decor Heaven - Main Script
  Handles: Product Rendering, Cart Logic, UI Interactions, Authentication
*/

// --- Product Data ---
const products = [
    {
        id: 1,
        title: "Ceramic Minimalist Vase",
        price: 45.00,
        image: "https://rukminim2.flixcart.com/image/480/640/xif0q/vase/o/t/z/3-vase17-trulyceramics-6-original-imagmbbabphcqzss.jpeg?q=90",
        description: "A beautiful hand-crafted ceramic vase for your living room."
    },
    {
        id: 2,
        title: "Velvet Throw Pillow",
        price: 29.50,
        image: "https://i5.walmartimages.com/seo/Phantoscope-Soft-Pleated-Velvet-Series-Square-Decorative-Throw-Pillow-Cushion-for-Couch-18-x-18-Lake-Blue-2-Pack_37e80733-73b7-414f-8652-b55d80c403df.649fdd92331ce46ac203e40a9e748ac9.jpeg",
        description: "Soft velvet pillow to add a touch of luxury."
    },
    {
        id: 3,
        title: "Wooden Wall Art",
        price: 85.00,
        image: "https://www.theindiadecor.com/_next/image?url=https%3A%2F%2Fcdn.theindiadecor.com%2Fadmin%2Ftid%2Fproduct-image%2F1737374955525thumbnail_21.jpg&w=3840&q=75",
        description: "Abstract wooden wall art piece."
    },
    {
        id: 4,
        title: "Golden Table Lamp",
        price: 120.00,
        image: "https://m.media-amazon.com/images/I/61ReVUeCRkL._AC_UF1000,1000_QL80_.jpg",
        description: "An elegant golden lamp for warm lighting."
    },
    {
        id: 5,
        title: "Rattan Storage Basket",
        price: 35.00,
        image: "https://homeessentials.in/cdn/shop/files/3_f476587f-0d3f-4f4f-b964-3d67ab191d46_298x298_crop_center.png?v=1744430361",
        description: "Organic storage solution for any room."
    },
    {
        id: 6,
        title: "Soy Wax Candle",
        price: 18.00,
        image: "https://rukminim2.flixcart.com/image/480/640/xif0q/candle/s/x/p/rose-and-vanilla-home-decor-scented-candle-jar-with-soy-wax-rose-original-imagtmpth8ysgduy.jpeg?q=90",
        description: "Scented soy wax candle with a wooden wick."
    },
    {
        id: 7,
        title: "Round Wall Mirror",
        price: 95.00,
        image: "https://allindiadecor.com/cdn/shop/products/malik-designs-mirrors-dreamy-feathers-round-mirror-wall-decor-33289330917542_1024x1024_7f8e7699-44fe-431f-8fd3-51468769b4a8_512x512.webp?v=1759143530", 
        description: "Minimalist round mirror with a wooden frame."
    },
    {
        id: 8,
        title: "Chunky Knit Throw",
        price: 55.00,
        image: "https://external-preview.redd.it/IAwqXiJo51WO8YgzIquchIGz7UcCkjQLjjUk4cz-uHc.jpg?auto=webp&s=353ac079e3dab1d1a5a44b33219b319844ece41c", 
        description: "Cozy chunky knit throw blanket in oatmeal."
    },
    {
        id: 9,
        title: "Ceramic Planter Pot",
        price: 24.00,
        image: "https://nestasia.in/cdn/shop/products/M21nsa822.jpg?v=1655094403&width=800", 
    },
    {
        id: 10,
        title: "Marble Wall Clock",
        price: 60.00,
        image: "https://cdnnew.igp.com/f_auto,q_auto,t_pnopt19prodlp/products/p-white-marble-finish-wall-clock-for-mom-135425-m.jpg", 
        description: "Elegant marble-texture wall clock."
    },
    {
        id: 11,
        title: "Jute Area Rug",
        price: 150.00,
        image: "https://cpimg.tistatic.com/8706462/b/1/2-feet-round-jute-area-rugs.jpg", 
        description: "Natural jute area rug, perfect for living rooms."
    },
    {
        id: 12,
        title: "Brass Candle Holder",
        price: 22.00,
        image: "https://images.jdmagicbox.com/quickquotes/images_main/-a83wg6fz.jpg", 
        description: "Vintage-inspired brass candle holder."
    },
    {
        id: 13,
        title: "Macramé Wall Hanging",
        price: 42.00,
        image: "https://5.imimg.com/data5/SELLER/Default/2023/8/339288561/XM/QP/RU/23281492/macrame-wall-hanging.jpg",
        description: "Handmade macramé wall hanging in natural beige."
    },
    {
        id: 14,
        title: "Crystal Desk Ornament",
        price: 38.00,
        image: "https://homospiritus.co/wp-content/uploads/2022/10/amethyst-tree-crystal-tree-feng-shui9.jpeg",
        description: "Beautiful crystal geometric ornament for your desk."
    },
    {
        id: 15,
        title: "Linen Table Runner",
        price: 28.00,
        image: "https://nestasia.in/cdn/shop/files/Valley-Of-Spring-6-Seater-Table-Runner-190x36cm_2.jpg?v=1754546916&width=360",
        description: "Premium linen table runner in soft grey."
    },
    {
        id: 16,
        title: "Ceramic Wall Tiles",
        price: 65.00,
        image: "https://assets.bldnxt.in/catalog/product/cache/1/image/a77c1558d860704591e3027d1ebed402/_/j/_john833491_5ec971982d2cf.jpg",
        description: "Set of decorative ceramic wall tiles."
    },
    {
        id: 17,
        title: "Woven Wall Basket",
        price: 55.00,
        image: "https://u-mercari-images.mercdn.net/photos/m34157776889_1.jpg",
        description: "Handwoven seagrass wall basket for storage and decor."
    },
    {
        id: 18,
        title: "Scented Diffuser",
        price: 32.00,
        image: "https://irishomefragrances.com/cdn/shop/products/glittter_diffuser.png?v=1751867993&width=2048",
        description: "Ultrasonic essential oil diffuser with LED lights."
    }
];

// --- State ---
let cart = [];
let wishlist = []; // Wishlist State
let currentUser = null;

// --- DOM Elements ---
const productsGrid = document.getElementById('productsGrid');
const aboutGallery = document.getElementById('aboutGallery');
const profileWishlistGrid = document.getElementById('profileWishlistGrid');
const profileName = document.getElementById('profileName');
const profileUsername = document.getElementById('profileUsername');
const profileWishlistCount = document.getElementById('profileWishlistCount');

// Cart Elements
const cartBtn = document.getElementById('cartBtn');
const closeCart = document.getElementById('closeCart');
const cartOverlay = document.getElementById('cartOverlay');
const cartItemsContainer = document.getElementById('cartItems');
const cartTotalEl = document.getElementById('cartTotal');
const cartCountEl = document.getElementById('cartCount');

// Auth Elements (Will be selected after injection)
let loginBtnNav, userMenu, userNameDisplay, logoutBtn;
let authModalOverlay, loginModal, signupModal;
let closeLogin, closeSignup, showSignupBtn, showLoginBtn;
let loginForm, signupForm;

// --- Functions ---

function injectAuthModals() {
    const authHTML = `
    <div class="modal-overlay hidden" id="authModalOverlay">
        <!-- Login Form -->
        <div class="auth-modal hidden" id="loginModal">
            <div class="modal-header">
                <h2>Welcome Back</h2>
                <button class="close-modal" id="closeLogin"><i data-feather="x"></i></button>
            </div>
            <form id="loginForm">
                <div class="form-group">
                    <label>Username</label>
                    <input type="text" id="loginUsername" required placeholder="Enter your username">
                </div>
                <div class="form-group">
                    <label>Email</label>
                    <input type="email" id="loginEmail" required placeholder="Enter your email">
                </div>
                <div class="form-group">
                    <label>Password</label>
                    <input type="password" id="loginPassword" required placeholder="Enter your password">
                </div>
                <button type="submit" class="auth-submit-btn">Login</button>
                <p class="auth-switch">Don't have an account? <a href="#" id="showSignup">Sign Up</a></p>
            </form>
        </div>

        <!-- Signup Form -->
        <div class="auth-modal hidden" id="signupModal">
            <div class="modal-header">
                <h2>Create Account</h2>
                <button class="close-modal" id="closeSignup"><i data-feather="x"></i></button>
            </div>
            <form id="signupForm">
                <div class="form-group">
                    <label>Username</label>
                    <input type="text" id="signupUsername" required placeholder="Choose a username">
                </div>
                <div class="form-group">
                    <label>Email</label>
                    <input type="email" id="signupEmail" required placeholder="Enter your email">
                </div>
                <div class="form-group">
                    <label>Password</label>
                    <input type="password" id="signupPassword" required placeholder="Create a password">
                </div>
                <button type="submit" class="auth-submit-btn">Sign Up</button>
                <p class="auth-switch">Already have an account? <a href="#" id="showLogin">Login</a></p>
            </form>
        </div>
    </div>
    `;
    document.body.insertAdjacentHTML('beforeend', authHTML);
    if (window.feather) feather.replace();

    // Re-select elements
    loginBtnNav = document.getElementById('loginBtnNav');
    userMenu = document.getElementById('userMenu');
    userNameDisplay = document.getElementById('userNameDisplay');
    logoutBtn = document.getElementById('logoutBtn');

    authModalOverlay = document.getElementById('authModalOverlay');
    loginModal = document.getElementById('loginModal');
    signupModal = document.getElementById('signupModal');

    closeLogin = document.getElementById('closeLogin');
    closeSignup = document.getElementById('closeSignup');
    showSignupBtn = document.getElementById('showSignup');
    showLoginBtn = document.getElementById('showLogin');

    loginForm = document.getElementById('loginForm');
    signupForm = document.getElementById('signupForm');

    bindAuthEvents();
}

function bindAuthEvents() {
    if (loginBtnNav) loginBtnNav.addEventListener('click', () => openAuthModal('login'));
    if (logoutBtn) logoutBtn.addEventListener('click', logout);

    if (closeLogin) closeLogin.addEventListener('click', closeAuthModals);
    if (closeSignup) closeSignup.addEventListener('click', closeAuthModals);

    if (showSignupBtn) showSignupBtn.addEventListener('click', (e) => {
        e.preventDefault();
        openAuthModal('signup');
    });

    if (showLoginBtn) showLoginBtn.addEventListener('click', (e) => {
        e.preventDefault();
        openAuthModal('login');
    });

    if (authModalOverlay) {
        authModalOverlay.addEventListener('click', (e) => {
            if (e.target === authModalOverlay) {
                closeAuthModals();
            }
        });
    }

    // Login Handler
    if (loginForm) {
        loginForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const username = document.getElementById('loginUsername').value;
            const email = document.getElementById('loginEmail').value;
            const password = document.getElementById('loginPassword').value;

            let users = JSON.parse(localStorage.getItem('decorUsers') || '[]');

            // Check for valid user by username AND email AND password
            // All three must match
            const user = users.find(u => u.username === username && u.email === email && u.password === password);

            if (user) {
                currentUser = user;
                wishlist = user.wishlist || [];
                localStorage.setItem('decorUser', JSON.stringify(user));
                updateAuthUI();
                updateProfileUI();
                closeAuthModals();
                renderProducts();
                alert('Login successful!');
            } else {
                alert('Invalid credentials. Please make sure Username, Email, and Password are correct.');
            }
        });
    }

    // Signup Handler
    if (signupForm) {
        signupForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const username = document.getElementById('signupUsername').value;
            const email = document.getElementById('signupEmail').value;
            const password = document.getElementById('signupPassword').value;

            if (username && password && email) {
                let users = JSON.parse(localStorage.getItem('decorUsers') || '[]');

                if (users.find(u => u.username === username)) {
                    alert('Username already exists.');
                    return;
                }
                if (users.find(u => u.email === email)) {
                    alert('Email already exists. Please login.');
                    return;
                }

                const newUser = { username, email, password, wishlist: [] };
                users.push(newUser);
                localStorage.setItem('decorUsers', JSON.stringify(users));

                // Auto login
                currentUser = newUser;
                wishlist = [];
                localStorage.setItem('decorUser', JSON.stringify(newUser));

                updateAuthUI();
                updateProfileUI();
                closeAuthModals();
                alert('Account created successfully!');
            }
        });
    }
}


function renderAboutGallery() {
    if (!aboutGallery) return;
    aboutGallery.innerHTML = products.map(p => `
        <img src="${p.image}" alt="${p.title}" class="about-gallery-img" title="${p.title}">
    `).join('');
}

// 1. Render Products
function renderProducts() {
    if (productsGrid) {
        productsGrid.innerHTML = products.map(product => {
            const isWishlisted = wishlist.includes(product.id);
            return `
            <div class="product-card">
                <div style="position: relative;">
                    <img src="${product.image}" alt="${product.title}" class="product-image">
                    <button class="wishlist-btn ${isWishlisted ? 'active' : ''}" onclick="toggleWishlist(${product.id}, event)" style="position: absolute; top: 10px; right: 10px; border: none; background: white; border-radius: 50%; padding: 8px; cursor: pointer; display: flex; align-items: center; justify-content: center; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
                        <i data-feather="heart" style="width: 16px; height: 16px; fill: ${isWishlisted ? '#FFAB91' : 'none'}; color: ${isWishlisted ? '#FFAB91' : '#3E2723'};"></i>
                    </button>
                </div>
                <div class="product-info">
                    <h3 class="product-title">${product.title}</h3>
                    <p class="product-description">${product.description}</p>
                    <span class="product-price">$${product.price.toFixed(2)}</span>
                    <button class="add-to-cart-btn" onclick="addToCart(${product.id})">
                        Add to Cart
                    </button>
                </div>
            </div>
        `}).join('');
        if (window.feather) feather.replace();
    }
}

// 2. Add to Cart
window.addToCart = function (productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;

    cart.push(product);
    updateCartUI();
    openCart();
};

// 3. Remove from Cart
window.removeFromCart = function (index) {
    cart.splice(index, 1);
    updateCartUI();
};

// 4. Update Cart UI
function updateCartUI() {
    // Update Badge
    if (cartCountEl) cartCountEl.textContent = cart.length;

    // Update Cart Items
    if (!cartItemsContainer) return;

    if (cart.length === 0) {
        cartItemsContainer.innerHTML = `<p style="text-align: center; color: var(--color-text-light); margin-top: 32px;">Your cart is empty.</p>`;
    } else {
        cartItemsContainer.innerHTML = cart.map((item, index) => `
            <div class="cart-item">
                <img src="${item.image}" alt="${item.title}" class="cart-item-img">
                <div class="cart-item-details">
                    <h4 class="cart-item-title">${item.title}</h4>
                    <span class="cart-item-price">$${item.price.toFixed(2)}</span>
                    <br>
                    <button class="cart-item-remove" onclick="removeFromCart(${index})">Remove</button>
                </div>
            </div>
        `).join('');
    }

    // Update Total
    if (cartTotalEl) {
        const total = cart.reduce((sum, item) => sum + item.price, 0);
        cartTotalEl.textContent = `$${total.toFixed(2)}`;
    }
}

// 5. Toggle Cart
function openCart() {
    if (cartOverlay) cartOverlay.classList.add('open');
}

function closeCartModal() {
    if (cartOverlay) cartOverlay.classList.remove('open');
}

// --- Wishlist Logic ---
window.toggleWishlist = function (productId, event) {
    if (event) event.stopPropagation(); // Prevent card click if any

    if (!currentUser) {
        openAuthModal('login');
        return;
    }

    const index = wishlist.indexOf(productId);
    if (index === -1) {
        wishlist.push(productId);
    } else {
        wishlist.splice(index, 1);
    }

    // Update Local Storage for User
    updateUserWishlist();

    // Re-render
    renderProducts();
    renderProfileWishlist();
};

function updateUserWishlist() {
    if (currentUser) {
        currentUser.wishlist = wishlist;
        localStorage.setItem('decorUser', JSON.stringify(currentUser));

        // Also update the main users list
        let users = JSON.parse(localStorage.getItem('decorUsers') || '[]');
        const userIndex = users.findIndex(u => u.username === currentUser.username);
        if (userIndex !== -1) {
            users[userIndex].wishlist = wishlist;
            localStorage.setItem('decorUsers', JSON.stringify(users));
        }
    }
}

function renderProfileWishlist() {
    if (!profileWishlistGrid) return;

    if (wishlist.length === 0) {
        profileWishlistGrid.innerHTML = '<p class="text-center">No items in wishlist.</p>';
        if (profileWishlistCount) profileWishlistCount.textContent = '0 items';
        return;
    }

    if (profileWishlistCount) profileWishlistCount.textContent = `${wishlist.length} items`;

    profileWishlistGrid.innerHTML = wishlist.map(id => {
        const product = products.find(p => p.id === id);
        if (!product) return '';
        return `
            <div class="product-card">
                 <div style="position: relative;">
                    <img src="${product.image}" alt="${product.title}" class="product-image">
                    <button class="wishlist-btn active" onclick="toggleWishlist(${product.id}, event)" style="position: absolute; top: 10px; right: 10px; border: none; background: white; border-radius: 50%; padding: 8px; cursor: pointer; display: flex; align-items: center; justify-content: center; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
                        <i data-feather="heart" style="width: 16px; height: 16px; fill: #FFAB91; color: #FFAB91;"></i>
                    </button>
                </div>
                <div class="product-info">
                    <h3 class="product-title">${product.title}</h3>
                    <p class="product-description">${product.description}</p>
                    <span class="product-price">$${product.price.toFixed(2)}</span>
                    <button class="add-to-cart-btn" onclick="addToCart(${product.id})">
                        Add to Cart
                    </button>
                </div>
            </div>
        `;
    }).join('');
    if (window.feather) feather.replace();
}

// --- Profile Picture Logic ---

function updateProfileUI() {
    if (!currentUser) return;

    // Update Profile Page Elements if they exist
    if (profileName) profileName.textContent = currentUser.username;
    if (profileUsername) profileUsername.textContent = `@${currentUser.username}`;
    renderProfileWishlist();

    const profileAvatarContainer = document.getElementById('profileAvatarContainer');
    const changePhotoBtn = document.getElementById('changePhotoBtn');
    const profileUpload = document.getElementById('profileUpload');

    if (profileAvatarContainer) {
        if (currentUser.profilePic) {
            profileAvatarContainer.innerHTML = `<img src="${currentUser.profilePic}" alt="Profile" style="width: 100%; height: 100%; object-fit: cover;">`;
        } else {
            profileAvatarContainer.innerHTML = `<i data-feather="user"></i>`;
            if (window.feather) feather.replace();
        }
    }

    if (changePhotoBtn && profileUpload) {
        // Remove old listeners to avoid duplicates (naive approach, better to do in init, but elements are static here)
        // Since this runs often, we should be careful. 
        // Better: Use a dedicated bindProfileEvents function or check if listener attached.
        // For simplicity in this structure: logic below.

        changePhotoBtn.onclick = () => profileUpload.click();

        profileUpload.onchange = (e) => {
            const file = e.target.files[0];
            if (file) {
                if (file.size > 2 * 1024 * 1024) { // 2MB limit
                    alert('File size too large. Please upload an image under 2MB.');
                    return;
                }

                const reader = new FileReader();
                reader.onload = (event) => {
                    const base64String = event.target.result;

                    // Save to user
                    currentUser.profilePic = base64String;
                    localStorage.setItem('decorUser', JSON.stringify(currentUser));

                    // Update global users list
                    let users = JSON.parse(localStorage.getItem('decorUsers') || '[]');
                    const userIndex = users.findIndex(u => u.username === currentUser.username);
                    if (userIndex !== -1) {
                        users[userIndex].profilePic = base64String;
                        localStorage.setItem('decorUsers', JSON.stringify(users));
                    }

                    updateProfileUI(); // Re-render to show image
                    updateAuthUI(); // Update navbar if we add it there
                };
                reader.readAsDataURL(file);
            }
        };
    }
}

// --- Authentication Logic ---

function checkSession() {
    const storedUser = localStorage.getItem('decorUser');
    if (storedUser) {
        currentUser = JSON.parse(storedUser);
        wishlist = currentUser.wishlist || []; // Load wishlist
        updateAuthUI();
        updateProfileUI(); // Ensure profile page is updated
    } else {
        // If on profile page and not logged in, redirect
        if (window.location.pathname.includes('profile.html')) {
            window.location.href = 'index.html';
        }
    }
}

function updateAuthUI() {
    if (currentUser) {
        loginBtnNav.classList.add('hidden'); // Hide Login button
        loginBtnNav.classList.remove('visible');

        userMenu.classList.remove('hidden'); // Show User Menu
        userMenu.style.display = 'flex';

        // Show Profile Pic in Navbar if available
        if (currentUser.profilePic) {
            // Check if we already have an image there, if so update src
            let navAvatar = document.getElementById('navAvatar');
            if (!navAvatar) {
                // Create it if not exists (prepend to userMenu)
                // We'll replace the text "Hi, User" with the image or put it beside it.
                // Let's put it beside name.
                navAvatar = document.createElement('img');
                navAvatar.id = 'navAvatar';
                navAvatar.style.width = '32px';
                navAvatar.style.height = '32px';
                navAvatar.style.borderRadius = '50%';
                navAvatar.style.objectFit = 'cover';
                navAvatar.style.marginRight = '8px';
                navAvatar.style.border = '1px solid var(--color-primary)';

                // Insert before username
                userMenu.insertBefore(navAvatar, userNameDisplay);
            }
            navAvatar.src = currentUser.profilePic;
            navAvatar.style.display = 'block';
        } else {
            // If no profile pic, hide/remove avatar image
            const navAvatar = document.getElementById('navAvatar');
            if (navAvatar) navAvatar.style.display = 'none';
        }

        userNameDisplay.textContent = `Hi, ${currentUser.username}`;
    } else {
        loginBtnNav.classList.remove('hidden'); // Show Login button
        loginBtnNav.classList.add('visible');

        userMenu.classList.add('hidden'); // Hide User Menu
        userMenu.style.display = 'none';
    }
}

function openAuthModal(type) {
    authModalOverlay.classList.remove('hidden');
    authModalOverlay.classList.add('visible'); // If you use that class
    authModalOverlay.style.display = 'flex';

    if (type === 'login') {
        loginModal.classList.remove('hidden');
        signupModal.classList.add('hidden');
        loginModal.style.display = 'block';
        signupModal.style.display = 'none';
    } else {
        signupModal.classList.remove('hidden');
        loginModal.classList.add('hidden');
        signupModal.style.display = 'block';
        loginModal.style.display = 'none';
    }
}

function closeAuthModals() {
    authModalOverlay.classList.add('hidden');
    authModalOverlay.style.display = 'none';
    loginModal.classList.add('hidden');
    signupModal.classList.add('hidden');
}

// Old handlers removed.

function logout() {
    currentUser = null;
    wishlist = [];
    localStorage.removeItem('decorUser');
    updateAuthUI();
    renderProducts();
    if (window.location.pathname.includes('profile.html')) {
        window.location.href = 'index.html';
    }
    alert('Logged out.');
}

// --- Event Listeners ---
if (cartBtn) cartBtn.addEventListener('click', openCart);
if (closeCart) closeCart.addEventListener('click', closeCartModal);

// Close overlay on outside click
if (cartOverlay) {
    cartOverlay.addEventListener('click', (e) => {
        if (e.target === cartOverlay) {
            closeCartModal();
        }
    });
}

// Auth Listeners moved to bindAuthEvents()

// --- Init ---
injectAuthModals(); // Inject modals first
renderProducts();
renderAboutGallery();
checkSession();
