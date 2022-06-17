
// interface는 property를 축적하는 것이 가능하다.
interface User {
    name:string
}

interface User {
    lastname:string
}

interface User {
    health: number
}

// 타입스크립트가 알아서 다 합쳐줌. type은 안됨.
const nico: User = {
    name:"nico",
    lastname:"test",
    health:10
}


// type은 interface와 달리 축적(합체)가 안된다.
type User2 = { // User2' 식별자가 중복되었습니다.
    name:string
}

type User2 = {
    lastName:string
}