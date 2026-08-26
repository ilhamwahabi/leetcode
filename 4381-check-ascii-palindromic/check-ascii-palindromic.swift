class Solution {
    func isPalindromic(_ s: String) -> Bool {
        // Get the ASCII value of string
        // Get the binary representation of above
        // Check if the binary palindrome, return the result

        var str = ""
        for char in s {
            var ascii = char.asciiValue
            var bin = String(ascii!, radix: 2)
            str += String(repeating: "0", count: 8 - bin.count) + bin
        }

        var reverse = ""
        for char in str {
            reverse = String(char) + reverse
        }

        return str == reverse
    }
}