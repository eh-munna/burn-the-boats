type AlphaNumeric = string | number;

const userId: AlphaNumeric = 12345;
const userName: AlphaNumeric = 'JohnDoe';

console.log({ userId }, { userName });

type User = {
  name: string;
  id: number;
};

type Admin = User & {
  role: 'admin';
  permissions: string[];
};

interface Member extends User {
  role: 'member';
  subscription: string[];
}

const adminUser: Admin = {
  name: 'Alice',
  id: 1,
  role: 'admin',
  permissions: ['read', 'write', 'delete'],
};

const memberUser: Member = {
  name: 'Bob',
  id: 2,
  role: 'member',
  subscription: ['basic', 'premium'],
};
