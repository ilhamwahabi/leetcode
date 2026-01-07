type Fn<T> = () => Promise<T>

function promiseAll<T>(functions: Fn<T>[]): Promise<T[]> {
    return new Promise((resolve, reject) => {
        const resolved = Array(functions.length)
        let completed = 0

        functions.forEach(async (func, index) => {
            try {
                const result = await func()
                resolved[index] = result
                completed++

                if (completed === functions.length) resolve(resolved)
            } catch (error) {
                reject(error)
            }
        })
    })
};

/**
 * const promise = promiseAll([() => new Promise(res => res(42))])
 * promise.then(console.log); // [42]
 */