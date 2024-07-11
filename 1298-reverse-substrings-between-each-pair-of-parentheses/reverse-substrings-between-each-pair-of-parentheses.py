class Solution:
    def reverseStr(self, s: str) -> str:
        rev = ""

        for char in s:
            rev = char + rev
        
        return rev

    def reverseParentheses(self, s: str) -> str:
        # Iterate s, if we found ( then store the chars after it
        # If we found (: append to stack, if we found ): reverse chars and append to stack

        # Time: O(m * n) ~ O(n^2), quadratic
        # Space: O(m), linear

        stack = [""]
        for char in s:
            if char == "(":
                stack.append("")
            elif char == ")":
                stack[-1] = self.reverseStr(stack[-1])
                stack[-2] += stack[-1]
                stack.pop()
            else:
                stack[-1] += char
        
        return stack[0]