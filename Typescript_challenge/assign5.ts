
type Words = {
    [key: string]: string
}

class Dict {
    private words: Words
    constructor() {
        this.words = {}
    }
    add(word: Word) {
        if (this.words[word.term] === undefined) {
            this.words[word.term] = word.def;
        }
    }
    get(term:string) {
        return this.words[term]
    }
    showAll() {
        return this.words
    }
    count() {
        return Object.keys(this.words).length
    }
    deleteWord(word: Word) {
        if(this.words[word.term] !== undefined){
            delete this.words[word.term]
        }
    }
    update(term:string, newDef:string) {
        if(this.words[term] !== undefined){
            this.words[term] = newDef
        }
    }

}

class Word {
    constructor(
        public term: string,
        public def: string
    ) {}
}

const kimchi = new Word("kimchi", "한국의 음식")
const curry = new Word("curry", "인도의 음식")
const lemon = new Word("lemon", "과일")

const dict = new Dict()

dict.add(kimchi);
dict.add(curry);
dict.add(lemon);
// dict.get("kimchi")