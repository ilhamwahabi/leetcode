function maximumHappinessSum(happiness: number[], k: number): number {
    // Sort happiness descending
    // Take front element, next decrease the value of being taken by el[i] - i

    happiness.sort((a,b) => b-a)

    let sum = 0
    for (let i = 0; i < k; i++) sum += Math.max(happiness[i] - i, 0)
    return sum
};