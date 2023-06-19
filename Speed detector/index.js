

function calculateDemeritPoints() {
  
  let speedInput = document.getElementById("speed");
  let pointsOutput = document.getElementById("pointsResult");
   
  let speed = parseInt(speedInput.value);
  
  if (isNaN(speed) || speed < 0) { 
      pointsOutput.textContent = "Invalid speed! Please enter a non-negative number."; 
       }
   
  let speedLimit = 70;
  let demeritPoints = Math.floor((speed - speedLimit) / 5);
  
  if (speed <= speedLimit) {
    pointsOutput.textContent = "Points: 0 DRIVER IS OK";
  } else if (demeritPoints <= 12) {
    pointsOutput.textContent = "Points: " + demeritPoints;
  } else {
   
    pointsOutput.textContent = "License suspended";
  }
   }
   
  
  
  
  
  
  
  
  
  
  
  
  
  
  





