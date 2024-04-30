function divisorSubstrings(num: number, k: number): number {
    // 1. Parse num to string
    // 2. Iterate parsed num for each slice(i, k)
    // 3. Count which slice can divise num

    const parsed = String(num)
    let counter = 0

    for (let i = 0; i <= parsed.length - k; i++) {
        const sub = parseInt(parsed.slice(i, i + k))
        if (num % sub === 0) counter++ 
    }

    return counter
};