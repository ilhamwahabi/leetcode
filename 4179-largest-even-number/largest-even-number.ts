function largestEven(s: string): string {
    // Iterate from back, only store when you finally find 2
    let result = ""

    for (let i = s.length - 1; i >= 0; i--) {
        const num = s[i]

        if (result !== "" || (result === "" && num === "2")) {
            result = num + result
        }
    }

    return result
};