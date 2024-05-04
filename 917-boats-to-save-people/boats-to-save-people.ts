function numRescueBoats(people: number[], limit: number): number {    
    people.sort((a,b) => a-b)

    let boat = 0
    let i = 0
    let j = people.length - 1

    while (i <= j) {
        if (people[i] + people[j] <= limit) i++
        boat++
        j--
    }

    return boat
};