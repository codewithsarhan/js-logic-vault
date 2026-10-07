// Student Result checker

const students = [
    {
        name: "Ali",
        rollNumber: 101,
        marks: 78,
        attendance: 85,
    },
    {
        name: "Ahmed",
        rollNumber: 102,
        marks: 45,
        attendance: 72,
    },
    {
        name: "Sara",
        rollNumber: 103,
        marks: 92,
        attendance: 91,
    },
    {
        name: "Hamza",
        rollNumber: 104,
        marks: 33,
        attendance: 68,
    },
];

let showStudent = () => {
    console.log(students);
};

let findStudent = () => {
    let enterRollNum = Number(prompt("Enter Your Student Roll Number"));

    let studentDetails = students.find(
        (students) => students.rollNumber === enterRollNum,
    );
    console.log(studentDetails);
};

let checkResult = () => {
    for (let i = 0; i < students.length; i++) {
        if (students[i].marks > 50 && students[i].attendance >= 72) {
            console.log(`Name : ${students[i].name} Marks : 100 / ${students[i].marks} Attendance : 100 / ${students[i].attendance} result : Passed`);
        } else {
            console.log(`Name : ${students[i].name} Marks : 100 / ${students[i].marks} Attendance : 100 / ${students[i].attendance} result : Failed`);
        }
    }
};


let checkMarks = () => {

    let highestMarks = students[0];

    for (let i = 0; i < students.length; i++) {

        if (students[i].marks > highestMarks.marks) {
            highestMarks = students[i];

        }

    }

    console.log(highestMarks);

}
checkMarks()

