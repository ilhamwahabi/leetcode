function containsDuplicate(nums: number[]): boolean {
    const map = {}

    for (const num of nums) {
        if (!map[num]) map[num] = true
        else return true;
    }

    return false;
};