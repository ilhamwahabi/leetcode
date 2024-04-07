function sortEvenOdd(nums: number[]): number[] {
    const odds = []
    const evens = []

    nums.forEach((num, i) => {
        if (i % 2 === 0) evens.push(num)
        else odds.push(num)
    })

    odds.sort((a,b) => b-a)
    evens.sort((a,b) => a-b)

    const result = []
    for (let i = 0; i < odds.length; i++) {
        result.push(evens[i], odds[i])
    }
    if (result.length !== nums.length) result.push(evens[evens.length-1])

    return result
};