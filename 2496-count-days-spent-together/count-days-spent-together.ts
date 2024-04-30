function countDaysTogether(arriveAlice: string, leaveAlice: string, arriveBob: string, leaveBob: string): number {
    const months = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]

    // 1. Check which one arrive last
    // 2. Check which one leave first
    // 3. Substract that date

    const [monthArriveAlice, dateArriveAlice] = arriveAlice.split("-")
    const [monthArriveBob, dateArriveBob] = arriveBob.split("-")
    const [monthLeaveAlice, dateLeaveAlice] = leaveAlice.split("-")
    const [monthLeaveBob, dateLeaveBob] = leaveBob.split("-")

    let monthStart = 0
    let dateStart = 0
    let monthEnd = 0
    let dateEnd = 0

    if (
        (monthLeaveAlice === monthArriveBob && dateLeaveAlice < dateArriveBob) ||
        (monthLeaveBob === monthArriveAlice && dateLeaveBob < dateArriveAlice) ||
        (monthLeaveAlice < monthArriveBob) ||
        (monthLeaveBob < monthArriveAlice)
    ) {
        return 0
    }

    if (parseInt(monthArriveAlice) > parseInt(monthArriveBob)) {
        monthStart = parseInt(monthArriveAlice)
        dateStart = parseInt(dateArriveAlice)
    } else if (parseInt(monthArriveAlice) < parseInt(monthArriveBob)) {
        monthStart = parseInt(monthArriveBob)
        dateStart = parseInt(dateArriveBob)
    } else {
        monthStart = parseInt(monthArriveAlice)
        if (parseInt(dateArriveAlice) > parseInt(dateArriveBob)) {
            dateStart = parseInt(dateArriveAlice)
        } else {
            dateStart = parseInt(dateArriveBob)
        }
    }

    if (parseInt(monthLeaveAlice) < parseInt(monthLeaveBob)) {
        monthEnd = parseInt(monthLeaveAlice)
        dateEnd = parseInt(dateLeaveAlice)
    } else if (parseInt(monthLeaveAlice) > parseInt(monthLeaveBob)) {
        monthEnd = parseInt(monthLeaveBob)
        dateEnd = parseInt(dateLeaveBob)
    } else {
        monthEnd = parseInt(monthLeaveAlice)
        if (parseInt(dateLeaveAlice) < parseInt(dateLeaveBob)) {
            dateEnd = parseInt(dateLeaveAlice)
        } else {
            dateEnd = parseInt(dateLeaveBob)
        }
    }

    if (monthStart === monthEnd) {
        return dateEnd - dateStart + 1
    } else {
        let together = (months[monthStart - 1] - dateStart) + dateEnd

        for (let i = monthStart; i <= monthEnd - 2; i++) {
            together += months[i]
        }

        return together + 1
    }
};