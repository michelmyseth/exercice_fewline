import readline from "readline";

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let array_id = [];

const human_test = 
{
    firstName: null,
    lastName: null,
    email: null,
    birthday: null,
    city: null,
    counter: null,

    fullname : function()
    {
      console.log(`${this.firstName} ${this.lastName}`);
    },
    introduction : function()
    {
      console.log(`Hello! My name is ${this.firstName} ${this.lastName}.`);
    },
};

console.log("Welcome\n","   1 - add customer\n","   2 - access customer data\n","   quit\n");

reader.question("choose an action ", (choice) => 
{
    if(choice === "1")
    {
        reader.question("First Name :", choice =>{
          human_test.firstName = choice;  
          console.log(array_id);
        });
        reader.question("Last Name :", (choice) => 
        {
            human_test.lastName = choice;   
        });
        reader.question("Email :", (choice) => 
        {
            human_test.email = choice;   
        });
        reader.question("Birthday :", (choice) => 
        {
            human_test.birthday = choice;   
        });
        reader.question("City :", (choice) => 
        {
            human_test.city = choice;   
        });
        reader.question("Counter :", (choice) => 
        {
            human_test.counter = choice;   
        });
        array_id.push(human_test);
        console.log(human_test);
        console.log(array_id);
    }

    
});


reader.question("What is your name? ", (name) => {
  console.log(`Hello ${name}!`);
  console.log("Rock Paper Scissors? [1, 2, 3]");
  reader.question("Please choose a move\n> ", loop);
});


