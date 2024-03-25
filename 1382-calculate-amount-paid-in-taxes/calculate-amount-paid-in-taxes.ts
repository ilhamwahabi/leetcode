function calculateTax(brackets: number[][], income: number): number {
    let remain = 0
    let taxes = 0

    let i = 0
    while (remain < income) {
        if (income - remain > brackets[i][0] - remain) {
            const bracket = brackets[i][0] - remain
            remain += bracket
            taxes += bracket * brackets[i][1] / 100
            i++
        } else {
            const bracket = income - remain
            remain = income
            taxes += bracket * brackets[i][1] / 100
        }
    }

    return taxes
};