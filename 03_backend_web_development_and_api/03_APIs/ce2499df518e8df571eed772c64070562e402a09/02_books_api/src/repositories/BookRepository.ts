import fetch from "node-fetch";
import { Book } from "../@types/book";
import { Comment } from "../@types/comment";

class BookRepository {
  baseUrl = process.env.BASE_URL;

  getAll(): Promise<string[]> {
    return fetch(`${process.env.BASE_URL}/books`, {
      method: "GET",
    })
      .then((response) => response.json())
      .then((json) => {
        return json;
      });
  }

  getOne(id: number): Promise<string> {
    return fetch(`${process.env.BASE_URL}/books/${id}`, {
      method: "GET",
    })
      .then((response) => response.json())
      .then((json) => {
        return json;
      });
  }

  getBookComments(id: number): Promise<string[]> {
    return fetch(`${process.env.BASE_URL}/books/${id}/comments`, {
      method: "GET",
    })
      .then((response) => response.json())
      .then((json) => {
        return json;
      });
  }
  searchByTitle(term: string): Promise<string[]> {
    return fetch(`${process.env.BASE_URL}/books?q=${term}`, {
      method: "GET",
    })
      .then((response) => response.json())
      .then((json) => {
        return json;
      });
  }
  // Code functions here like this
  /*
  neededFunction() {}
  */
}

// Leave the line below for tests to work
export { BookRepository };
