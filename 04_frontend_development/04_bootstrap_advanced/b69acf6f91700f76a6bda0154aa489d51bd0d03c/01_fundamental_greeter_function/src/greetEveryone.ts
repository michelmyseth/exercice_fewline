type ParamRest = string[];

export function greetEveryone(...str: ParamRest): void {
  for (let i = 0; i < str.length; ++i) {
    console.log(`Welcome to ${str[i]}`);
  }
}
