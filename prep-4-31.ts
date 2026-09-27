/**
 * filter list of strings
 *   return new? listw/ only friends name
 *
 * 4 letters is friend, otherwise not
 *
 */

const getFriends = (names: string[]): string[] => {
  return names.filter((name) => name.length === 4);
};

const friends = [
  "mark",
  "ryan",
  "david",
  "mai",
  "dvkr",
  "sara",
  "kyle",
  "steven",
  "remi",
];

console.log(getFriends(friends));

/**
 * array of at least three nums
 *
 * all even with one odd or vice versa
 *
 * return the number that's not correctly in the array
 *
 */

const findTheOddBall = (nums: number[]): number => {
  const res = { even: 0, odd: 0 };
  for (const num of nums.slice(0, 3)) {
    if (num % 2) res["odd"]++;
    else res["even"]++;
  }
  return res["even"] > res["odd"]
    ? nums.find((num) => num % 2)!
    : nums.find((num) => !(num % 2))!;
};

console.log(findTheOddBall([1, 3, 5, 7, 9, 10, 11, 13, 15]));
console.log(findTheOddBall([2, 4, 5, 6, 8, 10, 12, 14, 16]));

function returnOutlier(nums: number[]) {
  let targetOdd;

  let sum = [nums[0], nums[1], nums[2]].reduce((prev, curr) => {
    return prev + (curr % 2 !== 0 ? 1 : 0);
  }, 0);

  targetOdd = sum < 2;

  for (let n of nums) {
    if (targetOdd !== (n % 2 === 0)) {
      return n;
    }
  }
}

console.log(returnOutlier([2, 2, 1]));

/**
 * string letters array
 * - single chars?
 *
 * return each one prepended by correct num (index + 1)
 */

const labelLetters = (chars: string[]): string[] => {
  return chars.map((ch, i) => i + 1 + ": " + ch);
};

console.log(labelLetters(["s", "t", "r", "i", "n", "g"]));
