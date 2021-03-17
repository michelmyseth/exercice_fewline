const identityForm = (reader) => {
  reader.question("first name", (firstname) => {
    reader.question("last name? ", (lastname) => {
      reader.question("ton age ?", (old) => {
        console.log(`Your name is ${firstname} ${lastname} and you are ${old}.`);
        reader.close();
      });
    });
  });
};

// Leave line below for tests to work
module.exports = identityForm;
