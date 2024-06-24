class Solution:
    def getConcatenation(self, nums: List[int]) -> List[int]:
        result = []
        length = len(nums)

        for index, num in enumerate(nums):
            result.insert(index, num)
            result.insert(index + length, num)

        return result