/**
 * a-m are good
 * case insensitive
 * return error rate of string
 * given string
 *
 */

const getErrorRate = (s: string): string => {
  const good = new Set<string>("abcdeghijklm");
  const valid = s
    .split("")
    .reduce((a, el) => (good.has(el.toLowerCase()) ? a + 1 : a), 0);
  return `${s.length - valid} / ${s.length}`;
};

console.log(getErrorRate("aaaaaaa"));
console.log(getErrorRate("aaaaaaazzzzzzzzzzzzz"));
console.log(getErrorRate("aaaaaaazzvfdghtfhh uyuyturyu yu tyu zzzzz"));

/**
 * given string of words
 * find highest scoring word
 * count by position in alph
 */

const highestScoredWord = (s: string): string => {
  const points = "abcdefghijklmnopqrstuvwxyz".split("").reduce(
    (a, el, i) => {
      a[el] = i;
      return a;
    },
    {} as Record<string, number>,
  );

  const scores: number[] = s
    .split(" ")
    .map((word) =>
      word.split("").reduce((a, el) => (a += points[el.toLowerCase()]), 0),
    );

  let max = 0;
  for (const score of scores) max = Math.max(score, max);
  const index = scores.indexOf(max);
  return s.split(" ")[index];
};

console.log(highestScoredWord("rjkg krjgri ug iurghruiur rghhoru ghruot"));
console.log(highestScoredWord("bbb d"));
console.log(
  highestScoredWord(
    "fbgv riugrui griug ri brgbb bg girb egue j t gbrtggukghukrrdvbhvk ur rugh rukerkgrg ",
  ),
);
console.log(highestScoredWord("fff fff fff gg s a zzz a azaz az aa"));
