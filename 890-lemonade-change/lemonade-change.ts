function lemonadeChange(bills: number[]): boolean {
    let five = 0
    let ten = 0
    let twenty = 0

    for (const bill of bills) {
        if (bill === 5) five++
        else if (bill === 10) {
            if (five >= 1) {
                five--
                ten++
            } else {
                return false
            }
        } else if (bill === 20) {
            if (five >= 1 && ten >= 1) {
                five--
                ten--
            } else if (five >= 3) {
                five -= 3
            } else {
                return false
            }
        }
    } 

    return true
};