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
    const template = document.querySelector('#elements');
    const card = template.content.cloneNode(true);
    const element = card.querySelector('.element');
    const image = card.querySelector('.element__image');
    const subtitle = card.querySelector('.element__subtitle');
    const like = card.querySelector('.element__like');
    const basket = card.querySelector('.element__delete');


    const list = document.querySelector('.elements__list');
    image.src = link;
    image.alt = 'Новое изображение';
    subtitle.name = name;
    like.addEventListener('click', function () {
        like.classList.toggle('element__like_active');
    });
    basket.addEventListener('click', function () {
        element.remove();
    });
    return list.appendChild(card);
}

const addProfileButton = document.querySelector('.profile__add-button'); //кнопка "Добавление профиль"
const editProfileButton = document.querySelector('.profile__edit-button');//кнопка "Редактировать"
const popupAdd = document.querySelector('.popup-add'); //модальное кнопка для добавление картинки и ссылки
const popupEdit = document.querySelector('.popup-edit');//Модальное кнопка для редактирование профиль
const popupCloseButton = document.querySelector('.popup__close-button'); // Кнопка закрытия  модального окно

//Открыть модального окно
function openModal(popup) {
    const closeButton = popup.querySelector('.popup__close-button');
    popup.classList.add('popup_opened');
    closeButton.addEventListener('click', ()=>{
        closeModal(popup);
    });
}

//закрыть модального окно
function closeModal(popup) {
    popupAdd.classList.remove('popup_opened');
    popupEdit.classList.remove('popup_opened');
}

addProfileButton.addEventListener('click', ()=>{
    openModal(popupAdd);
});
editProfileButton.addEventListener('click',()=>{
    openModal(popupEdit);
})


initialCards.forEach(renderCard);
