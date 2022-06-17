// 추상 클래스.
// 추상 클래스는 다른 클래스가 상속받을 수 있는 클래스이다.
// 하지만 이 클래스는 직접 새로운 인스턴스를 만들 수는 없다.
abstract class User{
    constructor( 
        private firstName:string,
        private lastName:string,
        public nickname:string
    ) {}
    
}


class Player extends User { // player는 User로부터 상속받는다(extends)

}


const nico = new Player("nico", "las", "니꼬")
// const nico = new User("nico", "las", "니꼬") // 이렇게 인스턴스를 만드는 것(new User)은 불가능하다. 추상 클래스의 인스턴스를 만들 수 없습니다.

// nico.firstname // private로 설정되어있기 때문에 이런 식의 접근은 불가능하다.
nico.nickname // nickname만 유일하게 public이기에 접근이 가능하다.
