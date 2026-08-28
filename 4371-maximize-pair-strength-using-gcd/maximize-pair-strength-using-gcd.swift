class Solution {
    func maxPairStrength(_ nums: [Int]) -> Int {
        var biggest = 0

        for i in 0...nums.count - 2 {
            for j in i + 1...nums.count - 1 {
                let times = nums[i] * nums[j]
                let dvdr = getGcd(nums[i], nums[j])
                let res = times / (dvdr * dvdr)

                biggest = max(biggest, res)
            }
        }

        return biggest
    }
    func getGcd(_ a: Int, _ b: Int) -> Int {
        b == 0 ? a : getGcd(b, a % b)
    }
}