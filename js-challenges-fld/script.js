// Student Profle Analyzer ::==
let studentData = [

    { name: "ali", marks: 78 },
    { name: "hamza", marks: 45 },
    { name: "Sara", marks: 92 },
    { name: "Zain", marks: 61 },
    { name: "Ayesha", marks: 35 },

]

let totalCalculate = studentData[0].marks + studentData[1].marks
    + studentData[2].marks + studentData[3].marks + studentData[4].marks;
console.log(totalCalculate);

let average = totalCalculate / 3;
console.log(average);

let highestMarks = Math.max(studentData[0].marks, studentData[1].marks,
    studentData[2].marks, studentData[3].marks, studentData[4].marks,
)
console.log(highestMarks);


let lowestMarks = Math.min(studentData[0].marks, studentData[1].marks,
    studentData[2].marks, studentData[3].marks, studentData[4].marks,
)
console.log(lowestMarks);


function resultCheckFunc (studentMarks , studentName)  {

if (studentMarks >= 50) {

    console.log(`${studentName} is passed with ${studentMarks} Marks.`);

} else {

    console.log(`${studentName} is failed ${studentMarks} Marks`);

}

}

resultCheckFunc(studentData[0].marks , studentData[0].name)