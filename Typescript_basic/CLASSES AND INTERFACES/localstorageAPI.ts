

// Storage는 이미 정의된 예약어(마우스 올려서 확인 가능). interface Storage를 override(속성추가)하지 않고 SStorage 사용 
// [key:string] - key가 제한되지 않은 오브젝트를 정의하게 해줌.


interface SStorage<T> { 
    [key:string] : T // 3. 인터페이스가 제네릭을 사용
}

class LocalStorage<T> { // 1. LocalStorage 클래스를 초기화할 때, T라는 제네릭을 받음. 제네릭을 클래스로 보낸 것
    private storage: SStorage<T> // 2. 클래스가 제네릭을 인터페이스로 보냄
}

