function passThePillow(n: number, time: number): number {
    // start: 1
    // n=4 t=5 => 2
    // 1 + t - n = 1 + 5 - 4 = 2
    // n=3 t=2 => 3
    // 1 + 2 - 3 = 0

    // 1. Track number of current people, start from 1
    // 2. Track direction, start with "right"
    // 3. Iterate to 'time'
    // 4. Return last people

    let p = 1
    let dir = "right"

    for (let i = 0; i < time; i++) {
        if (dir === "right") {
            if (p < n) p++
            else if (p === n) {
                p--
                dir = "left"
            }
        } else if (dir === "left") {
            if (p > 1) p--
            else if (p === 1) {
                p++
                dir = "right"
            }
        }
    }

    return p
};