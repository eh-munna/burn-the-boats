type User = {
  name: string;
  age: number;
};

type APIResponse<T> = {
  data: T;
  status: number;
  success: boolean;
};

const fetchUser = async (): Promise<User> => {
  const response = await fetch('https://api.example.com/user');
  const data = (await response.json()) as APIResponse<User>;
  return data.data;
};
const userData = await fetchUser();
