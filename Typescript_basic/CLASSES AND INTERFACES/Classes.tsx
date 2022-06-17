// 추상 클래스.
// 추상 클래스는 다른 클래스가 상속받을 수 있는 클래스이다.
// 하지만 이 클래스는 직접 새로운 인스턴스를 만들 수는 없다.
abstract class User{
    constructor( 
        private firstName:string,
        private lastName:string,
        public nickname:string
    ) {}
    // 메소드
    private getFullName(){ // private getFullName이라고 작성하면 상속받아도 사용 불가(nico.getFullName() - 에러남).
        return `${this.firstName} ${this.lastName}`
    }
}


class Player extends User { // player는 User로부터 상속받는다(extends)

}


const nico = new Player("nico", "las", "니꼬")
// const nico = new User("nico", "las", "니꼬") // 이렇게 인스턴스를 만드는 것(new User)은 불가능하다. 추상 클래스의 인스턴스를 만들 수 없습니다.

nico.getFullName() // Player가 User를 상속받았기 때문에 getFullName 사용가능. private getFullName이라고 작성되면 사용 불가능