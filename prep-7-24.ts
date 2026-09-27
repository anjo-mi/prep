// accumulate(string)
// takes string
// 'abc' –> 'a-bb-ccc'

const accumulate = (s: string): string => {
  return s
    .split("")
    .map((char, i) => char.repeat(i + 1))
    .join("-");
};

console.log(accumulate("abc"));
console.log(accumulate("fhguighdiugh"));
console.log(accumulate("fghgh"));

const jadentify = (s: string): string => {
  return s
    .split(" ")
    .map((word) => word[0].toUpperCase() + word.slice(1))
    .join(" ");
};

console.log(jadentify("How can mirrors be real if our eyes aren't real"));
