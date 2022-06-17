class Player {
    constructor( // 자바스크립트처럼 this.firstName = firstName 이라고 하지 않고 파라미터만 써줘도 알아서 해준다.
        private firstName:string, // 자바스크립트는 private가 없다.
        private lastName:string,
        public nickname:string
    ) {}
}


const nico = new Player("nico", "las", "니꼬")

// nico.firstname // private로 설정되어있기 때문에 이런 식의 접근은 불가능하다.
nico.nickname // nickname만 유일하게 public이기에 접근이 가능하다.
