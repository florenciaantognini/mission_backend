const add = document.querySelector('#add');
const subtract = document.querySelector('#subtract');
const quantity = document.querySelector('#quantity');

/*console.log(add, subtract, quantity);*/


add.addEventListener('click', () => quantity.value = Number(quantity.value) + 1);/*convierto a numero la candena*/

subtract.addEventListener('click', () => quantity.value = Number(quantity.value) - 1);

