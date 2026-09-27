const isPangram = (str: string): boolean => {
  const alpha = new Set("abcdefghijklmnopqrstuvwxyz");
  const counts = str.split("").reduce(
    (a, el) => {
      const char = el.toLowerCase();
      if (alpha.has(char)) a[char] = (a[char] || 0) + 1;
      return a;
    },
    {} as Record<string, number>,
  );
  let total = 0;
  for (const char in counts) total++;
  return total === 26;
};

console.log(isPangram("The quick brown fox jumps over the lazy dog"));

const jadentify = (str: string) => {
  return str
    .split(" ")
    .map((word) => word[0].toUpperCase() + word.slice(1).toLowerCase())
    .join(" ");
};

console.log(jadentify(`How can mirrors be real if our eyes aren't real`));
console.log(
  jadentify(`why do we slap others, when it only causes pain unto ourselves`),
);

const squareDigits = (num: number): number => {
  return +num
    .toString()
    .split("")
    .map((dig) => +dig * +dig)
    .join("");
};

console.log(squareDigits(9119));
console.log(squareDigits(981724));
