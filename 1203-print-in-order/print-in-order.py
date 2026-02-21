import time

class Foo:
    def __init__(self):
        self.num = 0

    def first(self, printFirst: 'Callable[[], None]') -> None:
        printFirst()
        self.num += 1
        # printFirst() outputs "first". Do not change or remove this line.

    def second(self, printSecond: 'Callable[[], None]') -> None:
        while True:
            if self.num == 1:
                printSecond()
                self.num += 1
                break

        # printSecond() outputs "second". Do not change or remove this line.
        # printSecond()


    def third(self, printThird: 'Callable[[], None]') -> None:
        while True:
            if self.num == 2:
                printThird()
                break
        # printThird() outputs "third". Do not change or remove this line.
        # printThird()