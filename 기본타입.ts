// [✅ String Type]
let firstName: string = "lia";

// [✅ Number Type]
let age: number = 25;

// [✅ Boolean Type]
let booleanType: boolean = true;

// [✅ Null Type]
let nullType: null = null;

// [✅ Undefined Type]
let undefinedType: undefined = undefined;

// [✅ Object Type]
let objectType: object = { id: 1, name: "lia" };

// [✅ Array Type]
let array: string[] = ["kim", "park"];
let arr: Array<string> = ["kim", "park"];

// [✅ Tuple Type]
let tupleArray: [string, number] = ["hi", 10];

// [✅ Any Type]
let anyType: any = "hello"; // 모든 타입 가능

// [✅ Void Type]
// return 값이 없거나 있더라도 반환하는 값이 없는 경우
function printSomething(): void {
  console.log("sth");
}

// [✅ Never Type]
// 이 함수는 절대 함수의 끝까지 실행되지 않는다는 의미
function neverEnd(): never {
  while (true) {}
}

// [✅ Enum Type]
// Enmu 타입은 C, Java와 같은 다른 언어에서 흔하게 쓰이는 타입으로 특정 값들의 집합
enum Avengers {
  Capt,
  IronMan,
  Thor,
}
let hero: Avengers = Avengers.Capt;
