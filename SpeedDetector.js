function speedChecker(speed) {
  const speedLimit = 70;
  const demeritPoints = Math.ceil((speed - speedLimit) / 5); //getting the demerit points and converting it to the next nearest whole number

  //this is the a
  if (speed <= speedLimit) {
    console.log("Ok");
  } else if (demeritPoints > 12) {
    console.log("Licence suspended");
  } else {
    console.log(`Points: ${demeritPoints}`);
  }
}

console.log(speedChecker(120));
