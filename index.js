const toggleButton = document.getElementsByClassName("toggle-button")[0];
const navbarLinks = document.getElementsByClassName("navbar-links")[0];

toggleButton.addEventListener("click", () => {
  navbarLinks.classList.toggle("active");
});

const modal = document.querySelector("#modal");
const openModal = document.querySelector(".open-modal");
const closeModal = document.querySelector(".close-modal");

openModal.addEventListener("click", () => {
  modal.showModal();
});

closeModal.addEventListener("click", () => {
  modal.close();
});

const modalContact = document.querySelector("#modal-contact");
const openModalContact = document.querySelector(".open-modal-contact");
const closeModalContact = document.querySelector(".close-modal-contact");

openModalContact.addEventListener("click", () => {
  modalContact.showModal();
});

closeModalContact.addEventListener("click", () => {
  modalContact.close();
});
