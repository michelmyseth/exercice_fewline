// export function sumTwoSmallestNumbers(nb: number[]): number {
//   let firstLowNumber = nb[0];
//   let secondLowNumber = nb[1];
//   if (nb.length < 4) {
//     throw Error;
//   }
//   for (let i = 0; i < nb.length; i++) {
//     if (nb[i] < 0) {
//       throw Error;
//     } else if (nb[i] < firstLowNumber) {
//       secondLowNumber = firstLowNumber;
//       firstLowNumber = nb[i];
//     } else if (nb[i] > firstLowNumber && nb[i] < secondLowNumber) {
//       secondLowNumber = nb[i];
//     }
//   }
//   return firstLowNumber + secondLowNumber;
// }

// export function sumTwoSmallestNumbers(tabNumber: number[]): number {
//   if (tabNumber.length < 4) {
//     throw Error;
//   }
//   tabNumber.sort((nb1, nb2) => {
//     if (nb1 < 0 || nb2 < 0) throw Error;
//     else return nb1 - nb2;
//   });
//   return tabNumber[0] + tabNumber[1];
// }

function lettersCounter(word: string) {
  const letters = word.split("");
  let david = {};
  letters.sort();
  // letters.forEach((letter) => {
  // let countLetter = letters.filter(currentLetter => { currentLetter === letter
  //     let result = countLetter
  //     console.log(result);
  // })
  // })
  for (let i = 0; i < letters.length; i++) {
    const countLetter = letters.filter((currentLetter) => {
      return currentLetter === letters[i];
    });
    david = { countLetter: countLetter.length };
    console.log(countLetter);
    console.log(david);
  }
}
console.log(lettersCounter("maman"));
