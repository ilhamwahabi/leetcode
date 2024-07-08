class Solution:
    def findTheWinner(self, n: int, k: int) -> int:
        friends = []
        for i in range(n):
            friends.append(i)

        i = 0
        while len(friends) > 1:
            i = (i + k - 1) % len(friends)
            friends.pop(i)

        return friends[0] + 1