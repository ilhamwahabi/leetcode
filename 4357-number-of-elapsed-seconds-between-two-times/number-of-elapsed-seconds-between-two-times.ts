function secondsBetweenTimes(startTime: string, endTime: string): number {
    // Split the string to get hour, minute, and second
    // Convert endTime and startTime to second
    // Substract it
    
    const [eh,em,es] = endTime.split(":")
    const endSeconds = (+eh * 60 * 60) + (+em * 60) + +es

    const [sh,sm,ss] = startTime.split(":")
    const startSeconds = (+sh * 60 * 60) + (+sm * 60) + +ss

    return endSeconds - startSeconds
};