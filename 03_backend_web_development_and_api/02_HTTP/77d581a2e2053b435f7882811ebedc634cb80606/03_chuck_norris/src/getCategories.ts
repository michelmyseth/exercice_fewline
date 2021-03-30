import fetch from "node-fetch";
//import { runInThisContext } from "node:vm";

function getCategories() {
  return fetch("https://api.chucknorris.io/jokes/categories")
    .then((response) => response.json())
    .then((json) => {
      console.log(json);
    })
    .catch((error) => {
      console.error(error);
    });
}
// leave line below for tests to work properly
export { getCategories };
//getCategories();
