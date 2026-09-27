/**
 * build a tree
 * take in a number
 *  - that will be the height of the tree
 *
 *
 */

const buildTree = (num: number): string[] => {
  const width = num * 2 - 1;
  const rows = [];
  for (let i = 0; i < num; i++) {
    const bulk = "*" + "*".repeat(i * 2);
    const spaces = " ".repeat((width - bulk.length) / 2);
    rows.push(spaces + bulk + spaces);
  }
  return rows;
};

console.log(buildTree(3));
console.log(buildTree(0));
console.log(buildTree(1));
console.log(buildTree(5));
