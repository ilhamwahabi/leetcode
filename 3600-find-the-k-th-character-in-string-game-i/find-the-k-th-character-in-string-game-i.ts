function kthCharacter(k: number): string {
    let str = 'a'
    const map = {
        'a': 'b', 'b': 'c', 'c': 'd', 'd': 'e', 'e': 'f', 
        'f': 'g', 'g': 'h', 'h': 'i', 'i': 'j', 'j': 'k', 
        'k': 'l', 'l': 'm', 'm': 'n', 'n': 'o', 'o': 'p', 
        'p': 'q', 'q': 'r', 'r': 's', 's': 't', 't': 'u', 
        'u': 'v', 'v': 'w', 'w': 'x', 'x': 'y', 'y': 'z', 
        'z': 'a'
    };

    while (str.length < k) {
        let append = ''
        for (const char of str) append += map[char]
        str += append
    }

    return str[k-1]
};