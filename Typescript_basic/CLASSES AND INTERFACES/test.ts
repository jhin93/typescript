interface User {
    name: string;
    age: number;
}

interface Car {
    name: string;
    color: string;
}

interface Book {
    name: string;
    price: number;
}

const user: User = { name: "a", age: 10};
const car: Car = { name: "bmw", color: "red"};
const book: Book = { name: "test", price: 3000 };

function showName(data): string { // 생겼던 에러가 없어졌다
    return data.name
}

showName(user);
showName(car);
showName(book);
// 제네릭 적용 전(위 3개 사례 모두 동일) 결과(shoName 호출 위에 마우스 올렸을 때):
// function showName(data: any): string

// 제네릭 적용 후 :
// function showName<User>(data: User): string
// function showName<Car>(data: Car): string
// function showName<Book>(data: Book): string

// 0. showName 함수에 제네릭을 적용했다 -> 다양한 인자가 들어올 수 있도록(polymorphism) 하겠다
// 1. Interface Book에 .name이 없어서 오류가 나는 것 같은데
// 2. 왜 interface Book에 name 속성을 넣어주고, 인스턴스에도 name 속성을 넣었는데 에러가 나는가?
