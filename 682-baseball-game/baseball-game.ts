function calPoints(operations: string[]): number {
    let sum = 0
    const arr = []

    operations.forEach(operation => {
        if (operation === "+") {
            const result = arr[arr.length - 1] + arr[arr.length - 2]
            sum += result
            arr.push(result)
        } else if (operation === "D") {
            const result = arr[arr.length - 1] * 2
            sum += result
            arr.push(result)
        } else if (operation === "C") {
            const result = arr.pop()
            sum -= result
        } else {
            const result = parseInt(operation)
            sum += result
            arr.push(result)
        }
    })

    return sum
};