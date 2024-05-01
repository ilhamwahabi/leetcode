function checkPowersOfThree(n: number): boolean {
    // 1. Convert it to base 3
    // 2. Check if its only contain 0 or 1, 
    //    since else that mean + 3**i * n (not sum of powers of three)

    const base3 = n.toString(3)

    for (let i = 0; i < base3.length; i++) {
        if (base3[i] !== "0" && base3[i] !== "1") return false
    }
    return true
};