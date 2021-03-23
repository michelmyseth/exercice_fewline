import readline from "readline";
const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let resultOperation = 0;

function calculator(value1, operator, value2) {  
  if (operator === "+") {
    resultOperation = parseInt(value1) + parseInt(value2);
    return console.log(resultOperation);
  } else if (operator === "-") {
    resultOperation = parseInt(value1) - parseInt(value2);
    return console.log(resultOperation);
  } else if (operator === "*") {
    resultOperation = parseInt(value1) * parseInt(value2);
    return console.log(resultOperation);
  } else if (operator === "/" && value2 === "0") {
    console.log("l'operation n'est pas possible");
  } else {
    resultOperation = parseInt(value1) / parseInt(value2);
    return console.log(resultOperation);
  }
}

function number1 (userInput) {
  if(!( userInput >= "0" && userInput <= "9")) {
    console.log("wrong input"); 
  }
}

function signOperator(userIntput) {
  if (userIntput != "+" || userIntput != "-" || userIntput != "*" || userIntput != "/") {
    console.log("wrong input"); 
  }
}

function number2 (userInput) {
  if(!( userInput >= "0" && userInput <= "9")) {
    console.log("wrong input"); 
  }
}

/*function start(userInput) {
  console.log("Ready to compute operations!\n **************************");
  
}*/
console.log("Ready to compute operations!\n **************************");
reader.question("choose an operation\n", inputUser => {
  reader.question("entre un nombre\n", number1(inputUser));
  reader.question("Choiser son operation [ + , - , * , / ]\n", signOperator);
  reader.question("entre un deuxieme nombre\n", number2);
  console.log(`${number1} ${signOperator} ${number2}`); 
  calculator(number1,signOperator,number2); 
});
  




