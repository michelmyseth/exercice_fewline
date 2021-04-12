import slugify from "slugify";

export function slugger(str: string): string {
  return slugify(str);
}

export function sluggerWithUnderscores(str: string): string {
  return slugify(str, "_");
}
