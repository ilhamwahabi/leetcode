type ToBeOrNotToBe = {
    toBe: (val: any) => boolean;
    notToBe: (val: any) => boolean;
};

function expect(val: any): ToBeOrNotToBe {
    return {
        toBe(tb: any) {
            if (val === tb) return true
            throw Error("Not Equal")
        },
        notToBe(ntb: any) {
            if (val !== ntb) return true
            throw Error("Equal")
        }
    }
};

/**
 * expect(5).toBe(5); // true
 * expect(5).notToBe(5); // throws "Equal"
 */