//   ▻──────────────────────────────────────◄⫷
/* 💝 01. 본 섹션의 개요 : 타입 스크립트에서 정의하는 기본 타입을 알아보자
Primitives: number, string, boolean
More complex types: arrays, objects
Function types, parameters
*/
//   ▻──────────────────────────────────────◄⫷

//- 🔸 숫자
let age: number;
// 대문자 Number로 쓰면 js의 다른 요소로 인식됨.
age = 12;

// - 🔸 구문
let userName: string;
userName = 'Max';
// * Union 타입을 이용하면 변수에 사용자의 성과 이름을 동시에 저장할 수도 있습니다.
let userName2: string | string[];


//- 🔸 논리
let isInstructor: boolean;
isInstructor = true;

//- 🔸 더 복잡한 타입 들
let hobbies: string[];
hobbies = ['Sports', 'Cooking']

let person: {
    name: string;
    age: number;
};

person = {
    name: 'Max',
    age: 32
};


/*- 🚫 에러코드_why? : 정의된 타입에 맞지 않기에 저장 불가
person = {
    isEmployee: true
};
*/

// 여러 타입을 합칠 수도 있습니다.
let people: {
    name: string;
    age: number;
}[];

//   ▻──────────────────────────────────────◄⫷
// 🟠 Type inference

//- 🔸 타입 추론 기능
let course = 'React - The Complete Guide'
/*- 🚫 에러코드_why? : 위에서 course가 타입스크립트의 타입 추론 기능으로 인해 해당 변수가 구문타입으로 지정됨 
course = 12341;
*/

//- 🔸 Union 타입: 1개 이상의 타입을 하나의 변수로 할떄 사용
let course2 : string | number = 'React - The Complete Guide';
course2: 12341;
/*- 🌎_why? 이렇게 왜 쓸까요?: 
Union 타입은 Typescript의 핵심기능 중 하나로 값과 타입을 좀더 유연하게 정의할 수 있습니다!
*/

// 💫 Misson! : 여러 변수에 반복해서 중복된 타입을 적용해야 한다면?
// ✨_Solution is: 베이스 type을 만들자!

//- 🔸 기본 type 프리셋 + 타입 별칭 기능
type Person2 = {
// 타입 생성시 주로 대문자 기호를 쓴다.
    name: string;
    age: number;
}

// 별칭을 넣어 쓴다. 그냥 쓸수도 있고, 배열 형태로 바꿀 수도 있다.
let person2: Person2;
let people2: Person2[];

//   ▻──────────────────────────────────────◄⫷
/* 💝 02. 본 섹션의 개요 : Functions & types
기능을 가진 함수 타입을 알아보자
*/

//- 🔸 반환값
function add(a: number, b:number): number | string {
    // 함수이름에 커서를 호버시키면 요소의 타입을 확인 할 수 있다. 
    // 뒤에 붙는 값은 추론되는 반환 타입 값이다. 
    // 위와 같이 직접 지정이 가능하다. 하지만 일부러 할 필요는 없다.
    return a + b;
}

//- 🔸 void 반환값 알아보기 : 함수의. 반환 값에만 쓰인다.
function printOut(value: any) {
    console.log(value);
}
/*- 🚫 에러코드_why? : 자바스크립트 내 이미 print 코드가 있아서
function print(value: any) {
    console.log(value);
}
*/


//   ▻──────────────────────────────────────◄⫷
/* 💝 본 섹션의 개요 : Generics
제네릭 타입을 알아보자
*/

function insertAtBeginning(array: any[], value: any) {
    const newArray = [value, ...array];
    return newArray;
}
const demoarray = [1, 2, 3];
const updatedArray = insertAtBeginning(demoarray, -1) // [-1, 1, 2, 3]
/* updatedArray[0].split(''); */
/*- 🚫 에러코드_why? : 당연히 안되야 하지만 타입스크립트는. value 값이 any이기 때문에 알수 없다. */

// ✨_Solution is: 제네릭을 활용하자!
function insertAtBeginning2<T>(array: T[], value: T) {
    const newArray = [value, ...array];
    return newArray;
}
const demoarray2 = [1, 2, 3];
const updatedArray2 = insertAtBeginning2(demoarray, -1) // [-1, 1, 2, 3]
const stringArray2 = insertAtBeginning2(['a', 'b', 'c'], 'd')
// 매번 변수를 생성할 떄 들어간 요소를 기반으로 타입을 추론한다. 이후 해당 타입으로 지정된 진다.

updatedArray2[0].split('');

/*- 🍭 더 공부해야 하는 점: 
제네릭이 뭔지 이해가 안되어서 핸드북을 좀 보았다. 조금 이해가 된다. 안에 넣은 T가 위치한 자리에 어떤게 들어가느냐에 따라 동일한 타입으로 지정된다고 생각하면 편하다. 그래서 구문을 넣으면 구문 타입으로, 숫자를 넣으면 숫자타입이 되는 것이다. 
*/
