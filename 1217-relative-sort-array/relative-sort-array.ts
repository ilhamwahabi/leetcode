function relativeSortArray(arr1: number[], arr2: number[]): number[] {
    const result = []

    for (let i = 0; i < arr2.length; i++) {
        let j = 0
        while (j < arr1.length) {
            if (arr2[i] === arr1[j]) {
                result.push(arr1[j])
                arr1.splice(j, 1)
            } else {
                j++
            }
        }
    }

    return result.concat(...arr1.sort((a,b) => a-b))
};