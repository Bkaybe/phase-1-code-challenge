//grading function
function grading(marks) {
  //here I am checking if the value is a Number and ensuring it is between 0-100
  if (isNaN(marks) || marks < 0 || marks > 100) {
    console.log(
      "You have entered invalid value. Please enter a number between 0 and 100."
    );
  }

  // using switch case to assign diffrent marks to respective grades
  switch (true) {
    case marks >= 79:
      console.log("Your Grade is A");
      break;
    case marks >= 60:
      console.log("Your Grade is B");
      break;
    case marks >= 49:
      console.log("Your Grade is C");
      break;
    case marks >= 40:
      console.log("Your Grade is D");
      break;
    default:
      console.log("Your Grade is E");
      break;
  }
}
