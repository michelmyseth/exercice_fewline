import fetch from "node-fetch";
import { Author } from "../@types/author";
import { Book } from "../@types/book";

class AuthorRepository {
  baseUrl = process.env.BASE_URL;

  // Code functions here like this
  /*
  neededFunction() {}
  */
  getAll(): Promise<void> {
    return fetch(`${process.env.BASE_URL}/authors`, {
      method: "GET",
    })
      .then((response) => response.json())
      .then((json) => {
        return json;
      });
  }

  getOne(id: number): Promise<string> {
    return fetch(`${process.env.BASE_URL}/authors/${id}`, {
      method: "GET",
    })
      .then((response) => response.json())
      .then((json) => {
        return json;
      });
  }

  getAuthorBooks(id: number): Promise<string[]> {
    return fetch(`${process.env.BASE_URL}/authors/${id}/books`, {
      method: "GET",
    })
      .then((response) => response.json())
      .then((json) => {
        return json;
      });
  }
  searchByName(term: string): Promise<string[]> {
    return fetch(`${process.env.BASE_URL}/authors?q=${term}`, {
      method: "GET",
    })
      .then((response) => response.json())
      .then((json) => {
        return json;
      });
  }
}

// Leave the line below for tests to work
export { AuthorRepository };
