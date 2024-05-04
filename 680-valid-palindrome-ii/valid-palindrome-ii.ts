function validPalindrome(s: string): boolean {
    // Use two pointer, for the front and back
    // If same, forward the pointer
    // If not, check is next char will be same, if still not false

    let a = 0
    let z = s.length - 1
    let del = false

    while (a < z) {
        if (s[a] === s[z]) {
            a++
            z--
        } else {
            if (s[a+1] === s[z] && !del && isPalindrome(s.slice(a+1, z+1))) {
                a++
                del = true
            } else if (s[a] === s[z-1] && !del && isPalindrome(s.slice(a, z))) {
                z--
                del = true
            } else {
                return false
            }
        }
    }

    return true
};

function isPalindrome(s: string) {
    for (let i = 0; i < s.length; i++) {
        if (s[i] !== s[s.length - 1 - i]) return false
    }

    return true
}