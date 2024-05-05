function canBeEqual(target: number[], arr: number[]): boolean {
    // Loop arr, set pointer at target, if target[i] !== arr[i] then search for target[i]
    // If until end we cant find target[i] return false
    // [1,2,3,4] ? [4,1,3,2] [1,4,2,3]

    const mapA = {}
    const mapT = {}

    for (let i = 0; i < target.length; i++) {
        mapA[arr[i]] ? mapA[arr[i]]++ : mapA[arr[i]] = 1
        mapT[target[i]] ? mapT[target[i]]++ : mapT[target[i]] = 1
    }

    for (const key in mapT) {
        if (!mapA[key] || mapA[key] !== mapT[key]) return false
    }

    return true
};