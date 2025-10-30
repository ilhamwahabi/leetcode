function maxSumOfSquares(num: number, sum: number): string {
    // Loop until num times
    // Save current sum, each iteration if it's >= 9 then - 9, else use that number

    // Time: O(n)
    // Space: O(1)

    let result = ""

    let currSum = sum
    for (let i = 1; i <= num; i++) {
        if (currSum >= 9) {
            result += 9
            currSum -= 9
        } else {
            result += currSum
            currSum = 0
        }
    }

    return currSum > 0 ? "" : result
};