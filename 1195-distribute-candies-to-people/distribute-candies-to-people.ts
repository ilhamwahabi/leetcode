function distributeCandies(candies: number, num_people: number): number[] {
    // 1. Iterate while candies > 0
    // 2. Track people order which we gave candy
    // 3. Track amount of candy that we should gave

    let c = candies
    let n = 0
    let g = 1

    const result = []
    for (let i = 0; i < num_people; i++) result.push(0)

    while (c > 0) {
        const give = Math.min(c, g)
        result[n] += give
        c -= give
        
        g++
        n++
        if (n === num_people) n = 0
    }
    return result
};