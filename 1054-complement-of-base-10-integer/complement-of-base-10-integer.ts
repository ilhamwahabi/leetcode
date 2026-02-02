function bitwiseComplement(n: number): number {
    const binary = n.toString(2)
    const reverser = parseInt("1".repeat(binary.length), 2)

    const complement = n ^ reverser

    return complement
};

// 101 -> 010
// 101 | 111 -> 111
// 101 & 111 -> 101
// 101 ^ 111 -> 010