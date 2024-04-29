function countOperations(num1: number, num2: number): number {
    // 2 & 3 -> 3
    // 10 & 10 -> 1
    // 2 & 4 -> 2 & 2 -> 2  

    // 1. Iterate while num1 > 0 and num2 > 0
    // 2. Otherwise decrease which one is greater
    // 3. Count the operation

    let counter = 0

    let x = num1
    let y = num2
    while (x > 0 && y > 0) {
        if (x >= y) x -= y
        else y -= x

        counter++
    }

    return counter
};