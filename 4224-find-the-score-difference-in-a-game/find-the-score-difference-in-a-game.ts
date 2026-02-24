function scoreDifference(nums: number[]): number {
    const score = [0,0]
    let activePlayer = 0

    for (let i = 0; i < nums.length; i++) {
        const num = nums[i]
        
        if (num % 2 === 1) {
            activePlayer++
        }
        if ((i + 1) % 6 === 0) {
            activePlayer++
        }

        score[activePlayer % 2] += num
    }

    return score[0] - score[1]
};