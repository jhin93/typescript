

interface LocalStorageAPI<T> {
    [key:string]: T
}

abstract class abstractLocalStorage<T> {
    constructor(
        protected storage: LocalStorageAPI<T> = {}
    ) {}
    abstract setItem(key:string, value:T)
    abstract getItem(key:string)
    abstract  clearItem(key:string)
    abstract clear()
}

class localStorage<T> extends abstractLocalStorage<T> {
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