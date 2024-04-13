function findRestaurant(list1: string[], list2: string[]): string[] {
    const map = {}

    list1.forEach((word, index) => {
        map[word] = index
    })

    let result = []
    let min = Infinity

    list2.forEach((word, index) => {
        if (map[word] !== undefined) {
            map[word] += index
        }

        if (map[word] < min) {
            result = [word]
            min = map[word]
        } else if (map[word] === min) {
            result.push(word)
        }
    })

    return result
};