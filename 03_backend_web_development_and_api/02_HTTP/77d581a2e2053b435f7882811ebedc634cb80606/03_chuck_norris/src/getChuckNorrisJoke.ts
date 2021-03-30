import fetch from "node-fetch";

function getChuckNorrisJoke(string: string): Promise<void> {
  return fetch(`https://api.chucknorris.io/jokes/random?category=${string}`)
    .then((response) => response.json())
    .then((json) => {
      console.log(json);
    })
    .catch((error) => {
      console.error(error);
    });
}

// leave line below for tests to work properly
export { getChuckNorrisJoke };
