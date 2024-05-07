function displayTable(orders: string[][]): string[][] {
    // Iterate orders, make this structure
    // Make name array, sort it: ["Beef Burrito", ...]
    // Make order map: { 3: { "Burrito": 2, "Fried Chicken": 1 } }
    // Loop order map, create array row from that

    const names = new Set()
    const map = {}
    
    orders.forEach(([_, table, food]) => {
        names.add(food)

        if (map[table]) {
            map[table][food] ? map[table][food]++ : map[table][food] = 1
        } else {
            map[table] = { [food]: 1 }
        }
    })

    const header: string[] = ["Table"].concat([...names].sort() as string[])
    const result = [header]

    for (const key in map) {
        const row = [key]
        const order = map[key]

        for (let i = 1; i < header.length; i++) {
            const food = header[i]

            if (order[food]) row.push(`${order[food]}`)
            else row.push("0")
        }

        result.push(row)
    }
    
    return result
};