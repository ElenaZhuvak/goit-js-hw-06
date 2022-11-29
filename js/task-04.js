// Ссылки на объекты
const btnDecrementRef = document.querySelector('[data-action="decrement"]');
const btnIncrementRef = document.querySelector('[data-action="increment"]');
const valueRef = document.querySelector('#value');

console.log(btnDecrementRef);
console.log(btnIncrementRef);
console.log(valueRef);
// ==============
//* так как переменная меняет свое значение используем let
let counterValue = 0; 

// Вешаем слушатель события

btnDecrementRef.addEventListener('click', function () {
    // console.log('Клик по кнопке -');
    counterValue -= 1;
    // valueRef.innerHTML = counterValue;
    valueRef.textContent = counterValue;
});

btnIncrementRef.addEventListener('click', function () {
    // console.log('Клик по кнопке +');
    counterValue += 1;
    // valueRef.innerHTML = counterValue;
    valueRef.textContent = counterValue;
});
  // работает через innerHTML и через textContent










//? 
// !
//*  
// TODO 