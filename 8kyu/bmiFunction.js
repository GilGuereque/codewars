/* CODEWARDS INSTRUCTIONS:
Write a function bmi that calculates body mass index (bmi = weight / height2).

if bmi <= 18.5 return "Underweight"

if bmi <= 25.0 return "Normal"

if bmi <= 30.0 return "Overweight"

if bmi > 30 return "Obese"
*/

//BMI Function:
function bmi(weight, height) {
    let bodyMassIndex = weight / height**2
    if (bodyMassIndex > 30){
      return "Obese";
    } else if (bodyMassIndex <= 30 && bodyMassIndex > 25){
      return "Overweight";
    } else if (bodyMassIndex <= 25 && bodyMassIndex > 18.5){
      return "Normal";
    } else if(bodyMassIndex <= 18.5){
      return "Underweight";  
    };
  }