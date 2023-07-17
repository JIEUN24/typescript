// 문은 삼항연산자로, 조건식은 extends를 써야함
// [✅ type if: 삼항연산자]
// [✅ extends: 조건식은]
type ContentId<T> = T extends string ? stirng : unknown;
let a: ContentId<string>;
let a2: ContentId<number>;

// [✅ infer: 타입을 추출]
type PersonId<T> = T extends infer R ? R : unknown;
let b: PersonId<number>;
