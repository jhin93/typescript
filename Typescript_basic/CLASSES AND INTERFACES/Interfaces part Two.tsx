interface User { // 인터페이스는 클래스의 모양을 알려준다는 점에서 유용하다. 그러면서 예전처럼 자바스크립트 코드로 컴파일되진 않는다.
    firstName:string,
    lastName:string
    sayHi(name:string):string 
    fullName():string
}
class Player implements User{ // implements는 클래스가 인터페이스를 상속받을 때, 그 형태를 그대로 상속받도록 강제한다.
    constructor(
        public firstName:string,
        public lastName:string
    ){}
    fullName(){
        return `${this.firstName} ${this.lastName}`
    }
    sayHi(name: string) {
        return `Hello ${name}. My name is ${this.fullName()}`
    }
}


// 인터페이스를 상속하는 것의 문제점
// 1. private property를 사용하지 못한다.
// 2. constructor가 없다. 추상클래스는 있어서 그냥 상속받기만 하면 됐다. 하지만 인터페이스는 없어서 상속받는 클래스에서 작성해야 한다.



// 1. 인터페이스를 자바스크립트로 컴파일한 결과.

// "use strict";
// class Player {
//     constructor(firstName, lastName) {
//         this.firstName = firstName;
//         this.lastName = lastName;
//     }
//     fullName() {
//         return `${this.firstName} ${this.lastName}`;
//     }
//     sayHi(name) {
//         return `Hello ${name}. My name is ${this.fullName()}`;
//     }
// }




// 2. 추상클래스를 자바스크립트로 컴파일한 결과

// "use strict";
// class User {
//     constructor(firstName, lastName) {
//         this.firstName = firstName;
//         this.lastName = lastName;
//     }
// }
// class Player extends User {
//     fullName() {
//         return `${this.firstName} ${this.lastName}`;
//     }
//     sayHi(name) {
//         return `Hello ${name}. My name is ${this.fullName()}`;
//     }
// }










