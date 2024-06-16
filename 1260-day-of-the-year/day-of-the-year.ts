function dayOfYear(date: string): number {
    const [year, month, day] = date.split("-")
    const map = {
        1: 31, 2: 28, 3: 31, 4: 30, 5: 31, 6: 30,
        7: 31, 8: 31, 9: 30, 10: 31, 11: 30, 12: 31
    }

    let result = +day
    for (let i = 1; i < +month; i++) {
        result += map[i]
        if (i === 2 && isLeapYear(+year)) result++
    }

    return result
};

function isLeapYear(year: number): boolean {
    if (year % 100 === 0 && year % 400 !== 0) return false
    return year % 4 === 0
}