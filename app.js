// =============================================
// LUSTRÉVA — app.js v5  (Enhanced Admin + 24 Products)
// =============================================
'use strict';

// =============================================
// PRODUCT DATA (24 premium products)
// =============================================
const MOCK_PRODUCTS = [
  { id: 'p1', title: 'Celestial Bloom Gift Box', price: 1499, originalPrice: 1899, category: 'her', occasion: 'birthday', rating: 4.8, reviews: 124, stock: 50, description: 'A luxurious curated box featuring artisan candles, bath salts, and floral teas. Beautifully packaged with hand-tied ribbons.', images: ['https://images.unsplash.com/photo-1549465220-1a8b9238cd48?q=80&w=600&auto=format&fit=crop'], tags: ['luxury', 'floral', 'spa'], isNew: true },
  { id: 'p2', title: 'Executive Leather Journal Set', price: 2199, originalPrice: null, category: 'him', occasion: 'corporate', rating: 4.7, reviews: 89, stock: 30, description: 'Premium full-grain leather journal paired with a gold-tipped fountain pen. A sophisticated gift for the modern professional.', images: ['https://images.unsplash.com/photo-1544816155-12df9643f363?q=80&w=600&auto=format&fit=crop'], tags: ['leather', 'premium', 'stationery'], isNew: false },
  { id: 'p3', title: 'Rose Gold Jewellery Keepsake Box', price: 3299, originalPrice: 4199, category: 'her', occasion: 'anniversary', rating: 4.9, reviews: 203, stock: 20, description: 'Handcrafted velvet-lined jewellery box with rose gold hardware. An heirloom-quality gift she will treasure forever.', images: ['https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?q=80&w=600&auto=format&fit=crop'], tags: ['jewellery', 'rose-gold', 'keepsake'], isNew: true },
  { id: 'p4', title: 'Artisan Whisky & Cigar Gift Set', price: 4599, originalPrice: null, category: 'him', occasion: 'anniversary', rating: 4.6, reviews: 67, stock: 15, description: "A gentleman's indulgence — premium single malt whisky miniatures paired with hand-rolled cigars in a lacquered wooden case.", images: ['https://images.unsplash.com/photo-1569529465841-dfecdab7503b?q=80&w=600&auto=format&fit=crop'], tags: ['whisky', 'luxury', 'premium'], isNew: false },
  { id: 'p5', title: 'Luxury Spa & Wellness Hamper', price: 1899, originalPrice: 2299, category: 'her', occasion: 'birthday', rating: 4.8, reviews: 156, stock: 40, description: 'Transform any bathroom into a sanctuary. Includes bath bombs, essential oils, face masks, and hand cream in a beautiful wicker basket.', images: ['https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=600&auto=format&fit=crop'], tags: ['spa', 'wellness', 'self-care'], isNew: true },
  { id: 'p6', title: "Couple's Memory Jar Kit", price: 899, originalPrice: null, category: 'her', occasion: 'anniversary', rating: 4.5, reviews: 312, stock: 100, description: 'A beautifully decorated glass jar with 52 custom memory prompt cards. Fill it together, open one each week.', images: ['https://images.unsplash.com/photo-1513201099705-a9746e1e201f?q=80&w=600&auto=format&fit=crop'], tags: ['couple', 'memory', 'romantic'], isNew: false },
  { id: 'p7', title: 'Premium Watch Display Box', price: 5499, originalPrice: null, category: 'him', occasion: 'birthday', rating: 4.9, reviews: 45, stock: 10, description: 'Hand-stitched leather watch box with silk inserts. Holds 6 timepieces and arrives with a premium polishing kit.', images: ['https://images.unsplash.com/photo-1524592094714-0f0654e20314?q=80&w=600&auto=format&fit=crop'], tags: ['watches', 'leather', 'premium'], isNew: true },
  { id: 'p8', title: 'Wedding Blessing Hamper', price: 3499, originalPrice: 4299, category: 'her', occasion: 'wedding', rating: 4.7, reviews: 98, stock: 25, description: 'A curated basket of artisan sweets, champagne truffles, and a personalised wedding card. Wrapped in gold organza ribbon.', images: ['https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=600&auto=format&fit=crop'], tags: ['wedding', 'hamper', 'sweets'], isNew: false },
  { id: 'p9', title: 'Tech Enthusiast Gift Box', price: 2799, originalPrice: null, category: 'him', occasion: 'birthday', rating: 4.6, reviews: 77, stock: 35, description: 'Everything a tech lover craves: wireless charging pad, cable organiser, desk gadgets, and premium earbuds — all in a sleek black box.', images: ['https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=600&auto=format&fit=crop'], tags: ['tech', 'gadgets', 'modern'], isNew: true },
  { id: 'p10', title: 'Artisan Belgian Chocolate Tower', price: 1299, originalPrice: 1599, category: 'her', occasion: 'birthday', rating: 4.8, reviews: 230, stock: 60, description: 'A towering selection of single-origin dark, milk and white chocolates from Belgian artisans. A guaranteed crowd pleaser.', images: ['https://images.unsplash.com/photo-1549007994-cb92caebd54b?q=80&w=600&auto=format&fit=crop'], tags: ['chocolate', 'artisan', 'sweet'], isNew: false },
  { id: 'p11', title: 'Personalised Photo Frame Set', price: 1199, originalPrice: null, category: 'her', occasion: 'anniversary', rating: 4.6, reviews: 142, stock: 55, description: 'A set of three premium wooden photo frames with custom engraving. Preserve your most cherished memories in style.', images: ['https://images.unsplash.com/photo-1513519245088-0e12902e35ca?q=80&w=600&auto=format&fit=crop'], tags: ['personalised', 'photo', 'keepsake'], isNew: false },
  { id: 'p12', title: 'Aromatic Candle Collection', price: 999, originalPrice: null, category: 'her', occasion: 'housewarming', rating: 4.7, reviews: 198, stock: 70, description: 'A collection of 6 hand-poured soy wax candles in fragrances like lavender, vanilla, sandalwood, and jasmine. Each burns for 40+ hours.', images: ['https://images.unsplash.com/photo-1602607742444-f6b9eec0dd5e?q=80&w=600&auto=format&fit=crop'], tags: ['candles', 'aromatic', 'home'], isNew: true },
  { id: 'p13', title: "Men's Grooming Luxury Kit", price: 2499, originalPrice: 2999, category: 'him', occasion: 'birthday', rating: 4.5, reviews: 86, stock: 40, description: 'Complete grooming essentials: beard oil, face wash, moisturiser, and aftershave balm from premium organic brands, in a leather dopp kit.', images: ['https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?q=80&w=600&auto=format&fit=crop'], tags: ['grooming', 'mens', 'luxury'], isNew: false },
  { id: 'p14', title: 'Handwoven Pashmina Shawl', price: 3999, originalPrice: null, category: 'her', occasion: 'festival', rating: 4.9, reviews: 67, stock: 18, description: 'An authentic Kashmiri pashmina shawl handwoven by master artisans. Soft, warm, and timelessly elegant.', images: ['https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?q=80&w=600&auto=format&fit=crop'], tags: ['pashmina', 'handwoven', 'luxury'], isNew: true },
  { id: 'p15', title: 'Premium Coffee Brewing Set', price: 1799, originalPrice: null, category: 'him', occasion: 'housewarming', rating: 4.7, reviews: 103, stock: 35, description: 'A curated pour-over coffee set including a ceramic dripper, gooseneck kettle, hand grinder, and 250g of single-origin beans from Coorg.', images: ['https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=600&auto=format&fit=crop'], tags: ['coffee', 'brewing', 'artisan'], isNew: false },
  { id: 'p16', title: 'Silk Saree Gift Box', price: 4999, originalPrice: 5999, category: 'her', occasion: 'wedding', rating: 4.8, reviews: 54, stock: 12, description: 'A luxurious Banarasi silk saree presented in a custom embroidered gift box with matching blouse fabric and a handwritten blessing card.', images: ['https://images.unsplash.com/photo-1610030469983-98e550d6193c?q=80&w=600&auto=format&fit=crop'], tags: ['silk', 'saree', 'wedding'], isNew: true },
  { id: 'p17', title: 'Personalised Wallet & Belt Set', price: 2899, originalPrice: null, category: 'him', occasion: 'corporate', rating: 4.6, reviews: 91, stock: 28, description: 'Italian leather wallet and belt set with custom monogram initials. Presented in a premium magnetic-close box.', images: ['https://images.unsplash.com/photo-1627123424574-724758594e93?q=80&w=600&auto=format&fit=crop'], tags: ['wallet', 'leather', 'personalised'], isNew: false },
  { id: 'p18', title: 'Organic Tea Collection Box', price: 1199, originalPrice: null, category: 'her', occasion: 'festival', rating: 4.7, reviews: 176, stock: 65, description: 'A curated box of 8 organic teas — Darjeeling first flush, Assam gold, chamomile, green, and more. Sourced directly from Indian estates.', images: ['https://images.unsplash.com/photo-1556679343-c7306c1976bc?q=80&w=600&auto=format&fit=crop'], tags: ['tea', 'organic', 'collection'], isNew: false },
  { id: 'p19', title: 'Bluetooth Speaker Gift Pack', price: 3299, originalPrice: 3999, category: 'him', occasion: 'birthday', rating: 4.5, reviews: 63, stock: 30, description: 'Premium portable Bluetooth speaker with rich bass, 12-hour battery life, and waterproof design. Comes gift-wrapped with premium earbuds.', images: ['https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?q=80&w=600&auto=format&fit=crop'], tags: ['speaker', 'tech', 'music'], isNew: true },
  { id: 'p20', title: 'Baby Welcome Hamper', price: 2199, originalPrice: null, category: 'her', occasion: 'birthday', rating: 4.8, reviews: 87, stock: 32, description: 'Celebrate the arrival of a little one with organic cotton onesies, a plush toy, baby blanket, and milestone cards — all in a keepsake basket.', images: ['https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?q=80&w=600&auto=format&fit=crop'], tags: ['baby', 'newborn', 'hamper'], isNew: false },
  { id: 'p21', title: 'Diwali Festive Dry Fruit Box', price: 2499, originalPrice: 2999, category: 'her', occasion: 'festival', rating: 4.8, reviews: 188, stock: 80, description: 'A premium assortment of almonds, cashews, pistachios, and figs presented in a handcrafted brass-finish box with a festive ribbon.', images: ['https://images.unsplash.com/photo-1606312619070-d48b4c652a52?q=80&w=600&auto=format&fit=crop'], tags: ['diwali', 'dryfruit', 'festival'], isNew: true },
  { id: 'p22', title: 'Luxury Perfume Gift Set', price: 3699, originalPrice: null, category: 'him', occasion: 'anniversary', rating: 4.7, reviews: 72, stock: 22, description: 'A trio of premium eau de parfum miniatures (woody, citrus, and oriental notes) presented in a velvet-lined collector box.', images: ['https://images.unsplash.com/photo-1541643600914-78b084683601?q=80&w=600&auto=format&fit=crop'], tags: ['perfume', 'fragrance', 'luxury'], isNew: false },
  { id: 'p23', title: 'Copper Pooja Thali Set', price: 1599, originalPrice: null, category: 'her', occasion: 'festival', rating: 4.6, reviews: 94, stock: 45, description: 'A beautifully crafted copper pooja thali with diya, incense holder, bell, and kumkum container. Perfect for Diwali and housewarming.', images: ['https://images.unsplash.com/photo-1574169208507-84376144848b?q=80&w=600&auto=format&fit=crop'], tags: ['pooja', 'copper', 'traditional'], isNew: false },
  { id: 'p24', title: 'Corporate Welcome Kit', price: 1999, originalPrice: null, category: 'him', occasion: 'corporate', rating: 4.5, reviews: 54, stock: 45, description: 'A sophisticated desk set: matte-black stationery, marble bookends, branded ceramic mug, and a premium notebook. Perfect for new hires.', images: ['https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=600&auto=format&fit=crop'], tags: ['corporate', 'desk', 'professional'], isNew: false },
];

