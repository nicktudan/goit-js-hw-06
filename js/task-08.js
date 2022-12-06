// Напиши скрипт управління формою логіна.

// <form class="login-form">
//   <label>
//     Email
//     <input type="email" name="email" />
//   </label>
//   <label>
//     Password
//     <input type="password" name="password" />
//   </label>
//   <button type="submit">Login</button>
// </form>

// 1. Обробка відправлення форми form.login - form повинна відбуватися 
// відповідно до події submit.
// 2. Під час відправлення форми сторінка не повинна перезавантажуватися.
// 3. Якщо у формі є незаповнені поля, виводь alert з попередженням про те,
//     що всі поля повинні бути заповнені.
// 4. Якщо користувач заповнив усі поля і відправив форму,
//     збери значення полів в об'єкт, де ім'я поля буде ім'ям властивості, 
//     а значення поля - значенням властивості.
// 5. Для доступу до елементів форми використовуй властивість elements.
// 6. Виведи об'єкт із введеними даними в консоль і очисти значення полів форми 
// методом reset.


const formEl = document.querySelector('.login-form');

formEl.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
    event.preventDefault()

    const {
        elements: { email, password },
    } = event.currentTarget; 

    if (email.value.trim() === "" || password.value.trim() === "") {
        return alert('WARNING! All fields are mandatory!');
    };

    const userData = {
        email: email.value,
        password: password.value,
    };

    console.log(userData);
    event.currentTarget.reset();
};