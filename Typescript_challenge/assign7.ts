

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
    (
        success: (GeolocationPosition: object) => any 
    ) : object
    (
        success: (GeolocationPosition: object) => any,
        error: (GeolocationPositionError: object) => any
    ) : object
    (
        success: (GeolocationPosition: object) => any,
        error: (GeolocationPositionError: object) => any,
        options: object
    ) : object
}

class geolocationClass {

    integerID!: number // 느낌표가 없을때 발생하는 에러

    getCurrentPosition(success:object, error?:object, options?:object):void {}

    watchPosition(success:object, error?:object, options?:object):number {
        return this.integerID
    }
    clearWatch(integerID:number):void {}
}

// getCurrentPosition
const successFn = (pos:any) => {
    const crd = pos.coords;
    console.log('Your current position is:');
    console.log(`Latitude : ${crd.latitude}`);
    console.log(`Longitude: ${crd.longitude}`);
    console.log(`More or less ${crd.accuracy} meters.`);
}

const errorFn = (err:any) => {
    console.warn(`ERROR(${err.code}): ${err.message}`);
}

const optionsObj = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0
};

// watchPosition
let id: number;
let target: { latitude: any; longitude: any };
let options;
const success = (pos: { coords: any }) => {
    const crd = pos.coords;
    if (target.latitude === crd.latitude && target.longitude === crd.longitude) {
      console.log('Congratulations, you reached the target');
      navigator.geolocation.clearWatch(id);
    }
  }

const error = (err: { code: any; message: any }) => {
    console.error(`ERROR(${err.code}): ${err.message}`);
  }
  
target = {
latitude : 0,
longitude: 0
};

options = {
    enableHighAccuracy: false,
    timeout: 5000,
    maximumAge: 0
};

const geolocation = new geolocationClass()
geolocation.getCurrentPosition(successFn, errorFn, optionsObj)
geolocation.watchPosition(success, error, options)
geolocation.clearWatch(geolocation.watchPosition(success, error, options))

