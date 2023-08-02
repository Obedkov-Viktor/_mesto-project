const popupEdit = document.querySelector('.popup-edit');
const popupAdd = document.querySelector('.popup-add');
const editButton = document.querySelector('.profile__edit-button');
const closeButton = document.querySelector('.popup__close-button');
const formElement = document.querySelector('.profile_edit');
const nameInput = document.querySelector('.popup__input[name="name"]');
const jobInput = document.querySelector('.popup__input[name="about"]');
const addButton = document.querySelector('.profile__add-button');
const popupForm  = document.querySelector('.profile_add');
const template = document.querySelector('#elements');
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


function renderCard({name, link}){
    const newElement = template.content.cloneNode(true);
    const image = newElement.querySelector('.element__image');
    image.src = link;
    image.alt = 'Новое изображение';
    const subtitle = newElement.querySelector('.element__subtitle');
    subtitle.textContent = name;
    const list = document.querySelector('.elements__list');
    list.appendChild(newElement);
}


initialCards.forEach(renderCard);

editButton.addEventListener('click', function () {
    nameInput.value = document.querySelector('.profile__name').textContent;
    jobInput.value = document.querySelector('.profile__subtitle').textContent;
    popupEdit.classList.add('popup_opened');
});
addButton.addEventListener('click', function (){
    popupAdd.classList.add('popup_opened');
});
closeButton.addEventListener('click', function closePopup() {
    popupEdit.classList.remove("popup_opened");
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