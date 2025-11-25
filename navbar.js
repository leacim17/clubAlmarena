 const navbar = document.getElementById("navbar");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 70) {
      navbar.classList.remove("opacity-0", "-translate-y-10");
      navbar.classList.add("opacity-100", "translate-y-0");
    } else {
      navbar.classList.add("opacity-0", "-translate-y-10");
      navbar.classList.remove("opacity-100", "translate-y-0");
    }
  });