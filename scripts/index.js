const initialCards = [
  {
    name: "Val Thorens",
    link: "./images/1-photo-by-moritz-feldmann-from-pexels.jpg",
  },
  {
    name: "Restaurant terrace",
    link: "./images/2-photo-by-ceiline-from-pexels.jpg",
  },
  {
    name: "An outdoor cafe",
    link: "./images/3-photo-by-tubanur-dogan-from-pexels.jpg",
  },
  {
    name: "A very long bridge, over the forest and through the trees",
    link: "./images/4-photo-by-maurice-laschet-from-pexels.jpg",
  },
  {
    name: "Tunnel with morning light",
    link: "./images/5-photo-by-van-anh-nguyen-from-pexels.jpg",
  },
  {
    name: "Mountain house",
    link: "./images/6-photo-by-moritz-feldmann-from-pexels.jpg",
  },
];

console.log(initialCards);

const editButton = document.querySelector(".profile__edt-button"); //select edit button
const editModal = document.querySelector("#edit-modal"); //finds modal box
const closeModalButton = document.querySelector(".modal__close-button"); //find close buton for modal
const editFormElement = document.forms["profile-form"]; //find modal form

const profileName = document.querySelector(".profile__name"); // Save profile name html
const profileDescription = document.querySelector(".profile__description"); // Save profile description html

const nameInput = editModal.querySelector("#name");
const descriptionInput = editModal.querySelector("#description");

const cardList = document.querySelector(".cards__list");

function openModal() {
  //Sets default value of fields same as the profile
  nameInput.setAttribute("value", profileName.textContent);
  descriptionInput.setAttribute("value", profileDescription.textContent);

  editModal.classList.add("modal_opened");
}

function closeModal() {
  editModal.classList.remove("modal_opened");
}

function handleEventFormSubmit(event) {
  event.preventDefault();

  profileName.textContent = nameInput.value;
  profileDescription.textContent = descriptionInput.value;

  closeModal();
}

editButton.addEventListener("click", openModal); //Listen to open form
closeModalButton.addEventListener("click", closeModal); //Listen to close form
editFormElement.addEventListener("submit", handleEventFormSubmit); //Listen for form submission

const cardTemplate = document.querySelector("#template-card");

function getCardElement(item) {
  const cardElement = cardTemplate.content
    .querySelector(".card")
    .cloneNode(true);

  cardElement.querySelector(".card__title").textContent = item["name"];
  cardElement.querySelector(".card__image").src = item["link"];
  cardElement.querySelector(".card__image").alt = item["name"];

  return cardElement;
}

for (cardData of initialCards) {
  const newCard = getCardElement(cardData);
  cardList.append(newCard);
}
