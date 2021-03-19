const { read } = require("fs");
const readline = require("readline");

const reader = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

function restartGame(answer){
   const clear = () => console.log("\x1B[2J\x1B[0f");

    if(answer === "Y")
    {
        clear();
        Shifumi_start(reader);
    }
    else if (answer === "n")
    {
        console.log("Thanks for the game");
        reader.close();
    }
    else 
    {
        clear();
        console.log("Error sur votre commande !\nveuillez retaper votre demande");
        reader.question("Play again ?(Y,n)", (restartGame));

    }
}
function display(value){
    const rock = [
            "    ________        ",
            "---'   _ ,  |       ",
            "      (__(__)       ",
            "      (_____)       ",
            "      (____)        ",
            "---.__(___)         ",
          ];
    
    const paper = [
        "      _______       ",
        "----'    ____)____  ",
        "            _______)",
        "            _______)",
        "           _______) ",
        "----.__________)    ",
      ];
    
    const scissors = [
        "    ____           ",
        "---'    |________  ",
        "     (__)________) ",
        "        _________) ",
        "      (____)       ",
        "---.__(___)        ",
      ];

      if (value === "pierre")
      {
        rock.forEach(element => console.log(element));
        console.log("\n");
      }
      else if (value === "feuille")
      {
          paper.forEach(element => console.log(element));
          console.log("\n");
      }
      else 
      {
          scissors.forEach(element => console.log(element));
          console.log("\n");
      }
    }

function shifumi(Ia_choice, user) {
    
    if(user == Ia_choice) {
        console.log("Draw");
    }
    else if((user == "pierre" && Ia_choice == "ciseaux") || (user == "feuille" && Ia_choice == "pierre") 
    || (user == "ciseaux" && Ia_choice == "feuille")) {
        console.log("Won");
    }
    else if((user == "feuille" && Ia_choice == "ciseaux") || (user == "pierre" && Ia_choice == "feuille") 
    || (user == "ciseaux" && Ia_choice == "pierre")) {
       console.log("Loose");    
    }
}
function User_IA() {
    let Ia_choice = Math.floor(Math.random() * 90);

        if (Ia_choice < 30) {
            Ia_choice = "pierre";
        }
        else if(Ia_choice > 30 && Ia_choice < 60) {
            Ia_choice = "feuille";
        }
        else if(Ia_choice > 60) {
            Ia_choice = "ciseaux";
        }

        return (Ia_choice);
}
function User_Choice(user) {
    console.log("Player move");
    if(user === "1") {
        user = "pierre";
    }
    else if(user === "2") {
        user = "feuille";
    }
    else if(user === "3") {
        user = "ciseaux";
    }

    return user;
}

function Shifumi_start(reader) {
    // code here
    const clear = () => console.log("\x1B[2J\x1B[0f");

    console.log("Welcome to ShiFuMi");
    function GeneratorGame(number){
        
      if(!Number.isInteger(parseInt(number))){
        clear();
        reader.question("This was not a number\nInsert a number please :\n", GeneratorGame); 
      }
      else if (number > 3 || number < 1 ) {
        clear();
        console.log("The number should be 1 between 3");
        reader.question("Enter a number: ", GeneratorGame);
      }
      else if (number == 1 || number == 2 || number == 3){
        let user = User_Choice(number);
        let bot = User_IA();
        console.log("First Player's move");
        display(user);
        console.log("CPU moove");
        display(bot);
        shifumi(bot, user);
        reader.question("Play again ?(Y,n)", (restartGame));
      }
    }
    reader.question("Choose a move:\nRock Paper Scissors? [1, 2, 3]\n> ", (GeneratorGame)); 
}

Shifumi_start(reader);
