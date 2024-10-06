function stableMountains(height: number[], threshold: number): number[] {
    // Time: O(n), linear
    // Space: O(n), linear
    
    const result = []

    for (let i = 1; i < height.length; i++) {
        if (height[i-1] > threshold) {
            result.push(i)
        }
    }

    return result
};