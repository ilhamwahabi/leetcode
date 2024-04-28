class BrowserHistory {
    history = []
    secondary = []

    constructor(homepage: string) {
        this.history.push(homepage)
    }

    visit(url: string): void {
        this.history.push(url)
        this.secondary = []
    }

    back(steps: number): string {
        const max = Math.min(steps, this.history.length - 1)
        for (let i = 0; i < max; i++) {
            const url = this.history.pop()
            this.secondary.push(url)
        }
        return this.history[this.history.length - 1]
    }

    forward(steps: number): string {
        const max = Math.min(steps, this.secondary.length)
        for (let i = 0; i < max; i++) {
            const url = this.secondary.pop()
            this.history.push(url)
        }
        return this.history[this.history.length - 1]
    }
}

/**
 * Your BrowserHistory object will be instantiated and called as such:
 * var obj = new BrowserHistory(homepage)
 * obj.visit(url)
 * var param_2 = obj.back(steps)
 * var param_3 = obj.forward(steps)
 */

//  ["BrowserHistory","visit","back","back","forward","forward","visit","visit","back"]
// [["zav.com"],["kni.com"],[7],[7],[5],[1],["pwrrbnw.com"],["mosohif.com"],[9]]

// [zav.com] []
// [zav.com, kni.com] []
// [zav.com] [kni.com]
// [] [kni.com, zav.com]
// [zav.com]