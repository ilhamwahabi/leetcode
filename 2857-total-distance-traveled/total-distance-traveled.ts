function distanceTraveled(mainTank: number, additionalTank: number): number {
    let total = 0
    
    let m = mainTank
    let a = additionalTank
    while (m > 0) {
        if (m / 5 >= 1) {
            total += 5 
            m -= 5

            if (a > 0) {
                a--
                m += 1
            }
        } else {
            total += m % 5
            m -= m % 5
        }
    }

    return total * 10
};