type MultiDimensionalArray = (number | MultiDimensionalArray)[];

var flat = function (arr:  MultiDimensionalArray, n: number):  MultiDimensionalArray {
    const array = []

    for (const item of arr) {
        if (Array.isArray(item) && n > 0) {
            const result = flat(item, n - 1)
            array.push(...result)
        } else {
            array.push(item)
        }
    }

    return array
};