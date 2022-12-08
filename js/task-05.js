//* стандартное объявление ссылок на объекты
// const input = document.querySelector('input#name-input');
// const span = document.querySelector('span#name-output');

// console.log(input);
// console.log(span);

//* Объявление ссылок через один объект refs (при вызове использовать refs.input или refs.span)
const refs = {
    input: document.querySelector('input#name-input'),
    span: document.querySelector('span#name-output')
};

//* вешаем слушатель событий
// input.addEventListener('input', function (event) {
//     console.log(event.currentTarget.value);
//     span.textContent = event.currentTarget.value || (span.textContent = 'Anonymous'); 
// });

refs.input.addEventListener('input', function (event) {
    console.log(event.currentTarget.value);
    refs.span.textContent = event.currentTarget.value || (refs.span.textContent = 'Anonymous');
})