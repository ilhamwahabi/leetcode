function recoverOrder(order: number[], friends: number[]): number[] {
    // Store friends in Set, so accessible with O(1)
    // Filter order: that id is exist in friends Set
    
    // Time: O(n), iterating order
    // Space: O(n), save friends in set

    const set = new Set(friends)

    return order.filter(id => set.has(id))
};