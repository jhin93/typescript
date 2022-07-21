
// Storage는 이미 정의된 예약어(마우스 올려서 확인 가능). interface Storage를 override(속성추가)하지 않고 SStorage 사용 


interface SStorage<T> { // 3. 2에서 인터페이스로 보낸 제네릭을 여기서 받음.
    [key:string] : T // key가 제한되지 않은 오브젝트를 정의하게 해줌. 즉, key 값은 정해지지 않았지만, 무슨 타입인지는 안다(string 타입이라는 말). 그리고 받은 T를 위치시킴([key:string] : T)
}

// 제네릭은 다른 타입에게 물려줄 수 있다.
class LocalStorage<T> { // 1. LocalStorage 클래스를 초기화할 때, T라는 제네릭을 받음.
    private storage: SStorage<T> = {} // 2. 이 제네릭은 클래스 이름(LocalStorage<T>)에 들어오지만, 같은 제네릭을 인터페이스(SStorage)로 보내줄 것(SStorage<T>).
    set(key:string, value:T) { // set 메소드 생성. set 메소드를 쓸 때, string 형식의 key를 넣음. value는 T 형식
        this.storage[key] = value // storage에 key-value쌍을 저장.
    } 
    remove(key:string) { // remove는 string 형식의 key를 받아서 이걸 로컬 스토리지로부터 지움.
        delete this.storage[key]
    } 
    get(key:string):T { // get 메소드. T를 리턴.
        return this.storage[key]
    } 
    clear(){ // clear는 storage를 비움
        this.storage = {}
    }
}

// 제네릭을 클래스로 보냄(LocalStorage<T>) -> 클래스는 제네릭을 인터페이스로 보냄(SStorage<T>) -> 인터페이스는 제네릭을 사용함([key:string] : T)

// class LocalStorage<T> 사용예시
const stringsStorage = new LocalStorage<string> // const stringsStorage: LocalStorage<string>
stringsStorage.get("test1") // LocalStorage<string>.get(key: string): string // string을 보내주고. string을 받게 될 것.


const numberStorage = new LocalStorage<number>
numberStorage.get("test2") // LocalStorage<number>.get(key: string): number // string을 보내주고. number을 받게 될 것.
numberStorage.set("test", 123) // numberStorage는 LocalStorage<number>로 알 수 있듯, T가 number 이기 때문에 set 함수가 받는 두번째 인자 value(value:T)는 number가 되어야 한다.