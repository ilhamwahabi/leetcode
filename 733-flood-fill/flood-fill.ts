function floodFill(image: number[][], sr: number, sc: number, color: number): number[][] {
    // Update image[sr][sc] = color, recursively pass other 4 direction that have same value
    // pass current sr sc to prevent infinite fill 

    function traverse(sr: number, sc: number, prevSr: number, prevSc: number) {
        const expired = image[sr][sc]
        if (expired === color) return

        image[sr][sc] = color

        if (image[sr+1]?.[sc] === expired) traverse(sr+1, sc, sr, sc)
        if (image[sr-1]?.[sc] === expired) traverse(sr-1, sc, sr, sc)
        if (image[sr]?.[sc-1] === expired) traverse(sr, sc-1, sr, sc)
        if (image[sr]?.[sc+1] === expired) traverse(sr, sc+1, sr, sc)
    }
    traverse(sr, sc, -1, -1)

    return image
};