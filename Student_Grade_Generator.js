//grading function
function grading(marks) {
  // Checking the validity of the entered marks
  if (marks < 0 || marks > 100 || isNaN(marks) || typeof marks !== "number") {
    console.log("Invalid marks");
  } else if (marks > 79) {
    console.log("A");
  } else if (marks >= 60) {
    console.log("B");
  } else if (marks >= 49) {
    console.log("C");
  } else if (marks >= 40) {
    console.log("D");
  } else {
    console.log("E");
  }
}

console.log(grading(120));
