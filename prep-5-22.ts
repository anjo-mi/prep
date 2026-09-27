const convertToHex = (val: number): string => {
  if (val > 255) val = 255;
  if (val < 0) val = 0;
  let hexVal = val.toString(16);
  if (hexVal.length === 1) hexVal = "0" + hexVal;
  return hexVal.toUpperCase();
};

const rgbToHex = (r: number, g: number, b: number): string => {
  let result: string[] = [];
  [r, g, b].forEach((num) => result.push(convertToHex(num)));
  return result.join("");
};

console.log(rgbToHex(255, 255, 255));
console.log(rgbToHex(255, 255, 300));
console.log(rgbToHex(0, 0, 0));
console.log(rgbToHex(148, 0, 211));
