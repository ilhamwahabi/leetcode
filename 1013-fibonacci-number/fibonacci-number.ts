function fib(n: number): number {
    // 0 1 1 2 3 5 8 ...
    return recursive(n, {})
};

function recursive(n: number, memo: Object) {
    if (memo[n]) return memo[n]

    if (n <= 1) memo[n] = n
    else memo[n] = recursive(n-1, memo) + recursive(n-2, memo)

    return memo[n]
}