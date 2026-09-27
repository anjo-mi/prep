const XsAndOs = (s: string): boolean => {
  const counts = s.split("").reduce(
    (a, el) => {
      if (el.toLowerCase() === "x" || el.toLowerCase() === "o")
        a[el] = (a[el] || 0) + 1;
      return a;
    },
    {} as Record<string, number>,
  );
  return counts["x"] === counts["o"];
};

console.log(XsAndOs("xiscpsxpbxxoxoxopsajpsxoxoosxoaxoasojasocapcoopa"));
console.log(XsAndOs("xxxooo"));
console.log(XsAndOs("xoxoxoxoxo"));
console.log(XsAndOs("xoxoxoxoo"));

const isIsogram = (s: string): boolean => {
  const set = new Set<string>();
  for (const char of s) {
    if (set.has(char.toLowerCase())) return false;
    set.add(char.toLowerCase());
  }
  return true;
};

/**
 * 10 minutes for a walk
 * walk generator
 * press button -> array of 1 letter strings nswe
 * 1 block per letter
 * 1 minute per block
 * boolean: exactly 10 minutes, return to starting location
 *
 * if array length isn't 10, we know it's false
 * ['N','S','E','W']
 * run a check that array length is 10
 *  - if not return false
 *
 */

const isTimelyWalk = (dirs: string[]): boolean => {
  if (dirs.length !== 10) return false;
  const steps: Record<string, number> = { N: 0, S: 0, E: 0, W: 0 };
  for (const dir of dirs) {
    if (dir in steps) steps[dir]++;
  }
  return steps["N"] === steps["S"] && steps["E"] === steps["W"];
};

console.log(isTimelyWalk(["N", "N", "S", "S", "E", "W", "W", "E", "N", "S"]));
console.log(isTimelyWalk(["N", "N", "S", "S", "E", "W", "W", "E", "N", "W"]));
console.log(
  isTimelyWalk(["N", "N", "S", "S", "E", "W", "W", "E", "N", "S", "N", "S"]),
);

const countVowels = (s: string): number => {
  const vowels = new Set<string>("aeiouy");
  return s
    .split("")
    .reduce((a, el) => (a += vowels.has(el.toLowerCase()) ? 1 : 0), 0);
};

console.log(countVowels("aeiouAEIOU"));
console.log(countVowels("aeiouvhjghmjfmkjhmkAEIOU"));
console.log(countVowels("f runirugriirgvrigvbrgcrg gighi ugui"));
