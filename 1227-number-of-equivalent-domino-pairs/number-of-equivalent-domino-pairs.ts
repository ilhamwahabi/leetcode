function numEquivDominoPairs(dominoes: number[][]): number {
    const pairs = {}
    let result = 0
    for (let i = 0; i < dominoes.length; i++) {
        const [a,b] = dominoes[i]
        const max = Math.max(a,b)
        const min = Math.min(a,b)

        if (pairs[`${min}-${max}`]) {
            result += pairs[`${min}-${max}`]
            pairs[`${min}-${max}`]++
        } else {
            pairs[`${min}-${max}`] = 1
        }
    }

    return result
};