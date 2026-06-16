const imagePool = [
    "https://images.openai.com/static-rsc-4/emkyams5dMYmv1RGUsYrEy5FjOZFlJxvcypuMxIz_hNJCR3dFmiO5Erac_1t4bqFMDU33xxx7AzTc10al-tCvY4PPsJVsCVsYpwmXyCAzzc2bdK-Z675K8-NxfvB_y4FJufJyE9YWXPQNGGY8vES_WqYddIhpY6f-soZqrPx-qtbf_el3fX5_DQS43Ps9oy8?purpose=fullsize",
    "https://images.openai.com/static-rsc-4/E6OkXsO3jvkRml03qJV-rjG0UqgtG7nQiJtVgyuq693ZQoVOX1M8sgqIK01pW8S-w68lGlT_mrHyXUav595yJxzaX8z-e-Thn3OsjCPRK_Kfezjc9FItJoK-lXzt2nZZ2-Hr6uvA1BL1Ndnzefdkpw2VmTK5C24UBKmu8ALgHAD4GCcGJ3uVaM_-iD56EdvH?purpose=fullsize",
    "https://cf.bstatic.com/xdata/images/hotel/max1024x768/134475469.jpg?k=986e0385365fa9e17ef6497e2fb7d5e16552358ad343c4ad8fc35b29802eacac&o?purpose=fullsize",
    "https://cf.bstatic.com/xdata/images/hotel/max1024x768/170560722.jpg?k=7b7f01e8242c9ec5ad9f3eaf40c0ce254772406407f1f4757250f68975c83151&o=?purpose=fullsize",
    "https://d11jxtftm29knk.cloudfront.net/images/blog/26/Casa_si_Gradina.jpg?purpose=fullsize",
    "https://hometer.md/_next/image?url=https%3A%2F%2Fhometer.md%2Fuploads%2Fimages%2F18e25769-d3f4-4a1b-8266-57f173de0838.jpg&w=3840&q=75?purpose=fullsize",
    "https://acasaarad.ro/wp-content/uploads/2023/09/Teren-Intravilan-sau-Teren-Extravilan-Oportunitati-de-investitii-arad.jpg?purpose=fullsize",
    "https://casaperfecta.md/wp-content/uploads/2016/08/Proiect-de-casa-m11011.jpg?purpose=fullsize",
    "https://cdn.mesterilocali.ro/project/NMlB2g3RhSwZVTCHc0d37rM2fFpcutflvsPowNC9.jpg?purpose=fullsize",
    "https://uberhause.ro/wp-content/uploads/2024/03/valera1.webp?purpose=fullsize",
    "https://cf.bstatic.com/xdata/images/hotel/max1024x768/399759255.jpg?k=1adef95b60452f0c823c61c6ff6f5da1d8f122f3727b2b0d504077f6e4e0464f&o=?purpose=fullsize",
    "https://www.bizlaw.md/uploads/article/8755/5bf6777e78b1d.jpeg?purpose=fullsize"
  ];

  const properties = [
    { tip:"Casa",       tranzactie:"Vânzare",    zona:"str. Dunării",        pret:85000,  camere:4, suprafata:120, titlu:"Casă modernă" },
    { tip:"Apartament", tranzactie:"Vânzare",    zona:"str. Independenței",  pret:42000,  camere:2, suprafata:65,  titlu:"Apartament 2 camere" },
    { tip:"Casa",       tranzactie:"Vânzare",    zona:"str. Ștefan cel Mare",pret:120000, camere:5, suprafata:180, titlu:"Vilă spațioasă" },
    { tip:"Apartament", tranzactie:"Închiriere", zona:"str. Viilor",         pret:350,    camere:1, suprafata:42,  titlu:"Garsonieră centrală" },
    { tip:"Casa",       tranzactie:"Vânzare",    zona:"str. Frunzelor",      pret:67000,  camere:3, suprafata:95,  titlu:"Casă cu grădină" },
    { tip:"Apartament", tranzactie:"Vânzare",    zona:"str. Dunării",        pret:55000,  camere:3, suprafata:78,  titlu:"Apartament 3 camere" },
    { tip:"Teren",      tranzactie:"Vânzare",    zona:"str. Viilor",         pret:18000,  camere:0, suprafata:600, titlu:"Teren intravilan" },
    { tip:"Casa",       tranzactie:"Închiriere", zona:"str. Independenței",  pret:500,    camere:4, suprafata:130, titlu:"Casă de închiriat" },
    { tip:"Apartament", tranzactie:"Vânzare",    zona:"str. Ștefan cel Mare",pret:38000,  camere:2, suprafata:58,  titlu:"Apartament renovat" },
    { tip:"Casa",       tranzactie:"Vânzare",    zona:"str. Dunării",        pret:95000,  camere:4, suprafata:145, titlu:"Casă cu etaj" },
    { tip:"Apartament", tranzactie:"Închiriere", zona:"str. Frunzelor",      pret:280,    camere:2, suprafata:54,  titlu:"Apartament confortabil" },
    { tip:"Teren",      tranzactie:"Vânzare",    zona:"str. Viilor",         pret:12000,  camere:0, suprafata:400, titlu:"Teren agricol" },
    { tip:"Casa",       tranzactie:"Vânzare",    zona:"str. Frunzelor",      pret:74000,  camere:3, suprafata:110, titlu:"Casă nouă construcție" },
    { tip:"Apartament", tranzactie:"Vânzare",    zona:"str. Dunării",        pret:61000,  camere:3, suprafata:82,  titlu:"Apartament lux" },
    { tip:"Casa",       tranzactie:"Închiriere", zona:"str. Ștefan cel Mare",pret:650,    camere:5, suprafata:160, titlu:"Casă de lux" },
    { tip:"Apartament", tranzactie:"Vânzare",    zona:"str. Independenței",  pret:47000,  camere:2, suprafata:70,  titlu:"Apartament nou" },
    { tip:"Casa",       tranzactie:"Vânzare",    zona:"str. Viilor",         pret:88000,  camere:4, suprafata:135, titlu:"Casă semifinisată" },
    { tip:"Teren",      tranzactie:"Vânzare",    zona:"str. Dunării",        pret:22000,  camere:0, suprafata:800, titlu:"Teren construcție" },
  ];

  const CARDS_PER_PAGE = 6;
  const MAX_PAGES = 2;
  let currentPage = 1;

  function formatPrice(p, tranzactie) {
    if (tranzactie === "Închiriere") return p.toLocaleString('ro-RO') + ' €/lună';
    return p.toLocaleString('ro-RO') + ' €';
  }

  function locationIconSVG() {
    return `<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>
    </svg>`;
  }

  function renderCards() {
    const grid = document.getElementById('listingsGrid');
    const start = (currentPage - 1) * CARDS_PER_PAGE;
    const pageItems = properties.slice(start, start + CARDS_PER_PAGE);

    grid.innerHTML = pageItems.map((p, i) => {
      const globalIndex = start + i;
      const imgUrl = imagePool[globalIndex % imagePool.length];
      const badgeClass = p.tranzactie === 'Vânzare' ? 'badge-vanzare' : 'badge-inchiriere';
      return `<div class="listing-card">
        <img src="${imgUrl}" alt="${p.titlu}" loading="lazy"/>
        <div class="listing-card-body">
          <span class="listing-card-badge ${badgeClass}">${p.tranzactie}</span>
          <p class="listing-card-title">${p.titlu}</p>
          <p class="listing-card-price">${formatPrice(p.pret, p.tranzactie)}</p>
          <p class="listing-card-details">${p.camere > 0 ? p.camere + ' camere · ' : ''}${p.suprafata} m²</p>
          <p class="listing-card-location">${locationIconSVG()} Cahul, ${p.zona}</p>
        </div>
      </div>`;
    }).join('');

    renderPagination();
  }

  function renderPagination() {
    const pagination = document.getElementById('pagination');
    let html = '';
    if (currentPage > 1) {
      html += `<a href="#" class="page-btn" onclick="goPage(${currentPage - 1}); return false;">‹</a>`;
    }
    for (let i = 1; i <= MAX_PAGES; i++) {
      html += `<a href="#" class="page-btn ${i === currentPage ? 'active' : ''}" onclick="goPage(${i}); return false;">${i}</a>`;
    }
    if (currentPage < MAX_PAGES) {
      html += `<a href="#" class="page-btn" onclick="goPage(${currentPage + 1}); return false;">›</a>`;
    }
    pagination.innerHTML = html;
  }

  function goPage(page) {
    currentPage = page;
    renderCards();
    window.scrollTo({ top: document.querySelector('.listings-wrap').offsetTop - 80, behavior: 'smooth' });
  }

  (function () {
    const input = document.getElementById('navSearchInput');
    const icon = document.getElementById('navSearchIcon');
    function goToSearchPage() {
      const term = input.value.trim();
      window.location.href = 'Cautare.html' + (term ? ('?q=' + encodeURIComponent(term)) : '');
    }
    if (input) input.addEventListener('keydown', e => { if (e.key === 'Enter') { e.preventDefault(); goToSearchPage(); } });
    if (icon) { icon.style.cursor = 'pointer'; icon.addEventListener('click', goToSearchPage); }
  })();

  (function () {
  // ── Hamburger toggle ──
  const toggle   = document.getElementById('menuToggle');
  const navLinks = document.getElementById('navLinks');

  toggle.addEventListener('click', function () {
    const isOpen = navLinks.classList.toggle('open');
    toggle.classList.toggle('open', isOpen);
    toggle.setAttribute('aria-expanded', isOpen);
  });

  navLinks.querySelectorAll('a').forEach(function (link) {
    link.addEventListener('click', function () {
      navLinks.classList.remove('open');
      toggle.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
    });
  });

  document.addEventListener('click', function (e) {
    if (!navLinks.contains(e.target) && !toggle.contains(e.target)) {
      navLinks.classList.remove('open');
      toggle.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
    }
  });

  function goToSearchPage(val) {
    const term = (val || '').trim();
    window.location.href = 'Cautare.html' + (term ? ('?q=' + encodeURIComponent(term)) : '');
  }

  var dInput = document.getElementById('navSearchInput');
  var dIcon  = document.getElementById('navSearchIcon');
  if (dInput) {
    dInput.addEventListener('keydown', function (e) {
      if (e.key === 'Enter') { e.preventDefault(); goToSearchPage(dInput.value); }
    });
  }
  if (dIcon) dIcon.addEventListener('click', function () { goToSearchPage(dInput && dInput.value); });

  var mInput = document.getElementById('navSearchInputMobile');
  var mIcon  = document.getElementById('navSearchIconMobile');
  if (mInput) {
    mInput.addEventListener('keydown', function (e) {
      if (e.key === 'Enter') { e.preventDefault(); goToSearchPage(mInput.value); }
    });
  }
  if (mIcon) mIcon.addEventListener('click', function () { goToSearchPage(mInput && mInput.value); });
})();
  renderCards();