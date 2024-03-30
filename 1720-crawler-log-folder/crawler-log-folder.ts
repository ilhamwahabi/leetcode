function minOperations(logs: string[]): number {
    let level = 1

    logs.forEach(log => {
        if (log === "../") {
            if (level > 1) level--
        } else if (log !== "./") {
            level++
        }
    })

    return level - 1
};