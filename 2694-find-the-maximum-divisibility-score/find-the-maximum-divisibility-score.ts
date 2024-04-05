function maxDivScore(nums: number[], divisors: number[]): number {
    let max = -Infinity
    let divisor = Infinity
    
    for (let i = 0; i < divisors.length; i++) {
        let score = 0
        
        for (let j = 0; j < nums.length; j++) {
            if (nums[j] % divisors[i] === 0) {
                score++
            }
        }

        if (score > max || (score === max && divisors[i] < divisor)) {
            max = score
            divisor = divisors[i]
        }
    }

    return divisor
};