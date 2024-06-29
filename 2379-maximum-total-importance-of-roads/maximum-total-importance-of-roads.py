class Solution:
    def maximumImportance(self, n: int, roads: List[List[int]]) -> int:
        # Count how many cities that certain city connect
        # Sort descending it, assing value from n to 1
        # Iterate each road, sum the value

        city = {}
        for road in roads:
            a, b = road

            if a in city: city[a] += 1
            else: city[a] = 1

            if b in city: city[b] += 1
            else: city[b] = 1
        
        tuples = list(city.items())
        tuples.sort(key=lambda x: x[1])

        importance = {}
        for i in range(len(tuples)):
            importance[tuples[i][0]] = (n - len(tuples)) + i + 1

        res = 0
        for road in roads:
            a, b = road
            res += importance[a] + importance[b]
        return res