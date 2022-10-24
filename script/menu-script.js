let toggle = document.querySelector(".navigation");
let button = document.querySelector(".navigation__toggle");
let login = document.querySelector(".login__form");
let loginOrder = document.querySelector('.login__order')
let loginButton = document.querySelector(".navigation__login");
let loginClose = document.querySelector(".login__button-close");
let loginEnter = document.querySelector(".login__button-log");

toggle.classList.remove("navigation--nojs");

// Открытие/закрытие меню
button.onclick = function() {
  toggle.classList.toggle("navigation--opened");
  toggle.classList.toggle("navigation--closed");
};

// Открытие формы логина
loginButton.onclick = function() {
  login.classList.toggle("login__form--closed");
  toggle.classList.toggle("navigation--closed");
  toggle.classList.toggle("navigation--opened");
}

// Закрытие формы логина
loginClose.onclick = function() {
  login.classList.toggle("login__form--closed");
}

// В логин форме видоизменение текстового содержания кнопки
// в зависимости от размера экрана
let loginEnterFunc = function (size) {
  if (window.innerWidth >= size) {
    loginEnter.setAttribute("value", "Войти в личный кабинет");
  } else {
    loginEnter.setAttribute("value", "Войти");
  }
};

loginEnterFunc(767);

window.onresize = function() {
  loginEnterFunc(767);
}

// Плавный скролл
const smoothLinks = document.querySelectorAll('a[href^="#"]');
for (let smoothLink of smoothLinks) {
    smoothLink.addEventListener('click', function (evt) {
        evt.preventDefault();
        const id = smoothLink.getAttribute('href');

        document.querySelector(id).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
};

// Отмена отправки формы при регистрации
loginOrder.addEventListener('submit', function (evt) {
  evt.preventDefault();
});


// Поиск элементов отправки формы записи
let registrationOrder = document.querySelector('.registration__order');
let popUp = document.querySelector('.pop-up');
let popUpClose = popUp.querySelector('.pop-up__button');

// Открытие попапа
registrationOrder.addEventListener('submit', function(evt) {
  evt.preventDefault();
  popUp.classList.add('pop-up--open');
});

// Закрытие попапа по кнопке
popUpClose.addEventListener('click', function() {
  popUp.classList.remove('pop-up--open');
});

// Закрытие попапа при клике по подложке
popUp.addEventListener('click', function (evt) {
  if (evt.target === evt.currentTarget) {
    popUp.classList.remove('pop-up--open');
  }
});
