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
    // generic은 Polymorphism을 위한 도구이다. 내가 생각한 대로 call signature를 생성(generate)해주는 도구인 것이다.
    //generic은 call signature를 작성할 때, 어떤 타입이 인자로 들어올 지 확실하게 모르는 경우에 사용한다.
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
