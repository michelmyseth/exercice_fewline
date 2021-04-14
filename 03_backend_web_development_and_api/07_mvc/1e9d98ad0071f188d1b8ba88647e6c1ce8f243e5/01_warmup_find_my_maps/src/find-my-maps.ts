type MyObject = {
  objectType: string;
  quantity: number;
  description: string;
  storedIn: string;
};

export function findMyMaps(objects: MyObject[]): MyObject[] {
  return objects.filter((response) => {
    if (response.objectType === "map") return response;
    else return undefined;
  });
}
