function longestSubarray(nums: number[]): number {
    let longestConsecutive = 0;

    let previousConsecutiveLength = 0;
    let currentConsecutiveLength = 0;
    let has0 = false;
    for (let index = 0; index < nums.length; index++) {
        if (nums[index] === 1) {
            currentConsecutiveLength++

            if (nums[index + 1] === 0 || index === nums.length - 1) {
                if (index === nums.length - 1 && !has0) return currentConsecutiveLength - 1;

                longestConsecutive = Math.max(
                    longestConsecutive,
                    previousConsecutiveLength + currentConsecutiveLength
                )

                previousConsecutiveLength = currentConsecutiveLength
                currentConsecutiveLength = 0
            }
        } else {
            has0 = true;
            if (nums[index - 1] === 0) previousConsecutiveLength = 0;
        }
    }

    return longestConsecutive;
};