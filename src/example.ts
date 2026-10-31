const addTwo = (num1: number, num2: number): number => {
  return num1 + num2;
};

console.log(addTwo(1, 2));

// * Array and Tuple

const strArr: string[] = ['a', 'b', 'c'];
const numArr: number[] = [1, 2, 3];

const notChangeable: readonly [string, number] = ['Munna', 1223];
// notChangeable[0] = 'Emran';
// Error: Cannot assign to '0' because it is a read-only property.

// * Optional Parameter

const concatNames = (firstName: string, lastName?: string): string => {
  if (!lastName) {
    return firstName;
  }
  return `${firstName} ${lastName}`;
};

console.log(concatNames('Emran Hussain', 'Munna'));
console.log(concatNames('Emran'));

// * Default Parameter

const greetings = (name: string, greet = 'Hello'): void => {
  console.log(`${greet} ${name}`);
};

greetings('Emran');
