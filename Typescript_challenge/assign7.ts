

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
    success: (GeolocationPosition: object) => any;
    error: (GeolocationPositionError: object) => any;
    
}

class geolocationClass {
    successFn(pos) {
        const crd = pos.coords;
        console.log('Your current position is:');
        console.log(`Latitude : ${crd.latitude}`);
        console.log(`Longitude: ${crd.longitude}`);
        console.log(`More or less ${crd.accuracy} meters.`);
    }
    errorFn(err) {
        console.warn(`ERROR(${err.code}): ${err.message}`);
    }

    getCurrentPosition(){}
    watchPosition(){}
    clearWatch(){}
}

const geolocation = new geolocationClass
geolocation.getCurrentPosition()
geolocation.watchPosition()
geolocation.clearWatch()



