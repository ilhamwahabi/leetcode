class RideSharingSystem {
    riders = []
    drivers = []

    addRider(riderId: number): void {
        this.riders.push(riderId)
    }

    addDriver(driverId: number): void {
        this.drivers.push(driverId)
    }

    matchDriverWithRider(): number[] {
        if (this.riders.length > 0 && this.drivers.length > 0) {
            const rider = this.riders.shift()
            const driver = this.drivers.shift()

            return [driver, rider]
        } else {
            return [-1, -1]
        }
    }

    cancelRider(riderId: number): void {
        this.riders = this.riders.filter(rider => rider !== riderId)
    }
}

/**
 * Your RideSharingSystem object will be instantiated and called as such:
 * var obj = new RideSharingSystem()
 * obj.addRider(riderId)
 * obj.addDriver(driverId)
 * var param_3 = obj.matchDriverWithRider()
 * obj.cancelRider(riderId)
 */