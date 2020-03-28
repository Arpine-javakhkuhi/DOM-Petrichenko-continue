// Получить кнопку "Начать расчет" через id
let btn = document.getElementById('start');
console.log(btn);
let resultTable = document.getElementsByClassName('result-table');
console.log(resultTable);

//Получить поля(input) c обязательными расходами через класс. (class=”expenses-item”)

let inputExpenses = document.getElementsByClassName('expenses-item');
console.log(inputExpenses);

//Получить кнопки “Утвердить” и “Рассчитать” через Tag, каждую в своей переменной. 
let itemBtn = document.getElementsByTagName ('button');
console.log(itemBtn[0]);
console.log(itemBtn[1]);
console.log(itemBtn[2]);

//Получить поля для ввода необязательных расходов (optionalexpenses-item) при помощи querySelectorAll

let inputOptional = document.querySelectorAll('.optionalexpenses-item');
console.log(inputOptional);

//Получить оставшиеся поля через querySelector (статьи возможного дохода, чекбокс, сумма, процент, год, месяц, день)

let incomeLable = document.querySelector('.choose-income-label');
console.log(incomeLable);

let checkbox = document.querySelector('.checksavings');
console.log(checkbox);

let sum = document.querySelector('label');
console.log(sum);

let percent = document.querySelectorAll('label');
console.log(percent[1]);

let year = document.querySelector('.year');
console.log(year);
let month = document.querySelector('.month');
console.log(month);
let day = document.querySelector('.day');
console.log(day);