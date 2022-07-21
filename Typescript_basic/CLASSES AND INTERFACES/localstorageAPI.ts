
// Storage는 이미 정의된 예약어(마우스 올려서 확인 가능). interface Storage를 override(속성추가)하지 않고 SStorage 사용 


interface SStorage<T> { // 3. 2에서 인터페이스로 보낸 제네릭을 여기서 받음.
    [key:string] : T // key가 제한되지 않은 오브젝트를 정의하게 해줌. 이게(?) 얼마나 많은진 모르지만, 무슨 타입인지는 안다. 그리고 받은 T를 위치시킴([key:string] : T)
}

// 제네릭은 다른 타입에게 물려줄 수 있다.
class LocalStorage<T> { // 1. LocalStorage 클래스를 초기화할 때, T라는 제네릭을 받음.
    private storage: SStorage<T> = {} // 2. 이 제네릭은 클래스 이름(LocalStorage<T>)에 들어오지만, 같은 제네릭을 인터페이스(SStorage)로 보내줄 것(SStorage<T>)
}

// 제네릭을 클래스로 보냄(LocalStorage<T>) -> 클래스는 제네릭을 인터페이스로 보냄(SStorage<T>) -> 인터페이스는 제네릭을 사용함([key:string] : T)
