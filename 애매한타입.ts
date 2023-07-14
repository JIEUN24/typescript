// [✅ Union Type] : 타입 2개 이상을 합친 새로운 타입
const student: number | string = 123;
const teacher: number | string = "김하나";
const students: (number | string)[] = [1, "2", 3];
const homework: { a: string | number } = { a: 123 };

let height: number | string;
height + 1; // Union Type에는 연산 불가능

// [✅ Any Type] : 모든 자료형을 허용하는 타입 -> 타입 실드 해제(버그 발생확률 ↑)
let id: any = "123";
id = 123;
id = [];

let setId: number = id; // 가능
id - 1; // 가능

// [✅ Unknown Type] : 모든 자료형을 허용하는 타입 -> 실드 해제 X
let key: unknown = "123";
id = 123;
id = [];

let setKey: string = key; // 불가능
key - 1; // 불가능
