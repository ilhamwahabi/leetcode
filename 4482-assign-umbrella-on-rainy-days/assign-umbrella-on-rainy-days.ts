function assignUmbrella(rain: number[]): string[] {
    // Iterate each day in rain
    // simulate

    let alice = 0
    let bob = 0

    const result = []
    for (let i = 0; i < rain.length; i++) {
        const isAliceUmbrella = rain[i] === 1 && rain[i + 1] === 1
        const isBobUmbrella = rain[i] === 1

        if (isAliceUmbrella && isBobUmbrella) {
            if (alice <= bob) {
                alice++
                result.push("Alice")
            } else {
                bob++
                result.push("Bob")
            }
        } else if (isAliceUmbrella) {
            alice++
            result.push("Alice")
        } else if (isBobUmbrella) {
            bob++
            result.push("Bob")
        } else {
            result.push("None")
        }
    }

    return result
};