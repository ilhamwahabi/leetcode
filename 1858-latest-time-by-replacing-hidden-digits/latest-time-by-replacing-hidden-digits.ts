function maximumTime(time: string): string {
    // hh:mm = [0-2][0-(3|9)]:[0-5][0-9], inclusive

    let res = ""
    for (let i = 0; i < time.length; i++) {
        if (time[i] !== "?" || time[i] === ":") res += time[i]
        else {
            if (i === 0) {
                if (time[1] === "?") res+= 2
                else {
                    if (parseInt(time[1]) <= 3) res += 2
                    else res += 1
                }
            }
            if (i === 1) {
                if (res[0] === "2") res += "3"
                else res += "9"
            }
            if (i === 3) res += "5"
            if (i === 4) res += "9"
        }
    }
    return res
};