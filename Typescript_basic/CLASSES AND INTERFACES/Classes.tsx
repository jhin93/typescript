// 추상 클래스.
// 추상 클래스는 다른 클래스가 상속받을 수 있는 클래스이다.
// 하지만 이 클래스는 직접 새로운 인스턴스를 만들 수는 없다.
abstract class User{
    constructor( 
        private firstName:string, // private는 외부, 상속받은 곳에서 사용할 수 없다. 해당 클래스의 인스턴스 혹은 메소드에서 접근할 수 있다. 추상 클래스는 인스턴스도 못만든다.
        private lastName:string,
        private nickname:string 
    ) {}
    // 메소드
    getFullName(){
        return `${this.firstName} ${this.lastName}`
    }
    // 추상 메소드. 추상 메소드는 구현부(={}내부)를 작성하지 않는다. 그리고 메소드의 call signature만 적어두어야 한다.
    abstract getNickName():void // 이 추상 메소드는 void를 리턴한다.
}


class Player extends User { // player는 User로부터 상속받는다(extends)
    // 클래스 Player는 추상 메소드 getNickName을 구현해야 한다.
    getNickName(): void {
        console.log(this.nickname) // 상속을 한다 하더라도 private property에는 접근할 수 없다.
    }
}

const nico = new Player("nico", "las", "니꼬")

nico.getFullName() 