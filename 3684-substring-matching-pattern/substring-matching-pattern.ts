function hasMatch(s: string, p: string): boolean {
    if (p.at(0) === "*") {
        return s.includes(p.slice(1))
    } else if (p.at(-1) === "*") {
        return s.includes(p.slice(0, p.length - 1))
    } else {
        const [left, right] = p.split("*")

        const leftIndex = s.indexOf(left)
        const rightIndex = s.lastIndexOf(right)

        return leftIndex !== -1
            && rightIndex !== -1
            && leftIndex + left.length <= rightIndex
    }
};