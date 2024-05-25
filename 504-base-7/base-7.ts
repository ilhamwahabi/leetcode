function convertToBase7(num: number): string {
    const n = Math.abs(num)

    let digit = String(n % 7) 
    let q = Math.floor(n / 7)

    while (q > 0) {
        digit = q % 7 + digit
        q = Math.floor(q / 7)
    }

    return num >= 0 ? digit : `-${digit}`
};