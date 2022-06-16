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



// 오버로딩
// 오버로딩은 함수가 서로 다른 여러개의 call signature를 가질때 발생한다.

type Add = {
    (a:number, b:number) : number;
    (a:number, b:string) : number;
}

const add:Add = (a, b) => { // Alias type Add는 2개의 call signature를 가지고 있다.
    if(typeof b === "string") return a
    return a + b
}


// nextJS에서 라우터 home에 뭔가를 추가하는 예시. 때에 따라 path를 추가하거나 state를 추가할 수 있다.
type Config = {
    path : string,
    state : object
}

type Push = {
    (path:string):void,
    (config: Config): void;
}

const push:Push = (config) => {
    if(typeof config === "string") console.log(config)
    else console.log(config.path)
}






```
