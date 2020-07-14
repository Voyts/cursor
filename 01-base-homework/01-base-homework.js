"use strict";
let nissan = 15.678,
  tesla = 123.965,
  chevrolet = 90.2345;

let sum = nissan + tesla + chevrolet;

let maxValue = Math.max(nissan, tesla, chevrolet);

let minValue = Math.min(nissan, tesla, chevrolet);

let floorCost = Math.floor(nissan) + Math.floor(tesla) + Math.floor(chevrolet);

let roundCost = Math.round(sum / 100) * 100;

console.log("Максимальне значення: " + maxValue);

console.log("Мінімальне значення: " + minValue);

console.log("Вартість всіх товарів: " + sum);

console.log("Округлена вартість товарів: " + floorCost);

console.log("Округлення товарів до сотен: " + roundCost);

if (sum % 2 == 0) {
  console.log(true);
} else {
  console.log(false);
}

let rest = 500 - sum;
console.log("Решта: " + rest);

let mean = sum.toFixed(2) / 3;
console.log("Середнє значення: " + mean);

let discont = Math.floor(Math.random() * 10);

console.log("Знижка : " + discont);

let sumWithDiscont = sum - sum * (discont / 100);
console.log("Сума зі знижкою : " + sumWithDiscont.toFixed(2));

document.write(sum);
