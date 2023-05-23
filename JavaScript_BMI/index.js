//CDC Adult BMI Categories//


function calculateBMI() {
    let height = parseFloat(document.getElementById("height").value);
    let weight = parseFloat(document.getElementById("weight").value);
    let showOutput = document.getElementById("output");
    let  classification;

    // BMI Calculation

let bmiRange = weight / (height / 100) ** 2; 
//BMI Formula
bmiRange = bmiRange.toFixed(2);

//IF Function

if (bmiRange <18.4) {
    classification = "Underweight";
}
    else if (bmiRange > 18.5 && bmiRange < 25)
    {
classification = "Normal/Healthy";
    }
    else if (bmiRange > 25 && bmiRange < 39.9){
classification = "Overweight";
    }
    else if (bmiRange > 40)
    {
classification = "Obese";
    }

    showOutput.innerHTML = `BMI Range: ${bmiRange} | ${classification} `;
}



// //Who Adult BMI Categories

// function calculateBMI() {
//     let height = parseFloat(document.getElementById('height').value);
//     let weight = parseFloat(document.getElementById('weight').value);
//     let showOutput = document.getElementById('output');
//     let classification;
  
//     // BMI Calculation

//     let bmiRange = weight / (height / 100) ** 2; // BMI Formula
//     bmiRange = bmiRange.toFixed(2);
  
// //IF Function

//     if (bmiRange < 16) {
//       classification = "Severe Underweight";
//     } else if (bmiRange > 16 && bmiRange < 18.4) {
//       classification = "Underweight";
//     } else if (bmiRange > 18.5 && bmiRange < 24.9) {
//       classification = "Normal";
//     } else if (bmiRange > 25 && bmiRange < 29.9) {
//       classification = "Overweight";
//     }  else if (bmiRange > 30 && bmiRange < 34.9) {
//       classification = "Moderately Obese";
//     } else if (bmiRange > 35 && bmiRange < 39.9) {
//       classification = "Severely Obese";
//     } else if (bmiRange > 40) {
//       classification = "Morbidly Obese";
//     }
//     showOutput.innerHTML = `BMI Range: ${bmiRange} | ${classification} `;
//   }