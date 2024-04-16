function validMountainArray(arr: number[]): boolean {
    let inc = false
    let dec = false

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === arr[i+1]) {
            return false
        } else if (arr[i] < arr[i+1]) {
            if (dec) return false
            else inc = true
        } else if (arr[i] > arr[i+1]) {
            dec = true
        }
    }

    return inc && dec
};