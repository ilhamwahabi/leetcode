function dayOfTheWeek(day: number, month: number, year: number): string {
    // Count the distance between the date and 1st Jan 1971, % 7

    // Time: O(n), linear
    // Space: O(1), constant

    const days = {
        0: "Thursday",
        1: "Friday",
        2: "Saturday",
        3: "Sunday",
        4: "Monday",
        5: "Tuesday",
        6: "Wednesday",
    }

    const months = {
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
        12: 31,
    }
    
    let totalYearDays = 0
    for (let i = 1971; i < year; i++) {
        totalYearDays += 365
        if (isLeap(i)) totalYearDays++
    }

    let totalCurrDays = day
    for (let i = 1; i < month; i++) {
        totalCurrDays += months[i]
        if (i === 2 && isLeap(year)) totalCurrDays++
    }

    return days[(totalYearDays + totalCurrDays) % 7]
};

const isLeap = (year: number) => {
    if (year % 100 === 0) return year % 400 === 0
    return year % 4 === 0
}