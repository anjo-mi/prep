/**
 * rgb function
 *
 * passing in decimal values represented in hex value
 *
 * 0 - 255 (outside of range gets rounded to nearest valid value)
 *
 * 255, 255, 255 --> "FFFFFF"
 * 255, 255, 300 --> "FFFFFF"
 * 0, 0, 0       --> "000000"
 * 148, 0, 211   --> "9400D3"
 *
 * if char is > 255 -> char = 255
 * if char is <   0 -> char = 0
 *
 * r = 233
 * const r_result = r.toString(16);
 * if r_result.length = 1 -> r_reult += r_result
 * return r_result.toUpperCase();
 *
 */

const r = 255;
const r_result = r.toString(16);

console.log(r_result);

// const convertToHex = (val) => {
//   if (val > 255) val = 255;
//   if (val < 0) val = 0;
//   let hexVal = val.toString(16);
//   if (hexVal.length === 1) hexVal = "0" + hexVal;
//   return hexVal.toUpperCase();
// };

// const rgbToHex = (r, g, b) => {
//   let result = "";
//   [r, g, b].forEach((num) => (result += convertToHex(num)));
//   return result;
// };

// console.log(rgbToHex(255, 255, 255));
// console.log(rgbToHex(255, 255, 300));
// console.log(rgbToHex(0, 0, 0));
// console.log(rgbToHex(148, 0, 211));