const COUPONS = { LUSTREVA10: 10, GIFT20: 20, WELCOME15: 15, SAVE30: 30 };

// =============================================
// STATE
// =============================================
const S = {
  user: null,
  cart: [],
  wishlist: [],
  orders: [],
  products: [...MOCK_PRODUCTS],
  filtered: [...MOCK_PRODUCTS],
  currentProduct: null,
  searchQuery: '',
  couponDiscount: 0,
  couponCode: '',
  darkMode: false,
  fbFns: null,
};

// =============================================
// INIT
// =============================================
document.addEventListener('DOMContentLoaded', async () => {
  initTheme();
  initLoader();
  initNavbar();
  loadStorage();
  renderFeatured();
  updateBadges();
  initGlobalListeners();
  await loadFirebase();
});

function initLoader() {
  setTimeout(() => {
    document.getElementById('page-loader')?.classList.add('gone');
  }, 2200);
}

async function loadFirebase() {
  try {
    const fb = await import('./firebase-app.js');
    S.fbFns = fb;
    fb.onAuthChange(async (user) => {
      if (user) {
        S.user = user;
        await onSignedIn(user);
      } else {
        S.user = null;
        onSignedOut();
      }
    });
    const fbProds = await fb.getProducts().catch(() => null);
    if (fbProds && fbProds.length > 0) {
      S.products = fbProds;
      S.filtered = [...fbProds];
      renderFeatured();
    }
  } catch (err) {
    console.info('Running in demo mode:', err.message);
  }
}

async function onSignedIn(user) {
  updateAuthUI(true);
  if (S.fbFns) {
    try {
      const wlItems = await S.fbFns.getWishlist(user.uid);
      if (wlItems.length > 0) {
        S.wishlist = [...new Set([...S.wishlist, ...wlItems])];
        saveWL();
      }
    } catch (e) {}
    try {
      S.orders = await S.fbFns.getUserOrders(user.uid);
    } catch (e) {}
  }
  updateBadges();
  showToast(`Welcome back, ${getDisplayName()}! 👋`, 'success');
}

function onSignedOut() {
  updateAuthUI(false);
  updateBadges();
}

// =============================================
// AUTH
// =============================================
async function googleSignIn() {
  if (!S.fbFns) {
    showToast('Firebase not configured. Running in demo mode.', 'info', 4000);
    return;
  }
  try {
    showToast('Opening Google sign-in…', 'info');
    const result = await S.fbFns.fbGoogleSignIn();
    closeAuth();
    showToast(`Welcome, ${result.user.displayName}! ✨`, 'success');
  } catch (err) {
    showToast(friendlyError(err.message || err.code), 'error');
  }
}

async function loginUser() {
  const email = v('login-email');
  const pass  = v('login-pw');
  if (!email || !pass) { showToast('Please fill in both fields', 'error'); return; }

  const btn = ge('login-btn');
  setBtnLoad(btn, true, 'Sign In');

  try {
    if (!S.fbFns || !S.fbFns.IS_CONFIGURED) {
      // Demo mode
      S.user = { uid: 'demo_' + email, email, displayName: email.split('@')[0] };
      await onSignedIn(S.user);
      closeAuth();
      return;
    }
    await S.fbFns.fbLogin(email, pass);
    closeAuth();
  } catch (err) {
    showToast(friendlyError(err.message || err.code), 'error');
  } finally {
    setBtnLoad(btn, false, 'Sign In');
  }
}

async function registerUser() {
  const name  = v('reg-name');
  const email = v('reg-email');
  const pass  = v('reg-pw');

  if (!name || !email || !pass) { showToast('Please fill in all fields', 'error'); return; }
  if (pass.length < 6)          { showToast('Password must be at least 6 characters', 'error'); return; }
  if (!email.includes('@'))     { showToast('Please enter a valid email address', 'error'); return; }

  const btn = ge('reg-btn');
  setBtnLoad(btn, true, 'Create Account');

  try {
    if (!S.fbFns || !S.fbFns.IS_CONFIGURED) {
      S.user = { uid: 'demo_' + email, email, displayName: name };
      await onSignedIn(S.user);
      closeAuth();
      showToast('Account created! Welcome to Lustréva ✨', 'success');
      return;
    }
    await S.fbFns.fbRegister(email, pass, name);
    closeAuth();
    showToast('Account created! Welcome to Lustréva ✨', 'success');
  } catch (err) {
    showToast(friendlyError(err.message || err.code), 'error');
  } finally {
    setBtnLoad(btn, false, 'Create Account');
  }
}

async function logoutUser() {
  try {
    if (S.fbFns) await S.fbFns.fbSignOut();
  } catch (e) {}
  S.user   = null;
  S.orders = [];
  onSignedOut();
  showToast('Signed out successfully', 'success');
  showPage('home');
}

function updateAuthUI(isLoggedIn) {
  const dot = ge('user-dot');
  if (dot) dot.style.display = isLoggedIn ? 'block' : 'none';

  if (isLoggedIn && S.user) {
    const name   = getDisplayName();
    const email  = S.user.email || '';
    const letter = (name[0] || 'U').toUpperCase();

    setTxt('um-name', name);
    setTxt('um-email', email);
    setTxt('um-avatar', letter);
    setTxt('profile-name', name);
    setTxt('profile-email', email);
    setTxt('profile-greet', `Welcome back, ${name.split(' ')[0]}!`);
    setTxt('profile-av-letter', letter);

    const sn = ge('set-name'); if (sn) sn.value = name;
    const se = ge('set-email'); if (se) se.value = email;

    const admBtn = ge('um-admin-btn');
    if (admBtn) admBtn.style.display = S.user.isAdmin ? 'flex' : 'none';
  } else {
    const admBtn = ge('um-admin-btn');
    if (admBtn) admBtn.style.display = 'none';
  }
}

