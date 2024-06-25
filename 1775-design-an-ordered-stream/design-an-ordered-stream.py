class OrderedStream:
    def __init__(self, n: int):
        self.n = [None] * (n + 1)
        self.ptr = 1

    def insert(self, idKey: int, value: str) -> List[str]:
        self.n[idKey] = value

        result = []
        while (self.ptr < len(self.n) and self.n[self.ptr] is not None):
            result.append(self.n[self.ptr])
            self.ptr += 1

        return result


# Your OrderedStream object will be instantiated and called as such:
# obj = OrderedStream(n)
# param_1 = obj.insert(idKey,value)