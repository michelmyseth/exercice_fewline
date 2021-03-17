const readyForm = (reader) => {
  console.log("Hello user!");
  reader.question("Are you ready for today ??! ", (form) => {
    console.log(`WOW, ${form}??!! Really Nice! Let's goo !!.`);
    reader.close();  
  });
};

// Leave line below for tests to work
module.exports = readyForm;
