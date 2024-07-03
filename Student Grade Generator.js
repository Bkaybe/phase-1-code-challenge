//grading function
function grading(marks) {
  //here I am checking if the value is a Number and ensuring it is between 0-100
  if (isNaN(marks) || marks < 0 || marks > 100) {
    console.log(
      "You have entered invalid value. Please enter a number between 0 and 100."
    );
  }

  // using switch case to assign diffrent marks to respective grades
  if (marks >= 79) {
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

console.log(grading(60));
