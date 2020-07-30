const students = ["Олександр", "Ігор", "Олена", "Іра", "Олексій", "Світлана"];
const themes = [
    "Диференційне рівняння",
    "Теорія автоматів",
    "Алгоритми і структури даних",
];
const marks = [4, 5, 5, 3, 4, 5];


//Розділіть студентів на пари(хлопець + дівчина) для работи над проєктом. У вас повинен вийти вкладений масив з парами студентів: [["Олександр", "Олена"], [..], [...]];
const getPairs = (students) => {
    let pairs = [];

    pairs.push([students[0], students[2]]);
    pairs.push([students[1], students[3]]);
    pairs.push([students[4], students[5]]);

    return pairs;
};

//Зіставте пари з попереднього завдання та теми проєктів, над якими студенти будуть працювати. Повинен вийти вкладений масив виду: [["Олександр і Олена", "Теорія автоматів"], [...], [...]]
const getThemes = (pairs, themes) => {
    let pairThemes = [];
    for (let i = 0; i < pairs.length; i++) {
        pairThemes[i] = [pairs[i].join(" і "), themes[i]];
    }
    return pairThemes;
};

//Зіставте оцінки(marks) зі студентом(students): [["Саша", 4], [...], [...]]
const getMarks = (students, marks) => {
    let studentsMark = [];
    for (let i = 0; i < students.length; i++) {
        studentsMark[i] = [students[i], marks[i]];
    }
    return studentsMark;
}

//Поставте кожній парі випадкову оцінку(від 1 до 5) за проєкт(тут функція буде нечистою, але не повинна мутувати массив): [["Олександр і Олена", "Теорія автоматів", 5], [...], [...]]

const randomMark = (min = 1, max = 5) => {
    return Math.floor(Math.random() * (max - min)) + min;
}
const getRandomMark = (pairThemes) => {
    let projectMark = pairThemes.map((arr) => arr.slice());
    for (let i = 0; i < projectMark.length; i++) {
        projectMark[i].push(randomMark());
    }
    return projectMark;
}



const pairs = getPairs(students);
console.log(
    "Пари студентів: ",
    pairs
);

const pairThemes = getThemes(pairs, themes);
console.log(
    "Пари студентів та теми проєктів: ",
    pairThemes
);

const studentsMark = getMarks(students, marks);
console.log("Оцінки студентів: ", studentsMark);


const projectMark = getRandomMark(pairThemes);
console.log("Оцінки проєктів: ", projectMark);