// Получить кнопку "Начать расчет" через id
let startBtn = document.getElementById('start');
let budgetValue = document.getElementsByClassName('budget-value')[0];
console.log(budgetValue);
let dayBudgetValue = document.getElementsByClassName('daybudget-value')[0];
let levelValue = document.getElementsByClassName('level-value')[0];
let expensesValue = document.getElementsByClassName('expenses-value')[0];
let optionalExpensesValue = document.getElementsByClassName('optionalexpenses-value')[0];
let incomeValue = document.getElementsByClassName('income-value')[0];
let monthSavingsValue = document.getElementsByClassName('monthsavings-value')[0];
let yearSavingsValue = document.getElementsByClassName('yearsavings-value')[0];

// let resultTable = document.getElementsByClassName('result-table');
//Получить поля(input) c обязательными расходами через класс. (class=”expenses-item”)

let inputExpenses = document.getElementsByClassName('expenses-item');

//Получить кнопки “Утвердить” и “Рассчитать” через Tag, каждую в своей переменной. 
let expensesBtn = document.getElementsByTagName('button')[0];
let optionalExpensesBtn = document.getElementsByTagName('button')[1];
let countBtn = document.getElementsByTagName('button')[2];

//Получить поля для ввода необязательных расходов (optionalexpenses-item) при помощи querySelectorAll
let inputOptional = document.querySelectorAll('.optionalexpenses-item');

//Получить оставшиеся поля через querySelector (статьи возможного дохода, чекбокс, сумма, процент, год, месяц, день)

let incomeItem = document.querySelector('.choose-income');
let checkSavings = document.querySelector('#savings')
let sumValue = document.querySelector('.choose-sum');
let percentValue = document.querySelector('.choose-percent');
let yearValue = document.querySelector('.year-value');
let monthValue = document.querySelector('.month-value');
let dayValue = document.querySelector('.day-value');

let money;
let time;


startBtn.addEventListener('click', function () {
    time = prompt("Введите дату в формате YYYY-MM-DD", "");
    money = +prompt("Ваш бюджет на месяц?", "");

    while (isNaN(money) || money == '' || money == null) {
        money = +prompt("Ваш бюджет на месяц?", "");
    }
    appDate.bjudjet = money;
    appDate.timeData = time;
    budgetValue.textContent = money.toFixed();
    yearValue.value = new Date(Date.parse(time)).getFullYear();
    monthValue.value = new Date(Date.parse(time)).getMonth() + 1;
    dayValue.value = new Date(Date.parse(time)).getDate();
})

expensesBtn.addEventListener('click', function () {
    let sum = 0;
    for (let i = 0; i < inputExpenses.length; i++) {
        let answer1 = inputExpenses[i].value;
        let answer2 = inputExpenses[++i].value;

        if ((typeof (answer1)) === 'string' && (typeof (answer1)) !== null &&
            (typeof (answer2)) === 'string' && (typeof (answer2)) !== null &&
            answer1 != '' && answer2 != '' && answer1.length < 50) {
            console.log("done");
            appDate.expenses[answer1] = answer2;
            sum += +answer2;
        } else {
            i = i - 1;
        }
    }
    expensesValue.textContent = sum;
});

optionalExpensesBtn.addEventListener('click', function () {
    for (let i = 0; i < inputOptional.length; i++) {
        let opt = inputOptional[i].value;
        appDate.optionalExpenses[i] = opt;
        optionalExpensesValue.textContent += appDate.optionalExpenses[i] + ' ';
    }
});

countBtn.addEventListener('click', function () {
    if (appDate.bjudjet != undefined) {
        appDate.moneyPerDay = (appDate.bjudjet / 30).toFixed();
        dayBudgetValue.textContent = appDate.moneyPerDay;

        if (appDate.moneyPerDay < 100) {
            levelValue.textContent = "Minimum";
        } else if (appDate.moneyPerDay > 100 && appDate.moneyPerDay < 2000) {
            levelValue.textContent = "Medimum";
        } else if (appDate.moneyPerDay > 2000) {
            levelValue.textContent = "Maximum";
        } else {
            levelValue.textContent = "Mistake";
        }
    } else {
        dayBudgetValue.textContent = 'Mistake';
    }
});

incomeItem.addEventListener('input', function () {
    let items = incomeItem.value;
    appDate.income = items.split(', ');
    incomeValue.textContent = appDate.income;
});

checkSavings.addEventListener('click', function () {
    if (appDate.savings == true) {
        appDate.savings = false;
    } else {
        appDate.savings = true;
    }
});

sumValue.addEventListener('input', function () {
    if (appDate.savings == true) {
        let sum = +sumValue.value;
        let percent = +percentValue.value;
        appDate.monthIncome = sum / 100 / 12 * percent;
        appDate.yearIncome = sum / 100 * percent;

        monthSavingsValue.textContent = appDate.monthIncome.toFixed(1);
        yearSavingsValue.textContent = appDate.yearIncome.toFixed(1);
    }
});

percentValue.addEventListener('input', function () {
    if (appDate.savings == true) {
        let sum = +sumValue.value;
        let percent = +percentValue.value;
        appDate.monthIncome = sum / 100 / 12 * percent;
        appDate.yearIncome = sum / 100 * percent;

        monthSavingsValue.textContent = appDate.monthIncome.toFixed(1);
        yearSavingsValue.textContent = appDate.yearIncome.toFixed(1);
    }
});



let appDate = {
    bjudjet: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false
};