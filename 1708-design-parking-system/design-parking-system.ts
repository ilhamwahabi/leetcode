class ParkingSystem {
    big = 0
    medium = 0
    small = 0

    constructor(big: number, medium: number, small: number) {
        this.big = big
        this.medium = medium
        this.small = small
    }

    addCar(carType: number): boolean {
        switch (carType) {
            case 1: {
                if (this.big > 0) {
                    this.big--
                    return true
                } else {
                    return false
                }
            }
            case 2: {
                if (this.medium > 0) {
                    this.medium--
                    return true
                } else {
                    return false
                }
            }
            case 3: {
                if (this.small > 0) {
                    this.small--
                    return true
                } else {
                    return false
                }
            }
            default: {
                return true
            }
        }
    }
}

/**
 * Your ParkingSystem object will be instantiated and called as such:
 * var obj = new ParkingSystem(big, medium, small)
 * var param_1 = obj.addCar(carType)
 */