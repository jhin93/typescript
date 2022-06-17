
type test = String

type Team = "red" | "blue" | "yellow"
type Health = 1 | 5 | 10

// Interface
// 인터페이스는 오브젝트의 모양을 특정해주기 위한 것. 
// 이 기능밖에 없다.

// 타입스크립트에게 오브젝트의 모양을 알려주는 2가지 방법
// 1. type 이름 = {}
type Player = {
    nickname:string,
    team:Team 
    health: Health
}
// 2. interface 이름
interface Person { // 나도 개인적으로 interface로 오브젝트를 정의하는 게 더 직관적이고 쉽다고 생각함
    nickname:string,
    team:Team 
    health: Health
}
// 둘의 다른 점은 type 키워드는 interface에 비해 활용할 여지가 더 많다.
