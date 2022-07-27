interface User {
  // 인터페이스는 클래스의 모양을 알려준다는 점에서 유용하다. 그러면서 예전처럼 자바스크립트 코드로 컴파일되진 않는다.
  firstName: string;
  lastName: string;
  sayHi(name: string): string;
  fullName(): string;
}
// 인터페이스는 중복해서 상속이 가능하다.
interface Human {
  health: number;
}
class Player implements User, Human {
  // implements는 클래스가 인터페이스를 상속받을 때, 그 형태를 그대로 상속받도록 강제한다.
  constructor(
    public firstName: string,
    public lastName: string,
    public health: number
  ) {}
  fullName() {
    return `${this.firstName} ${this.lastName}`;
  }
  sayHi(name: string) {
    return `Hello ${name}. My name is ${this.fullName()}`;
  }
}

// 인터페이스를 타입으로 사용할 수도 있다.
function makeUser(user: User): User {
  // 클래스 리턴할때처럼(ex new User()) new 를 안써도 됨
  return {
    firstName: "nico",
    lastName: "las",
    fullName: () => "xx",
    sayHi: (name) => "string",
  };
}
// 인자로 User 인터페이스 모양의 형태를 받음.
makeUser({
  firstName: "nico",
  lastName: "las",
  fullName: () => "xx",
  sayHi: (name) => "string",
});
