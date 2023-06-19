function calculateGrade(percentage) {
if (percentage > 79) {

  return "A"
}

 else if (percentage >= 60 &&   percentage <= 79) {
  return "B"
 }


 else if (percentage > 49 &&  percentage <= 59) {
  return 'C'
 }

 else if (percentage > 40 &&   percentage <= 49) {
  return "D"
 }
 
 else {
return "E"
 } 
}

function grade() {
  let input = document.getElementById("scores")
  let percentage = parseInt(input.value)
  if (percentage < 0 || percentage > 100 || isNaN (percentage)) {
    prompt ("invalid input") 
    
    }else {
      let grade = calculateGrade(percentage)
  let gradeOutput = document.getElementById("result")
gradeOutput.textContent = grade

}

}


