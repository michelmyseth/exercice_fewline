function range(min, max) {
  // Code the function here.
  let i = 0;
  let result = [];
  let minnn = min;
  if (minnn < max)
  {
    while (minnn <= max)
    {
      result[i] = minnn;
      i++;
      minnn++;
    }
  }
  else
  {
    let minn = min;
    while(minn >= max)
    {
      result[i] = minn;
      i++;
      minn--;
    }
  } 
  return result;
}
// Do not remove last lines, it is for tests
module.exports = range;
