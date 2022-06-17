
// 1. type으로 alias 타입 만들기
type test = String

// 2. 타입이 특정 값을 가질 수 있도록 제한하기
type Team = "red" | "blue" | "yellow"
type Health = 1 | 5 | 10

// 3. type Player처럼 type으로 오브젝트의 모양을 묘사할 수 있다.
type Player = {
    nickname:string,
    team:Team // team을 특정 string으로만 사용할 수 있도록 제한.
    health: Health // health를 특정 number로 제한
}


const nico:Player = {
    nickname: "nico",
    team:"yellow",
    health: 10
}

