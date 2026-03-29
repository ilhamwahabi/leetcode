function minAbsoluteDifference(nums: number[]): number {
    let onePointer = -1
    let twoPointer = -1

    let minDiff = Infinity
    for (let i = 0; i < nums.length; i++) {
        const num = nums[i]

        if (num === 1) {
            onePointer = i
            if (twoPointer !== -1) {
                minDiff = Math.min(minDiff, Math.abs(twoPointer - onePointer))
            }
        } else if (num === 2) {
            twoPointer = i
            if (onePointer !== -1) {
                minDiff = Math.min(minDiff, Math.abs(twoPointer - onePointer))
            }
        }
    }

    return minDiff === Infinity ? -1 : minDiff
};