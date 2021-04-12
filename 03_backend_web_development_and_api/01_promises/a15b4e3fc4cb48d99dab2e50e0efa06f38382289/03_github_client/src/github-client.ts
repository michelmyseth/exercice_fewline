import { getReposUrlByNickname, listRepos, getOneRepoInfos } from "../utils";

export type Repo = {
  url: string;
  name: string;
  [key: string]: string | number | boolean | null;
};

export type GitHub = {
  message: string;
  repos_url: string;
};

export class GithubClient {
  static getReposUrl(nickname: string): Promise<string> {
    // You code goes here
    return getReposUrlByNickname(nickname).then((userData) => {
      if (userData.message === "Not Found") {
        return `${nickname}${userData.message}`;
      } else {
        return userData.repos_url;
      }
    });
  }

  static getRepos(url: string): Promise<Repo[]> {
    return listRepos(url);
  }
  // You code goes here

  static printRepos(array: Repo[]): Promise<Repo[]> {
    array.map((element, i) => {
      console.log(`${++i}${element.name}`);
    });
    return array;
    // You code goes here
  }

  static printRepository(repository: Repo): void {
    console.log(repository.name);
    console.log(repository.description);
    console.log(repository.subscribers_count);
    console.log(repository.stargazers_count);
    console.log(repository.language);
    console.log(repository.url);
  }

  static getProjectInformations(url: string): Promise<Repo> {
    return getOneRepoInfos(url);
  }
}
