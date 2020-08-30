const ukraine = {
    tax: 0.195,
    middleSalary: 1789,
    vacancies: 11476
};
const latvia = {
    tax: 0.25,
    middleSalary: 1586,
    vacancies: 3921
};
const litva = {
    tax: 0.15,
    middleSalary: 1509,
    vacancies: 1114
};

// 1
function getMyTaxes(salary) {
    return +(salary * this.tax).toFixed(2);
}


//2
function getMiddleTaxes() {
    return +(this.tax * this.middleSalary).toFixed(2);
}

//3
function getTotalTaxes() {
    return +(this.tax * this.middleSalary * this.vacancies).toFixed(2);
}
//4
function getMySalary(country) {
    setInterval(() => {
        let salary = Math.round(Math.random() * (2000 - 1500 + 1)) + 1500;
        let profit = salary - getMyTaxes.call(country, salary);
        let obj = {};
        obj.salary = salary,
            obj.tax = getMyTaxes.call(country, salary),
            obj.profit = +profit.toFixed(2);
        console.log(obj)
    }, 10000)
}


console.log(`Розрахунок податку: ${getMyTaxes.call(ukraine, 1500)}`);

console.log(`Розрахунок середнього податку: ${getMiddleTaxes.call(latvia)}`);

console.log(`Розрахунок загальної суми податку: ${getTotalTaxes.call(litva)}`);

getMySalary(ukraine)