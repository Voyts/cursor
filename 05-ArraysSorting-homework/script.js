//Function 1
const getRandomArray = (length, min, max) => {
    let randomArr = [];
    for (let i = 0; i < length; i++) {
        randomArr.push(Math.floor(Math.random() * (max - min) + min));
    }
    return randomArr;
}

//Function 2
const getModa = (...numbers) => {
    return numbers.sort((a, b) =>
        numbers.filter(v => v === a).length -
        numbers.filter(v => v === b).length
    ).pop();
}

//Function 3
const getAverage = (...numbers) => {
    let sum = numbers.reduce((a, b) => a + b, 0);
    let result = sum / numbers.length;
    return result;
}


//Function 4
const getMedian = (...numbers) => {
    numbers.sort((a, b) => a - b);
    if (numbers.length % 2 === 0) {
        return (numbers[numbers.length / 2 - 1] + numbers[numbers.length / 2]) / 2;
    } else {
        return numbers[(numbers.length - 1) / 2];
    }
}


//Function 5
const filterEvenNumbers = (...numbers) => {
    let result = numbers.filter(elem => elem % 2 !== 0);
    return result;
}

//Function 6
const countPositiveNumbers = (...numbers) => {
    let positiveNumbers = numbers.filter(v => v > 0).length;
    return positiveNumbers;
}

//Function 7
const getDividedByFive = (...numbers) => {
    return numbers.filter(num => num % 5 === 0)
}


console.log(getRandomArray(10, 1, 14));
console.log(getAverage(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2));
console.log(getMedian(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2));
console.log(filterEvenNumbers(1, 2, 3, 4, 5));
console.log(countPositiveNumbers(1, -2, 3, -4, -5, 6));
console.log(getDividedByFive(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2));
console.log(getModa(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2));

let resultFunc = document.write(`1. Створіть функцію getRandomArray(length, min, max) – яка повертає масив випадкових цілих чисел. ${getRandomArray(10, 1, 14)}<br>
2. Створіть функцію getModa(...numbers) – яка вираховує моду всіх переданих в неї аргументів <br> ${getModa(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2)} <br>
3. Створіть функцію getAverage(...numbers) – яка рахує середнє арифметичне всіх переданих в неї аргументів. <br> ${getAverage(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2)}<br>
4. Створіть функцію getMedian(...numbers) – яка рахує медіану всіх переданих в неї аргументів.<br> ${getMedian(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2)}<br>
5. Створіть функцію filterEvenNumbers(...numbers) – яка фільтрує парні числа передані як аргументи функції.<br> ${filterEvenNumbers(1, 2, 3, 4, 5, 6)}<br>
6. Створіть функцію countPositiveNumbers(...numbers) – яка порахує кількість чисел більших 0: <br> ${countPositiveNumbers(1, -2, 3, -4, -5, 6)}<br>
7. Створіть функцію getDividedByFive(...numbers) – яка відфільтрує усі елементи в масиві та залишить тільки ті, які діляться на ціло на 5: <br> ${getDividedByFive(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2)}<br>`);