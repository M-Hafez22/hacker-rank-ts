export default function dynamicArray(n: number, queries: number[][]): number[] {
  let lastAnswer: number = 0
  let lastAnswerArr: number[] = []

  // Initialize n empty arrays
  let arr: number[][] = Array.from({ length: n }, () => [])

  // Process each query
  queries.forEach(q => {
    let idx = (q[1] ^ lastAnswer) % n // Calculate index based on XOR and modulo

    if (q[0] === 1) {
      // Append y to arr[idx]
      arr[idx].push(q[2])
    } else if (q[0] === 2) {
      // Get value from arr[idx] and update lastAnswer
      let size = arr[idx].length
      lastAnswer = arr[idx][q[2] % size] // Get element at y % size
      lastAnswerArr.push(lastAnswer) // Store lastAnswer in result array
    }
  })

  return lastAnswerArr // Return the results of all type 2 queries
}

// Example usage
// const n = 2
// const queries = [
//   [1, 0, 5],
//   [1, 1, 7],
//   [1, 0, 3],
//   [2, 1, 0],
//   [2, 1, 1],
// ]
// console.log(dynamicArray(n, queries)) // Output: [7, 3]
