function memLeak(memory1: number, memory2: number): number[] {
    let a = memory1
    let b = memory2
    let i = 1

    while (i <= a || i <= b) {
        if (a >= b) a -= i
        else b -= i
        
        i++
    }

    return [i, a, b]
};