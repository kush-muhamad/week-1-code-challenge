function checkSpeed(speed) {
  //this function created with parameter speed, has variable for the speed limit and fine per km
  const speedLimit = 70;
  const finePerKm = 5;
//  the function uses if statments to check if our condition i.e speed <= speedLimit has not been breached
// if not ok will be printed on the console
  if (speed <= speedLimit) {
    console.log("Ok");
  } else {
    // in the else statement , a new variable fine will be created which will be speed-speedLimit/fine per Km
    //the Math.floor()is used to round of the floats
    const fine = Math.floor((speed - speedLimit) / finePerKm);
  }
  //a new if statment will be created 
  // if the fine is >12 , "License suspended" will be printed
  //other wise You Have: fine variable concatenated
  if (fine > 12) {
    console.log("License suspended");
  } else {
    console.log(`You Have:${fine}`);
  }
}
