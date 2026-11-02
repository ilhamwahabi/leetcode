class Solution {
    func threeFibonacciSum(_ n: Int) -> Bool {
        var fibs = [0,1,1]
        var sum = fibs[0] + fibs[1] + fibs[2]
        while (sum < n) {
            let item = fibs[fibs.count - 1] + fibs[fibs.count - 2]
            sum += item - fibs[fibs.count - 3]

            fibs.append(item)
        }
        return sum == n
    }
}