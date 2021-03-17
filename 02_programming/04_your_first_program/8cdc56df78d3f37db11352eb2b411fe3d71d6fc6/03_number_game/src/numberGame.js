function numberGame(reader, min = 1, max = 100) {
  // code here
  const randomNumber = Math.round(Math.random() * (max - min)) + min;
  function GeneratorGame(number){
    console.log(randomNumber);
    if(!Number.isInteger(parseInt(number))){
      reader.question("This was not a number", GeneratorGame); 
    }
    else if (number > max || number < min) {
      console.log("The number is between 1 and 100");
      reader.question("Enter a number: ", GeneratorGame);
    }
    else if (number === randomNumber)
    {
      console.log("You won");
      reader.close(); 
    }
    else if (number > randomNumber)
    {
      console.log("to low");
      reader.question("Enter a number ", GeneratorGame); 
    }  
    else if (number < randomNumber)
    { 
      console.log("too high");
      reader.question("Enter a number", GeneratorGame);
    }
    else 
    { 
      console.log("number is between");
      reader.question("Enter a number", GeneratorGame);
    }
  }
  reader.question("Enter a number ", (GeneratorGame)); 
}
module.exports = numberGame;

