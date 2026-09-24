// "Student Data Handler"

function calculateMarks(num1, num2, num3) {

  return console.log(
    `Total Marks Is :==${num1 + num2 + num3}`
  );


}

calculateMarks(200, 300, 400)

function getAllScores(...scores) {

  return console.log(scores)

}

getAllScores(100, 200, 600, 600, 700, 700)

let student = {
  studentName: "Sarhan",
  rollNo: 101,
  city: "Karachi"
}

function showStudentInfo(stundentInfo) {

  return console.log(
    `Student Name is ${stundentInfo.studentName}
and student roll no is ${stundentInfo.rollNo}
and student city is ${stundentInfo.city}`);

}

showStudentInfo(student);

let subjectMarks = [100, 20, 40, 70, 10];

function marksChecker(marks) {

  return console.log(marks[3]);

}

marksChecker(subjectMarks);