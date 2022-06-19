abstract class User { // 추상 클래스. 인스턴스를 만드는 걸 허용하지 않는다.
    constructor(
        protected firstName:string,
        protected lastName:string 
    ) {}
    abstract sayHi(name:string):string // 추상 메소드는 상속받는 클래스가 구현해서 쓸 수 있다.
    abstract fullName():string
}
class Player extends User{ // 추상 클래스를 상속받았다면 추상 메소드를 구현해야 한다.
    fullName(): string {
        return `${this.firstName} ${this.lastName}`
    }
    sayHi(name: string) {
        return `Hello ${name}. My name is ${this.fullName()}`
    }
}