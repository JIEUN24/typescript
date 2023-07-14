// [✅ Type alias 적용 전]
let person: {
  name: string;
  age: number;
} = { name: "john", age: 20 };
let animal: string | number | undefined;

// [✅ Type alias 적용 후]
type Animal = string | number | undefined;
let animal2: Animal;

type Person = {
  name: string;
  age: number;
};
let person2: Person = { name: "john", age: 20 };

type User = { [key: string]: string | number };
let user: User = { name: "kim", phone: 123, email: "abc@naver.com" };

// [✅ extend Type alias - 1]
type Name = string;
type Age = number;
type NewOne = Name | Age;

// [✅ extend Type alias - 2: object 타입은 & 사용]
type PositionX = { x: number };
type PositionY = { y: number };
type XandY = PositionX & PositionY;
let 좌표: XandY = { x: 1, y: 2 };

// [✅ Readonly]
type Girlfriend = {
  readonly name: string;
};

let girlfriend: Girlfriend = {
  name: "엠버",
};

girlfriend.name = "유라"; //readonly라서 에러

// [✅ Selection Properties: ?]
type Square = {
  color?: string;
  width: number;
};

let square: Square = {
  width: 100,
};
