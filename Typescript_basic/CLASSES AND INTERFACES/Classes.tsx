
// 1. interface 버전
interface User {
    name:string
}

interface Player extends User { // 인터페이스가 인터페이스를 상속하는 것도 가능
}

const nico : Player = {
    name:"nico"
}

// 2. type 버전
type User2 = {
    name:string
}

type Player2 = User & { // &은 &연산자.
}

const nico2 : Player = {
    name:"nico"
}