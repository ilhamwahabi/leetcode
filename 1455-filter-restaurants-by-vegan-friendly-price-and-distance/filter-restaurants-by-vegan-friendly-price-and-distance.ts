function filterRestaurants(restaurants: number[][], veganFriendly: number, maxPrice: number, maxDistance: number): number[] {
    // Filter with rest[2] === 1, rest[3] <= maxPrice, rest[4] < maxDistance
    // Sort by rating, if same compare id
    // Return id mapped

    const r = restaurants.filter(rest => {
        const [,, vegan, price, distance] = rest
        return vegan >= veganFriendly && price <= maxPrice && distance <= maxDistance
    })

    r.sort((a,b) => {
        if (a[1] === b[1]) return b[0] - a[0]
        else return b[1] - a[1]
    })

    return r.map(rest => rest[0])
};