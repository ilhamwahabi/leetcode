function largestPerimeter(nums: number[]): number {
    nums.sort((a,b) => b-a)

    let i = 0
    let sum = 0

    while (sum === 0 && i < nums.length - 2) {
        const a = nums[i]
        const b = nums[i+1]
        const c = nums[i+2]
        
        if (a + b > c && b + c > a && c + a > b) sum = a + b + c
        else i++      
    }

    return sum
};