// var searchRange = function (nums, target) {
//   if (!nums.length) return [-1, -1];
//   let l = 0,
//     r = nums.length - 1;
//   while (l <= r) {
//     const mid = Math.floor((l + r) / 2);
//     if (nums[mid] < target) l = mid + 1;
//     else if (nums[mid] > target) r = mid - 1;
//     else {
//       l = mid - 1;
//       r = mid + 1;
//       while (nums[l] === nums[mid]) l--;
//       while (nums[r] === nums[mid]) r++;
//       return [l + 1, r - 1];
//     }
//   }
//   return [-1, -1];
// };
