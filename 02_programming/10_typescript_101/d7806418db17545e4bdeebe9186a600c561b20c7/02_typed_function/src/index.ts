type tuple = [string, number];

function handleTuple(tuple: [string, number]): void {
  tuple.forEach((element) => {
    if (typeof element == "string")
      console.log(element + `The type of ${element} value is string } is FinalizationRegistry.}`);
    if (typeof element == "number") console.log(element + `The type of value ${element} is number`);
  });
}

// Leave the line below for tests to work properly.
export { handleTuple };
