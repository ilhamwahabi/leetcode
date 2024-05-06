function minNumberOfHours(initialEnergy: number, initialExperience: number, energy: number[], experience: number[]): number {
    // Iterate energy and experience
    // Decrease the initialEnergy and add initialExperience
    // If anything below <0 return Math.abs of it + 1

    let en = initialEnergy
    let ex = initialExperience

    let exp = 0

    for (let i = 0; i < experience.length; i++) {
        en -= energy[i]
        if (ex <= experience[i]) {
            exp += (experience[i] - ex) + 1
            ex += (experience[i] - ex) + 1 + experience[i]
        } else {
            ex += experience[i]
        }
    }

    return (en > 0 ? 0 : ((en * -1) + 1)) + exp
};