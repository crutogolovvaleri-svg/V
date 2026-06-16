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

const page5Images = [
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPWvP_4vXVMn24bItN2ruuHoJiW6Eky6KhPA&s?purpose=fullsize",
  "https://q-xx.bstatic.com/xdata/images/hotel/max500/654596218.jpg?k=998f44a06dd262086555583cee86f19607682f5d9ef9f9f29d232010ee20ab39&o=?purpose=fullsize",
  "https://www.luva-villas.com/img/villas/casadelux-zagvozd-croatia-luxuryhouse-forrent-luxuryrent-secludedvilla-luva-villas-001_crop_0_1646675970.webp?purpose=fullsize"
];

const page6Images = [
  "https://rent.brookfieldproperties.com/wp-content/uploads/2024/05/atelier_features_living_area3.jpg?purpose=fullsize",
  "https://gdn-imobiliare.ro/oferte/1738/big__casa-vila-5-camere-de-vanzare-baia-mare_67fe491cb5b6f2.jpg?purpose=fullsize",
  "https://bmb.md/storage/teren-cosmonautilor-vadim/dji-0049.jpg?purpose=fullsize"
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

const CARDS_PER_PAGE = 3;
let currentPage = 1;
let filteredProps = [...properties];

function locationIcon() {
  return `<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>
  </svg>`;
}

function formatPrice(p, tranzactie) {
  if (tranzactie === "Închiriere") return p.toLocaleString('ro-RO') + ' €/lună';
  return p.toLocaleString('ro-RO') + ' €';
}

function renderCards() {
  const grid = document.getElementById('cardsGrid');
  const noResults = document.getElementById('noResults');
  const paginationWrap = document.getElementById('paginationWrap');

  const total = filteredProps.length;
  const start = (currentPage - 1) * CARDS_PER_PAGE;
  const pageItems = filteredProps.slice(start, start + CARDS_PER_PAGE);

  if (total === 0) {
    grid.innerHTML = '';
    noResults.style.display = 'block';
    paginationWrap.style.display = 'none';
    return;
  }
  noResults.style.display = 'none';
  paginationWrap.style.display = 'block';

  grid.innerHTML = pageItems.map((p, i) => {
    const globalIndex = start + i;
    let imgUrl;

    if (currentPage === 5) {
      imgUrl = page5Images[i];
    } else if (currentPage === 6) {
      imgUrl = page6Images[i];
    } else {
      imgUrl = imagePool[globalIndex % imagePool.length];
    }
    return `
    <div class="card">
      <img src="${imgUrl}" alt="${p.titlu}" loading="lazy"/>
      <div class="card-body">
        <span class="card-badge ${p.tranzactie === 'Vânzare' ? 'badge-vanzare' : 'badge-inchiriere'}">${p.tranzactie}</span>
        <p class="card-title">${p.titlu}</p>
        <p class="card-price">${formatPrice(p.pret, p.tranzactie)}</p>
        <p class="card-details">${p.camere > 0 ? p.camere + ' camere · ' : ''}${p.suprafata} m²</p>
        <p class="card-location">${locationIcon()} Cahul, ${p.zona}</p>
      </div>
    </div>`;
  }).join('');

  renderPagination(total);
}

function renderPagination(total) {
  const totalPages = Math.ceil(total / CARDS_PER_PAGE);
  const pagination = document.getElementById('pagination');

  if (totalPages <= 1) {
    pagination.innerHTML = '';
    return;
  }

  let html = '';
  if (currentPage > 1) {
    html += `<a href="#" class="page-btn" onclick="goPage(${currentPage - 1}); return false;">‹</a>`;
  }

  for (let i = 1; i <= totalPages; i++) {
    if (totalPages > 6) {
      if (i === 1 || i === totalPages || (i >= currentPage - 1 && i <= currentPage + 1)) {
        html += `<a href="#" class="page-btn ${i === currentPage ? 'active' : ''}" onclick="goPage(${i}); return false;">${i}</a>`;
      } else if (i === currentPage - 2 || i === currentPage + 2) {
        html += `<span class="page-btn dots">…</span>`;
      }
    } else {
      html += `<a href="#" class="page-btn ${i === currentPage ? 'active' : ''}" onclick="goPage(${i}); return false;">${i}</a>`;
    }
  }

  if (currentPage < totalPages) {
    html += `<a href="#" class="page-btn" onclick="goPage(${currentPage + 1}); return false;">›</a>`;
  }

  pagination.innerHTML = html;
}

function goPage(page) {
  currentPage = page;
  renderCards();
  window.scrollTo({ top: document.querySelector('.recommended-section').offsetTop - 80, behavior: 'smooth' });
}

function applyFilters() {
  const tip = document.getElementById('filterTip').value;
  const tranzactie = document.getElementById('filterTranzactie').value;
  const zona = document.getElementById('filterZona').value;
  const pretMin = parseFloat(document.getElementById('filterPretMin').value) || 0;
  const pretMax = parseFloat(document.getElementById('filterPretMax').value) || Infinity;
  const camere = document.getElementById('filterCamere').value;
  const suprafata = parseFloat(document.getElementById('filterSuprafata').value) || 0;

  filteredProps = properties.filter(p => {
    if (tip && p.tip !== tip) return false;
    if (tranzactie && p.tranzactie !== tranzactie) return false;
    if (zona && p.zona !== zona) return false;
    if (p.pret < pretMin || p.pret > pretMax) return false;
    if (camere) {
      if (camere === '4' && p.camere < 4) return false;
      if (camere !== '4' && p.camere !== parseInt(camere)) return false;
    }
    if (p.suprafata < suprafata) return false;
    return true;
  });

  currentPage = 1;

  const resultsInfo = document.getElementById('resultsInfo');
  const resultsCount = document.getElementById('resultsCount');
  const sectionTitle = document.getElementById('sectionTitle');

  resultsInfo.style.display = 'flex';
  resultsCount.textContent = filteredProps.length;
  sectionTitle.textContent = filteredProps.length > 0 ? 'Rezultate căutare' : 'Nicio proprietate găsită';

  renderCards();
  window.scrollTo({ top: document.querySelector('.recommended-section').offsetTop - 80, behavior: 'smooth' });
}

function resetFilters() {
  document.getElementById('filterTip').value = '';
  document.getElementById('filterTranzactie').value = '';
  document.getElementById('filterZona').value = '';
  document.getElementById('filterPretMin').value = '';
  document.getElementById('filterPretMax').value = '';
  document.getElementById('filterCamere').value = '';
  document.getElementById('filterSuprafata').value = '';

  filteredProps = [...properties];
  currentPage = 1;

  document.getElementById('resultsInfo').style.display = 'none';
  document.getElementById('sectionTitle').textContent = 'Proprietăți recomandate';

  renderCards();
}

function searchByTerm() {
  const val = document.getElementById('navSearchInput').value.trim().toLowerCase();
  if (!val) { resetFilters(); return; }

  filteredProps = properties.filter(p =>
    p.titlu.toLowerCase().includes(val) || p.zona.toLowerCase().includes(val)
  );
  currentPage = 1;
  document.getElementById('resultsInfo').style.display = 'flex';
  document.getElementById('resultsCount').textContent = filteredProps.length;
  document.getElementById('sectionTitle').textContent = filteredProps.length > 0 ? 'Rezultate căutare' : 'Nicio proprietate găsită';
  renderCards();
}

document.getElementById('navSearchInput').addEventListener('keydown', function (e) {
  if (e.key === 'Enter') {
    e.preventDefault();
    searchByTerm();
  }
});

(function () {
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

  var mInput = document.getElementById('navSearchInputMobile');
  var mIcon  = document.getElementById('navSearchIconMobile');

  function mobileSearch() {
    if (typeof searchByTerm === 'function') {
      var dInput = document.getElementById('navSearchInput');
      if (dInput) dInput.value = mInput.value;
      searchByTerm();
    }
  }

  if (mInput) {
    mInput.addEventListener('keydown', function (e) {
      if (e.key === 'Enter') { e.preventDefault(); mobileSearch(); }
    });
  }
  if (mIcon) mIcon.addEventListener('click', mobileSearch);
})();

document.getElementById('navSearchIcon').addEventListener('click', searchByTerm);
document.getElementById('navSearchIcon').style.cursor = 'pointer';

renderCards();