class CombinationIterator {
    results = []
    curr = -1
    
    constructor(characters: string, combinationLength: number) {
        const backtracking = (s = "", index = 0) => {
            if (s.length === combinationLength) {
                this.results.push(s)
            } else {
                for (let i = index; i < characters.length; i++) {
                    backtracking(s + characters[i], i + 1)
                }
            }
        }
        backtracking()

        this.results.sort()
    }

    next(): string {
        this.curr++
        return this.results[this.curr]
    }

    hasNext(): boolean {
        return Boolean(this.results[this.curr + 1])
    }
}

/**
 * Your CombinationIterator object will be instantiated and called as such:
 * var obj = new CombinationIterator(characters, combinationLength)
 * var param_1 = obj.next()
 * var param_2 = obj.hasNext()
 */