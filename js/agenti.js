(function () {
  const input = document.getElementById('navSearchInput');
  const icon  = document.getElementById('navSearchIcon');

  function goToSearchPage() {
    const term = input ? input.value.trim() : '';
    window.location.href = 'Cautare.html' + (term ? ('?q=' + encodeURIComponent(term)) : '');
  }

  if (input) {
    input.addEventListener('keydown', function (e) {
      if (e.key === 'Enter') { e.preventDefault(); goToSearchPage(); }
    });
  }

  if (icon) {
    icon.style.cursor = 'pointer';
    icon.addEventListener('click', goToSearchPage);
  }

  /* ── Hamburger menu ── */
  const toggle   = document.getElementById('menuToggle');
  const navLinks = document.getElementById('navLinks');

  if (toggle && navLinks) {
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
  }

  /* ── Mobile search ── */
  const mInput = document.getElementById('navSearchInputMobile');
  const mIcon  = document.getElementById('navSearchIconMobile');

  function mobileSearch() {
    const term = mInput ? mInput.value.trim() : '';
    window.location.href = 'Cautare.html' + (term ? ('?q=' + encodeURIComponent(term)) : '');
  }

  if (mInput) {
    mInput.addEventListener('keydown', function (e) {
      if (e.key === 'Enter') { e.preventDefault(); mobileSearch(); }
    });
  }
  if (mIcon) {
    mIcon.style.cursor = 'pointer';
    mIcon.addEventListener('click', mobileSearch);
  }
})();