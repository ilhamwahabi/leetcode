/**
 * @return {Generator<number>}
 */
var fibGenerator = function*() {
    let first = 0  // 1 // 1 // 2
    let second = 1 // 1 // 2 // 3

    while (true) {
        yield first
        temp = first
        first = second
        second = second + temp
    }
};

/**
 * const gen = fibGenerator();
 * gen.next().value; // 0
 * gen.next().value; // 1
 */