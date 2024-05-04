function reverseStr(s: string, k: number): string {
    // Slice string by 2k
    // Reverse 0...k of that sliced string
    // Append to result

    let result = ""
    
    for (let i = 0; i < s.length; i += 2 * k) {
        const sub = s.slice(i, i + 2 * k)

        let rev = ""
        for (let i = 0; i < Math.min(k, sub.length); i++) rev = sub[i] + rev

        result += rev + sub.slice(k)
    }

    return result
};