var toggle = document.querySelector(".navigation");
var button = document.querySelector(".navigation__toggle");
var login = document.querySelector(".login__form");
var loginButton = document.querySelector(".navigation__login");
var loginClose = document.querySelector(".login__button-close");
var loginEnter = document.querySelector(".login__button-log");

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
if (window.innerWidth >= 767) {
  loginEnter.setAttribute("value", "Войти в личный кабинет");
} else {
  loginEnter.setAttribute("value", "Войти");
}

window.onresize = function() {
  if (window.innerWidth >= 767) {
    loginEnter.setAttribute("value", "Войти в личный кабинет");
  } else {
    loginEnter.setAttribute("value", "Войти");
  }
}

// Плавный скролл
const smoothLinks = document.querySelectorAll('a[href^="#"]');
for (let smoothLink of smoothLinks) {
    smoothLink.addEventListener('click', function (e) {
        e.preventDefault();
        const id = smoothLink.getAttribute('href');

        document.querySelector(id).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
};
