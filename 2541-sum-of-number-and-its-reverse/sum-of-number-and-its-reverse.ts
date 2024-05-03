function sumOfNumberAndReverse(num: number): boolean {
    for (let i = 0; i <= num; i++) {
        const a = String(i)
        const b = String(i).split("").reverse().join("") 

        if (parseInt(a) + parseInt(b) === num) return true
    }

    return false
};