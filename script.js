const popupEdit = document.querySelector('.popup-edit');
const popupAdd = document.querySelector('.popup-add');
const closeButton = document.querySelectorAll('.popup__close-button');
const editButton = document.querySelector('.profile__edit-button');
const formElement = document.querySelector('.profile_edit');
const nameInput = document.querySelector('.popup__input[name="name"]');
const jobInput = document.querySelector('.popup__input[name="about"]');
const addButton = document.querySelector('.profile__add-button');
const template = document.querySelector('#elements');
const cardDelete = document.querySelector('.element__delete');
const initialCards = [
    {
        name: 'Архыз',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
        name: 'Челябинская область',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
        name: 'Иваново',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
        name: 'Камчатка',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
        name: 'Холмогорский район',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
        name: 'Байкал',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    }
];

function renderCard({name, link}) {
    const newElement = template.content.cloneNode(true);
    const image = newElement.querySelector('.element__image');
    const subtitle = newElement.querySelector('.element__subtitle');
    const card = newElement.querySelector('.element');
    const list = document.querySelector('.elements__list');
    const likeButton = card.querySelector('.element__like');
    const elementDelete = card.querySelector('.element__delete');
    image.src = link;
    image.alt = 'Новое изображение';
    subtitle.textContent = name;
    likeButton.addEventListener('click', function (){
        likeButton.classList.toggle('element__like_active');
    });
    elementDelete.addEventListener('click', function (){
       card.remove();
    });

    list.appendChild(newElement);
}


initialCards.forEach(renderCard);

editButton.addEventListener('click', function () {
    nameInput.value = document.querySelector('.profile__name').textContent;
    jobInput.value = document.querySelector('.profile__subtitle').textContent;
    popupEdit.classList.add('popup_opened');
});
addButton.addEventListener('click', function () {
    popupAdd.classList.add('popup_opened');
});

closeButton.forEach(button => {
    button.addEventListener('click', () => {
        if (button.closest('.popup-edit')) {
            popupEdit.classList.remove('popup_opened');
        } else if (button.closest('.popup-add')) {
            popupAdd.classList.remove('popup_opened');
        }
    });
});


function closePopup() {
    const popup = document.querySelector('.popup_opened');
    popup.classList.remove('popup_opened');
}

function handleFormSubmit(evt) {
    evt.preventDefault();
    const nameValue = nameInput.value;
    const jobValue = jobInput.value;
    const nameOutput = document.querySelector('.profile__name');
    const jobOutput = document.querySelector('.profile__subtitle');
    nameOutput.textContent = nameValue;
    jobOutput.textContent = jobValue;
    closePopup();
}

formElement.addEventListener('submit', handleFormSubmit);

function addElement(evt) {
    evt.preventDefault();
    const elementTitle = document.querySelector('#title').value;
    const elementLink = document.querySelector('#link').value;
    const newCard = createCard(elementTitle, elementLink);
    const cardsContainer = document.querySelector('.elements__list');
    cardsContainer.prepend(newCard);
    closePopup();
}

function createCard(title, link) {
    const template = document.querySelector('#elements');
    const cardElement = template.content.cloneNode(true);
    const card = cardElement.querySelector('.element');
    const cardImage = cardElement.querySelector('.element__image');
    const cardTitle = cardElement.querySelector('.element__subtitle');
    const cardLike = cardElement.querySelector('.element__like');
    const cardDelete = cardElement.querySelector('.element__delete');

    cardImage.src = link;
    cardTitle.textContent = title;
    cardLike.addEventListener('click', function () {
        cardLike.classList.toggle('element__like_active');
    });
    cardDelete.addEventListener('click', function (){
       card.remove();
    });
    return cardElement;
}

popupAdd.addEventListener('submit', addElement);