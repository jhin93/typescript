
// 타입을 지정된 옵션으로만 제한하기
type Team = "red" | "blue" | "yellow"
type Health = 1 | 5 | 10

type Player = {
    nickname:string,
    team:Team // team을 특정 string으로만 사용할 수 있도록 제한.
    health: Health // health를 특정 number로 제한
}


const nico:Player = {
    nickname: "nico",
    team:"pink",// pink는 'Team'타입에 없기 때문에 불가능하다
    health:100 // 100 역시 Team 에 없기 때문에 불가능하다.
}

