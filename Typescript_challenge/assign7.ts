

interface LocalStorageAPI<T> {
    [key:string]: T
}

abstract class abstractLocalStorage<T> {
    constructor(
        protected storage: LocalStorageAPI<T> = {}
    ) {}
    abstract setItem(key:string, value:T):void
    abstract getItem(key:string): T
    abstract clearItem(key:string): void
    abstract clear(): void
}

class localStorageAPI<T> extends abstractLocalStorage<T> {
    setItem(key:string, value:T) {
        this.storage[key] = value
    }
    getItem(key:string) {
        return this.storage[key]
    }
    clearItem(key:string) {
        delete this.storage[key]
    }
    clear() {
        this.storage = {}
    }
}




interface GeolocationAPI {
    
}