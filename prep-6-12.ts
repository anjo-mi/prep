const allInclusive = (a: number, b: number, curr: number = 0) => {
  const min = Math.min(a, b);
  const max = Math.max(a, b);
  if (min < max) return allInclusive(min + 1, max, curr + min);
  if (min === max) return curr + max;
};

// const includeAll = (a, b) => {
//   if (a === b) return a;
//   else if (a < b) {
//     return a + includeAll(a + 1, b);
//   } else {
//     return a + includeAll(a - 1, b);
//   }
// };

console.log(allInclusive(1, 4));
console.log(allInclusive(101, 102));
console.log(allInclusive(101, 103));

// cakes(
//   { flour: 500, sugar: 200, eggs: 1 },
//   { flour: 1200, sugar: 1200, eggs: 5, milk: 200 },
// );

const canWeBakeIt = (
  need: Record<string, number>,
  have: Record<string, number>,
): number => {
  let min = Infinity;
  for (const ingredient in need) {
    if (!(ingredient in have)) return 0;
    const currMin = Math.floor(have[ingredient] / need[ingredient]);
    min = Math.min(min, currMin);
  }
  return min;
};

console.log(
  canWeBakeIt(
    { flour: 500, sugar: 200, eggs: 1 },
    { flour: 1200, sugar: 1200, eggs: 5, milk: 200 },
  ),
);
