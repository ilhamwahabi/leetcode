function maxBalancedShipments(weight: number[]): number {
    // store the max weight, iterate until found num < max: shipment++
    // repeat

    let shipment = 0

    let max = -Infinity
    for (const parcel of weight) {
        if (max === -Infinity) {
            max = parcel
        } else if (parcel < max) {
            shipment++
            max = -Infinity
        } else {
            max = parcel
        }
    }

    return shipment
};