function isRobotBounded(instructions: string): boolean {
    // 1. Store the direction and the coordinate
    // 2. Iterate instructions
    // 3. Check if final result is 0,0

    let dir = "north" // south | east | west
    let x = 0
    let y = 0

    for (let i = 0; i < 4; i++) {
        const [xs,ys,dirs] = step(x,y,dir,instructions)
        x = xs as number
        y = ys as number
        dir = dirs as string

        if ((i === 0 || i === 1 || i === 3) && x === 0 && y === 0) return true 
    }

    return false
};

function step(xs: number, ys: number, dirs: string, instructions: string) {
    let dir = dirs
    let x = xs
    let y = ys

    for (const i of instructions) {
        if (i === "G") {
            switch (dir) {
                case "north": { y++; break }
                case "south": { y--; break }
                case "east": { x++; break }
                case "west": { x--; break }
            }
        } else if (i === "L") {
            switch (dir) {
                case "north": { dir = "west"; break }
                case "south": { dir = "east"; break }
                case "east": { dir = "north"; break }
                case "west": { dir = "south"; break }
            }
        } else if (i === "R") {
            switch (dir) {
                case "north": { dir = "east"; break }
                case "south": { dir = "west"; break }
                case "east": { dir = "south"; break }
                case "west": { dir = "north"; break }
            }
        }
    }

    return [x,y,dir]
}