import { rl } from "../interface";

function ask(question: string, reader = rl): Promise<string> {
  return new Promise((resolve, reject) => {
    reader.question(question, (input) => {
      if (input !== "") {
        resolve(input);
      } else if (input === "") reject(Error("Invalid input"));
    });
  });
}

// Leave line below for tests to work properly
export default ask;
