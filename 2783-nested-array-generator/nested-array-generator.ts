type MultidimensionalArray = (MultidimensionalArray | number)[]

function* inorderTraversal(arr: MultidimensionalArray): Generator<number, void, unknown> {
    const result = []
    
    function recursion(element: MultidimensionalArray | number) {
        if (Array.isArray(element)) {
            for (const item of element) {
                recursion(item)
            }
        } else {
            result.push(element)
        }
    }

    recursion(arr)

    for (const item of result) {
        yield item
    }
};

/**
 * const gen = inorderTraversal([1, [2, 3]]);
 * gen.next().value; // 1
 * gen.next().value; // 2
 * gen.next().value; // 3
 */