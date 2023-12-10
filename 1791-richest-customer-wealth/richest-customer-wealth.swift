class Solution {
    func maximumWealth(_ accounts: [[Int]]) -> Int {
        // create variable richest = 0
        // loop through customer(row of account)
        // create variable wealth = 0, loop through bank (col of account), accumulate it
        // if the wealth > richest, richest = wealth 
        // return richest

        var richest = 0

        for account in accounts {
            var wealth = 0

            for bank in account {
                wealth += bank
            }

            if (wealth > richest) {
                richest = wealth
            }
        }

        return richest
    }
}