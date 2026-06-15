function passwordStrength(password: string): number {

    let points = 0
    for (const char of new Set(password)) {
        if (/[a-z]/.test(char)) points += 1
        else if (/[A-Z]/.test(char)) points += 2
        else if (/[0-9]/.test(char)) points += 3
        else if (/[!@#$]/.test(char)) points += 5
    }

    return points
};