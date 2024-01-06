function finalPrices(prices: number[]): number[] {
    return prices.map((price, index) => {
        for (let i = index + 1; i < prices.length; i++) {
            if (prices[i] <= price) return price - prices[i]
        }

        return price
    })
};