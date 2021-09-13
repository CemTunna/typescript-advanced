//describes the structure of objects
interface Human {
  age: number;
  name: string;
  sayHi(msg: string): void;
}
let user: Human;
user = {
  name: 'Joe',
  age: 20,
  sayHi(val: string) {
    console.log(val);
  },
};
user.sayHi('hello world');
