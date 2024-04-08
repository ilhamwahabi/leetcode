function countStudents(students: number[], sandwiches: number[]): number {
    let counter = 0
    while (counter < students.length) {
        if (students[0] === sandwiches[0]) {
            students.shift()
            sandwiches.shift()
            counter = 0
        } else {
            const student = students.shift()
            students.push(student)
            counter++
        }
    }

    return students.length
};