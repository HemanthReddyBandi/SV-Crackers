// Single-page e-commerce app logic for Sri Venkateswara Crackers
(function () {
  // ---------- Data ----------
  /** Product catalog */
  const products = [
    { id: '4-laxmi', name: '4&quot;laxmi', price: 400 },
    { id: '4-dlx', name: '4&quot;delux', price: 450 },
    { id: '4-hold', name: '4&quot;hold', price: 450 },
    { id: '3-half-bomb', name: '3&frac12;laxmi', price: 300 },
     { id: 'kurvi-2-3-4', name: '2&frac34; kurvi', price: 200 },
    { id: '2-sound', name: '2 sound', price: 450 },
    { id: 'kumki', name: 'kumki', price: 400 },
    { id: 'jallikattu', name: 'jallikattu', price:500 },
    { id: 'bahubhali', name: 'bahubhali', price:600 },
    { id: 'lion dk', name: 'lion delux', price: 650},
    { id: 'lion gun', name: 'lion hum', price: 800},
    { id: '6 -dlx', name: '6&quot;delux', price:500 },
    { id: '1/4 p-bomb', name: '&frac14;paper bomb', price:150 },
    { id: '1/2 p-bomb', name: '&frac12;paper bomb', price:250 },
    { id: '1kg-p-bomb', name: '1kg paper bomb', price:450 },
    { id: 'color bomb', name: 'color bomb', price:600 },
    { id: 'f-p drig', name: 'flower pot big', price:200 },
    { id: 'f-p-spl', name: 'flower pot special', price:300 },
    { id: 'f-p-dlx', name: 'flower pot delux(5)', price:500 },
    { id: 'f-p-c.kotti', name: 'flower pot colour kotti', price:450 },
    { id: 'f-p s.dlx', name: 'flower pot special delux ', price:250 },
    { id: 'c.kotti dlx', name: 'colour kotti delux', price:450 },
    { id: 'g.ch.ashoka', name: 'ground chakra ashoka', price:150 },
    { id: 'g.ch.dlx', name: 'ground chakra delux', price:250 },
    { id: 'g.ch.spl', name: 'ground chakra special', price:170 },
    { id: 'g.ch.drig', name: 'ground chakra big', price:150 },
    { id: '1k', name: '1k', price:400 },
    { id: '2k', name: '2k', price:1000 },
    { id: '5k', name: '5k', price: 1500},
    { id: 'fox star', name: 'fox star', price:350 },
    { id: '2.s.r', name: '2. sound rocket', price:200 },
    { id: '3.s.r', name: '3.sound rocket', price:250 },
    { id: 'L.R', name: 'Lunki Rocket', price: 180},
    { id: '7-pencil', name: '7&quot;pencil', price:90 },
    { id: '12-pencil', name: '12&quot;pencil', price:150 },
    { id: '1 -1/2.t.star', name: '1&frac12;Twinkling star', price:70 },
    { id: '4-t.star', name: '4&quot;twinkling star', price:150 },
    { id: 'c.smoke', name: 'colour smoke', price:300 },
    { id: 'b.stone', name: 'big stone', price: 30},
    { id: '4x4 wheel', name: '4x4 wheel ', price:350 },
    { id: 'disco wheel ', name: 'disco wheel ', price: 300 },
    { id: 'r.prigihi', name: 'Red brigile', price:70 },
    { id: 'stripped prigihi', name: 'stripped brigile', price: 75 },
    { id: '10m rle', name: '10m blue', price:70 },
    { id: '10m cals', name: '10m colour', price:90 },
    { id: '10m green', name: '10m green', price:80 },
    { id: '12m green', name: '12m green ', price:90 },
    { id: '15m ble', name: '15m blue', price:100 },
    { id: '15m gater red', name: '15m red', price:120 },
    { id: '30m ble', name: '30m blue', price:100 },
    { id: '30m cals', name: '30m colour', price: 110},
    { id: '50m ble', name: '50m blue', price:300 },
    { id: '50m cals', name: '50m colour', price:330 },
    { id: 'pogo shower', name: 'pogo shower', price:450 },
    { id: '30 shots', name: '30 shots', price:600 },
    { id: '60 shots', name: '60 shots', price:1300 },
    { id: '12 shots', name: '12 shots', price:300 },
    { id: '7 shots', name: '7 shots', price:220 },
    { id: '2-fancy', name: '2&quot;fancy', price:300 },
    { id: '4-fancy', name: '4&quot;fancy', price:600 },
    { id: '3-1/2 fay', name: '3&frac12; fancy', price:450 },
    { id: 'chotta fay', name: 'chotta fancy', price:150 },
    { id: '3 pcs fay', name: '3 pcs fancy', price:500 },
    { id: 'white horse', name: 'white horse', price:450 },
    { id: '2-3/4 fay', name: '2&frac34;fancy', price:1000 },
    { id: '25 shots', name: '25 shots', price:450 },
    { id: 'lender 3 in 1', name: 'wonder 3 in 1', price:500 },
    //redefine




    { id: 'live chakkar', name: 'live chakkar ', price:300 },
    { id: 'kittar', name: 'guitar ', price:500 },
    { id: 'queen shower', name: 'queen showers(2pcs)', price:450 },
    { id: 'm.bank', name: 'money bank', price:360 },
    { id: 'pentagon', name: 'pentagon', price:400 },
    { id: 'peacock', name: 'peacock', price:450 },
    { id: 'a.t.bomb', name: 'Atom Bomb', price:130 },
    { id: 'hydro bomb', name: 'Hydro Bomb', price:170 },
    { id: 'king of key', name: 'king of king ', price:200 },
    { id: 'classic bomb', name: 'Classic Bomb', price:250 },
    { id: 'bullet', name: 'Bullet', price:100 },
    { id: 'agni bomb', name: 'Agni bomb', price:400 },
    { id: 'digital bomb', name: 'digital bomb ', price:500 },
    { id: '90nats', name: '90 watts', price:400 },
    { id: '40-item-gift box', name: '40-item -gift-box', price:500 },
    { id: '50 items-gift-box', name: '50-items-gift-box', price:620 },
    {id:'7cm-electric',name:'7cm electric',price:60},
    {id:'7cm-colour',name:'7cm color',price:60},
    {id:'7cm red',name:'7cm red',price:65},
    {id:'f/p ashoka',name:'Flowerpot  Ashoka',price:300},
    {id:'cylinder ',name:'cylinder',price:600},
    {id:'car',name:'car',price:900},
    {id:'75cm-parklos',name:'75cm-parklos',price:900},
    {id:'100 wala',name:'100 wala',price:150},
    {id:'thrilden bomb',name:'thrilden bomb',price:800},
    {id:'5-hulk',name:'5&quot;hulk',price:150},
    {id:'100dlx',name:'100 delux',price:450},
    {id:'50 dlx',name:'50 delux',price:270},
    {id:'spinner dlx',name:'spinner delux',price:400},
    {id:'14p',name:'14p',price:350},
    {id:'34p',name:'34p',price:400},
    {id:'28hint',name:'28 hint',price:40},
   
    
   
  ];

  /** In-memory cart (persisted in session) */
  const cart = []; // { id, name, price, img, qty }
  const STORAGE_KEY = 'svc_cart_v1';
  function saveCart() {
    try { sessionStorage.setItem(STORAGE_KEY, JSON.stringify(cart)); } catch {}
  }
  function loadCart() {
    try {
      const raw = sessionStorage.getItem(STORAGE_KEY);
      if (!raw) return;
      const items = JSON.parse(raw);
      if (Array.isArray(items)) {
        cart.splice(0, cart.length, ...items);
      }
    } catch {}
  }

  // ---------- Helpers ----------
  const qs = (sel, el = document) => el.querySelector(sel);
  const qsa = (sel, el = document) => Array.from(el.querySelectorAll(sel));
  const currency = (n) => `₹${Number(n || 0).toLocaleString('en-IN')}`;

  function findProduct(pid) { return products.find(p => p.id === pid); }
  function findCartItem(pid) { return cart.find(i => i.id === pid); }

  // ---------- Elements ----------
  const cartCountEl = qs('#cartCount');
  const sections = {
    home: qs('#home'),
    products: qs('#products'),
    cart: qs('#cart'),
  };
  const productGrid = qs('#productGrid');
  const searchInput = qs('#search');
  const cartTable = qs('#cartTable tbody');
  const cartEmpty = qs('#cartEmpty');
  const grandTotalEl = qs('#grandTotal');
  const printBtn = qs('#printBtn');
  const printArea = qs('#printArea');
  const goToCartFab = qs('#goToCartFab');

  // ---------- Router ----------
  function setActiveLink(route) {
    qsa('.nav-link').forEach(a => a.classList.toggle('active', a.dataset.route === route));
  }

  function showSection(route) {
    Object.entries(sections).forEach(([key, el]) => {
      if (!el) return;
      el.classList.toggle('active', key === route);
    });
    setActiveLink(route);
    window.scrollTo({ top: 0, behavior: 'smooth' });
    // Render on demand
    if (route === 'products') ensureProductsRendered();
    if (route === 'cart') renderCart();
  }

  // Intercept nav and route links
  qsa('[data-route]')
    .forEach(link => link.addEventListener('click', (e) => {
      e.preventDefault();
      const route = link.dataset.route;
      if (route) showSection(route);
    }));

  // Also intercept hero button with .route-link (uses data-route)
  qsa('.route-link').forEach(link => link.addEventListener('click', (e) => {
    e.preventDefault();
    const route = link.dataset.route;
    if (route) showSection(route);
  }));

  // ---------- Products ---------- 
  let productsRendered = false;
  function ensureProductsRendered() {
    if (productsRendered || !productGrid) return;
    productGrid.innerHTML = products.map(p => `
      <article class="card" data-id="${p.id}" data-name="${p.name.toLowerCase()}">
        <div class="card-body">
          <h3 class="title">${p.name}</h3>
          <div class="card-price">${currency(p.price)}</div>
          <div class="controls">
            <input type="number" class="qty" min="1" value="1" aria-label="Quantity for ${p.name}" />
            <button class="btn add">Add to Cart</button>
          </div>
        </div>
      </article>
    `).join('');
    productsRendered = true;
  }

  // Delegate Add to Cart clicks
  if (productGrid) {
    productGrid.addEventListener('click', (e) => {
      const btn = e.target.closest('.add');
      if (!btn) return;
      const card = btn.closest('.card');
      const pid = card?.dataset?.id;
      const qtyInput = card?.querySelector('.qty');
      const qty = Math.max(1, Number(qtyInput?.value) || 1);
      addToCart(pid, qty);
      // Feedback
      btn.textContent = 'Added!';
      setTimeout(() => (btn.textContent = 'Add to Cart'), 700);
      // Show/enable FAB after last add
      if (goToCartFab) {
        goToCartFab.disabled = false;
        goToCartFab.classList.add('show');
      }
    });
  }

  // Search filter
  if (searchInput && productGrid) {
    searchInput.addEventListener('input', () => {
      const term = searchInput.value.trim().toLowerCase();
      qsa('.card', productGrid).forEach(card => {
        const name = card.dataset.name || '';
        card.style.display = name.includes(term) ? '' : 'none';
      });
    });
  }

  // ---------- Cart ----------
  function updateCartCount() {
    const totalQty = cart.reduce((sum, i) => sum + i.qty, 0);
    if (cartCountEl) cartCountEl.textContent = String(totalQty);
    // toggle FAB visibility and disabled state
    if (goToCartFab) {
      if (totalQty > 0) {
        goToCartFab.disabled = false;
        goToCartFab.classList.add('show');
      } else {
        goToCartFab.disabled = true;
        goToCartFab.classList.remove('show');
      }
    }
  }

  function addToCart(pid, qty) {
    const product = findProduct(pid);
    if (!product) return;
    const existing = findCartItem(pid);
    const addQty = Math.max(1, Number(qty) || 1);
    if (existing) {
      existing.qty += addQty;
    } else {
      cart.push({ id: product.id, name: product.name, price: product.price, qty: addQty });
    }
    updateCartCount();
    saveCart();
  }

  function removeFromCart(pid) {
    const idx = cart.findIndex(i => i.id === pid);
    if (idx >= 0) {
      cart.splice(idx, 1);
      saveCart();
    }
  }

  function setQty(pid, qty) {
    const item = findCartItem(pid);
    if (!item) return;
    const n = Number(qty);
    if (!isFinite(n) || n < 0) return; // ignore invalid
    if (n === 0) {
      removeFromCart(pid);
    } else {
      item.qty = Math.floor(n);
      saveCart();
    }
  }

  function calcGrandTotal() {
    return cart.reduce((sum, i) => sum + i.qty * i.price, 0);
  }

  function renderCart() {
    if (!cartTable || !cartEmpty || !grandTotalEl) return;

    if (cart.length === 0) {
      cartEmpty.style.display = '';
      cartTable.innerHTML = '';
      grandTotalEl.textContent = currency(0);
      return;
    }

    cartEmpty.style.display = 'none';

    cartTable.innerHTML = cart.map(i => `
      <tr data-id="${i.id}">
        <td>${i.name}</td>
        <td>
          <input type="number" class="cart-qty" min="1" value="${i.qty}" aria-label="Quantity for ${i.name}" />
        </td>
        <td>${currency(i.price)}</td>
        <td>${currency(i.price * i.qty)}</td>
        <td class="hide-sm"><button class="remove-btn" title="Remove">Remove</button></td>
      </tr>
    `).join('');

    grandTotalEl.textContent = currency(calcGrandTotal());
  }

  // Delegate cart table interactions
  if (cartTable) {
    cartTable.addEventListener('input', (e) => {
      const input = e.target.closest('.cart-qty');
      if (!input) return;
      const row = input.closest('tr');
      const pid = row?.dataset?.id;
      setQty(pid, input.value);
      updateCartCount();
      renderCart();
    });

    cartTable.addEventListener('click', (e) => {
      const btn = e.target.closest('.remove-btn');
      if (!btn) return;
      const row = btn.closest('tr');
      const pid = row?.dataset?.id;
      removeFromCart(pid);
      updateCartCount();
      renderCart();
    });
  }

  // ---------- Print ----------
  function buildPrintHTML() {
    const rows = cart.map(i => `
      <tr>
        <td class="col-item">${i.name}</td>
        <td class="col-qty">${i.qty}</td>
        <td class="col-price">${currency(i.price)}</td>
        <td class="col-total">${currency(i.price * i.qty)}</td>
      </tr>
    `).join('');

    const total = currency(calcGrandTotal());

    return `
      <div class="inv">
        <style>
          .inv { font-family: Inter, Arial, sans-serif; color: #111827; }
          .inv-header { text-align: left; margin-bottom: 5px; margin-top: 0.5cm; }
          .inv-footer { text-align: center; margin-top: 10px; font-size: 14px; color: #374151; }
          .inv-title { margin: 0; font-size: 28px; font-weight: 800; color: #f59e0b; }
          .inv-meta { margin: 2px 0; font-size: 12px; color: #374151; }
          .inv-date { margin-top: 6px; font-size: 11px; color: #6b7280; }

          .inv-table { width: 100%; border-collapse: collapse; table-layout: fixed; }
          .inv-table th, .inv-table td { border-bottom: 1px solid #e5e7eb; padding: 6px 8px; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
          .inv-table thead th { font-size: 12px; color: #374151; font-weight: 700; }

          .col-img { width: 56px; text-align: left; }
          .col-item { width: auto; }
          .col-qty { width: 70px; text-align: center; }
          .col-price, .col-total { width: 110px; text-align: right; }

          .thumb { width: 48px; height: 36px; object-fit: cover; border-radius: 6px; }

          tfoot td { border-top: 1px solid #e5e7eb; font-weight: 700; }
          .grand-label { text-align: right; }
          .grand-value { text-align: right; }

          @page { margin: 16mm; }
        </style>

        <div class="inv-header">
          <h1 class="inv-title">Sri Venkateswara Crackers</h1>
          <div class="inv-meta">Proprietor: P. NAGOOR</div>
          <div class="inv-meta">Location: Near konangipalli, Pachikapallam, Tirupathi Road</div>
          <div class="inv-meta">Mobile: +91 9177814241, 6303006051</div>
          <div class="inv-date">${new Date().toLocaleString()}</div>
        </div>

        <table class="inv-table" aria-label="Invoice items">
          <thead>
            <tr>
              <th class="col-item">Item</th>
              <th class="col-qty">Qty</th>
              <th class="col-price">Price</th>
              <th class="col-total">Total</th>
            </tr>
          </thead>
          <tbody>
            ${rows}
          </tbody>
          <tfoot>
            <tr>
              <td colspan="3" class="grand-label">Grand Total</td>
              <td class="grand-value">${total}</td>
            </tr>
          </tfoot>
        </table>
      </div>
    `;
  }

  if (printBtn && printArea) {
    printBtn.addEventListener('click', () => {
      if (cart.length === 0) { alert('Your cart is empty.'); return; }
      printArea.innerHTML = buildPrintHTML();

      // For faster rendering, remove animations and shadows before print
      const style = document.createElement('style');
      style.textContent = `
        * {
          transition: none !important;
          box-shadow: none !important;
          text-shadow: none !important;
          filter: none !important;
          animation: none !important;
        }
        .card, .btn, .fab {
          box-shadow: none !important;
          border: none !important;
        }
        #printArea img.thumb {
          width: 60px !important;
          height: auto !important;
          object-fit: cover !important;
        }
      `;
      document.head.appendChild(style);

      window.print();

      // Clean up the style after print
      window.onafterprint = () => {
        document.head.removeChild(style);
      };
    });
  }

  // Clear Cart button
  const clearCartBtn = document.getElementById('clearCartBtn');
  if (clearCartBtn) {
    clearCartBtn.addEventListener('click', () => {
      if (cart.length === 0) {
        alert('Your cart is already empty.');
        return;
      }
      if (confirm('Are you sure you want to clear the entire cart?')) {
        cart.length = 0; // Clear array
        saveCart();
        updateCartCount();
        renderCart();
      }
    });
  }

  // FAB click -> route to cart
  if (goToCartFab) {
    goToCartFab.addEventListener('click', (e) => {
      e.preventDefault();
      if (!goToCartFab.disabled) showSection('cart');
    });
  }

  // ---------- Init ----------
  loadCart();
  updateCartCount();
  renderCart();
  // Default route = home
  showSection('home');
})();