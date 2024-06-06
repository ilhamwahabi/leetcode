function corpFlightBookings(bookings: number[][], n: number): number[] {
    const result = Array(n).fill(0)

    bookings.forEach(booking => {
        const [first, last, seats] = booking

        for (let i = first - 1; i <= last - 1; i++) {
            result[i] += seats
        }
    })

    return result
};