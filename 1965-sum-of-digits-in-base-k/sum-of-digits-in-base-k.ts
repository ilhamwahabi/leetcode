function sumBase(n: number, k: number): number {
    const converted = convert(n, k)

    return digitSum(parseInt(converted))
};

function convert(num: number, base: number) {
    let result = num % base + ""
    let q = Math.floor(num / base)
    
    while (q > 0) {
        result = (q % base) + result
        q = Math.floor(q / base)
    }

    return result
}

function digitSum(num: number) {
    if (num < 10) return num
    return digitSum(Math.floor(num / 10)) + num % 10
}