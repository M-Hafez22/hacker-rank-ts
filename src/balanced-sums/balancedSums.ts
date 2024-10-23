export default function balancedSums(arr: number[]): string {
  let total_sum = arr.reduce((a, b) => a + b, 0) // sum of all elements
  let left_sum = 0

  for (let i = 0; i < arr.length; i++) {
    let right_sum = total_sum - left_sum - arr[i]

    if (left_sum === right_sum) {
      return "YES"
    }

    left_sum += arr[i]
  }

  return "NO"
}
