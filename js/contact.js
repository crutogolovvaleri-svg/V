const form = document.getElementById("contactForm");

form.addEventListener("submit", async function (e) {
  e.preventDefault();

  const formData = new FormData(form);

  try {
    const response = await fetch(
      "https://api.sheetmonkey.io/form/k8sJ87FzgAeQyQXTP3Dx7m",
      {
        method: "POST",
        body: formData,
      }
    );

    if (response.ok) {
      window.location.href = "succes.html";
    } else {
      alert("Eroare la trimiterea formularului.");
    }
  } catch (err) {
    console.error(err);
    alert("A apărut o eroare.");
  }
});

(function () {
  const toggle   = document.getElementById("menuToggle");
  const navLinks = document.getElementById("navLinks");

  if (!toggle || !navLinks) return;

  toggle.addEventListener("click", function () {
    const isOpen = navLinks.classList.toggle("open");
    toggle.classList.toggle("open", isOpen);
    toggle.setAttribute("aria-expanded", isOpen);
  });

  navLinks.querySelectorAll("a").forEach(function (link) {
    link.addEventListener("click", function () {
      navLinks.classList.remove("open");
      toggle.classList.remove("open");
      toggle.setAttribute("aria-expanded", "false");
    });
  });

  document.addEventListener("click", function (e) {
    if (!navLinks.contains(e.target) && !toggle.contains(e.target)) {
      navLinks.classList.remove("open");
      toggle.classList.remove("open");
      toggle.setAttribute("aria-expanded", "false");
    }
  });

  const mInput = document.getElementById("navSearchInputMobile");
  const mIcon  = document.getElementById("navSearchIconMobile");
  const dInput = document.getElementById("navSearchInput");

  function mobileSearch() {
    if (dInput && mInput) dInput.value = mInput.value;
  }

  if (mInput) {
    mInput.addEventListener("keydown", function (e) {
      if (e.key === "Enter") { e.preventDefault(); mobileSearch(); }
    });
  }
  if (mIcon) mIcon.addEventListener("click", mobileSearch);
})();