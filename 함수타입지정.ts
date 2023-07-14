// [✅ Parameter Type: 파라미터가 필수일 경우]
const addPost = (content: string) => {
  return { content };
};

// [✅ Parameter Type: 파라미터가 옵션일 경우]
const updatePost = (content?: string) => {
  return { content };
};

const updatePost2 = (content: string | undefined) => {
  return { content };
};

// [✅ Return Type]
const deletePost = (content: string): object => {
  return { content };
};

// [✅ Void Type: return 하지않는 함수]
const clearPost = (content: string): void => {
  console.log(content); // return 없음
};

// [✅ Narrowing]
const getPost = (content: string | number) => {
  if (typeof content === "string") {
    return content + 1;
  } else {
    console.log(content + 2);
  }
};

// [✅ Assertion : as ----]
// 1. Narrowing 할 때 사용
// 2. 무슨 타입이 들어올지 100% 확실할때 사용
// 3. 디버깅, 비상용으로만 사용할 것
const getPost2 = (content: string | number) => {
  return (content as number) + 1;
};
