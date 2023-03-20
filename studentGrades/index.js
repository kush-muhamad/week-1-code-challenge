//this function will check through using the if statment if the grades match the  condition
// and will return a corresponding grade
function calculateGrades(mark) {
  if (mark >= 80) {
    return "A";
  } else if (mark >= 60) {
    return "B";
  } else if (mark >= 50) {
    return "C";
  } else if (mark >= 40) {
    return "D";
  } else {
    return "E";
  }
}
//this prompt will require to the enter the students marks
const mark = parseInt(prompt("Enter the student's mark (between 0 and 100):"));
const grade = calculateGrades(mark);
console.log(`Grade: ${grade}`);
