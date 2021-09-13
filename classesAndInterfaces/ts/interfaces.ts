//describes the structure of objects
//interces can only be used to structure object, type cant be used
//interfaces has no implemention whereas abstract classes might have
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

class Person implements Human {
  age: number;
  name: string;
  constructor(age: number, name: string) {
    this.age = age;
    this.name = name;
  }
  sayHi(msg: string) {
    console.log(msg);
  }
}
let user1 = new Person(20, 'doe');
console.log(user1);
