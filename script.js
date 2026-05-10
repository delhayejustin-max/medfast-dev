(function () {
  var header = document.querySelector(".site-header");
  var toggle = document.querySelector(".nav-toggle");
  var nav = document.querySelector(".main-nav");

  if (toggle && header && nav) {
    toggle.addEventListener("click", function () {
      var open = header.classList.toggle("nav-open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
      toggle.setAttribute("aria-label", open ? "Fermer le menu" : "Ouvrir le menu");
    });

    nav.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        header.classList.remove("nav-open");
        toggle.setAttribute("aria-expanded", "false");
        toggle.setAttribute("aria-label", "Ouvrir le menu");
      });
    });

    window.addEventListener("resize", function () {
      if (window.matchMedia("(min-width: 769px)").matches) {
        header.classList.remove("nav-open");
        toggle.setAttribute("aria-expanded", "false");
        toggle.setAttribute("aria-label", "Ouvrir le menu");
      }
    });
  }

  document.querySelectorAll(".accordion-trigger").forEach(function (btn) {
    btn.addEventListener("click", function () {
      var expanded = btn.getAttribute("aria-expanded") === "true";
      var panelId = btn.getAttribute("aria-controls");
      var panel = panelId ? document.getElementById(panelId) : null;

      document.querySelectorAll(".accordion-trigger").forEach(function (other) {
        if (other === btn) return;
        other.setAttribute("aria-expanded", "false");
        var oid = other.getAttribute("aria-controls");
        var op = oid ? document.getElementById(oid) : null;
        if (op) op.hidden = true;
      });

      btn.setAttribute("aria-expanded", expanded ? "false" : "true");
      if (panel) panel.hidden = expanded;
    });
  });
})();
