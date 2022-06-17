// 추상 클래스.
// 추상 클래스는 다른 클래스가 상속받을 수 있는 클래스이다.
// 하지만 이 클래스는 직접 새로운 인스턴스를 만들 수는 없다.
abstract class User{
    constructor( 
        protected firstName:string,
        protected lastName:string,
        protected nickname:string 
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
        console.log(this.nickname) // protected이기 때문에 상속을 받으면 nickname에 접근이 가능하다.
    }
}

const nico = new Player("nico", "las", "니꼬")

nico.getFullName() 
nico.firstName() // firstName은 protected이기 때문에 이런 식으로 외부에서의 접근은 차단된다.