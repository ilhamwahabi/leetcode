function hasSameDigits(s: string): boolean {
    let prev = s.split("").map(i => +i)
    let curr = []

    while (prev.length > 2) {
        for (let i = 0; i < prev.length - 1; i++) {
            curr.push((prev[i] + prev[i+1]) % 10)
        }

        prev = [...curr]
        curr = []
    }

    return prev[0] === prev[1]
};