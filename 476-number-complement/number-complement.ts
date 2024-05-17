function findComplement(num: number): number {
    let result = ''

    for (const char of num.toString(2)) {
        if (char === "0") result += "1"
        else result += "0"
    }

    return parseInt(result, 2)
};