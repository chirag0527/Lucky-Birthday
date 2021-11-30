const dateofbirth = document.querySelector(".one");
const luckynumber = document.querySelector(".two");
const Button = document.querySelector(".checkBtn");
const Output = document.querySelector("#output-msg");
let audioTurn = new Audio("ting.mp3");

const calculateSumofDigits = (date) => {
  let count = 0;
  date = date.replaceAll("-", "");
  for (let digit of date) {
    count += Number(digit);
  }
  return count;
};

const checkIfNumberLucky = (sumOfDate, numberToCheck) => {
  if (sumOfDate % numberToCheck === 0) {
    Output.innerText = `${numberToCheck} is lucky for you :)`;
  }
  else{
  Output.innerText = `${numberToCheck} isn't lucky for you :(`;
  }
};


Button.addEventListener("click", () => {
  const date = dateofbirth.value;
  const numberToCheck = luckynumber.value;
  if (date && numberToCheck) {
    const sumOfDigits = calculateSumofDigits(date);
    audioTurn.play();
    checkIfNumberLucky(sumOfDigits, numberToCheck);
  } 
  else {
    alert("Please enter both the fields.");
  }
});