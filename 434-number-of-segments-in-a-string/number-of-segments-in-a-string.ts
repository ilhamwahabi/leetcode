function countSegments(s: string): number {
    let segments = 0

    for (let i = 0; i < s.length; i++) {
        if (s[i] !== " " && (s[i+1] === " " || s[i+1] === undefined)) {
            segments++
        }
    }

    return segments
};