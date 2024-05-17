function largestInteger(num: number): number {
    // Get odd and even number
    // Sort them descended
    // Use two pointer to mark the one will we add to result, iterate num

    const str = String(num)
    const even = []
    const odd = []
    for (const char of str) {
        if (parseInt(char) % 2 === 0) even.push(parseInt(char))
        else odd.push(parseInt(char))
    }
    even.sort((a,b) => b-a)
    odd.sort((a,b) => b-a)

    let result = ''
    let i = 0
    let j = 0
    for (let k = 0; k < str.length; k++) {
        if (parseInt(str[k]) % 2 === 0) {
            result += even[i]
            i++
        } else {
            result += odd[j]
            j++
        }
    }
    return parseInt(result)
};