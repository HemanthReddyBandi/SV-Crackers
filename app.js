// Single-page e-commerce app logic for Sri Venkateswara Crackers
(function () {
  // ---------- Data ----------
  /** Product catalog */
  const products = [
    { id: '4-laxmi', name: '4"laxmi', price: 400 },
    { id: '4-dlx', name: '4"delux', price: 450 },
    { id: '4-hold', name: '4"hold', price: 450 },
    { id: '3-half-bomb', name: '3½laxmi', price: 300 },
     { id: 'kurvi-2-3-4', name: '2¾ kurvi', price: 200 },
    { id: '2-sound', name: '2 sound', price: 450 },
    { id: 'kumki', name: 'kumki', price: 400 },
    { id: 'jallikattu', name: 'jallikattu', price:500 },
    { id: 'bahubhali', name: 'bahubhali', price:600 },
    { id: 'lion dk', name: 'lion delux', price: 650},
    { id: 'lion gun', name: 'lion hum', price: 800},
    { id: '6 -dlx', name: '6"delux', price:500 },
    { id: '1/4 p-bomb', name: '¼paper bomb', price:150 },
    { id: '1/2 p-bomb', name: '½paper bomb', price:250 },
    { id: '1kg-p-bomb', name: '1kg paper bomb', price:450 },
    { id: 'color bomb', name: 'color bomb', price:90 },
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
    { id: '7-pencil', name: '7"pencil', price:90 },
    { id: '12-pencil', name: '12"pencil', price:150 },
    { id: '1 -1/2.t.star', name: '1½Twinkling star', price:70 },
    { id: '4-t.star', name: '4"twinkling star', price:150 },
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
    { id: '2-fancy', name: '2"fancy', price:300 },
    { id: '4-fancy', name: '4"fancy', price:600 },
    { id: '3-1/2 fay', name: '3½ fancy', price:450 },
    { id: 'chotta fay', name: 'chotta fancy', price:150 },
    { id: '3 pcs fay', name: '3 pcs fancy', price:500 },
    { id: 'white horse', name: 'white horse', price:450 },
    { id: '2-3/4 fay', name: '2¾fancy', price:1000 },
    { id: '25 shots', name: '25 shots', price:450 },
    { id: 'lender 3 in 1', name: 'wonder 3 in 1', price:500 },
    //redefine




    { id: 'live chakkar', name: 'white chakkara ', price:300 },
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
    { id: '90watts', name: '90 watts', price:400 },
    {id:'7cm-electric',name:'7cm electric',price:60},
    {id:'7cm-colour',name:'7cm color',price:60},
    {id:'7cm red',name:'7cm red',price:65},
    {id:'f/p ashoka',name:'Flowerpot  Ashoka',price:300},
    {id:'cylinder ',name:'cylinder',price:600},
    {id:'car',name:'car',price:900},
    {id:'75cm-parklos',name:'75cm-parklers',price:900},
    {id:'100 wala',name:'100 wala',price:150},
    {id:'thrilden bomb',name:'thriller bomb',price:800},
    {id:'5-hulk',name:'5"hulk',price:150},
    {id:'100dlx',name:'100 delux',price:450},
    {id:'50 dlx',name:'50 delux',price:270},
    {id:'spinner dlx',name:'spinner delux',price:400},
    {id:'1up',name:'1 up',price:350},
    {id:'3up',name:'3 up',price:400},
    {id:'28hint',name:'28 hint',price:40},


  ];

  /** In-memory cart (persisted in session) */
  const cart = []; // { id, name, price, img, qty }
  const STORAGE_KEY = 'svc_cart_v1';
  const DISCOUNT_STORAGE_KEY = 'svc_discount_v1';

  // Discount state
  let discount = {
    type: 'amount', // 'amount' or 'percentage'
    value: 0,
    amount: 0,
    isApplied: false
  };
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
      // Don't remove item, just set quantity to 0
      item.qty = 0;
      saveCart();
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
      updateDiscountDisplay();
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
    updateDiscountDisplay();
  }

  // Improved input handler that doesn't lose focus
  let inputTimeout;
  function handleQuantityChange(pid, value) {
    clearTimeout(inputTimeout);
    inputTimeout = setTimeout(() => {
      setQty(pid, value);
      updateCartCount();
      // Update both individual item totals and grand total
      updateCartTotals();
      updateItemTotal(pid);
    }, 300); // Wait 300ms after user stops typing
  }

  function updateCartTotals() {
    if (!grandTotalEl) return;
    grandTotalEl.textContent = currency(calcGrandTotal());
    updateDiscountDisplay();
  }

  function updateItemTotal(pid) {
    const item = findCartItem(pid);
    if (!item) return;

    // Find the cart row for this item
    const cartRows = cartTable?.querySelectorAll('tr');
    if (!cartRows) return;

    for (let row of cartRows) {
      if (row.dataset.id === pid) {
        // Update the total column for this row
        const totalCell = row.querySelector('td:nth-child(4)'); // 4th column is total
        if (totalCell) {
          totalCell.textContent = currency(item.price * item.qty);
        }
        break;
      }
    }
  }

  // ---------- Discount Functions ----------
  function calculateDiscount(grandTotal) {
    if (!discount.isApplied || discount.value <= 0) {
      discount.amount = 0;
      return 0;
    }

    if (discount.type === 'percentage') {
      discount.amount = (grandTotal * discount.value) / 100;
    } else {
      discount.amount = discount.value;
    }

    return discount.amount;
  }

  function updateDiscountDisplay() {
    const discountRow = qs('#discountRow');
    const discountAmountEl = qs('#discountAmount');
    const finalTotalEl = qs('#finalTotal');

    if (!discountRow || !discountAmountEl || !finalTotalEl) return;

    const grandTotal = calcGrandTotal();

    if (discount.isApplied && discount.amount > 0) {
      discountRow.style.display = '';
      discountAmountEl.textContent = currency(discount.amount);
      const finalTotal = grandTotal - discount.amount;
      finalTotalEl.textContent = currency(finalTotal);
    } else {
      discountRow.style.display = 'none';
      finalTotalEl.textContent = currency(grandTotal);
    }
  }

  function applyDiscount() {
    const discountValueInput = qs('#discountValue');
    if (!discountValueInput) return;

    const value = parseFloat(discountValueInput.value);
    if (isNaN(value) || value < 0) {
      alert('Please enter a valid discount value.');
      return;
    }

    discount.value = value;
    discount.isApplied = true;

    // Calculate the discount amount
    const grandTotal = calcGrandTotal();
    calculateDiscount(grandTotal);

    // Save discount to session storage
    try {
      sessionStorage.setItem(DISCOUNT_STORAGE_KEY, JSON.stringify(discount));
    } catch (e) {
      console.warn('Could not save discount to session storage:', e);
    }

    updateDiscountDisplay();
  }

  function removeDiscount() {
    discount.value = 0;
    discount.amount = 0;
    discount.isApplied = false;

    // Clear discount from session storage
    try {
      sessionStorage.removeItem(DISCOUNT_STORAGE_KEY);
    } catch (e) {
      console.warn('Could not remove discount from session storage:', e);
    }

    updateDiscountDisplay();
  }

  function loadDiscount() {
    try {
      const raw = sessionStorage.getItem(DISCOUNT_STORAGE_KEY);
      if (!raw) return;
      const savedDiscount = JSON.parse(raw);
      if (savedDiscount && typeof savedDiscount === 'object') {
        discount = { ...discount, ...savedDiscount };
      }
    } catch (e) {
      console.warn('Could not load discount from session storage:', e);
    }
  }

  // Delegate cart table interactions
  if (cartTable) {
    cartTable.addEventListener('input', (e) => {
      const input = e.target.closest('.cart-qty');
      if (!input) return;
      const row = input.closest('tr');
      const pid = row?.dataset?.id;
      // Use improved handler that doesn't lose focus
      handleQuantityChange(pid, input.value);
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

    const grandTotal = calcGrandTotal();
    const discountAmount = calculateDiscount(grandTotal);
    const finalTotal = grandTotal - discountAmount;

    const total = currency(grandTotal);
    const discountRow = discountAmount > 0 ? `
      <tr>
        <td colspan="3" class="grand-label">Discount</td>
        <td class="grand-value">${currency(discountAmount)}</td>
      </tr>
    ` : '';

    const finalTotalRow = `
      <tr>
        <td colspan="3" class="grand-label">Final Total</td>
        <td class="grand-value">${currency(finalTotal)}</td>
      </tr>
    `;

    return `
      <div class="inv">
        <style>
          .inv {
            font-family: Arial, sans-serif;
            color: #000;
            max-width: 100%;
            margin: 0;
            padding: 20px;
          }
          .inv-header {
            text-align: center;
            margin-bottom: 20px;
            border-bottom: 2px solid #0b0b0aff;
            padding-bottom: 10px;
          }
          .inv-title {
            margin: 0 0 5px 0;
            font-size: 24px;
            font-weight: bold;
            color: #f59300f2;
          }
          .inv-meta {
            margin: 2px 0;
            font-size: 12px;
            color: #333;
          }
          .inv-date {
            margin-top: 10px;
            font-size: 11px;
            color: #666;
          }

          .inv-table {
            width: 100%;
            border-collapse: collapse;
            table-layout: fixed;
            margin: 20px 0;
          }
          .inv-table th, .inv-table td {
            border: 1px solid #000;
            padding: 8px;
            text-align: left;
            font-size: 12px;
          }
          .inv-table thead th {
            background-color: #f5f5f5;
            font-weight: bold;
            text-align: center;
          }

          .col-item { width: 50%; }
          .col-qty { width: 15%; text-align: center; }
          .col-price, .col-total { width: 17.5%; text-align: right; }

          tfoot td {
            border-top: 2px solid #000;
            font-weight: bold;
            background-color: #f9f9f9;
          }
          .grand-label { text-align: right; }
          .grand-value { text-align: right; }

          @page {
            margin: 0;
            size: A4;
          }

          @media print {
            body * {
              visibility: hidden;
            }
            .inv, .inv * {
              visibility: visible;
            }
            .inv {
              position: absolute;
              left: 0;
              top: 0;
              padding: 10mm;
              width: 100%;
              box-sizing: border-box;
            }
            .inv-header { margin-bottom: 10px; }
          }
        </style>

        <div class="inv-header">
          <h1 class="inv-title">SRI VENKATESWARA CRACKERS</h1>
          <div class="inv-meta">Proprietor: P. NAGOOR</div>
          <div class="inv-meta">Near konangipalli, Pachikapallam, Tirupathi Road</div>
          <div class="inv-meta">Mobile: +91 9177814241, 6303006051</div>
          <div class="inv-date">Date: ${new Date().toLocaleDateString('en-IN', { day: '2-digit', month: '2-digit', year: 'numeric' })}</div>
        </div>

        <table class="inv-table" aria-label="Invoice items">
          <thead>
            <tr>
              <th class="col-item">Item Description</th>
              <th class="col-qty">Qty</th>
              <th class="col-price">Rate</th>
              <th class="col-total">Amount</th>
            </tr>
          </thead>
          <tbody>
            ${rows}
          </tbody>
          <tfoot>
            <tr>
              <td colspan="3" class="grand-label">Subtotal</td>
              <td class="grand-value">${total}</td>
            </tr>
            ${discountRow}
            <tr>
              <td colspan="3" class="grand-label">Final Total</td>
              <td class="grand-value">${currency(finalTotal)}</td>
            </tr>
          </tfoot>
        </table>

        <div style="text-align: center; margin-top: 20px; font-size: 10px; color: #666;">
          Thank you and visit again!🫂
        </div>
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

  // ---------- Event Listeners for Discount ----------
  const applyDiscountBtn = qs('#applyDiscountBtn');
  if (applyDiscountBtn) {
    applyDiscountBtn.addEventListener('click', applyDiscount);
  }

  const discountValueInput = qs('#discountValue');
  if (discountValueInput) {
    discountValueInput.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') {
        applyDiscount();
      }
    });
  }

  // Handle discount type changes
  const discountTypeRadios = qsa('input[name="discountType"]');
  discountTypeRadios.forEach(radio => {
    radio.addEventListener('change', (e) => {
      discount.type = e.target.value;
      // Save discount to session storage
      try {
        sessionStorage.setItem(DISCOUNT_STORAGE_KEY, JSON.stringify(discount));
      } catch (e) {
        console.warn('Could not save discount to session storage:', e);
      }
    });
  });

  // Handle remove discount button
  const removeDiscountBtn = qs('#removeDiscountBtn');
  if (removeDiscountBtn) {
    removeDiscountBtn.addEventListener('click', removeDiscount);
  }

  // ---------- Init ----------
  loadCart();
  loadDiscount();
  updateCartCount();
  renderCart();
  // Default route = home
  showSection('home');
})();
