// filters a list of strings
// return a list with only friends
// friends: exactly 4 letters

const findFriends = (friends: string[]): string[] => {
  return friends.filter((fr) => fr.trim().length === 4);
};

const friends = ["Mai", "Eric", "Kyle", "Amanda"];

console.log(findFriends(friends));

// array of booleans as input
// return total of trues

const countTrue = (arr: boolean[]): number => arr.filter(Boolean).length;
console.log(countTrue([false, false, true, true, true, false, false]), 3);
console.log(countTrue([true, false, true, true, true, false, true]), 5);
console.log(countTrue([false, false, true, false, true, false, false]), 2);
console.log(countTrue([false, false, false, false, false, false, false]), 0);
