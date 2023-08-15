function bmiCalculator(weight, height) { // this function was created to capture both the input used to calculate bmi and the ouput of the calcuation. 
    var bmi = Math.floor((weight / Math.pow(height, 2)));
    var message = ""

    if (bmi < 18.5) { // the if / else statements are conditionals used to give different responses based on what your bmi is. 
        message = "Your BMI is " + bmi + ", so you are underweight.";
    } else if(bmi <= 24.9) {
        message = "Your BMI is " + bmi + ", so you have a normal weight.";
    } else {
        message = "Your BMI is " + bmi + ", so you are overweight.";
    }

    return message; // this returns (literally) the value of the output to the function. 
}

var print = console.log(bmiCalculator(80, 1.8)); // input your weight in kilograms and height in meters respectively in this function to see your bmi!





