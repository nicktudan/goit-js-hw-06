// Лічильник складається зі спану і кнопок,
// які по кліку повинні збільшувати і зменшувати його значення на одиницю.

// <div id="counter">
//   <button type="button" data-action="decrement">-1</button>
//   <span id="value">0</span>
//   <button type="button" data-action="increment">+1</button>
// </div>

// 1.Створи змінну counterValue, в якій буде зберігатися поточне значення
// лічильника та ініціалізуй її значенням 0.
// 2. Додай слухачів кліків до кнопок, всередині яких збільшуй або зменшуй
// значення лічильника.
// 3. Оновлюй інтерфейс новим значенням змінної counterValue.


let counterValue = 0;

// const counterEl = document.querySelector('#counter');
let displayCounterValue = document.querySelector('#value');
let reductionBtn = document.querySelector('button[data-action="decrement"]');
let excitementBtn = document.querySelector('button[data-action="increment"]');

// console.log(reductionBtn.dataset.action);
// console.log(excitementBtn.dataset.action);

reductionBtn.addEventListener("click", () => {
    counterValue -=1;
    displayCounterValue.textContent = counterValue;
    // console.log("Button 'reductionBtn' was clicked");
});

excitementBtn.addEventListener("click", () => {
    counterValue +=1;
    displayCounterValue.textContent = counterValue;
    // console.log("Button 'excitementBtn' was clicked");
});