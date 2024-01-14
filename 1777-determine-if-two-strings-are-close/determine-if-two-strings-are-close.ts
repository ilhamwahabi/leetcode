function closeStrings(word1: string, word2: string): boolean {
    if (word1.length !== word2.length) return false

    const map1 = {}
    const map2 = {}
    for (let i = 0; i < word1.length; i++) {
        map1[word1[i]] ? map1[word1[i]]++ : map1[word1[i]] = 1
        map2[word2[i]] ? map2[word2[i]]++ : map2[word2[i]] = 1
    }

    const arr1 = []
    const char1 = []
    const arr2 = []
    const char2 = []
    for (const key in map1) {char1.push(key); arr1.push(map1[key])}
    for (const key in map2) {char2.push(key); arr2.push(map2[key])}

    return char1.sort().join("") === char2.sort().join("") && 
        arr1.sort((a,b) => a-b).join("") === arr2.sort((a,b) => a-b).join("")
};