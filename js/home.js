(function () {
  const input = document.getElementById('navSearchInput');
  const icon = document.getElementById('navSearchIcon');
  const cards = document.querySelectorAll('.cards-grid .card');
  const grid = document.querySelector('.cards-grid');
  let noResultsMsg = null;

  function filterCards(term) {
    term = term.trim().toLowerCase();
    let anyVisible = false;

    cards.forEach(card => {
      const match = term === '' || card.textContent.toLowerCase().includes(term);
      card.style.display = match ? '' : 'none';
      if (match) anyVisible = true;
    });

    if (!anyVisible && term !== '') {
      if (!noResultsMsg) {
        noResultsMsg = document.createElement('p');
        noResultsMsg.className = 'no-results';
        grid.parentNode.insertBefore(noResultsMsg, grid.nextSibling);
      }
      noResultsMsg.textContent = 'Nicio proprietate găsită pentru "' + term + '".';
      noResultsMsg.style.display = 'block';
    } else if (noResultsMsg) {
      noResultsMsg.style.display = 'none';
    }
  }

  function goToSearchPage() {
    const term = input.value.trim();
    window.location.href = 'Cautare.html' + (term ? ('?q=' + encodeURIComponent(term)) : '');
  }

  if (input) {
    input.addEventListener('input', () => filterCards(input.value));
    input.addEventListener('keydown', e => {
      if (e.key === 'Enter') {
        e.preventDefault();
        goToSearchPage();
      }
    });
  }

   if (icon) {
    icon.style.cursor = 'pointer';
    icon.addEventListener('click', goToSearchPage);
  }
  
})();

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

  const cards    = document.querySelectorAll('.cards-grid .card');
  const grid     = document.querySelector('.cards-grid');
  const noRes    = document.getElementById('noResults');

  function filterCards(term) {
    term = term.trim().toLowerCase();
    let anyVisible = false;
    cards.forEach(function (card) {
      const match = term === '' || card.textContent.toLowerCase().includes(term);
      card.style.display = match ? '' : 'none';
      if (match) anyVisible = true;
    });
    if (noRes) {
      if (!anyVisible && term !== '') {
        noRes.textContent = 'Nicio proprietate găsită pentru "' + term + '".';
        noRes.style.display = 'block';
      } else {
        noRes.style.display = 'none';
      }
    }
  }

  function goToSearchPage(val) {
    const term = (val || '').trim();
    window.location.href = 'Cautare.html' + (term ? ('?q=' + encodeURIComponent(term)) : '');
  }

  var dInput = document.getElementById('navSearchInput');
  var dIcon  = document.getElementById('navSearchIcon');
  if (dInput) {
    dInput.addEventListener('input', function () { filterCards(dInput.value); });
    dInput.addEventListener('keydown', function (e) {
      if (e.key === 'Enter') { e.preventDefault(); goToSearchPage(dInput.value); }
    });
  }
  if (dIcon) dIcon.addEventListener('click', function () { goToSearchPage(dInput && dInput.value); });

  var mInput = document.getElementById('navSearchInputMobile');
  var mIcon  = document.getElementById('navSearchIconMobile');
  if (mInput) {
    mInput.addEventListener('input', function () { filterCards(mInput.value); });
    mInput.addEventListener('keydown', function (e) {
      if (e.key === 'Enter') { e.preventDefault(); goToSearchPage(mInput.value); }
    });
  }
  if (mIcon) mIcon.addEventListener('click', function () { goToSearchPage(mInput && mInput.value); });
})();