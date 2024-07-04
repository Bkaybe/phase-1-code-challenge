function speedChecker(speed) {
  if (typeof speed !== "number" || isNaN(speed) || speed < 0) {
    console.log("Invalid speed");
    return;
  }

  const speedLimit = 70;
  const demeritPoints = Math.ceil((speed - speedLimit) / 5); //getting the demerit points and converting it to the next nearest whole number

  //checkin if the speed is within the designated speedlimit and alocating demerit points
  if (speed <= speedLimit) {
    console.log("Ok");
  } else if (demeritPoints > 12) {
    console.log("Licence suspended");
  } else {
    console.log(`Points: ${demeritPoints}`);
  }
}

console.log(speedChecker(120));
