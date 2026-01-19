type Callback = (...args: any[]) => any;
type Subscription = {
    unsubscribe: () => void
}

class EventEmitter {
    events: { [eventName: string]: Map<Symbol, Callback> } = {}
    
    subscribe(eventName: string, callback: Callback): Subscription {
        if (!this.events[eventName]) {
            this.events[eventName] = new Map()
        }
        
        const symbol = Symbol()
        this.events[eventName].set(symbol, callback)
        
        return {
            unsubscribe: () => {
                this.events[eventName].delete(symbol)        
            }
        };
    }
    
    emit(eventName: string, args: any[] = []): any[] {
        const results = []

        this.events[eventName]?.forEach(event => {
            const result = event(...args)
            results.push(result)
        })

        return results
    }
}

/**
 * const emitter = new EventEmitter();
 *
 * // Subscribe to the onClick event with onClickCallback
 * function onClickCallback() { return 99 }
 * const sub = emitter.subscribe('onClick', onClickCallback);
 *
 * emitter.emit('onClick'); // [99]
 * sub.unsubscribe(); // undefined
 * emitter.emit('onClick'); // []
 */