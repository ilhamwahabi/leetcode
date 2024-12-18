function validSquare(p1: number[], p2: number[], p3: number[], p4: number[]): boolean {
    // Find all 4 out sides and 2 in sides
    // Check if all 4 out sides is same and 2 in sides is same and check pythagoras

    const map = {}

    const arr = [p1, p2, p3, p4]
    for (let i = 0; i < arr.length; i++) {
        const [a, b] = arr[i]
        
        for (let j = i + 1; j < arr.length; j++) {
            const [c, d] = arr[j]

            const side = Math.pow(a - c, 2) + Math.pow(b - d, 2)
            map[side] ? map[side]++ : map[side] = 1
        }
    }

    let outsides = null
    let insides = null
    Object.keys(map).forEach(key => {
        if (map[key] === 4) outsides = +key
        else if (map[key] === 2) insides = +key
    })

    if (outsides && insides) return outsides * 2 === insides
    return false
};