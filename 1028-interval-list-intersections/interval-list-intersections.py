class Solution:
    def intervalIntersection(self, firstList: List[List[int]], secondList: List[List[int]]) -> List[List[int]]:
        i = 0
        j = 0
        inter = []

        while i < len(firstList) and j < len(secondList):
            a,b = firstList[i]
            x,y = secondList[j]

            if a <= x and x <= b:
                if y <= b:
                    inter.append([x, y])
                    j += 1
                else: 
                    inter.append([x, b])
                    i += 1
            elif x <= a and a <= y:
                if b <= y:
                    inter.append([a, b])
                    i += 1
                else:
                    inter.append([a, y])
                    j += 1
            else:
                if b < y: i += 1
                else: j += 1
        
        return inter