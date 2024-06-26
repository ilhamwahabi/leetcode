class Solution:
    def checkDistances(self, s: str, distance: List[int]) -> bool:
        map = {}

        for i in range(len(s)):
            char = s[i]

            if map.get(char) is None:
                map[char] = i
            else:
                if distance[ord(char) - 97] != i - map[char] - 1:
                    return False

        return True