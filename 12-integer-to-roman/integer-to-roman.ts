function intToRoman(num: number): string {
    // Iterate each num digit
    // Construct thousand -> M 1000
    // Construct hundreds -> D 500, C 100
    // Construct thousand -> L 50, X 10
    // Construct unit -> V 5, I 1

    let result = ""

    const str = String(num)
    for (let i = 0; i < str.length; i++) {
        let type = ""
        if (str.length - i === 4) type = "1000"
        if (str.length - i === 3) type = "100"
        if (str.length - i === 2) type = "10"
        if (str.length - i === 1) type = "1"
        
        if (+str[i] < 4) {
            if (type === "1000") result += "M".repeat(+str[i])
            if (type === "100") result += "C".repeat(+str[i])
            if (type === "10") result += "X".repeat(+str[i])
            if (type === "1") result += "I".repeat(+str[i])     
        }
        else if (+str[i] === 4) {
            if (type === "100") result += "CD"
            if (type === "10") result += "XL"
            if (type === "1") result += "IV" 
        }
        else if (+str[i] < 9) {
            if (type === "100") result += "D" + "C".repeat(+str[i] - 5)
            if (type === "10") result += "L" + "X".repeat(+str[i] - 5)
            if (type === "1") result += "V" + "I".repeat(+str[i] - 5)
        }
        else if (+str[i] === 9) {
            if (type === "100") result += "CM"
            if (type === "10") result += "XC"
            if (type === "1") result += "IX" 
        }
    }

    return result
};