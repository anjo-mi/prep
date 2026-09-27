var searchRange = function (nums: number[], target: number): number[] {
  if (!nums.length) return [-1, -1];
  let l: number = 0,
    r: number = nums.length - 1;
  while (l <= r) {
    const mid: number = Math.floor((l + r) / 2);
    if (nums[mid] < target) l = mid + 1;
    else if (nums[mid] > target) r = mid - 1;
    else {
      l = mid - 1;
      r = mid + 1;
      while (nums[l] === nums[mid]) l--;
      while (nums[r] === nums[mid]) r++;
      return [l + 1, r - 1];
    }
  }
  return [-1, -1];
};

console.log(searchRange([5, 7, 7, 8, 8, 10], 7));
console.log(searchRange([5, 7, 7, 8, 8, 10], 10));
console.log(searchRange([], 0));
