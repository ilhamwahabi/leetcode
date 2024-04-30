function accountBalanceAfterPurchase(purchaseAmount: number): number {
    // 9 -> 10
    // 0 -> 10
    // 15 -> 20
    // Math.ceil(p / 10) * 10

    return 100 - Math.round(purchaseAmount / 10) * 10
};