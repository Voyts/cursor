// Перевірка для першої функції
const isNumeric = (value) => {
    return !isNaN(parseFloat(value)) && isFinite(parseFloat(value));
}


//  Function 1
const getMaxDigit = (number) => {
    if (isNumeric(number)) {
        let arr = Math.abs(number).toString().split('');
        return Math.max(...arr);
    } else {
        console.log("Please, write number")
    }

}


//  Function 2
const exponentNumber = (base = 8, exp) => {
    let result = 1;
    for (let i = 0; i < exp; i++) {
        result = result * base;
    }
    return (result);
}


//  Function 3
function capitalizeFirstLetter(str) {
    if (typeof str == "string") {
        str = str.toLowerCase();
        return str && str[0].toUpperCase() + str.slice(1);
    } else {
        console.log("Write string, please!");
    }
}


//  Function 4
const calculateTaxes = (sum = 1000, tax = 19.5) => {
    let sumTax = sum - (sum * tax / 100);
    return sumTax;
}


//Function 5
const getRandomNumber = (N, M) => {
    return Math.floor(Math.random() * (M - N) + N);
}


//  Function 6
const countLetter = (letter, word) => {
    let counter = 0;
    for (let i = 0; i < word.length; i++) {
        if (word[i].toLowerCase() === letter.toLowerCase()) counter++;
    }
    return counter;
};

//  Function 7
const convertCurrency = (money = "100$") => {
    let changeResult;
    if (money.includes("$")) {
        changeResult = (parseInt(money) * 27.7).toString() + "UAH";
    } else if (money.toUpperCase().includes("UAH")) {
        changeResult = (parseInt(money) / 27.7).toString() + "$";
    } else {
        return "Iнші валюти не конвертуються";
    }
    return changeResult;
}

//  Function 8
const getRandomPass = (passLength = 8) => {
    let password = '';
    for (let i = 0; i < passLength; i++) {
        password += getRandomNumber(0, 10);
    }
    return password;
}

//  Function 9
const deleteLetters = (letter = 'a', word = "blablabla") => {
    let deleteResult = word.toLowerCase().split('');
    for (let i = 0; i < deleteResult.length; i++) {
        if (deleteResult[i] === letter.toLowerCase()) deleteResult.splice(i, 1)
    };
    deleteResult = deleteResult.join('');
    return deleteResult;
}

//  Function 10
const isPalindrome = (str) => {
    let original = str.replace(/[\s"'.,-\/#!$%\^&*;:{}=\-_`~()\\\[\]@+|?><]/g, "").toLowerCase();
    let reverse = original.split('').reverse().join('');
    if (original == reverse) {
        return true;
    } else {
        return false;
    }

}


//  Function 11
const deleteDuplicateLetter = (str) => {
    const lowerStr = str.toLowerCase();
    let deleteLetter = "";
    for (let i = 0; i < str.length; i++) {
        if (lowerStr.indexOf(lowerStr[i]) === lowerStr.lastIndexOf(lowerStr[i])) {
            deleteLetter += str[i];
        }
    }
    return deleteLetter.replace(/\s/g, "");
}


console.log(getMaxDigit(3456));
console.log(exponentNumber(2, 30));
console.log(capitalizeFirstLetter("олександр"));
console.log(calculateTaxes(1000, 19.5));
console.log(getRandomNumber(1, 20));
console.log(countLetter("а", "Асталавіста"));
console.log(convertCurrency("100$"));
console.log(getRandomPass(8));
console.log(deleteLetters("a", "blablabla"));
console.log(isPalindrome("Я несу гусеня"));
console.log(deleteDuplicateLetter("Бісквіт був дуже ніжним"));

document.writeln(`1. Найбільша цифра з числа 347845785645: ${getMaxDigit(347845785645)}, <br>
                2. Зводимо 2 в степінь 30: ${exponentNumber(2, 30)}, <br>
                3. Форматуємо ім'я олександр: ${capitalizeFirstLetter("олександр")}, <br>
                4. Залишок після оплати податків (Податок = 18% + 1.5% -> 19.5%) = ${calculateTaxes(1000, 19.5)}, <br>
                5. Випадкове число в діапазоні 1 - 20: ${getRandomNumber(1, 20)}, <br>
                6. Кількість повторення букви "а" в слові "Асталавіста": ${countLetter("а", "Асталавіста")}, <br>
                7. Конвертер валют = ${convertCurrency("100$")}, <br>
                8. Генератор паролю довжиною в 8 чисел: ${getRandomPass(8)}, <br>
                9. Видаляємо літеру "а" в слові "blablabla": ${deleteLetters("а", "blablabla")}, <br>
                10. Перевірка на паліндром речення "Я несу гусеня": ${isPalindrome("Я несу гусеня")}, <br>
                11. Результат видалення з речення букв, які зустрічаються більше одного разу: ${deleteDuplicateLetter("Бісквіт був дуже ніжним")}`);