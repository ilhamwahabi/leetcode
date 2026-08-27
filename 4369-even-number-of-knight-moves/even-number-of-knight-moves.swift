class Solution {
    func canReach(_ start: [Int], _ target: [Int]) -> Bool {
        // Horse can reach everywhere, since it move in odd interval
        // 44 -> 56 (3) -> 35 (2)
        // 44 -> 56 (3) -> 35 (2) -> 47 (3)
        // 44 -> 56 (3)
        return ((abs(start[0] - target[0]) + abs(start[1] - target[1])) % 2) == 0
    }
}