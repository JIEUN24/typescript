// [✅ String Type]
var firstName = "lia";
// [✅ Number Type]
var age = 25;
// [✅ Boolean Type]
var booleanType = true;
// [✅ Null Type]
var nullType = null;
// [✅ Undefined Type]
var undefinedType = undefined;
// [✅ Object Type]
var objectType = { id: 1, name: "lia" };
// [✅ Array Type]
var array = ["kim", "park"];
var arr = ["kim", "park"];
// [✅ Tuple Type]
var tupleArray = ["hi", 10];
// [✅ Any Type]
var anyType = "hello"; // 모든 타입 가능
// [✅ Void Type]
// return 값이 없거나 있더라도 반환하는 값이 없는 경우
function printSomething() {
    console.log("sth");
}
// [✅ Never Type]
// 이 함수는 절대 함수의 끝까지 실행되지 않는다는 의미
function neverEnd() {
    while (true) { }
}
