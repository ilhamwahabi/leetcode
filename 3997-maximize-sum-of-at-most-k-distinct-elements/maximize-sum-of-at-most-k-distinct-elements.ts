function maxKDistinct(nums: number[], k: number): number[] {
    const set = Array.from(new Set(nums))
    set.sort((a,b) => b - a)

    return set.slice(0, k)
};