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


** generic

type SuperPrint = {
    <T>(arr: T[]): T // 리턴값이 void, 즉 없다는 것.
    // generic을 사용하는 이유 : type 혹은 interface 안에 call signature를 작성할 때 어떤 타입의 인자가 들어올지 모를 때 사용한다
    // (arr:number[]): void 는 number 배열만 받을 수 있다. [1, 2, false, true] 와 같이 복잡한 타입의 인자는 받을 수 없기에 generic이 필요하다.
    // ex) SuperPrint를 상속받은 superPrint에 타입으로 [1, 2, false, true] 주려고 하는데, type SuperPrint에는 이에 해당하는 call signature가 없는 상황.

    // 사용법
    // 1. generic을 받는 인자 앞에 <>를 연다. 그리고 원하는 제네릭 이름을 넣는다. ex) <T>, <GenericType>, <Potato>
    // 2. 리턴 형식을 작성한 generic으로 바꿔준다. ex) <T>(arr: number[]) ---> <T>(arr: T[])
}

// 리턴 형식도 바꿀수 있다. generic을 리턴 형식으로 정해주면 됨.
// ex)  <T>(arr: T[]): void ->
//      <T>(arr: T[]): T 
const superPrint: SuperPrint = (arr) => arr[0]

const a = superPrint([1, 2, 3, 4])
const b = superPrint([true, false, true, false])
const c = superPrint(["a", "b", "c"])
const d = superPrint([1, 2, false, true, "hello"])
// SuperPrint의 리턴 타입이 제네릭(T)이기 떄문에, 위의 a,b,c,d 모두 함수 superPrint에 의해 타입이 정해진다.
// a는 number, b는 boolean, c는 string, d는 string | number | boolean


문자열을 숫자로 쉽게 바꾸는 법. +를 붙인다.
문자열 : '1234'
숫자 : +'1234'

```
