
type Words = {
    [key: string]: string
}

class Dict {
    private words: Words
    constructor() {
        this.words = {}
    }
    add(word: Word) { // class를 type 처럼 사용. 파라미터가 클랜스의 인스턴스이기를 원할 때 이렇게 쓸 수 있다.
        if (this.words[word.term] === undefined) {
            this.words[word.term] = word.def;
        }
    }
    def(term:string) {
        return this.words[term]
    }
}

class Word {
    constructor(
        public term: string,
        public def: string
    ) { }
}

const kimchi = new Word("kimchi", "한국의 음식")

const dict = new Dict()

dict.add(kimchi);
dict.def("kimchi")

// interface는 오로지 오브젝트의 모양을 타입스크립트에게 설명하기 위해서만 사용되는 키워드
type Team = "red" | "blue"

interface Player  {
    nickname:string,
    team:Team
}

const nico: Player = {
    nickname:"test",
    team:"blue"
}