function numOfBurgers(tomatoSlices: number, cheeseSlices: number): number[] {
    // cheeseSlices determine how many burger that we can make
    // if tomatoSlices is odd, that mean none
    // if cheeseSlices >= tomatoSlices, that mean none
    // if 4 * cheeseSlices < tomatoSlices or 2 * cheeseSlices > tomatoSlices, that mean none
    // we can bruteforce from 0 to cheeseSlices, get which result achieve tomatoSlices
    // if 2 * cheeseSlices < tomatoSlices, decrease small and add jumbo (+2)
    // if 4 * cheeseSlices > tomatoSlices, decrease jumbo and add small (-2)
    // that mean if different between them is divisable by two then true

    if (tomatoSlices === 0 && cheeseSlices === 0) return [0,0]
    if (tomatoSlices % 2 === 1) return []
    if (cheeseSlices >= tomatoSlices) return []
    if (4 * cheeseSlices < tomatoSlices || 2 * cheeseSlices > tomatoSlices) return []

    const maxSmall = 2 * cheeseSlices
    const maxJumbo = 4 * cheeseSlices

    const diff = tomatoSlices - maxSmall
    const small = (maxSmall - diff) / 2
    const jumbo = (tomatoSlices - small * 2) / 4
    return [jumbo, small]
};