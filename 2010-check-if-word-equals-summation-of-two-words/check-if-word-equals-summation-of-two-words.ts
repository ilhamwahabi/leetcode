function isSumEqual(firstWord: string, secondWord: string, targetWord: string): boolean {
    let x = ""
    for (let char of firstWord) x += add(char)

    let y = ""
    for (let char of secondWord) y += add(char)

    let z = ""
    for (let char of targetWord) z += add(char)

    return parseInt(x) + parseInt(y) === parseInt(z)
};

function add(char) {
    switch (char) {
        case "a": return "0";
        case "b": return "1";
        case "c": return "2";
        case "d": return "3";
        case "e": return "4";
        case "f": return "5";
        case "g": return "6";
        case "h": return "7";
        case "i": return "8";
        case "j": return "9";
    }
}