const students = [{
    name: "Tanya",
    course: 3,
    subjects: {
        math: [4, 4, 3, 4],
        algorithms: [3, 3, 3, 4, 4, 4],
        data_science: [5, 5, 3, 4]
    }
}, {
    name: "Victor",
    course: 4,
    subjects: {
        physics: [5, 5, 5, 3],
        economics: [2, 3, 3, 3, 3, 5],
        geometry: [5, 5, 2, 3, 5]
    }
}, {
    name: "Anton",
    course: 2,
    subjects: {
        statistics: [4, 5, 5, 5, 5, 3, 4, 3, 4, 5],
        english: [5, 3],
        cosmology: [5, 5, 5, 5]
    }
}];

//Function 1
const getSubjects = (student) => {
    const subjectList = [];

    for (key in student.subjects) {
        subjectList.push((key[0].toUpperCase() + key.slice(1).toLowerCase())
            .split("_")
            .join(" "));
    }
    return subjectList;
}
console.log(`Список предметів : ${getSubjects(students[0])}.`);

//Function 2
const getAverageMark = (student) => {
    let marksArray = [];
    Object.values(student.subjects).forEach((item) => marksArray.push(...item));
    const total = marksArray.reduce((acc, item) => acc + item, 0);
    const averageMark = Math.round(total / marksArray.length * 100) / 100;
    return averageMark;
}
const averageMark = getAverageMark(students[0]);
console.log(`Середня оцінка по всім предметам: ${averageMark}`);



//Function 3
const getStudentInfo = (student) => ({
    course: student.course,
    name: student.name,
    averageMark: getAverageMark(student),
});
console.log(`Загальна інформація про студента: ${JSON.stringify(getStudentInfo(students[0]))}`);

//Function 4
const getStudentsNames = (students) => {
    const names = []
    students.forEach(el => names.push(el.name))

    return names.sort()
}

console.log(`Імена студентів в алфавітному порядку: ${getStudentsNames(students)}`);

//Function 5
const getBestStudent = students => {
    let bestStudent = "";
    let max = 0;
    for (let i = 0; i < students.length; i++) {
        if (Number(getAverageMark(students[i])) > max) {
            max = Number(getAverageMark(students[i]));
            bestStudent = students[i].name;
        }
    }
    return bestStudent
}
console.log(`Кращий студент : ${getBestStudent(students)}`);

//Function 6
const calculateWordLetters = (word) => {
    const calcLetters = {};
    word.split('').map(el => (calcLetters[el] = !calcLetters[el] ? 1 : calcLetters[el] + 1));
    return calcLetters;
}
console.log(` ${JSON.stringify(calculateWordLetters('тест'))}`);