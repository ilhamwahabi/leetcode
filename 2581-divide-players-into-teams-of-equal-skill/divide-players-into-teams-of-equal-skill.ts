function dividePlayers(skill: number[]): number {
    // Sort skill
    // Pair left and right, add the sum, times the product
    // If current sum not equal with previous sum, false

    skill.sort((a,b) => a-b)

    const sum = skill[0] + skill[skill.length - 1]
    let prod = skill[0] * skill[skill.length - 1]
    
    for (let i = 1; i < skill.length / 2; i++) {
        if (skill[i] + skill[skill.length - 1 - i] !== sum) return -1
        prod += skill[i] * skill[skill.length - 1 - i]
    }

    return prod
};