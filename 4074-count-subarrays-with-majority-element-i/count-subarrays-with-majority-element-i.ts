function countMajoritySubarrays(nums: number[], target: number): number {
    let result = 0
    
    function backtracking(count = 0, numOfTarget = 0, index = 0) {
        if (numOfTarget > count - numOfTarget) result++

        if (index === 0) {
            for (let i = 0; i < nums.length; i++) {
                backtracking(
                    count + 1,
                    nums[i] === target ? numOfTarget + 1 : numOfTarget,
                    i + 1,
                )
            }
        } else {
            if (nums[index]) {
                backtracking(
                    count + 1,
                    nums[index] === target ? numOfTarget + 1 : numOfTarget,
                    index + 1
                )
            }
        }
    }
    backtracking()

    return result
};