function totalWaviness(num1: number, num2: number): number {
    let wavy = 0

    for (let i = num1; i <= num2; i++) {
        const str = String(i)
        for (let j = 1; j < str.length - 1; j++) {
            const isPeak = str[j] > str[j-1] && str[j] > str[j+1]
            const isValley = str[j] < str[j-1] && str[j] < str[j+1]

            if (isPeak || isValley) wavy++
        }
    }

    return wavy
};