function getDisplayName() {
  if (!S.user) return 'Guest';
  return S.user.displayName || S.user.email?.split('@')[0] || 'User';
}

function handleAuthClick() {
  if (S.user) {
    toggleUserMenu();
  } else {
    openAuth();
  }
}

function openAuth() {
  ge('auth-bg')?.classList.add('open');
  ge('auth-modal')?.classList.add('open');
  setTimeout(() => ge('login-email')?.focus(), 350);
}

function closeAuth() {
  ge('auth-bg')?.classList.remove('open');
  ge('auth-modal')?.classList.remove('open');
}

function switchAuthTab(tab) {
  ge('form-login').style.display    = tab === 'login'    ? 'block' : 'none';
  ge('form-register').style.display = tab === 'register' ? 'block' : 'none';
  const tl = ge('tab-login');
  const tr = ge('tab-register');
  if (tl) { tl.classList.toggle('active', tab === 'login');    tl.setAttribute('aria-selected', tab === 'login'); }
  if (tr) { tr.classList.toggle('active', tab === 'register'); tr.setAttribute('aria-selected', tab === 'register'); }
  setTimeout(() => {
    if (tab === 'login')    ge('login-email')?.focus();
    if (tab === 'register') ge('reg-name')?.focus();
  }, 50);
}

function togglePw(id, btn) {
  const inp = ge(id);
  if (!inp) return;
  inp.type = inp.type === 'password' ? 'text' : 'password';
  btn.textContent = inp.type === 'password' ? '👁' : '🙈';
}

function toggleUserMenu() {
  const m = ge('user-menu');
  if (!m) return;
  const isOpen = m.style.display === 'block';
  m.style.display = isOpen ? 'none' : 'block';
}

function closeUserMenu() {
  const m = ge('user-menu');
  if (m) m.style.display = 'none';
}

function friendlyError(msg = '') {
  if (msg.includes('invalid-credential') || msg.includes('wrong-password') || msg.includes('Invalid login')) return 'Incorrect email or password.';
  if (msg.includes('user-not-found'))       return 'No account found with this email.';
  if (msg.includes('email-already-in-use')) return 'Email already in use — try signing in.';
  if (msg.includes('weak-password'))        return 'Password must be at least 6 characters.';
  if (msg.includes('invalid-email'))        return 'Please enter a valid email address.';
  if (msg.includes('too-many-requests'))    return 'Too many attempts. Please wait a moment.';
  if (msg.includes('popup-closed'))         return 'Sign-in popup was closed. Please try again.';
  if (msg.includes('network'))              return 'Network error. Check your connection.';
  return msg.length > 120 ? 'Authentication error. Please try again.' : msg;
}

function setBtnLoad(btn, loading, label = '') {
  if (!btn) return;
  btn.disabled = loading;
  btn.innerHTML = loading
    ? '<span class="spinner"></span> Please wait…'
    : label;
}

// =============================================
// PAGE ROUTING
// =============================================
function showPage(page) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  const el = ge(`page-${page}`);
  if (!el) return;
  el.classList.add('active');
  window.scrollTo({ top: 0, behavior: 'smooth' });
  closeUserMenu();
  closeFiltersPanel();

  switch (page) {
    case 'shop':     renderShop(); break;
    case 'wishlist': renderWishlist(); break;
    case 'checkout': renderCheckout(); break;
    case 'admin':    
      if (!S.user || !S.user.isAdmin) {
        showToast('Access Denied. Admins only.', 'error');
        showPage('home');
        return;
      }
      renderAdmin(); 
      break;
    case 'profile':
      if (!S.user) { openAuth(); return; }
      renderProfile();
      break;
  }
}

// =============================================
// NAVBAR
// =============================================
function initNavbar() {
  window.addEventListener('scroll', () => {
    ge('navbar')?.classList.toggle('scrolled', window.scrollY > 30);
  }, { passive: true });
}

function toggleMobileMenu() {
  const cats = ge('nav-cats');
  const btn  = ge('mobile-menu-btn');
  if (!cats) return;
  const isOpen = cats.classList.toggle('open');
  if (btn) btn.setAttribute('aria-expanded', isOpen);
}

function initGlobalListeners() {
  document.addEventListener('click', (e) => {
    if (!e.target.closest('#auth-nav-btn') && !e.target.closest('#user-menu')) {
      closeUserMenu();
    }
    if (!e.target.closest('.nav-search-wrap')) {
      hideSearchDrop();
    }
    if (!e.target.closest('#navbar')) {
      ge('nav-cats')?.classList.remove('open');
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeAuth();
      closeQV();
      closeUserMenu();
      if (ge('cart-drawer')?.classList.contains('open')) closeCartDrawer();
      closeFiltersPanel();
    }
  });

  // Enter key on auth inputs
  ge('login-email')?.addEventListener('keydown', (e) => { if (e.key === 'Enter') loginUser(); });
  ge('login-pw')?.addEventListener('keydown',    (e) => { if (e.key === 'Enter') loginUser(); });
  ge('reg-name')?.addEventListener('keydown',    (e) => { if (e.key === 'Enter') registerUser(); });
  ge('reg-email')?.addEventListener('keydown',   (e) => { if (e.key === 'Enter') registerUser(); });
  ge('reg-pw')?.addEventListener('keydown',      (e) => { if (e.key === 'Enter') registerUser(); });

  // Keyboard support for showcase/occ cards
  document.querySelectorAll('[role="button"]').forEach(el => {
    el.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); el.click(); }
    });
  });
}

// =============================================
// SEARCH
// =============================================
function handleSearch(val) {
  S.searchQuery = val.toLowerCase().trim();
  const x = ge('search-x');
  if (x) x.style.display = val ? 'block' : 'none';

  if (S.searchQuery.length > 1) {
    showSearchResults(S.searchQuery);
    if (S.searchQuery.length > 2) {
      showPage('shop');
      applyFilters();
    }
  } else {
    hideSearchDrop();
  }
}

function showSearchResults(q) {
  const dd  = ge('search-dropdown');
  const res = ge('sd-results');
  if (!dd || !res) return;

  const hits = S.products.filter(p =>
    p.title.toLowerCase().includes(q) ||
    p.description?.toLowerCase().includes(q) ||
    (p.tags || []).some(t => t.toLowerCase().includes(q))
  ).slice(0, 5);

  res.innerHTML = hits.length
    ? hits.map(p => `
        <div class="sd-result" onclick="openProduct('${p.id}');hideSearchDrop()" role="option" tabindex="0">
          <img src="${p.images?.[0] || ''}" alt="${p.title}" loading="lazy" />
          <div>
            <strong>${p.title}</strong>
            <span>₹${p.price.toLocaleString('en-IN')}</span>
          </div>
        </div>
      `).join('')
    : '<p style="font-size:.8rem;color:var(--tx3);padding:.5rem 0">No results found</p>';

  dd.style.display = 'block';
}

function showSearchDrop() {
  const dd = ge('search-dropdown');
  if (dd) dd.style.display = 'block';
}

function hideSearchDrop() {
  const dd = ge('search-dropdown');
  if (dd) dd.style.display = 'none';
}

function clearSearch() {
  const inp = ge('search-input');
  if (inp) inp.value = '';
  S.searchQuery = '';
  const x = ge('search-x');
  if (x) x.style.display = 'none';
  hideSearchDrop();
  applyFilters();
}

function quickSearch(q) {
  const inp = ge('search-input');
  if (inp) inp.value = q;
  handleSearch(q);
}

