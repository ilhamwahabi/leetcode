function licenseKeyFormatting(s: string, k: number): string {
    // Store all alphanumeric
    // Loop from back, append to the front of result, if not last char and %4 add -

    const an = []
    for (const char of s) {
        if (/[a-zA-Z0-9]/.test(char)) an.push(char.toUpperCase())
    }

    let result = ""
    for (let i = an.length - 1; i >= 0; i--) {
        result = an[i] + result
        if (i !== 0 && ((an.length) - i) % k === 0) result = "-" + result
    }
    return result
};