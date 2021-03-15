function fizzBuzz(list) {
  // Code the function here.
  let new_array =[];
  let number;
  for (let i = 0; i < list.length; i++)
  {
    if (list[i] % 3 === 0 && list[i] % 5 === 0)
    {
      list[i] = "FizzBuzz";
      new_array[i] = list[i];
    }
    else if (list[i] % 3 === 0)
    {
      list[i] = "Fizz";
      new_array[i] = list[i];
    }
    else if(list[i] % 5 === 0)
    {
      list[i] = "Buzz";
      new_array[i] = list[i];
    }
    else
    {
      new_array[i] = list[i];
    }
  }
  return new_array;
}

// Leave the line below untouched for tests to work properly.
module.exports = fizzBuzz;




/*function fizzBuzz(list) {
  // Code the function here.
  let number = list;
  let buzz;
  if (list % 3 === 0 && list % 5 === 0)
    number = "FizzBuzz";
  else if (list % 3 === 0)
    number = "Fizz";
  else if (list % 5 === 0)
    number = "Buzz";
  else
    buzz = number;
  return number;
}*/