function scrollToEl(id) {
  ge(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

// =============================================
// PRODUCTS — RENDER
// =============================================
function renderFeatured() {
  const el = ge('featured-grid');
  if (!el) return;
  const featured = S.products.slice(0, 8);
  el.innerHTML = featured.map(p => cardHTML(p)).join('');
}

function renderShop() {
  const grid = ge('shop-grid');
  const none = ge('no-prods');
  if (!grid) return;

  if (S.filtered.length === 0) {
    grid.innerHTML = '';
    if (none) none.style.display = 'flex';
  } else {
    if (none) none.style.display = 'none';
    grid.innerHTML = S.filtered.map(p => cardHTML(p)).join('');
  }

  const cnt = ge('prod-count');
  if (cnt) cnt.textContent = `Showing ${S.filtered.length} product${S.filtered.length !== 1 ? 's' : ''}`;
}

function cardHTML(p) {
  const inWL  = S.wishlist.includes(p.id);
  const catLbl = { her: 'Gift for Her', him: 'Gift for Him', new: 'New Arrival' }[p.category] || p.category;
  const imgSrc = p.images?.[0] || '';

  return `
    <div class="product-card" data-id="${p.id}">
      <div class="pc-img">
        ${imgSrc
          ? `<img src="${imgSrc}" alt="${p.title}" loading="lazy" onclick="openProduct('${p.id}')" />`
          : `<div class="pc-img-placeholder" onclick="openProduct('${p.id}')">🎁</div>`
        }
        <div class="pc-badges">
          ${p.isNew ? '<span class="badge badge-new">✦ New</span>' : ''}
          ${p.originalPrice ? '<span class="badge badge-sale">Sale</span>' : ''}
        </div>
        <button class="wl-btn ${inWL ? 'active' : ''}"
          onclick="event.stopPropagation();toggleWL('${p.id}')"
          title="${inWL ? 'Remove from wishlist' : 'Save to wishlist'}"
          aria-label="${inWL ? 'Remove from wishlist' : 'Add to wishlist'}"
        >${inWL ? '♥' : '♡'}</button>
        <div class="pc-qv" onclick="openQV('${p.id}')">👁 Quick View</div>
      </div>
      <div class="pc-info" onclick="openProduct('${p.id}')">
        <div class="pc-cat">${catLbl}</div>
        <h3 class="pc-title">${p.title}</h3>
        <div class="pc-rating">
          <span class="pc-stars">${starsHTML(p.rating)}</span>
          <span class="pc-rc">(${p.reviews || 0})</span>
        </div>
        <div class="pc-foot">
          <div class="pc-price">
            ₹${p.price.toLocaleString('en-IN')}
            ${p.originalPrice ? `<span class="pc-orig">₹${p.originalPrice.toLocaleString('en-IN')}</span>` : ''}
          </div>
          <button class="pc-add" onclick="event.stopPropagation();addToCart('${p.id}')" title="Add to cart" aria-label="Add ${p.title} to cart">+</button>
        </div>
      </div>
    </div>
  `;
}

function starsHTML(r) {
  const full  = Math.floor(r);
  const half  = r % 1 >= 0.5 ? 1 : 0;
  const empty = 5 - full - half;
  return '★'.repeat(full) + (half ? '½' : '') + '☆'.repeat(empty);
}

// =============================================
// PRODUCT DETAIL
// =============================================
function openProduct(id) {
  const p = S.products.find(x => x.id === id);
  if (!p) return;
  S.currentProduct = p;
  renderProductDetail(p);
  showPage('product');
  const bc = ge('prod-bc');
  if (bc) bc.textContent = p.title;
}

function renderProductDetail(p) {
  const inWL   = S.wishlist.includes(p.id);
  const catLbl = { her: 'Gift for Her', him: 'Gift for Him', new: 'New Arrival' }[p.category] || p.category;
  const related = S.products.filter(x => x.category === p.category && x.id !== p.id).slice(0, 4);

  const pd = ge('prod-detail');
  if (!pd) return;

  pd.innerHTML = `
    <div class="prod-gallery">
      <div class="main-img" id="main-img">
        ${p.images?.[0]
          ? `<img id="main-img-el" src="${p.images[0]}" alt="${p.title}" />`
          : '<div style="display:flex;align-items:center;justify-content:center;height:100%;font-size:5rem">🎁</div>'
        }
      </div>
      ${p.images?.length > 1
        ? `<div class="thumb-row">${p.images.map((img, i) => `
            <div class="thumb ${i === 0 ? 'on' : ''}" onclick="switchImg('${img}',this)">
              <img src="${img}" alt="View ${i + 1}" loading="lazy" />
            </div>`).join('')}
          </div>`
        : ''
      }
    </div>

    <div class="pd-info">
      <div class="pd-cat-badge">${catLbl} · ${p.occasion || ''}</div>
      <h1 class="pd-title">${p.title}</h1>
      <div class="pd-rating">
        <span class="pd-stars">${starsHTML(p.rating)}</span>
        <span style="font-size:.9rem;font-weight:600">${p.rating}</span>
        <span style="font-size:.8rem;color:var(--tx3)">(${p.reviews || 0} reviews)</span>
      </div>
      <div class="pd-price">
        ₹${p.price.toLocaleString('en-IN')}
        ${p.originalPrice ? `<span class="pd-orig">₹${p.originalPrice.toLocaleString('en-IN')}</span>` : ''}
      </div>
      ${p.stock <= 10 && p.stock > 0 ? `<div class="pd-stock-warn">⚠ Only ${p.stock} left in stock!</div>` : ''}
      <p class="pd-desc">${p.description}</p>

      <div class="qty-sec">
        <span class="qty-lbl">Quantity</span>
        <div class="qty-ctrl">
          <button onclick="changeQty(-1)" aria-label="Decrease quantity">−</button>
          <input type="number" id="detail-qty" value="1" min="1" max="${p.stock || 99}" aria-label="Quantity" />
          <button onclick="changeQty(1)" aria-label="Increase quantity">+</button>
        </div>
      </div>

      <div class="pd-actions">
        <div class="pd-act-row">
          <button class="btn-primary lg" onclick="addToCartFromDetail()">🛍 Add to Cart</button>
          <button class="btn-outline lg" onclick="buyNow()">Buy Now</button>
        </div>
        <button class="pd-wl-btn ${inWL ? 'active' : ''}" id="pd-wl-btn" onclick="toggleWL('${p.id}')">
          ${inWL ? '♥ Saved to Wishlist' : '♡ Save to Wishlist'}
        </button>
      </div>

      <div class="pd-meta">
        <div class="pd-meta-item"><span>🚚</span> Free delivery on orders above ₹999</div>
        <div class="pd-meta-item"><span>🎁</span> Free premium gift wrapping included</div>
        <div class="pd-meta-item"><span>↩</span> 7-day hassle-free returns</div>
        <div class="pd-meta-item"><span>🛡</span> 100% authentic, quality guaranteed</div>
      </div>
    </div>
  `;

  const relGrid = ge('related-grid');
  if (relGrid) relGrid.innerHTML = related.map(r => cardHTML(r)).join('');
}

function switchImg(src, thumb) {
  const mi = ge('main-img-el');
  if (mi) mi.src = src;
  document.querySelectorAll('.thumb').forEach(t => t.classList.remove('on'));
  thumb?.classList.add('on');
}

function changeQty(d) {
  const inp = ge('detail-qty');
  if (!inp) return;
  const max = parseInt(inp.max) || 99;
  inp.value = Math.min(max, Math.max(1, parseInt(inp.value || 1) + d));
}

function addToCartFromDetail() {
  if (!S.currentProduct) return;
  const qty = parseInt(ge('detail-qty')?.value || 1);
  addToCart(S.currentProduct.id, qty);
}

function buyNow() {
  addToCartFromDetail();
  showPage('checkout');
}

// =============================================
// QUICK VIEW
// =============================================
function openQV(id) {
  const p = S.products.find(x => x.id === id);
  if (!p) return;
  const c = ge('qv-content');
  if (!c) return;

  c.innerHTML = `
    <div class="qv-img">
      ${p.images?.[0]
        ? `<img src="${p.images[0]}" alt="${p.title}" />`
        : '<div style="display:flex;align-items:center;justify-content:center;height:100%;font-size:4rem">🎁</div>'
      }
    </div>
    <div class="qv-body">
      <div class="pd-cat-badge" style="margin-bottom:.75rem">
        ${{ her: 'Gift for Her', him: 'Gift for Him', new: 'New Arrival' }[p.category] || p.category}
      </div>
      <h2 style="font-size:1.55rem;margin-bottom:.75rem;font-family:'Cormorant Garamond',serif">${p.title}</h2>
      <div style="display:flex;align-items:center;gap:.5rem;margin-bottom:1rem;color:var(--gold)">
        ${starsHTML(p.rating)}
        <span style="font-size:.8rem;color:var(--tx3)">(${p.reviews})</span>
      </div>
      <div style="font-family:'Cormorant Garamond',serif;font-size:1.75rem;font-weight:700;margin-bottom:1.25rem;display:flex;align-items:baseline;gap:.5rem">
        ₹${p.price.toLocaleString('en-IN')}
        ${p.originalPrice ? `<span style="font-size:1rem;text-decoration:line-through;color:var(--tx3);font-family:'DM Sans',sans-serif;font-weight:400">₹${p.originalPrice.toLocaleString('en-IN')}</span>` : ''}
      </div>
      <p style="font-size:.9rem;color:var(--tx2);line-height:1.7;margin-bottom:1.5rem">
        ${p.description.substring(0, 160)}…
      </p>
      ${p.stock <= 10 && p.stock > 0 ? `<div class="pd-stock-warn" style="margin-bottom:1rem">⚠ Only ${p.stock} left!</div>` : ''}
      <div style="display:flex;flex-direction:column;gap:.65rem">
        <button class="btn-primary full" onclick="addToCart('${p.id}');closeQV()">🛍 Add to Cart</button>
        <button class="btn-outline full" onclick="closeQV();openProduct('${p.id}')">View Full Details →</button>
      </div>
    </div>
  `;

  ge('qv-bg')?.classList.add('open');
  ge('qv-modal')?.classList.add('open');
}

function closeQV() {
  ge('qv-bg')?.classList.remove('open');
  ge('qv-modal')?.classList.remove('open');
}

// =============================================
// FILTERS
// =============================================
function filterCat(cat) {
  document.querySelectorAll('input[name="cat"]').forEach(cb => { cb.checked = cb.value === cat; });
  document.querySelectorAll('input[name="occ"]').forEach(cb => { cb.checked = false; });
  S.searchQuery = '';
  const inp = ge('search-input');
  if (inp) inp.value = '';
  applyFilters();
  showPage('shop');
  highlightCatBtn(cat);
}

function filterOcc(occ) {
  document.querySelectorAll('input[name="occ"]').forEach(cb => { cb.checked = cb.value === occ; });
  document.querySelectorAll('input[name="cat"]').forEach(cb => { cb.checked = false; });
  S.searchQuery = '';
  const inp = ge('search-input');
  if (inp) inp.value = '';
  applyFilters();
  showPage('shop');
}

function showAllProducts() {
  document.querySelectorAll('input[name="cat"], input[name="occ"]').forEach(cb => { cb.checked = false; });
  S.searchQuery = '';
  const inp = ge('search-input');
  if (inp) inp.value = '';
  S.filtered = [...S.products];
  showPage('shop');
  renderShop();
  document.querySelectorAll('.cat-btn').forEach(b => b.classList.remove('active'));
}

function applyFilters() {
  const cats  = [...document.querySelectorAll('input[name="cat"]:checked')].map(i => i.value);
  const occs  = [...document.querySelectorAll('input[name="occ"]:checked')].map(i => i.value);
  const maxP  = parseInt(ge('price-slider')?.value || 10000);
  const minR  = parseFloat(document.querySelector('input[name="rating"]:checked')?.value || 0);
  const sort  = ge('sort-sel')?.value || 'default';
  const q     = S.searchQuery;

  let r = [...S.products];
  if (q)            r = r.filter(p => p.title.toLowerCase().includes(q) || p.description?.toLowerCase().includes(q) || (p.tags || []).some(t => t.toLowerCase().includes(q)));
  if (cats.length)  r = r.filter(p => cats.includes(p.category));
  if (occs.length)  r = r.filter(p => occs.includes(p.occasion));
  r = r.filter(p => p.price <= maxP && p.rating >= minR);

  switch (sort) {
    case 'price-asc':  r.sort((a, b) => a.price - b.price); break;
    case 'price-desc': r.sort((a, b) => b.price - a.price); break;
    case 'rating':     r.sort((a, b) => b.rating - a.rating); break;
    case 'newest':     r.sort((a, b) => (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0)); break;
  }

  S.filtered = r;
  renderShop();
}

function clearFilters() {
  document.querySelectorAll('input[name="cat"], input[name="occ"]').forEach(cb => { cb.checked = false; });
  const ra = document.querySelector('input[name="rating"][value="0"]');
  if (ra) ra.checked = true;
  const ps = ge('price-slider');
  if (ps) { ps.value = 10000; updatePriceLabel(10000); }
  const ss = ge('sort-sel');
  if (ss) ss.value = 'default';
  S.searchQuery = '';
  const inp = ge('search-input');
  if (inp) inp.value = '';
  S.filtered = [...S.products];
  renderShop();
}

function updatePriceLabel(val) {
  const el = ge('price-max');
  if (el) el.textContent = `₹${parseInt(val).toLocaleString('en-IN')}`;
}

function toggleFilters() {
  const fb = ge('filters-bar');
  const fo = ge('filter-overlay');
  if (!fb) return;
  const isOpen = fb.classList.toggle('open');
  if (fo) fo.classList.toggle('open', isOpen);
  document.body.style.overflow = isOpen ? 'hidden' : '';
}

function closeFiltersPanel() {
  const fb = ge('filters-bar');
  const fo = ge('filter-overlay');
  if (fb) fb.classList.remove('open');
  if (fo) fo.classList.remove('open');
  document.body.style.overflow = '';
}

function highlightCatBtn(cat) {
  document.querySelectorAll('.cat-btn').forEach(b => b.classList.remove('active'));
  const map = { her: 1, him: 2, new: 6 }; // index in cat-btn list (0-based)
  const btns = document.querySelectorAll('.cat-btn');
  const idx  = { her: 1, him: 2, new: 6 }[cat];
  if (idx !== undefined && btns[idx]) btns[idx].classList.add('active');
}

// =============================================
// CART
// =============================================
function loadStorage() {
  try { S.cart     = JSON.parse(localStorage.getItem('lv_cart') || '[]'); } catch { S.cart = []; }
  try { S.wishlist = JSON.parse(localStorage.getItem('lv_wl')   || '[]'); } catch { S.wishlist = []; }
}

function saveCart() { localStorage.setItem('lv_cart', JSON.stringify(S.cart)); }
function saveWL()   { localStorage.setItem('lv_wl',   JSON.stringify(S.wishlist)); }

function addToCart(productId, qty = 1) {
  const p = S.products.find(x => x.id === productId);
  if (!p) return;

  const existing = S.cart.find(i => i.id === productId);
  if (existing) {
    existing.qty = Math.min(existing.qty + qty, p.stock || 99);
  } else {
    S.cart.push({
      id: productId, qty,
      price: p.price,
      title: p.title,
      image: p.images?.[0] || null,
    });
  }

  saveCart();
  updateBadges();
  renderCartDrawer();
  showToast(`${p.title} added to cart 🎁`, 'success');
  openCartDrawer();
}

function removeFromCart(id) {
  S.cart = S.cart.filter(i => i.id !== id);
  saveCart();
  updateBadges();
  renderCartDrawer();
}

function updateCartQty(id, d) {
  const item = S.cart.find(i => i.id === id);
  if (!item) return;
  item.qty = Math.max(1, item.qty + d);
  saveCart();
  updateBadges();
  renderCartDrawer();
}

function toggleCart() {
  const dr = ge('cart-drawer');
  if (!dr) return;
  if (dr.classList.contains('open')) {
    closeCartDrawer();
  } else {
    openCartDrawer();
  }
}

function openCartDrawer() {
  ge('cart-drawer')?.classList.add('open');
  ge('cart-overlay')?.classList.add('open');
  renderCartDrawer();
}

function closeCartDrawer() {
  ge('cart-drawer')?.classList.remove('open');
  ge('cart-overlay')?.classList.remove('open');
}

function renderCartDrawer() {
  const body = ge('cart-body');
  const foot = ge('cart-foot');
  if (!body) return;

  if (S.cart.length === 0) {
    body.innerHTML = `
      <div class="empty-cart">
        <div class="empty-icon">🛍️</div>
        <h4>Your cart is empty</h4>
        <p>Add beautiful gifts to get started</p>
        <button class="btn-primary" onclick="closeCartDrawer();showPage('shop')">Explore Gifts</button>
      </div>`;
    if (foot) foot.style.display = 'none';
    return;
  }

  body.innerHTML = S.cart.map(item => `
    <div class="cart-item">
      <div class="ci-img">
        ${item.image
          ? `<img src="${item.image}" alt="${item.title}" loading="lazy" />`
          : '<div class="ci-img-ph">🎁</div>'
        }
      </div>
      <div class="ci-info">
        <h4>${item.title}</h4>
        <div class="ci-price">₹${(item.price * item.qty).toLocaleString('en-IN')}</div>
        <div class="ci-qty">
          <button class="qty-btn" onclick="updateCartQty('${item.id}',-1)" aria-label="Decrease quantity">−</button>
          <span class="qty-num">${item.qty}</span>
          <button class="qty-btn" onclick="updateCartQty('${item.id}',1)" aria-label="Increase quantity">+</button>
        </div>
      </div>
      <button class="ci-rm" onclick="removeFromCart('${item.id}')" title="Remove" aria-label="Remove from cart">✕</button>
    </div>
  `).join('');

  if (foot) foot.style.display = 'block';
  updateCartTotals();
}

function updateCartTotals() {
  const sub  = S.cart.reduce((s, i) => s + i.price * i.qty, 0);
  const disc = Math.round(sub * S.couponDiscount / 100);
  const tot  = sub - disc;

  setTxt('c-sub',   `₹${sub.toLocaleString('en-IN')}`);
  setTxt('c-total', `₹${tot.toLocaleString('en-IN')}`);

  const dr = ge('disc-row');
  if (dr) {
    dr.style.display = disc > 0 ? 'flex' : 'none';
    setTxt('c-disc', `-₹${disc.toLocaleString('en-IN')}`);
  }
}

function applyCoupon() {
  const code = ge('coupon-input')?.value?.trim().toUpperCase() || '';
  if (!code) { showToast('Please enter a coupon code', 'error'); return; }

  if (COUPONS[code] !== undefined) {
    S.couponCode     = code;
    S.couponDiscount = COUPONS[code];
    showToast(`✅ Coupon applied! ${COUPONS[code]}% discount`, 'success');
    updateCartTotals();
  } else {
    showToast('Invalid coupon code', 'error');
  }
}

function goToCheckout() {
  closeCartDrawer();
  showPage('checkout');
}

// =============================================
// WISHLIST
// =============================================
async function toggleWL(id) {
  const p   = S.products.find(x => x.id === id);
  const idx = S.wishlist.indexOf(id);

  if (idx === -1) {
    S.wishlist.push(id);
    showToast(`${p?.title || 'Item'} saved to wishlist ♥`, 'success');
  } else {
    S.wishlist.splice(idx, 1);
    showToast('Removed from wishlist', 'info');
  }

  saveWL();
  updateBadges();
  refreshWLBtns(id);

  if (S.fbFns && S.user) {
    try { await S.fbFns.saveWishlist(S.user.uid, S.wishlist); } catch (e) {}
  }

  // If on wishlist page, re-render
  if (ge('page-wishlist')?.classList.contains('active')) renderWishlist();
}

function refreshWLBtns(id) {
  const inWL = S.wishlist.includes(id);
  document.querySelectorAll(`.product-card[data-id="${id}"] .wl-btn`).forEach(btn => {
    btn.className = `wl-btn ${inWL ? 'active' : ''}`;
    btn.textContent = inWL ? '♥' : '♡';
    btn.title = inWL ? 'Remove from wishlist' : 'Add to wishlist';
  });
  const pdBtn = ge('pd-wl-btn');
  if (pdBtn && S.currentProduct?.id === id) {
    pdBtn.className = `pd-wl-btn ${inWL ? 'active' : ''}`;
    pdBtn.textContent = inWL ? '♥ Saved to Wishlist' : '♡ Save to Wishlist';
  }
}

function renderWishlist() {
  const grid = ge('wl-grid');
  const em   = ge('wl-empty');
  const items = S.products.filter(p => S.wishlist.includes(p.id));

  if (items.length === 0) {
    if (grid) grid.innerHTML = '';
    if (em)   em.style.display = 'flex';
  } else {
    if (em)   em.style.display = 'none';
    if (grid) grid.innerHTML = items.map(p => cardHTML(p)).join('');
  }
}

// =============================================
// CHECKOUT
// =============================================
function renderCheckout() {
  if (S.cart.length === 0) {
    showPage('shop');
    showToast('Your cart is empty', 'info');
    return;
  }

  const itemsEl = ge('co-items');
  if (itemsEl) {
    itemsEl.innerHTML = S.cart.map(item => `
      <div class="co-item">
        <div class="co-item-img">
          ${item.image ? `<img src="${item.image}" alt="${item.title}" loading="lazy" />` : '🎁'}
        </div>
        <div class="co-item-info">
          <h4>${item.title}</h4>
          <p>Qty: ${item.qty}</p>
        </div>
        <span class="co-item-price">₹${(item.price * item.qty).toLocaleString('en-IN')}</span>
      </div>
    `).join('');
  }

  const sub  = S.cart.reduce((s, i) => s + i.price * i.qty, 0);
  const disc = Math.round(sub * S.couponDiscount / 100);
  const tot  = sub - disc;

  setTxt('co-sub',   `₹${sub.toLocaleString('en-IN')}`);
  setTxt('co-total', `₹${tot.toLocaleString('en-IN')}`);

  const cdr = ge('co-disc-row');
  if (cdr) {
    cdr.style.display = disc > 0 ? 'flex' : 'none';
    setTxt('co-disc', `-₹${disc.toLocaleString('en-IN')}`);
  }

  // Pre-fill from user
  if (S.user) {
    const efEl = ge('co-email');
    if (efEl && !efEl.value) efEl.value = S.user.email || '';
    const name = getDisplayName();
    const pts  = name.split(' ');
    const fn   = ge('co-fname');
    const ln   = ge('co-lname');
    if (fn && !fn.value) fn.value = pts[0] || '';
    if (ln && !ln.value) ln.value = pts.slice(1).join(' ') || '';
  }
}

async function placeOrder() {
  // Validate required fields
  const required = [
    ['co-fname', 'First name'],
    ['co-email', 'Email'],
    ['co-phone', 'Phone'],
    ['co-addr1', 'Address line 1'],
    ['co-city',  'City'],
    ['co-pin',   'PIN code'],
  ];

  for (const [id, label] of required) {
    if (!ge(id)?.value?.trim()) {
      showToast(`Please fill in: ${label}`, 'error');
      ge(id)?.focus();
      return;
    }
  }

  const pin = ge('co-pin')?.value?.trim();
  if (!/^\d{6}$/.test(pin)) {
    showToast('Please enter a valid 6-digit PIN code', 'error');
    ge('co-pin')?.focus();
    return;
  }

  const phone = ge('co-phone')?.value?.replace(/\D/g, '');
  if (phone.length < 10) {
    showToast('Please enter a valid 10-digit phone number', 'error');
    ge('co-phone')?.focus();
    return;
  }

  const email = ge('co-email')?.value?.trim();
  if (!email.includes('@')) {
    showToast('Please enter a valid email address', 'error');
    ge('co-email')?.focus();
    return;
  }

  const payMethod = document.querySelector('input[name="pay"]:checked')?.value || 'cod';
  const orderId   = 'LV' + Date.now();
  const sub       = S.cart.reduce((s, i) => s + i.price * i.qty, 0);
  const disc      = Math.round(sub * S.couponDiscount / 100);
  const total     = sub - disc;

  const btn = ge('place-order-btn');
  setBtnLoad(btn, true, '🔒 Place Order Securely');

  try {
    const orderData = {
      orderId,
      userId:        S.user?.uid || 'guest',
      items:         [...S.cart],
      totalAmount:   total,
      paymentMethod: payMethod,
      paymentStatus: payMethod === 'cod' ? 'pending' : 'paid',
      status:        'confirmed',
      address: {
        name:  `${ge('co-fname')?.value || ''} ${ge('co-lname')?.value || ''}`.trim(),
        line1: ge('co-addr1')?.value || '',
        line2: ge('co-addr2')?.value || '',
        city:  ge('co-city')?.value  || '',
        pin:   pin,
        state: ge('co-state')?.value || '',
        phone: ge('co-phone')?.value || '',
        email: email,
      },
      createdAt: new Date().toISOString(),
    };

    if (S.fbFns) {
      try { await S.fbFns.createOrder(orderData); } catch (e) {}
    }

    S.orders.unshift(orderData);
    S.cart           = [];
    S.couponCode     = '';
    S.couponDiscount = 0;
    saveCart();
    updateBadges();

    setTxt('success-oid', `#${orderId}`);
    showPage('success');
    showToast('🎉 Order placed successfully!', 'success');
  } catch (err) {
    showToast('Something went wrong. Please try again.', 'error');
  } finally {
    setBtnLoad(btn, false, '🔒 Place Order Securely');
  }
}

// =============================================
// PROFILE
// =============================================
function renderProfile() {
  if (!S.user) return;
  updateAuthUI(true);
  renderOrders();

  const pwl = ge('profile-wl');
  if (pwl) {
    const items = S.products.filter(p => S.wishlist.includes(p.id));
    pwl.innerHTML = items.length > 0
      ? items.map(p => cardHTML(p)).join('')
      : '<div class="empty-state"><div>♥</div><h4>No saved items yet</h4><p>Heart products you love</p></div>';
  }

  // Sync settings tab values
  const sn = ge('set-name');
  const se = ge('set-email');
  if (sn) sn.value = getDisplayName();
  if (se) se.value = S.user.email || '';
}

function renderOrders() {
  const el = ge('orders-list');
  if (!el) return;

  if (S.orders.length === 0) {
    el.innerHTML = `
      <div class="empty-state">
        <div>📦</div>
        <h4>No orders yet</h4>
        <p>Your order history will appear here</p>
        <button class="btn-primary" onclick="showPage('shop')">Start Shopping</button>
      </div>`;
    return;
  }

  el.innerHTML = S.orders.map((o, idx) => {
    const date   = new Date(o.createdAt || Date.now()).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' });
    const status = o.status || 'confirmed';
    const orderItems = o.items || [];
    const itemsSummary = orderItems.map(i => i.title).join(', ');
    const oid = o.orderId || o.id;
    const itemsHTML = orderItems.map(i => `
      <div class="oc-item-row">
        <div class="oc-item-img">${i.images?.[0] ? `<img src="${i.images[0]}" alt="${i.title}" />` : '🎁'}</div>
        <div class="oc-item-info">
          <h5>${i.title}</h5>
          <span>Qty: ${i.qty || 1} · ${i.category || ''}</span>
        </div>
        <div class="oc-item-price">₹${(i.price * (i.qty || 1)).toLocaleString('en-IN')}</div>
      </div>
    `).join('');
    return `
      <div class="order-card">
        <div class="oc-hd">
          <div>
            <div class="oc-id">Order #${oid}</div>
            <div style="font-size:.75rem;color:var(--tx3);margin-top:.1rem">${date}</div>
          </div>
          <span class="oc-status st-${status}">${status.charAt(0).toUpperCase() + status.slice(1)}</span>
        </div>
        <div class="oc-items" title="${itemsSummary}">${itemsSummary || 'Items'}</div>
        <div class="oc-ft">
          <span style="color:var(--tx3)">${orderItems.length} item(s) · ${o.paymentMethod === 'cod' ? 'Cash on Delivery' : 'Online Payment'}</span>
          <span class="oc-amt">₹${(o.totalAmount || o.total || 0).toLocaleString('en-IN')}</span>
        </div>
        <div class="oc-toggle-btn" onclick="toggleOrderItems(this)">▸ View Items</div>
        <div class="oc-items-list" style="display:none">${itemsHTML}</div>
      </div>
    `;
  }).join('');
}

function toggleOrderItems(btn) {
  const list = btn.nextElementSibling;
  if (!list) return;
  const open = list.style.display !== 'none';
  list.style.display = open ? 'none' : 'block';
  btn.textContent = open ? '▸ View Items' : '▾ Hide Items';
}

function switchProfileTab(tab, btn) {
  document.querySelectorAll('.ptab').forEach(t => t.classList.remove('active'));
  document.querySelectorAll('.pnav-btn').forEach(b => b.classList.remove('active'));

  const t = ge(`ptab-${tab}`);
  if (t) t.classList.add('active');
  if (btn) btn.classList.add('active');

  // Re-render sub-content when switching tabs
  if (tab === 'wishlist-tab') {
    const pwl = ge('profile-wl');
    if (pwl) {
      const items = S.products.filter(p => S.wishlist.includes(p.id));
      pwl.innerHTML = items.length > 0
        ? items.map(p => cardHTML(p)).join('')
        : '<div class="empty-state"><div>♥</div><h4>No saved items yet</h4><p>Heart products you love</p></div>';
    }
  }
}

async function updateProfile() {
  if (!S.user) return;
  const name = ge('set-name')?.value?.trim();
  if (!name) { showToast('Please enter a display name', 'error'); return; }

  try {
    if (S.fbFns?.IS_CONFIGURED) {
      await S.fbFns.updateDisplayName(S.user, name);
    }
    S.user.displayName = name;
    updateAuthUI(true);
    showToast('Profile updated ✅', 'success');
  } catch (err) {
    showToast('Failed to update profile: ' + err.message, 'error');
  }
}

// =============================================
// ADMIN
// =============================================
async function renderAdmin() {
  const cnt = ge('adm-prod-count');
  if (cnt) cnt.textContent = S.products.length;
  setTxt('st-products', S.products.length);

  let allOrders = [];
  let allUsers = [];
  if (S.fbFns) {
    try { allOrders = await S.fbFns.getAllOrders(); } catch (e) { allOrders = S.orders; }
    try { allUsers = await S.fbFns.getAllUsers(); } catch (e) {}
  } else {
    allOrders = S.orders;
  }
  S._adminOrders = allOrders;
  S._adminUsers = allUsers;

  setTxt('st-orders', allOrders.length);
  setTxt('st-users', allUsers.length);
  const rev = allOrders.reduce((s, o) => s + (o.total || o.totalAmount || 0), 0);
  setTxt('st-rev', `₹${rev.toLocaleString('en-IN')}`);

  renderAdminProducts();
  renderAdminOrders();
  renderAdminCustomers();
}

function renderAdminProducts() {
  const list = ge('admin-prod-list');
  if (!list) return;
  if (S.products.length === 0) {
    list.innerHTML = '<div class="empty-state"><div>📦</div><p>No products yet</p></div>';
    return;
  }
  list.innerHTML = S.products.map(p => `
    <div class="adm-row">
      <div class="adm-img">${p.images?.[0] ? `<img src="${p.images[0]}" alt="${p.title}" loading="lazy" />` : '🎁'}</div>
      <div class="adm-info"><h4>${p.title}</h4><p>₹${p.price.toLocaleString('en-IN')} · ${p.category} · Stock: ${p.stock || 0}</p></div>
      <div class="adm-actions">
        <button class="btn-edit" onclick="adminEdit('${p.id}')">✎ Edit</button>
        <button class="btn-delete" onclick="adminDelete('${p.id}')">🗑</button>
      </div>
    </div>
  `).join('');
}

function renderAdminOrders() {
  const list = ge('admin-orders-list');
  if (!list) return;
  const orders = S._adminOrders || [];
  if (orders.length === 0) {
    list.innerHTML = '<div class="empty-state"><div>🛍</div><p>No orders yet</p></div>';
    return;
  }
  list.innerHTML = orders.map(o => {
    // Parse full order data — items field stores full JSON in new format
    let orderData = o;
    if (o.items && !Array.isArray(o.items) && typeof o.items === 'object' && o.items.items) {
      orderData = o.items;
    }
    const orderItems = Array.isArray(orderData.items) ? orderData.items : (Array.isArray(o.items) ? o.items : []);
    const date = new Date(o.createdAt || Date.now()).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' });
    const total = o.total || orderData.totalAmount || 0;
    const status = o.status || 'pending';
    const oid = o.id || o.orderId || '—';
    const uid = o.userId || 'guest';
    const addr = orderData.address || {};
    const payment = orderData.paymentMethod || '—';
    const itemsSummary = orderItems.map(i => i.title).join(', ') || '—';
    const itemsHTML = orderItems.map(i => `
      <div class="oc-item-row">
        <div class="oc-item-img">${i.images?.[0] ? `<img src="${i.images[0]}" alt="${i.title}" />` : '🎁'}</div>
        <div class="oc-item-info">
          <h5>${i.title}</h5>
          <span>Qty: ${i.qty || 1} · ₹${(i.price || 0).toLocaleString('en-IN')} each</span>
        </div>
        <div class="oc-item-price">₹${((i.price || 0) * (i.qty || 1)).toLocaleString('en-IN')}</div>
      </div>
    `).join('');
    const addrStr = addr.name ? `${addr.name}, ${addr.line1 || ''}, ${addr.city || ''} ${addr.pin || ''}` : '—';
    return `<div class="order-card" style="margin-bottom:1rem">
      <div class="oc-hd">
        <div>
          <div class="oc-id" style="font-weight:600;font-size:.84rem">Order #${oid}</div>
          <div style="font-size:.73rem;color:var(--tx3);margin-top:.15rem">${date}</div>
        </div>
        <div style="display:flex;align-items:center;gap:.5rem">
          <select class="adm-status-sel" onchange="adminUpdateStatus('${oid}',this.value)">
            <option value="pending" ${status==='pending'?'selected':''}>Pending</option>
            <option value="confirmed" ${status==='confirmed'?'selected':''}>Confirmed</option>
            <option value="shipped" ${status==='shipped'?'selected':''}>Shipped</option>
            <option value="delivered" ${status==='delivered'?'selected':''}>Delivered</option>
            <option value="cancelled" ${status==='cancelled'?'selected':''}>Cancelled</option>
          </select>
        </div>
      </div>
      <div class="adm-order-meta">
        <span>👤 ${uid}</span>
        <span>💳 ${payment === 'cod' ? 'Cash on Delivery' : 'Online'}</span>
        <span>💰 <strong>₹${total.toLocaleString('en-IN')}</strong></span>
        <span>📍 ${addrStr}</span>
      </div>
      <div class="oc-toggle-btn" onclick="toggleOrderItems(this)">▸ View ${orderItems.length} Item(s)</div>
      <div class="oc-items-list" style="display:none">${itemsHTML}</div>
    </div>`;
  }).join('');
}

function renderAdminCustomers() {
  const list = ge('admin-customers-list');
  if (!list) return;
  const users = S._adminUsers || [];
  if (users.length === 0) {
    list.innerHTML = '<div class="empty-state"><div>👥</div><p>No customers yet</p></div>';
    return;
  }
  list.innerHTML = `
    <div class="adm-cust-row adm-cust-header"><div>Name</div><div>Email</div><div>Role</div><div>ID</div></div>
    ${users.map(u => `<div class="adm-cust-row">
      <div class="adm-cust-name">${u.displayName || '—'}</div>
      <div class="adm-cust-email">${u.email || '—'}</div>
      <div><span class="adm-cust-badge ${u.isAdmin ? 'admin' : 'user'}">${u.isAdmin ? 'Admin' : 'User'}</span></div>
      <div style="font-size:.73rem;color:var(--tx3)">${u.uid || '—'}</div>
    </div>`).join('')}`;
}

function switchAdminTab(tab, btn) {
  document.querySelectorAll('.adm-panel').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('.admin-tab').forEach(b => b.classList.remove('active'));
  const panel = ge(`adm-panel-${tab}`);
  if (panel) panel.classList.add('active');
  if (btn) btn.classList.add('active');
}

async function adminUpdateStatus(orderId, newStatus) {
  if (!S.fbFns) { showToast('Backend not connected', 'error'); return; }
  try {
    await S.fbFns.updateOrderStatus(orderId, newStatus);
    showToast(`Order ${orderId} → ${newStatus}`, 'success');
    const order = (S._adminOrders || []).find(o => (o.id || o.orderId) === orderId);
    if (order) order.status = newStatus;
  } catch (e) {
    showToast('Failed to update status', 'error');
  }
}

function adminEdit(id) {
  const p = S.products.find(x => x.id === id);
  if (!p) return;

  const fields = {
    'adm-id':      p.id,
    'adm-title':   p.title,
    'adm-price':   p.price,
    'adm-orig':    p.originalPrice || '',
    'adm-cat':     p.category,
    'adm-occ':     p.occasion || 'birthday',
    'adm-rating':  p.rating,
    'adm-stock':   p.stock || 0,
    'adm-reviews': p.reviews || 0,
    'adm-desc':    p.description,
    'adm-img':     p.images?.[0] || '',
    'adm-tags':    (p.tags || []).join(', '),
  };

  Object.entries(fields).forEach(([fid, val]) => {
    const el = ge(fid);
    if (el) el.value = val;
  });

  const isNew = ge('adm-isnew');
  if (isNew) isNew.checked = !!p.isNew;

  // Show preview and switch to products tab
  adminPreviewImage();
  switchAdminTab('products', ge('adm-tab-products'));
  window.scrollTo({ top: 0, behavior: 'smooth' });
  showToast('Product loaded for editing', 'info');
}

async function adminSave() {
  const title = ge('adm-title')?.value?.trim();
  const price = parseFloat(ge('adm-price')?.value);

  if (!title)      { showToast('Product title is required', 'error'); return; }
  if (!price || price <= 0) { showToast('A valid price is required', 'error'); return; }

  const id = ge('adm-id')?.value || ('p' + Date.now());
  const origVal = parseFloat(ge('adm-orig')?.value);

  const product = {
    id,
    title,
    price,
    originalPrice: origVal > price ? origVal : null,
    category:      ge('adm-cat')?.value     || 'her',
    occasion:      ge('adm-occ')?.value     || 'birthday',
    rating:        parseFloat(ge('adm-rating')?.value) || 4.5,
    stock:         parseInt(ge('adm-stock')?.value)    || 0,
    reviews:       parseInt(ge('adm-reviews')?.value)  || 0,
    description:   ge('adm-desc')?.value    || '',
    images:        [ge('adm-img')?.value].filter(Boolean),
    tags:          (ge('adm-tags')?.value || '').split(',').map(t => t.trim()).filter(Boolean),
    isNew:         ge('adm-isnew')?.checked || false,
  };

  if (S.fbFns) {
    try { await S.fbFns.saveProduct(product); } catch (e) {}
  }

  const idx = S.products.findIndex(x => x.id === id);
  if (idx !== -1) {
    S.products[idx] = product;
    showToast('Product updated ✅', 'success');
  } else {
    S.products.unshift(product);
    showToast('Product added ✅', 'success');
  }

  S.filtered = [...S.products];
  adminClear();
  renderAdmin();
}

async function adminDelete(id) {
  if (!confirm('Are you sure you want to delete this product?')) return;

  if (S.fbFns) {
    try { await S.fbFns.deleteProduct(id); } catch (e) {}
  }

  S.products = S.products.filter(x => x.id !== id);
  S.filtered  = S.filtered.filter(x => x.id !== id);
  S.cart      = S.cart.filter(i => i.id !== id);
  saveCart();
  updateBadges();
  showToast('Product deleted', 'info');
  renderAdmin();
}

function adminClear() {
  ['adm-id', 'adm-title', 'adm-price', 'adm-orig', 'adm-rating',
   'adm-stock', 'adm-reviews', 'adm-desc', 'adm-img', 'adm-tags']
    .forEach(id => { const el = ge(id); if (el) el.value = ''; });
  const isNew = ge('adm-isnew');
  if (isNew) isNew.checked = false;
  const preview = ge('adm-img-preview');
  if (preview) preview.innerHTML = 'No image';
}

function adminPreviewImage() {
  const url = ge('adm-img')?.value?.trim();
  const preview = ge('adm-img-preview');
  if (!preview) return;
  if (url && (url.startsWith('http://') || url.startsWith('https://'))) {
    preview.innerHTML = `<img src="${url}" alt="Preview" onerror="this.parentElement.innerHTML='Invalid URL'" />`;
  } else {
    preview.innerHTML = 'No image';
  }
}

// =============================================
// NEWSLETTER
// =============================================
async function subscribeNL(e) {
  e.preventDefault();
  const email = ge('nl-email')?.value?.trim();
  if (!email || !email.includes('@')) {
    showToast('Please enter a valid email address', 'error');
    return;
  }
  if (S.fbFns) {
    try { await S.fbFns.subscribeToNewsletter(email); } catch (err) {}
  }
  showToast('🎉 Subscribed successfully! Welcome to the circle.', 'success');
  e.target.reset();
}

// =============================================
// THEME
// =============================================
function initTheme() {
  S.darkMode = localStorage.getItem('lv_theme') === 'dark';
  applyTheme();
}

function toggleTheme() {
  S.darkMode = !S.darkMode;
  localStorage.setItem('lv_theme', S.darkMode ? 'dark' : 'light');
  applyTheme();
}

function applyTheme() {
  document.documentElement.setAttribute('data-theme', S.darkMode ? 'dark' : 'light');
  const moon = ge('theme-icon-moon');
  const sun  = ge('theme-icon-sun');
  if (moon) moon.style.display = S.darkMode ? 'none' : 'block';
  if (sun)  sun.style.display  = S.darkMode ? 'block' : 'none';
}

// =============================================
// BADGES & HELPERS
// =============================================
function updateBadges() {
  const cartCount = S.cart.reduce((s, i) => s + i.qty, 0);
  const wlCount   = S.wishlist.length;

  const cb = ge('cart-badge');
  if (cb) { cb.textContent = cartCount; cb.style.display = cartCount > 0 ? 'flex' : 'none'; }

  const wb = ge('wl-badge');
  if (wb) { wb.textContent = wlCount; wb.style.display = wlCount > 0 ? 'flex' : 'none'; }
}

function showToast(msg, type = 'success', duration = 3500) {
  const cont = ge('toast-container');
  if (!cont) return;
  const toast = document.createElement('div');
  toast.className = `toast ${type}`;
  toast.innerHTML = `<span>${msg}</span>`;
  cont.appendChild(toast);
  setTimeout(() => {
    toast.classList.add('out');
    setTimeout(() => toast.remove(), 350);
  }, duration);
}

// Exposed globally for footer / inline HTML
function showToastGlobal(msg, type) { showToast(msg, type); }

// ── DOM Helpers ──
function ge(id)        { return document.getElementById(id); }
function v(id)         { return ge(id)?.value?.trim() || ''; }
function setTxt(id, t) { const el = ge(id); if (el) el.textContent = t; }

// =============================================
// GLOBAL SCOPE (for inline onclick handlers)
// =============================================
Object.assign(window, {
  // Navigation
  showPage, showAllProducts, filterCat, filterOcc, scrollToEl,

  // Auth
  handleAuthClick, openAuth, closeAuth, switchAuthTab,
  googleSignIn, loginUser, registerUser, logoutUser,
  togglePw, toggleUserMenu, closeUserMenu,

  // Search
  handleSearch, clearSearch, showSearchDrop, hideSearchDrop, quickSearch,

  // Cart & Drawer
  toggleCart, openCartDrawer, closeCartDrawer,
  addToCart, removeFromCart, updateCartQty,
  applyCoupon, goToCheckout,

  // Products
  openProduct, openQV, closeQV, switchImg, changeQty,
  addToCartFromDetail, buyNow,

  // Wishlist
  toggleWL,

  // Checkout
  placeOrder,

  // Filters
  applyFilters, clearFilters, updatePriceLabel,
  toggleFilters, closeFiltersPanel,

  // Profile
  switchProfileTab, updateProfile, renderOrders, toggleOrderItems,

  // Admin
  adminEdit, adminSave, adminDelete, adminClear, renderAdmin,
  switchAdminTab, adminUpdateStatus, adminPreviewImage,

  // Misc
  toggleTheme, toggleMobileMenu, subscribeNL, showToastGlobal,
});