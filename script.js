/* ==========================================================================
   Sammlermarkt R. Braun Antiquitäten — Website-Entwurf
   Minimales Vanilla-JS: mobiles Menü, Anker-Navigation, Kontaktformular-UI,
   aktuelles Jahr im Footer. Keine externen Aufrufe, keine echten Anfragen.
   ========================================================================== */

(function () {
  "use strict";

  /* ---------- Mobiles Burger-Menü ---------- */
  var navToggle = document.getElementById("navToggle");
  var mainNav = document.getElementById("hauptnav");

  if (navToggle && mainNav) {
    navToggle.addEventListener("click", function () {
      var isOpen = mainNav.classList.toggle("is-open");
      navToggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
    });

    /* Menü nach Klick auf einen Link schließen (mobile Ansicht) */
    mainNav.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        mainNav.classList.remove("is-open");
        navToggle.setAttribute("aria-expanded", "false");
      });
    });

    /* Menü schließen, wenn wieder auf Desktop-Breite gewechselt wird */
    window.addEventListener("resize", function () {
      if (window.innerWidth > 720) {
        mainNav.classList.remove("is-open");
        navToggle.setAttribute("aria-expanded", "false");
      }
    });
  }

  /* ---------- Aktuelles Jahr im Footer ---------- */
  var jahrEl = document.getElementById("jahr");
  if (jahrEl) {
    jahrEl.textContent = String(new Date().getFullYear());
  }

  /* ---------- Kontaktformular (rein clientseitig, nicht funktional) ---------- */
  var contactForm = document.getElementById("contactForm");
  var formNote = document.getElementById("formNote");

  if (contactForm && formNote) {
    var defaultNote = formNote.textContent;

    contactForm.addEventListener("submit", function (event) {
      event.preventDefault();

      formNote.textContent =
        "Vielen Dank! In diesem Entwurf wird noch keine echte Anfrage " +
        "versendet – im finalen Webauftritt landet Ihre Nachricht direkt " +
        "beim Sammlermarkt R. Braun Antiquitäten.";
      formNote.classList.add("is-sent");

      /* Hinweistext nach einigen Sekunden zurücksetzen */
      window.setTimeout(function () {
        formNote.textContent = defaultNote;
        formNote.classList.remove("is-sent");
      }, 6000);
    });
  }
})();
