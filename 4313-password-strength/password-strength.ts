function passwordStrength(password: string): number {
    const set = new Set()

    let points = 0
    for (const char of password) {
        if (!set.has(char)) {
            set.add(char)

            if (char.match(/[a-z]/)) points += 1
            else if (char.match(/[A-Z]/)) points += 2
            else if (char.match(/[0-9]/)) points += 3
            else if (char.match(/[!@#$]/)) points += 5
        }
    }

    return points
};