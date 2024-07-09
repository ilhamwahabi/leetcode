class Solution:
    def averageWaitingTime(self, customers: List[List[int]]) -> float:
        # Time: O(n), linear
        # Space: O(1), constant

        # Iterate each customers, count waiting time and accumulated time
        # Return total waiting / len(customers)
    
        waiting = 0
        accumulated = 0

        for customer in customers:
            arrival, time = customer

            if accumulated == 0: accumulated = arrival
            accumulated = max(accumulated, arrival) + time

            waiting += max(accumulated - arrival, time)

        return waiting / len(customers)