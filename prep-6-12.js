/**
 * use recursion specifically
 *
 * given a and b (integers +/-)
 *
 * find all sum of int's between and including them
 *
 * a > b, || b > a
 *
 * 101, 102 -> 203
 * 101,(102), 103 -> 306
 * set up total = 0
 *
 * each number from the smaller to the larger add to the total, return the total
 *
 * 1,4
 * (a,b,currTotal = 0)
 * (4,4,6)
 * min = min(a,b)
 * max = max(a,b)
 * if min < max return (min+1,max,currTotal + min)
 * if min === max return currTotal + max
 * // 10
 */

// const allInclusive = (a, b, curr = 0) => {
//   const min = Math.min(a, b);
//   const max = Math.max(a, b);
//   if (min < max) return allInclusive(min + 1, max, curr + min);
//   if (min === max) return curr + max;
// };

// const includeAll = (a, b) => {
//   if (a === b) return a;
//   else if (a < b) {
//     return a + includeAll(a + 1, b);
//   } else {
//     return a + includeAll(a - 1, b);
//   }
// };

// console.log(includeAll(1, 4));
// console.log(includeAll(101, 102));
// console.log(includeAll(101, 103));
