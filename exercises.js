const batery = 20;
const nivelBatery = batery > 80 ? 'cheia' : batery > 20 ? 'moderada' : 'crítica'


function sum(num, arr) {
  let nums = []
  for (let i = 0; i < arr.length; i++) {
    if (num > arr[i])
      nums.push(arr[i])
  }
  return nums
}

console.log(sum(8, [25, 10, 5, 2, 1]))

// --------------------------------------------

function chunck(arr, size) {
  let newArray = []
  for (let i = 0; i < arr.length; i += size) {
    newArray.push(arr.slice(i, i + size))
  }
  return newArray
}

// --------------------------------------------------------

//Binary Search
function searchInsert(nums, target) {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (nums[mid] === target) {
      return mid;
    } else if (nums[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return left;
};

const arr = [1, 3, 5, 6, 8, 9, 10]
target = 8

// ------------------------------------------------------
function towSum(nums, target) {
  let hash = {};

  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    if ([target - n] in hash) {
      return [hash[target - n], i];
    }
    hash[n] = i;
  }
  return 'No solution';
}

const nums = [11, 15, 2, 7, 5, 9]
target = 24
