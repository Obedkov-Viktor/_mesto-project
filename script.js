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

function renderCard({name, link, openImage}) {
    const template = document.querySelector('#elements');
    const card = template.content.cloneNode(true);
    const element = card.querySelector('.element');
    const image = card.querySelector('.element__image');
    const subtitle = card.querySelector('.element__subtitle');
    const like = card.querySelector('.element__like');
    const basket = card.querySelector('.element__delete');

    const popup = document.querySelector('.popup-picture');
    const popupImage = document.querySelector('.popup__image');
    const closeButton = document.querySelector('.popup__close-button');


    const list = document.querySelector('.elements__list');

    image.src = link;
    image.alt = 'Новое изображение';
    subtitle.name = name;
    like.addEventListener('click', function (){
       like.classList.toggle('element__like_active');
    });
    basket.addEventListener('click', function (){
       element.remove();
    });
    image.addEventListener('click', function (){
        popupImage.src = this.src;
        popup.style.display = 'block';
    });

    closeButton.addEventListener('click', function (){
        popup.style.display = 'none';
    });

    return list.appendChild(card);
}

initialCards.forEach(renderCard);
