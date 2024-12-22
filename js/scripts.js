 document.querySelector('html').style.scrollBehavior = 'smooth'; //плавная прокрутка

// форма
function subscribe(event) {
    event.preventDefault(); // предотвращаем стандартное поведение формы

    // Получаем значение имени из поля ввода
    const name = document.getElementById('name').value;

    // Изменяем текст сообщения
    const messageDiv = document.getElementById('message');
    messageDiv.innerText = `Свяжемся с Вами позже, ${name}!`;

    // Очищаем поля формы
    document.getElementById('subscribe-form').reset();
}


const slider = document.querySelector('.slider');
const prevButton = document.querySelector('.prev-button');
const nextButton = document.querySelector('.next-button');
const slides = Array.from(slider.querySelectorAll('img'));
const slideCount = slides.length;
let slideIndex = 0;

prevButton.addEventListener('click', () => {
  slideIndex = (slideIndex - 1 + slideCount) % slideCount;
  slide();
});

nextButton.addEventListener('click', () => {
  slideIndex = (slideIndex + 1) % slideCount;
  slide();
});

const slide = () => {
  const imageWidth = slider.clientWidth;
  const slideOffset = -slideIndex * imageWidth;
  slider.style.transform = `translateX(${slideOffset}px)`;
}

window.addEventListener('load', () => {
  slide();
});