function compareVersion(version1: string, version2: string): number {
    // 1. Split each version by .
    // 2. Compare from the left side, parse it to int first
    // 3. If any version don't have revision left but other have, treat it as 0
    // 4. If first one is bigger return 1, but if second one return -1
    // 4. Else same

    const v1 = version1.split(".")
    const v2 = version2.split(".")

    for (let i = 0; i < Math.max(v1.length, v2.length); i++) {
        const r1 = parseInt(v1[i]) || 0
        const r2 = parseInt(v2[i]) || 0

        if (r1 > r2) return 1
        else if (r1 < r2) return -1
    }

    return 0
};