// sort a given string, each string has a number
// numbers 1-9 (no 0)
// input empty –> ''
// only contain valid consecutive numbers

// "is2 Thi1s T4est 3a"  -->  "Thi1s is2 3a T4est"
// "4of Fo1r pe6ople g3ood th5e the2"  -->  "Fo1r the2 g3ood 4of th5e pe6ople"
// ""  -->  ""

// set (1-9)
// split str ' '
// sort the split string, sort((a,b) => a's number - b's number)

const sortByInsertedNum = (str: string): string => {
  const nums = new Set<string>("123456789");
  const words: string[] = str.split(" ");
  return words
    .sort((a: string, b: string): number => {
      for (var i = 0; i < a.length; i++) {
        if (nums.has(a[i])) break;
      }
      for (var j = 0; j < b.length; j++) {
        if (nums.has(b[j])) break;
      }
      return +a[i] - +b[j];
    })
    .join(" ");
};

console.log(sortByInsertedNum("is2 Thi1s T4est 3a"), "Thi1s is2 3a T4est");
console.log(
  sortByInsertedNum("4of Fo1r pe6ople g3ood th5e the2"),
  "Fo1r the2 g3ood 4of th5e pe6ople",
);
console.log(sortByInsertedNum(""), "");
