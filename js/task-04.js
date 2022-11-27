// Ссылки на объекты
const valueRef = document.querySelector('#value');
const btnDecrementRef = document.querySelector('[data-action="decrement"]');
const btnIncrementRef = document.querySelector('[data-action="increment"]');

console.log(valueRef);
console.log(btnDecrementRef);
console.log(btnIncrementRef);
// ==============

// Вешаем слушатель события
const counterValue = 0;
btnDecrementRef.addEventListener('click', function () {
    // console.log('Клик по кнопке -');
    counterValue -= 1;
});

btnIncrementRef.addEventListener('click', function () {
    // console.log('Клик по кнопке +');
    counterValue += 1;
});











//? 
// !
//*  
// TODO 