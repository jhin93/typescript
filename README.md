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


** Polymorphism **

    //generic은 call signature를 작성할 때, 어떤 타입이 들어올 지 확실하게 모르는 경우에 사용한다.
    type SuperPrint = {
        <T>(arr: T[]):T; // 사용법 1 : 타입스크립트에 generic을 사용하고 싶다고 알려줘야 한다. 꺾쇠(<>)를 사용.

    }

    const superPrint: SuperPrint = (arr) => arr[0]

    // 타입스크립트는 generic에서 타입스크립트가 알아낸 타입으로 대체한다. placeholder가 call signature를 우리가 요구하는 대로 생성(generate)한다.
    const a = superPrint([1, 2, 3, 4]) // const superPrint: <number>(arr: number[]) => void
    const b = superPrint([true, false, true, true]) // const superPrint: <boolean>(arr: boolean[]) => void
    const c = superPrint(["a", "b", "c"]) // const superPrint: <string>(arr: string[]) => void
    const d = superPrint([1, 2, true, false, "test"]) // const superPrint: <string | number | boolean>(arr: (string | number | boolean)[]) => void

    // 결론 : generic으로 인해 위의 superPrint 함수는 여러 형태를 가질 수 있다. 이를 polymorphism 이라고 한다.
    // 만약 generic 대신 any를 쓴다면? a,b,c,d, 전부 any로 나오기 때문에 문제가 발생할 수 있다. 위의 함수는 arr[0]를 반환하는데, d.toUppercase()라는 메소드를 실행하면 문제를 일으키지 않는다. 만약 generic이었다면 문제를 일으키는 것으로 코드를 보호했을 것.



```
