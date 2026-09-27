/**
 * sort a string
 * each word has a number (single num)
 *  represent position in the result
 *
 * single separation
 * [is2 Thi1s T4est 3a]
 *   Thi1s is2 3a T4est
 * 4of Fo1r pe6ople g3ood th5e the2
 *   Fo1r the2 g3ood 4of th5e pe6ople
 * no 0's, 1-9
 * always only one number
 *
 * make an obj with the numbers as the keys, words as the values
 *  JS should auto sort object insertion
 *
 * const obj = {
 * 1: This1s
 * 2: is2
 * 3: 3a
 * 4: T4est
 * }
 *
 * establish a arr
 * for val of Object.values(obj)  arr.push(val)
 *
 * return arr.join(' ')
 */

const sortString = (str) => {
  const nums = new Set("123456789");
  const obj = {};
  for (const word of str.split(" ")) {
    const num = word.split("").find((char) => nums.has(char));
    obj[num] = word;
  }
  return Object.values(obj).join(" ");
};

console.log(sortString("is2 Thi1s T4est 3a"));
console.log(sortString("4of Fo1r pe6ople g3ood th5e the2"));
