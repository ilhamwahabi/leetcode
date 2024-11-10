function kthCharacter(k: number): string {
    let str = 'a'

    while (str.length < k) {
        let append = ''
        for (const char of str) {
            if (char === 'z') append += 'a'
            else append += String.fromCharCode(char.charCodeAt(0) + 1)
        }

        str += append
    }

    return str[k-1]
};