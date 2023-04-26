const toggleButton = document.getElementsByClassName("toggle-button")[0];
const navbarLinks = document.getElementsByClassName("navbar-links")[0];

toggleButton.addEventListener("click", () => {
  navbarLinks.classList.toggle("active");
});

document.querySelector(".login-btn").addEventListener("click", () => {
  document.querySelector(".popup").classList.add("active");
});

document.querySelector(".popup .close-btn").addEventListener("click", () => {
  document.querySelector(".popup").classList.remove("active");
});
