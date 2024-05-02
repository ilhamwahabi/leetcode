function clumsy(n: number): number {
    // 1. Loop from n to 1
    // 2. Save in stack, and the operation
    // ['1', '*']
    // 3. Iterate until array empty

    const arr: (number | string)[] = [n]

    for (let i = n - 1; i >= 1; i--) {
        const idx = n - i

        if (idx % 4 === 1) arr.push('*', i)
        else if (idx % 4 === 2) arr.push('/', i)
        else if (idx % 4 === 3) arr.push('+', i)
        else if (idx % 4 === 0) arr.push('-', i)
    }
    
    let i = 1
    while (i < arr.length) {
        if (arr[i] === "*") {
            const prod = (arr[i-1] as number) * (arr[i+1] as number)
            arr.splice(i - 1, 3, prod)
        } else if (arr[i] === "/") {
            const prod = (arr[i-1] as number) / (arr[i+1] as number)
            arr.splice(i - 1, 3, Math.floor(prod))
        } else {
            i += 2
        }
    }

    i = 1
    while (i < arr.length) {
        if (arr[i] === "+") {
            const prod = (arr[i-1] as number) + (arr[i+1] as number)
            arr.splice(i - 1, 3, prod)
        } else if (arr[i] === "-") {
            const prod = (arr[i-1] as number) - (arr[i+1] as number)
            arr.splice(i - 1, 3, prod)
        }
    }

    return arr[0] as number
};