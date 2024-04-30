function triangleType(nums: number[]): string {
    nums.sort((a,b) => a-b)

    if (nums[0] === nums[1] && nums[1] === nums[2] && nums[2] === nums[0]) return "equilateral"
    else {
        if (nums[0] + nums[1] > nums[2] && nums[1] + nums[2] > nums[0] && nums[0] + nums[2] > nums[1]) {
            if (nums[0] === nums[1] || nums[1] === nums[2]) return "isosceles"
            else return "scalene"
        } else {
            return "none"
        }
    }
};