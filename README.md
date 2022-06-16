# typescript

타입스크립트를 공부하는 공간입니다.  

Alias 타입(별칭타입) - 따로 정의해서 쓸 수 있는 타입. 객체의 형태를 미리 정의할 수 있다. 구조체처럼. 
readonly. 
any. 
Tuple ex) ["nico", 12, false]  

```typescript
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
```
