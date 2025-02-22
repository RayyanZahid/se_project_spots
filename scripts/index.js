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

//PROFILE ELEMENTS
const editButton = document.querySelector(".profile__edt-button");
const addButton = document.querySelector(".profile__add-button");
const profileName = document.querySelector(".profile__name"); // Save profile name html
const profileDescription = document.querySelector(".profile__description"); // Save profile description html

//EDIT PROFILE
const editModal = document.querySelector("#edit-modal"); //finds modal box
const closeEditModalButton = editModal.querySelector(".modal__close-button"); //find close buton for modal
const editFormElement = document.forms["profile-form"]; //find modal form
const nameInput = editModal.querySelector("#name");
const descriptionInput = editModal.querySelector("#description");

//ADD POST
const addModal = document.querySelector("#add-card-modal"); //finds modal box
const closeAddModalButton = addModal.querySelector(".modal__close-button"); //find close buton for modal
const addFormElement = document.forms["add-card-form"]; //find modal form
const cardLinkInput = addModal.querySelector("#add-card-link-input");
const cardNameInput = addModal.querySelector("#add-card-name-input");

//Preview Modal
const previewModal = document.querySelector("#preview-modal");
const closePreviewModalButton = previewModal.querySelector(
  ".modal__close-button"
);

const cardList = document.querySelector(".cards__list");

// Function to open modal
function openModal(modal) {
  //Sets default value of fields same as the profile
  nameInput.setAttribute("value", profileName.textContent);
  descriptionInput.setAttribute("value", profileDescription.textContent);

  modal.classList.add("modal_opened");
}

// Function to close modal
function closeModal(modal) {
  modal.classList.remove("modal_opened");
}

// FUNCTIONS FOR EDIT MODAL
function handleEventFormSubmit(event) {
  event.preventDefault();

  profileName.textContent = nameInput.value;
  profileDescription.textContent = descriptionInput.value;

  closeModal(editModal);
}

editButton.addEventListener("click", () => {
  openModal(editModal);
});

closeEditModalButton.addEventListener("click", () => {
  closeModal(editModal);
});

editFormElement.addEventListener("submit", handleEventFormSubmit); //Listen for form submission

// FUNCTIONS FOR ADD MODAL
function handleAddFormSubmit(event) {
  event.preventDefault();

  const inputValues = { name: cardNameInput.value, link: cardLinkInput.value };

  cardList.append(getCardElement(inputValues));

  closeModal(addModal);
}

addButton.addEventListener("click", () => {
  openModal(addModal);
});

closeAddModalButton.addEventListener("click", () => {
  closeModal(addModal);
});

addFormElement.addEventListener("submit", handleAddFormSubmit);

//PREVIEW MODAL
closePreviewModalButton.addEventListener("click", () => {
  closeModal(previewModal);
});

// GENERATING CARD CONTENT
const cardTemplate = document.querySelector("#template-card");

function getCardElement(item) {
  const cardElement = cardTemplate.content
    .querySelector(".card")
    .cloneNode(true);

  const cardDeleteBtn = cardElement.querySelector(".card__delete-button");
  const cardLikeBtn = cardElement.querySelector(".card__like-button");
  const cardImageEl = cardElement.querySelector(".card__image");

  cardElement.querySelector(".card__title").textContent = item["name"];
  cardElement.querySelector(".card__image").src = item["link"];
  cardElement.querySelector(".card__image").alt = item["name"];

  cardLikeBtn.addEventListener("click", () => {
    cardLikeBtn.classList.toggle("card__like-button_liked");
  });

  cardDeleteBtn.addEventListener("click", () => {
    cardElement.remove();
  });

  cardImageEl.addEventListener("click", () => {
    previewModal.querySelector(".modal__caption").textContent = item["name"];
    previewModal.querySelector(".modal__image").src = item["link"];
    previewModal.querySelector(".modal__image").alt = item["name"];
    openModal(previewModal);
  });

  return cardElement;
}

// Reads the array for initial cards and adds it to the
initialCards.forEach((item) => {
  cardList.append(getCardElement(item));
});
