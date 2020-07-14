"use strict";
let nissan = 15.678,
  tesla = 123.965,
  chevrolet = 90.2345;

let sum = nissan + tesla + chevrolet;

let maxValue = Math.max(nissan, tesla, chevrolet);

let minValue = Math.min(nissan, tesla, chevrolet);

let floorCost = Math.floor(nissan) + Math.floor(tesla) + Math.floor(chevrolet);

let roundCost = Math.round(sum / 100) * 100;

let isEven;
if (sum % 2 == 0) {
  isEven = true;
} else {
  isEven = false;
}

let rest = 500 - sum;

let mean = sum.toFixed(2) / 3;

let discont = Math.floor(Math.random() * 100);

let sumWithDiscont = (sum - sum * (discont / 100)).toFixed(2);

let profit = (sum / 2 - sumWithDiscont).toFixed(2);

document.write("Максимальне значення: " + maxValue, "<br>");
document.write("Мінімальне значення: " + minValue, "<br>");
document.write("Вартість всіх товарів: " + sum, "<br>");
document.write("Округлена вартість товарів: " + floorCost, "<br>");
document.write("Округлення товарів до сотен: " + roundCost, "<br>");
document.write(
  "Чи є сума всіх товарів парним або непарним числом?: " + isEven,
  "<br>"
);
document.write("Решта при оплаті всіх товарів купюрою в 500: " + rest, "<br>");
document.write("Середнє значення цін: " + mean, "<br>");
document.write("Сума до оплати зі знижкою: " + sumWithDiscont, "<br>");
document.write("Прибуток: " + profit, "<br>");
