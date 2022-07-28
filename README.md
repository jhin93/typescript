# typescript

타입스크립트를 공부하는 공간입니다.  


```typescript

Alias 타입(별칭타입) - 따로 정의해서 쓸 수 있는 타입. 객체의 형태를 미리 정의할 수 있다. 구조체처럼. 
readonly. 
any. 
Tuple ex) ["nico", 12, false]  
unknown
void
never

// unknown  
let a : unknown;
// 어떤 작업을 하려면 a의 타입을 먼저 확인해야 한다.

let b = a + 1; // 불가
if(typeof a === 'number') { // 가능. 조건문으로 a가 숫자임을 확인했기 때문.
    let b = a + 1;
}



// void. 아무것도 리턴하지 않는 함수.
function hello() { // function hello(): void
    console.log('x')
}
const c = hello();
c.toUpperCase(); // 불가. Property 'toUpperCase' does not exist on type 'void'.



// never
function bye(name:string|number) : never { // never는 함수가 절대 return 하지 않을때 발생
    return "X" //  불가. Type 'string' is not assignable to type 'never'.
}

function test(name:string|number) { // never는 함수가 절대 return 하지 않을때 발생
    if(typeof name === "string"){
        name // 문자열로 나온다. (parameter) name: string
    } else if (typeof name === "number") {
        name // 숫자로 나온다. (parameter) name: number
    } else {
        name // never로 나온다. (parameter) name: never. 만약 인자가 문자열 혹은 숫자로 제대로 들어왔다면, 이 코드는 절대 실행되지 않아야 한다는 뜻.
    }
}

// type 과 interface
// 둘의 공통 목적 : 타입스크립트에게 오브젝트의 모양과 타입을 알려주는 게 목표.
// 가장 큰 차이점 : interface는 속성을 추가하기 위해 reopen 할 수 있지만, type은 그렇게 할 수 없다. 
// --------------------------------

// type 
type PlayerA = {
    name:string
}

// type 상속
type PlayerAA = PlayerA & {
    lastname:string // PlayerA를 상속받고 lastname 속성 추가
}
// type 속성 추가
// 이런식으론 속성을 추가하는 것은 불가하다. PlayerAA 타입은 정의되어서 중복된다. 불가.
type PlayerAA = { // Duplicate identifier 'PlayerAA'. 불가능
    health:number
}

// 새로운 타입을 만들고(ex PlayerAA) PlayerA를 써 준 다음 남은 것들을 써줘야 함(PlayerA & {...})

const playerA: PlayerAA = {
    name:"nico",
    lastName:"XXX"
}



// --------------------------------
// interface
interface PlayerB {
    name:string
}

// interface 상속
interface PlayerBB extends PlayerB {
    lastname:string
}
// interface 속성 추가
interface PlayerBB { // interface는 이런식으로 속성을 추가해도 문제가 일어나지 않는다.
    health: number
}

const playerB: PlayerBB = {
    name:"nico",
    lastname:"xxx",
    health: 100
}


// Call Signature
type Add = (a:number, b:number) => number; // 함수가 어떻게 호출되는지, 함수의 리턴 타입이 무엇인지 말해준다



** 오버로딩** 
// 오버로딩은 함수가 서로 다른 여러개의 call signature를 가질때 발생한다.
    // 예시 1.
    type Add = {
        (a:number, b:number) : number;
        (a:number, b:string) : number;
    }

    const add:Add = (a, b) => { // Alias type Add는 2개의 call signature를 가지고 있다.
        if(typeof b === "string") return a
        return a + b
    }

    // 예시 2.
    // nextJS에서 라우터 home에 뭔가를 추가하는 오버로딩 예시. 때에 따라 path를 추가하거나 state를 추가할 수 있다.
    type Config = {
        path : string,
        state : object
    }

    type Push = {
        (path:string):void,
        (config: Config): void;
    }

    const push:Push = (config) => {
        if(typeof config === "string") console.log(config) // 이때의 config는 스트링
        else console.log(config.path, config.state) // 이때의 config는 Config 타입 객체
    }
    
    // 예시 3.
    // 파라미터의 수가 서로 다른 call signature
    type Add = {
        (a: number, b:number): number
        (a: number, b:number, c:number): number
    }

    const add:Add = (a, b, c?:number) => { // Add를 부를 때 a,b를 부를 수도 있고 a,b,c를 부를 수도 있다. 그래서 c는 추가적으로 타입에 대한 정보를 명시해준다.
        if(c) return a + b + c
        return a + b
    }


** Polymorphism **
    // generic은 Polymorphism을 위한 도구이다. 내가 생각한 대로 call signature를 생성(generate)해주는 도구인 것이다.
    // generic은 concrete타입이 아닌 placeholder타입을 사용하게 해준다. 때가 되면, 타입스크립트가 placeholder 타입을 concrete 타입으로 바꾸어준다.
    // generic은 call signature를 작성할 때, 어떤 타입이 인자로 들어올 지 확실하게 모르는 경우에 사용한다.
    
    function getSize<T>(arr: T[]): number{
        return arr.length;
    }
    const arr1 = [1, 2, 3];
    getSize<number>(arr1); // 결과값 : 3
    // getSize 함수에 마우스를 올리면 나오는 결과 : function getSize<number>(arr: number[]): number

    const arr2 = ["a", "b", "c"]
    getSize<string>(arr2); // 3

    const arr3 = [false, true, true];
    getSize<boolean>(arr3); // 3

    const arr4 = [{}, {}, { name: "Tim" }];
    getSize<Object>(arr4); // 3

    const arr5 = [{}, {}, true, 4];
    getSize<any>(arr5); 



    interface Mobile<T> {
        name: string;
        price: number;
        option: T;
    }

    const m1: Mobile<object> = { // 아래 option이 객체(object)이기 때문에 T에 object 대입
        name: "s21",
        price: 1000,
        option: {
            color: "red",
            coupon: false,
        },
    };

    const m2: Mobile<string> = { // 아래 option이 문자열(string)이기 때문에 T에 string 대입
        name: "s20",
        price: 900,
        option: "good",
    };
    
    =========== generic을 함수에 적용한 예시 1 ===========
    
    // 제네릭을 클래스로 보냄(LocalStorage<T>) -> 클래스는 제네릭을 인터페이스로 보냄(SStorage<T>) -> 인터페이스는 제네릭을 사용함([key:string] : T)

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


    // class LocalStorage<T> 사용예시
    const stringsStorage = new LocalStorage<string> // const stringsStorage: LocalStorage<string>
    stringsStorage.get("test1") // LocalStorage<string>.get(key: string): string // string을 보내주고. string을 받게 될 것.


    const numberStorage = new LocalStorage<number>
    numberStorage.get("test2") // LocalStorage<number>.get(key: string): number // string을 보내주고. number을 받게 될 것.
    numberStorage.set("test", 123) // numberStorage는 LocalStorage<number>로 알 수 있듯, T가 number 이기 때문에 set 함수가 받는 두번째 인자 value(value:T)는 number가 되어야 한다.
    
    =========== generic을 함수에 적용한 예시 2 ===========
    
    type SuperPrint = {
        <T, M>(a: T[], b: M):T; 
    } 
    <제네릭이름>(인자1 : 제네릭이름(데이터타입))
    // 사용법 : 타입스크립트에 generic을 사용하고 싶다고 알려줘야 한다. 꺾쇠 내부에 사용할 generic(ex T)을 작성. 타입스크립트는 generic을 처음 인식했을 때와 generic의 순서를 기반으로 generic의 타입을 알게 된다.
    // generic M은 함수의 두번째 인자를 사용할 것.
    
    // 함수로 구현한 모습
    //function superPrint<T>(a: T[]){
    //    return a[0]
    //}
    
    const superPrint: SuperPrint = (arr) => arr[0]
    
    // 타입스크립트는 generic에서 타입스크립트가 알아낸 타입으로 대체한다. 
    const a = superPrint([1, 2, 3, 4], "x") // const superPrint: <number>(arr: number[]) => void. 타입스크립트는 두번째 인자가 함수에서 generic으로 되어있다는 것을 알게 됨.
    const b = superPrint([true, false, true, true], 1) // const superPrint: <boolean>(arr: boolean[]) => void
    const c = superPrint(["a", "b", "c"], true) // const superPrint: <string>(arr: string[]) => void
    const d = superPrint([1, 2, true, false, "test"], 1) // const superPrint: <string | number | boolean>(arr: (string | number | boolean)[]) => void

    // 결론 : generic으로 인해 위의 superPrint 함수는 여러 형태를 가질 수 있다. 이를 polymorphism 이라고 한다.


    


```
