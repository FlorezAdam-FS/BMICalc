let weight = document.getElementById("weightInput");
let height = document.getElementById("heightInput");
let age = document.getElementById("ageInput");
let overlay = document.getElementById("overlay");
let overlayHeading = document.getElementById("title");
let overlayInfo = document.getElementById("info");
let bfInfo = document.getElementById("bodyfat");
let submit = document.getElementById("submit");
let genders = document.getElementById("genders");
let bmr = document.getElementById("bmr");
let option = document.getElementById("select");
let tdee = document.getElementById("tdee");

submit.addEventListener("click", () => {
  var bmi = (weight.value / Math.pow(height.value, 2)) * 703;
  var bmiString = Number(bmi.toFixed(2)) + "%";
  var genderValue = 0;
  var bmrValue = 0;

  if (genders.value == "male") {
    genderValue = 1;
    bmrValue =
      66.47 + 6.24 * weight.value + 12.7 * height.value - 6.755 * age.value;
  } else {
    genderValue = 0;
    bmrValue =
      655.1 + 4.35 * weight.value + 4.7 * height.value - 4.7 * age.value;
  }
  var bmrString = Number(bmrValue.toFixed(0));

  var bodyFat = 1.2 * bmi + 0.23 * age.value - 10.8 * genderValue - 5.4;
  var bfString = Number(bodyFat.toFixed(2)) + "%";

  var TDEE = 0;

  if (option.value == "sedentary") {
    TDEE = bmrString * 1.2;
  } else if (option.value == "light") {
    TDEE = bmrString * 1.375;
  } else if (option.value == "moderate") {
    TDEE = bmrString * 1.55;
  } else if (option.value == "very") {
    TDEE = bmrString * 1.725;
  } else {
    TDEE = bmrString * 1.9;
  }

  TDEEString = Number(TDEE.toFixed(0));

  if (bmi < 25) {
    overlayHeading.innerHTML = "Healthy BMI";
    overlayInfo.innerHTML =
      "Good Job, staying healty! Your BMI is: " + bmiString;
  } else if (bmi < 29 && bmi > 24) {
    overlayHeading.innerHTML = "Overweight BMI";
    overlayInfo.innerHTML = "Okay, Not too bad! Your BMI is: " + bmiString;
  } else if (bmi < 39 && bmi > 29) {
    overlayHeading.innerHTML = "Obese BMI";
    overlayInfo.innerHTML = "Be careful! Your BMI is: " + bmiString;
  } else {
    overlayHeading.innerHTML = "Extreme Obesity BMI";
    overlayInfo.innerHTML =
      "You can turn it around, don't worry this is the first step! Your BMI is: " +
      bmiString;
  }
  bfInfo.innerHTML = "Body Fat Percentage: " + bfString;
  bmr.innerHTML = "BMR: " + bmrString;
  tdee.innerHTML = "Daily Caloric Intake: " + TDEEString;
});
