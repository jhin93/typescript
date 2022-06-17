
abstract class User { // 추상 클래스는 이걸 상속받는 다른 클래스가 가질 property와 메소드를 지정하도록 해줌
    constructor(
        protected firstName:string,
        protected lastName:string
    ){}
    abstract sayHi(name:string):string // string으로 된 name을 받아서 string을 반환
    
}















