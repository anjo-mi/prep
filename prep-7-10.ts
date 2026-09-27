const makePhoneNumber = (arr: number[]): string => {
  if (arr.length !== 10) return "invalid";
  let res = "(";
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].toString().length > 1) return "invalid";
    if (arr[i] < 0) return "invalid";
    if (i === 3) res += ") ";
    if (i === 6) res += "-";
    res += arr[i];
  }
  return res;
};

// console.log(makePhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]));
// console.log(makePhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, -9, 0]));
// console.log(makePhoneNumber([1, 2, 3, 4, 5, 6, 7, 8.1, 9, 0]));
// console.log(makePhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9]));

// take an array
// move all elements that are 0 to the end of the array, perserve order of the other elements

const moveBackZeros = (arr: any[]): any[] => {
  let i = 0,
    j = arr.length - 1;
  while (i < j) {
    while (arr[i] !== 0 && i < j) i++;
    while (arr[j] === 0 && i < j) j--;
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
};

const test = [false, 1, 0, 1, 2, 0, 1, 3, "a"];
// console.log(moveBackZeros(test));
// [false, 1, 0, 1, 2, 0, 1, 3, "a"];
// [false, 1, 1, 2, 1, 3, "a", 0, 0];

// array of integers, either all odd except one even, or vice versa
const oddManOut = (arr: number[]): number => {
  const counts: Record<string, number> = {};
  let even = true;
  for (const num of arr) {
    if (!(num % 2)) counts["even"] = (counts["even"] || 0) + 1;
    else counts["odd"] = (counts["odd"] || 0) + 1;
    if (counts["even"] > 1) break;
    if (counts["odd"] > 1) {
      even = false;
      break;
    }
  }
  return even
    ? arr.filter((el) => el % 2)[0]
    : arr.filter((el) => !(el % 2))[0];
};

console.log(oddManOut([1, 3, 5, 7, 4]));
console.log(oddManOut([2, 4, 6, 8, 9]));
