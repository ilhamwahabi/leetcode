function categorizeBox(length: number, width: number, height: number, mass: number): string {
    const vol = length * width * height

    const isBulky = length >= Math.pow(10, 4) || width >= Math.pow(10, 4)
        || height >= Math.pow(10, 4) || vol >= Math.pow(10, 9)
    const isHeavy = mass >= 100

    if (isBulky && isHeavy) return "Both"
    else if (isBulky) return "Bulky"
    else if (isHeavy) return "Heavy"
    else return "Neither"
};