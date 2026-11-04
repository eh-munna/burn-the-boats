const makeArr = <T>(value: T) => {
  return [value];
};

console.log(makeArr(12));
console.log(makeArr('str'));

interface User {
  name: string;
  age: number;
}

interface Blog {
  title: string;
  description: string;
}

interface APIResponse<T> {
  data: T;
  status: number;
  success: boolean;
}

const userResponse: APIResponse<User> = {
  data: {
    name: 'John',
    age: 30,
  },
  status: 200,
  success: true,
};
const blogResponse: APIResponse<Blog> = {
  data: {
    title: 'My Blog',
    description: 'This is my blog',
  },
  status: 200,
  success: true,
};
