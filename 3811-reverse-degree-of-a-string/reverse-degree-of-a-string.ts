function reverseDegree(s: string): number {
    return s.split("").reduce((acc, curr, index) => {
        return acc + ((123 - curr.charCodeAt(0)) * (index + 1))
    }, 0)
};