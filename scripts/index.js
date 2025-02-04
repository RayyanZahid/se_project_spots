const initialCards = [
  {
    name: "Val Thorens",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/1-photo-by-moritz-feldmann-from-pexels.jpg",
  },
  {
    name: "Restaurant terrace",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/1-photo-by-moritz-feldmann-from-pexels.jpg",
  },
  {
    name: "An outdoor cafe",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/1-photo-by-moritz-feldmann-from-pexels.jpg",
  },
  {
    name: "A very long bridge, over the forest and through the trees",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/1-photo-by-moritz-feldmann-from-pexels.jpg",
  },
  {
    name: "Tunnel with morning light",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/1-photo-by-moritz-feldmann-from-pexels.jpg",
  },
  {
    name: "Mountain house",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/1-photo-by-moritz-feldmann-from-pexels.jpg",
  },
];

console.log(initialCards);

let editButton = document.querySelector(".profile__edt-button"); //select edit button
let editModal = document.querySelector("#edit-modal"); //select edit button
let closeModalButton = document.querySelector(".modal__close-button"); //find close buton for modal
let editFormElement = document.querySelector(".modal__form"); //find modal form

let profileName = document.querySelector(".profile__name"); // Save profile name html
let profileDescription = document.querySelector(".profile__description"); // Save profile description html

let inputPlaceholderData = document.querySelectorAll(".modal__input"); // find list of classes where inputs are done in modal

function openModal() {
  //Sets default value of fields same as the profile
  inputPlaceholderData[0].setAttribute("value", profileName.textContent);
  inputPlaceholderData[1].setAttribute("value", profileDescription.textContent);

  editModal.classList.add("modal_opened");
}

function closeModal() {
  editModal.classList.remove("modal_opened");
}

function handleEventFormSubmit(event) {
  event.preventDefault();

  let inputName = editFormElement.querySelector("#name").value;
  let inputDescription = editFormElement.querySelector("#description").value;

  profileName.textContent = inputName;
  profileDescription.textContent = inputDescription;

  closeModal();
}

editButton.addEventListener("click", openModal); //Listen to open form
closeModalButton.addEventListener("click", closeModal); //Listen to close form
editFormElement.addEventListener("submit", handleEventFormSubmit); //Listen for form submission
