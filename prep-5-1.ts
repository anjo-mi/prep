/**
 * new string, no vowels
 */

const disemvowel = (str: string): string => {
  const vowels = new Set("aeiou");
  return str
    .split("")
    .filter((char) => !vowels.has(char.toLowerCase()))
    .join("")
    .trim();
};

console.log(disemvowel("this is a string FULL of VOWELS and CONsanants!!!"));
