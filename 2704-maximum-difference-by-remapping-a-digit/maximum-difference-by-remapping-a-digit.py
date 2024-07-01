class Solution:
    def minMaxDifference(self, num: int) -> int:
        numStr = str(num)
        maxDigit = "-1"
        maxChar = "-1"
        minDigit = "-1"
        minChar = "-1"

        for i in range(len(numStr)):
            if numStr[i] != "9":
                maxDigit = numStr[i]
                maxChar = "9"
                break

        for i in range(len(numStr)):
            if numStr[i] != "0":
                minDigit = numStr[i]
                minChar = "0"
                break

        max = ""
        min = ""
        for i in range(len(numStr)):
            if numStr[i] == maxDigit: max += maxChar
            else: max += numStr[i]

            if numStr[i] == minDigit: min += minChar
            else: min += numStr[i]

        return int(max) - int(min)