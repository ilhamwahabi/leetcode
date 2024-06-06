function asteroidsDestroyed(mass: number, asteroids: number[]): boolean {
    // Sort asteroids
    // Check if mass + increment >= asteroids[i]

    asteroids.sort((a,b) => a-b)

    let i = 0
    let m = mass

    while (i < asteroids.length && m >= asteroids[i]) {
        m += asteroids[i]
        i++
    }

    return i === asteroids.length
};