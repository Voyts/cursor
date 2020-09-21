class Student {
    constructor(university, course, fullName) {
        this.university = university;
        this.course = course;
        this.fullName = fullName;
        this._dismissed = false;
        this._marks = [5, 4, 4, 5];
    }

    getInfo() {
        return `Студент ${this.course}-го курсу ${this.university}, ${this.fullName}`;
    }

    get marks() {
        if (!this._dismissed) {
            return this._marks;
        }
        return null;
    }

    set marks(mark) {
        if (this._dismissed) {
            return null;
        }
        return this._marks.push(mark);
    }



    getAverageMark() {
        return this._marks.reduce((a, b) => a + b) / this._marks.length
            .toFixed(2);
    }
    dismiss() {
        return this._dismissed = true;
    }

    recover() {
        return this._dismissed = false;
    }
}
const student = new Student('NUFT', '4', 'Ivan Ivanov');

console.log(student);
console.log(student.getInfo());
console.log('Оцінки:', student._marks);
student.marks = 2;
console.log('Оцінки:', student._marks);
console.log('Середній бал:', student.getAverageMark());
student.dismiss();
console.log('Відраховано, оцінки:', student.marks);
student.recover();
console.log('Поновлено, оцінки:', student._marks);

class ScholarshipStudent extends Student {
    constructor(university, course, fullName) {
        super(university, course, fullName);
        this.getScolarship();
    }

    getScolarship() {
        setTimeout(() => {
            if (this._dismissed && this.getAverageMark() >= 4) {
                return console.log('Ви отримали 1400 грн. стипендія')
            } else {
                return console.log('Без стипендії');
            }
        }, 30000);
    }
}
const scholarshipStudent = new ScholarshipStudent('NTU', '1', 'Petro Petrov');
console.log(scholarshipStudent);
console.log(scholarshipStudent.getInfo());
scholarshipStudent.marks = 5;
console.log('Оцінки студента:', scholarshipStudent.marks);
console.log('Середній бал:', scholarshipStudent.getAverageMark());