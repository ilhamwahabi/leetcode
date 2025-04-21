const month = {
    1: 31,
    2: 28,
    3: 31,
    4: 30,
    5: 31,
    6: 30,
    7: 31,
    8: 31,
    9: 30,
    10: 31,
    11: 30,
    12: 31
}

function daysBetweenDates(date1: string, date2: string): number {
    const [year1, month1, day1] = date1.split("-")
    const [year2, month2, day2] = date2.split("-")

    let result = 0

    // Year
    for (let i = 1971; i < +year1; i++) {
        result += 365
        if (isLeapYear(i)) result++
    }
    for (let i = 1971; i < +year2; i++) {
        result -= 365
        if (isLeapYear(i)) result--
    }

    // Month
    for (let i = 1; i < +month1; i++) {
        result += month[i]
        if (i === 2 && isLeapYear(+year1)) result++
    }
    for (let i = 1; i < +month2; i++) {
        result -= month[i]
        if (i === 2 && isLeapYear(+year2)) result--
    }

    // Day
    result = result + +day1 - +day2

    return Math.abs(result)
};

function isLeapYear(year: number) {
    if (year % 100 === 0) {
        return year % 400 === 0
    }
    return year % 4 === 0
}