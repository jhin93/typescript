
// 1. 타입을 만드는 방법
type Words = {
    [key:string]: string // Words 타입이 string 만을 property로 가지는 오브젝트라는 것을 말해줌. 이것은 제한된 양의 property 혹은 key를 가지는 타입을 정의해주는 방법이다.
    // property의 이름은 모르지만, 타입만을 알때 쓰는 방식이다. 아무 이름을 가진 키를 사용하는 object이고, string을 가진다.
}

class Dict {
    // 2. property를 만들고 원하는 대로 초기화 가능
    private words: Words // words를 initializer 없이 선언됨. property가 constructor부터 바로 초기화 되지 않음
    constructor() {
        this.words = {} // constructor에서 수동으로 초기화한다
    }
    add(word:Word){ // 3. 만든 클래스(Word)를 type 으로 쓸 수 있음
        if(this.words[word.term] === undefined){
            this.words[word.term] = word.def
        }
    }
    def(term:string){
        return this.words[term]
    }
}

class Word {
    constructor (
        public term:string,
        public def:string
    ) {

    }
}

const kimchi = new Word("kimchi", "한국의 음식");

const dict = new Dict()
dict.add(kimchi);
dict.def("kimchi")








