class Solution:
    def losingPlayer(self, x: int, y: int) -> str:
        # x = 75, y = 10
        # 115 = x + 4y
        # Iterate while x > 0 and y > 0
        # Else return current player

        a = x
        b = y
        turn = 1

        while a >= 0 and b >= 0:
            a -= 1
            b -= 4

            turn *= -1
        
        return "Alice" if turn == 1 else "Bob"