type Person = {
  firstName: string;
  lastName: string;
};

export function parseName(name: string): Person {
  const namesplit = name.split(" ");
  return { firstName: namesplit[0], lastName: namesplit[1] };
}
