function filter(array, str) {
  let odd_table = [];
  let even_table = [];
  let index = 0;
  if (str === "even")
  {
    for(let i = 0; i < array.length; i++)
    {
      if (array[i] % 2 === 0)
      {
        even_table[index] = array[i];
        index++;
      }
    }
    return even_table;
  }
  else if (str === "odd")
  {
    for(let i = 0; i < array.length; i++)
    {
      if (array[i] % 2 === 1)
      {
        odd_table[index] = array[i];
        index++;
      }
    }
    return odd_table;
  }
  else 
    return array;
  // Your code here
}
filter([-1, -2, -3, -4, -5], "odd");
console.log(filter([-1, -2, -3, -4, -5], "odd"));

// do not remove this line, it is for tests
module.exports = filter;
