class Solution {
    func threeFibonacciSum(_ n: Int) -> Bool {
        var (a,b,c) = (0, 1, 1)
        while a + b + c < n {
            (a, b, c) = (b, c, b + c)
        }
        return a + b + c == n
    }
}