function replaceWords(dictionary: string[], sentence: string): string {
    // Sort dictionary
    // Iterate each sentence word and if exist the dictionary with it return it
    dictionary.sort()

    return sentence.split(" ").map(word => {
        return dictionary.find(item => word.startsWith(item)) || word
    }).join(" ")
};