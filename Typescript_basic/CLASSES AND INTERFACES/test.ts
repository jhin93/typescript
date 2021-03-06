
// 인터페이스 정의
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

// 인스턴스 정의
const user: User = { name: "a", age: 10};
const car: Car = { name: "bmw", color: "red"};
const book: Book = { name: "bmw", price: 3000 };

// function showName<T extends { name: string }>(data: T): string { // 매개변수로 들어오는 어떤 T 타입은 name이 string인 객체를 확장한 형태이다. 다양한 모습의 객체가 T로써 올 수 있겠지만, 항상 { name: string } 형태를 가지고 있다
//     return data.name
// }

function showName<T>(data: T): string {
    return data.name
}

showName(user);
showName(car);
showName(book); // 만약에 name 속성이 없거나, string이 아니라면 이와같이 에러가 남

    // 제네릭 적용 전(위 3개 사례 모두 동일) 결과(shoName 호출 위에 마우스 올렸을 때):
    // function showName(data: any): string

    // 제네릭 적용 후 :
    // function showName<User>(data: User): string
    // function showName<Car>(data: Car): string
    // function showName<Book>(data: Book): string



// 0. showName 함수에 제네릭을 적용했다 -> 다양한 인자가 들어올 수 있도록(polymorphism) 하겠다
// * 에러발생
// 1. Interface Book에 .name이 없어서 오류가 나는 것 같은데
// 2. 왜 interface Book에 name 속성을 넣어주고, 인스턴스에도 name 속성을 넣었는데도 에러가 나는가? - 실제로 전달되는 user나 car에는 name 속성이 있지만, 모든 매개변수에 name 속성이 있다고 장담할 수 없음. 