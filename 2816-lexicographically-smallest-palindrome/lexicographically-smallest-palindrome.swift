class Solution {
    func makeSmallestPalindrome(_ s: String) -> String {
        // create two pointers, a at start, b at end
        // do while loop with a<=b
        // check if the letter is same
        // if not then determine the character number, the bigger got replaced by the smaller
        // return modified string

        var res = Array(s)
        var a = 0
        var b = res.count - 1

        while (a <= b) {
            if (res[a] < res[b]) {
                res[b] = res[a]
            } else if (res[a] > res[b]) {
                res[a] = res[b]
            }

            a += 1
            b -= 1
        }

        return String(res)
    }
}