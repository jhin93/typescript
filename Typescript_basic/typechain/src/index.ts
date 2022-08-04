


// 선언 파일(declaration file. == 정의 파일)은 자바스크립트 코드의 모양을 타입스크립트에게 설명해주는 파일
// ex) lib.dom.d.ts - 끝부분에 있는 d.ts가 declaration file
import {init, exit } from "myPackage" // 에러: 모듈 'myPackage'에 대한 선언 파일(ex lib.dom.d.ts)을 찾을 수 없습니다. 왜냐하면 src에 임의로 만든 파일이기 때문.
// myPackage에 대해 타입스크립트에게 알려주는 d.ts를 생성.

init({
    url:"true"
})

exit(1) // myPackage.d.ts

localStorage // lib.dom.d.ts - 미리 설명되어있는 누군가가 작성해둔 문서









