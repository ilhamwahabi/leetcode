function countTime(time: string): number {
    let result = 1

    if (time[4] === "?") result *= 10
    if (time[3] === "?") result *= 6

    if (time[1] === "?" && time[0] === "?") result *= 24
    if (time[1] === "?" && +time[0] <= 1) result *= 10
    if (time[1] === "?" && +time[0] === 2) result *= 4
    if (time[0] === "?" && +time[1] >= 4) result *= 2
    if (time[0] === "?" && +time[1] < 4) result *= 3

    return result
};