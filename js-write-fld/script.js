// Student Result Analyzer ++++++++++++++++++++

let studentData = {

    name: "Sarhan",
    age: 16,
    subjectMarks: [100, 200, 140, 130, 120],
    attendace: 80,

}

let stMarks = studentData.subjectMarks;

let maxMarksPerSubject = 200;
let totalPossibleMarks = stMarks.length * maxMarksPerSubject;


let totalMarks = stMarks.reduce((sum, curr) => sum + curr, 0);

let percentage = (totalMarks / totalPossibleMarks) * 100;

console.log(`Total Marks : ${totalMarks}`);
console.log(`Percentage : ${percentage.toFixed(2)}%`);

let passingMarks = 40;

let passesAllSubj = stMarks.every(stMarks => stMarks >= passingMarks);

let subj = "";

if (passesAllSubj) {

    subj = "passed"

} else {
    subj = "fail"
}

let student_Attendance = studentData.attendace;

let st_Attedance = "";

if (student_Attendance >= 70) {

    st_Attedance = "Eligible"

} else {

    st_Attedance = "Not Eligible"
}

let result = "";

if (subj === "passed" && st_Attedance === "Eligible") {
    result = "Passed"
    console.log(result);
} else if (subj === "passed") {
    result = "Subject Passed Attendace Not Eligible";
    console.log(result);
} else {
    result = "Not Eligible";
    console.log(result);
}

let grade = "";

if (percentage >= 80) {
    grade = "A"

} else if (percentage >= 70) {
    grade = "B"

} else if (percentage >= 60) {
    grade = "C"

} else if (percentage >= 50) {
    grade = "D"

} else {
    grade = "F"

}

function resultDisplay() {
    console.log(`Result : ${result}`);

}

resultDisplay();


let studentResult = {

    Name: studentData.name,
    Age: studentData.age,
    Total_Marks: `${1000} / ${totalMarks}`,
    Percentage: percentage,
    Grade: grade,
    Attendace: studentData.attendace,
    Result: result,

}

console.log(studentResult);

