const batery = 20;
const nivelBatery = batery > 80 ? 'cheia' : batery > 20 ? 'moderada' : 'crítica'


function sum(num, arr) {
  nums = []
  for (let i = 0; i < arr.length; i++) {
    if (num > arr[i])
      nums.push(arr[i])
  }
  return nums
}

console.log(sum(8, [25, 10, 5, 2, 1]))