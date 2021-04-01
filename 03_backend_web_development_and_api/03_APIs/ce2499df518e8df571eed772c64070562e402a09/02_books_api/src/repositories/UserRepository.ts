import fetch from "node-fetch";
import { Comment } from "../@types/comment";
import { User } from "../@types/user";

class UserRepository {
  baseUrl = process.env.BASE_URL;
  getAll(): Promise<void> {
    return fetch(`${process.env.BASE_URL}/users`, {
      method: "GET",
    })
      .then((response) => response.json())
      .then((json) => {
        return json;
      });
  }

  getOne(id: number): Promise<string> {
    return fetch(`${process.env.BASE_URL}/users/${id}`, {
      method: "GET",
    })
      .then((response) => response.json())
      .then((json) => {
        return json;
      });
  }

  getUserComments(id: number): Promise<string[]> {
    return fetch(`${process.env.BASE_URL}/users/${id}/comments`, {
      method: "GET",
    })
      .then((response) => response.json())
      .then((json) => {
        return json;
      });
  }
  create(params: { name: string }): Promise<void> {
    return fetch(`${process.env.BASE_URL}/users`, {
      method: "POST",
      body: JSON.stringify({
        name: params.name,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    }).then((response) => response.json());
    //.then((json) => console.log(json));
  }

  update(id: number, params: { name: string }): Promise<string[]> {
    return fetch(`${process.env.BASE_URL}/users/${id}`, {
      method: "PATCH",
      body: JSON.stringify({
        name: params.name,
      }),
      headers: {x
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((json) => {
        return json;
      });
  }
  delete(id: number): Promise<number> {
    return fetch(`${process.env.BASE_URL}/users/${id}`, {
      method: "DELETE",
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
// const us = new UserRepository();
// us.create({ name: "Toto" });
// Leave the line below for tests to work
export { UserRepository };
