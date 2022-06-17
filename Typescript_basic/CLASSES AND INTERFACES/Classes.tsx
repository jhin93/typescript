
// 1. 타입을 만드는 방법
type Words = {
    [key:string]: string 
}

class Dict {

    private words: Words
    constructor() {
        this.words = {}
    }
    add(word:Word){
        if(this.words[word.term] === undefined){
            this.words[word.term] = word.def
        }
    }
    def(term:string){
        return this.words[term]
    }
    static hello() {
        return "hello"
    }
}

class Word {
    constructor (
        public readonly term:string, // 현재 term과 def는 둘다 public 이라서 누군가 기존의 값을 변경할 수 있다. public이지만 변경할 수 없도록 하려면 readonly를 추가한다.
        public readonly def:string
    ) {

    }
}

const kimchi = new Word("kimchi", "한국의 음식");
kimchi.def = "xxx" // readonly이기 때문에 값을 "xxx"로 변경하는 것은 불가능하다
Dict.hello // static 메소드를 자바스크립트처럼 사용 가능. static메소드는 인스턴스 없이 호출이 가능하다
dict.hello // 인스턴스화(const dict = new Dict())됐기 때문에 static 메소드인 hello를 부를 수 없다.

const dict = new Dict()
dict.add(kimchi);
dict.def("kimchi")








