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
    const card = template.content.querySelector('.element').cloneNode(true);
    const imageElement = card.querySelector('.element__image');
    const subtitle = card.querySelector('.element__subtitle');
    const like = card.querySelector('.element__like');
    const basket = card.querySelector('.element__delete');
    const list = document.querySelector('.elements__list');
    imageElement.src = link;
    imageElement.alt = 'Новое изображение';

    subtitle.textContent = name;
    like.addEventListener('click', function () {
        like.classList.toggle('element__like_active');
    });
    basket.addEventListener('click', function () {
        card.remove();
    });

    ///////// обработчик события клика на изображение ///////////

    imageElement.addEventListener('click', function (){
        const popupImage = document.querySelector('.popup-picture');
        const popupCloseButton = popupImage.querySelector('.popup__close-button');
        const popupImageElement = popupImage.querySelector('.popup__image');
        const popupCaption = popupImage.querySelector('.popup__caption');

        popupImageElement.src = link;
        popupImageElement.alt = name;
        popupCaption.textContent = name;
        openModal(popupImage);

        popupCloseButton.addEventListener('click', function (){
            closeModal(popupImage);
        })
    })

    return list.appendChild(card);
}

const addProfileButton = document.querySelector('.profile__add-button'); //кнопка "Добавление профиль"
const editProfileButton = document.querySelector('.profile__edit-button');//кнопка "Редактировать"
const popupAdd = document.querySelector('.popup-add'); //модальное кнопка для добавление картинки и ссылки
const popupEdit = document.querySelector('.popup-edit');//Модальное кнопка для редактирование профиль
const popupCloseButton = document.querySelector('.popup__close-button'); // Кнопка закрытия  модального окно
// const popupImage = document.querySelector('.popup-picture');//Модальное кнопка для октрытая фотография

/////////////////    Открыть модального окно    /////////////////////
function openModal(popup) {
    const closeButton = popup.querySelector('.popup__close-button');
    popup.classList.add('popup_opened');
    closeButton.addEventListener('click', () => {
        closeModal(popup);
    });
}

///////        закрыть модального окно     //////////////
function closeModal(popup) {
    popupAdd.classList.remove('popup_opened');
    popupEdit.classList.remove('popup_opened');
}

addProfileButton.addEventListener('click', () => {
    openModal(popupAdd);
});
editProfileButton.addEventListener('click', () => {
    openModal(popupEdit);
})

initialCards.forEach(renderCard);

///////////////    Редактирование профиль    //////////////////

const currentNameElement = document.querySelector('.profile__name');
const currentJobElement = document.querySelector('.profile__subtitle');

const currentName = currentNameElement.textContent;
const currentJob = currentJobElement.textContent;

// Найдите поля формы в DOM и установите их значения
const nameInput = document.querySelector('.popup__input[name="name"]');
const jobInput = document.querySelector('.popup__input[name="about"]');

nameInput.value = currentName;
jobInput.value = currentJob;

// Добавьте обработчик события для отправки формы

document.querySelector('.profile_edit').addEventListener('submit', handleFormSubmit);

function handleFormSubmit(evt) {
    evt.preventDefault();

    const nameValue = nameInput.value;
    const jobValue = jobInput.value;

    const nameOutput = document.querySelector('.profile__name');
    const jobOutput = document.querySelector('.profile__subtitle');

    nameOutput.textContent = nameValue;
    jobOutput.textContent = jobValue;

    closeModal();
}

/////////  Добавление картинки  /////////////

const popupForm = document.querySelector('.profile_add');

popupForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const titleInput = popupForm.querySelector('.popup__input[name="title"]').value;
    const imageInput = popupForm.querySelector('.popup__input[name="link"]').value;
    renderCard({name:titleInput, link:imageInput});
    closeModal();
});

