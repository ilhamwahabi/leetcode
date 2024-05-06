function garbageCollection(garbage: string[], travel: number[]): number {
    // Iterate garbage
    // Count each M P G on it
    // If any criteria exist, move the bus from previous point there
     
    let step = 0

    let m = 0
    let p = 0
    let g = 0

    garbage.forEach((gbg, i) => {
        let M = 0
        let P = 0
        let G = 0

        for (const char of gbg) {
            if (char === "M") M++
            if (char === "P") P++
            if (char === "G") G++
        }

        step += M + P + G
    
        while (M > 0 && m < i) {
            step += travel[m]
            m++
        }

        while (P > 0 && p < i) {
            step += travel[p]
            p++
        }

        while (G > 0 && g < i) {
            step += travel[g]
            g++
        }
    })

    return step
};