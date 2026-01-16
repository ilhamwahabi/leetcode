function checkIfInstanceOf(obj: any, classFunction: any): boolean {
    let curr = obj?.__proto__
    while (curr) { 
        if (curr === classFunction?.prototype) return true
        curr = curr?.__proto__
    }

    return false
};

/**
 * checkIfInstanceOf(new Date(), Date); // true
 */