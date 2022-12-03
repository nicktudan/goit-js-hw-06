const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

// Напиши скрипт, який для кожного елемента масиву ingredients:

// Створить окремий елемент < li >.Обов'язково використовуй метод 
// document.createElement().
// Додасть назву інгредієнта як його текстовий вміст.
// Додасть елементу клас item.
// Після чого, вставить усі <li> за одну операцію у список ul#ingredients.

const listEl = document.querySelector('#ingredients');

const liArr = [];

ingredients.forEach(ingredient => {
  const liEl = document.createElement('li');
  liEl.classList.add('js-item');
  liEl.textContent = `${ingredient}`;
  liArr.push(liEl);
});

listEl.append(...liArr);

console.log(listEl);