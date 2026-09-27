const numbersOnly = (list: (string | number)[]): number[] => {
  return list.filter((el) => typeof el === "number");
};

console.log(numbersOnly([1, 2, 4, "g", "f", 5, "3"]));

// ----------------------------------------------------

const isPanagram = (s: string): boolean => {
  const valid = new Set<string>("abcdefghijklmnopqrstuvwxyz");
  const seen = new Set<string>();
  for (const char of s)
    if (valid.has(char.toLowerCase())) seen.add(char.toLowerCase());
  return seen.size === valid.size;
};

console.log(isPanagram("The quick brown fox jumps over the lazy dog"));
console.log(isPanagram("The quick brown fo jumps over the lazy dog"));

// -----------------------------------------------------

const initialize = (name: string): string => {
  return name
    .split(" ")
    .map((name) => name[0].toUpperCase())
    .join(".");
};

console.log(initialize("kyle nojaim"));
console.log(initialize("amanda mayfield"));
console.log(initialize("jake, with cats"));
