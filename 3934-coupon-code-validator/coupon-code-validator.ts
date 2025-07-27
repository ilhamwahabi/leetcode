function validateCoupons(code: string[], businessLine: string[], isActive: boolean[]): string[] {
    // Time: O(n + n + log(n)) ~ O(log(n)), there is sorting
    // Space: O(n), we store value on array
    
    const items = code.map((item, index) => ({
        c: item,
        bl: businessLine[index],
        ia: isActive[index]
    }))
    
    const valid = items.filter((item, index) => {
        return item.c && item.c.match(/[a-zA-Z0-9_]/g).length === item.c.length
            && ["electronics", "grocery", "pharmacy", "restaurant"].includes(item.bl)
            && item.ia
    })

    valid.sort((a,b) => {
        if (a.bl < b.bl) return -1
        if (a.bl > b.bl) return 1
        return 1
    })

    valid.sort((a, b) => {
        if (a.bl === b.bl) {
            if (a.c < b.c) return -1
            if (a.c > b.c) return 1
            return 0
        }
        return 0
    })

    return valid.map(item => item.c)
};