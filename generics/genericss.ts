// function mixed<T extends object, U extends object>(obj1: T, obj2: U) {
//   // generic constrains
//   return Object.assign(obj1, obj2);
// }
// const mixedObj = mixed({ name: 'John' }, { age: 20 });

interface Desc {
  length: number;
}
function printt<T extends Desc>(value: T) {
  return value.length > 1 && 'Got ' + value.length + ' elements.';
}
function objFunc<T extends object, U extends keyof T>(obj: T, key: U) {
  // 'keyof' make sures U within object
  return obj[key];
}
objFunc({ name: 'Max' }, 'name');

class Data<T> {
  private data: T[] = [];
  add(item: T) {
    this.data.push(item);
  }
  remove(item: T) {
    this.data.splice(this.data.indexOf(item), 1);
  }
  get() {
    return [...this.data];
  }
}
const nameStorage = new Data<string>();
nameStorage.add('John');
nameStorage.add('Doe');
nameStorage.remove('Doe');

console.log(nameStorage);

const ageStorage = new Data<number>();
ageStorage.add(1);
ageStorage.add(2);

console.log(ageStorage);

interface Comment {
  title: string;
  desc: string;
  completed: boolean;
}
function createComment(title: string, desc: string, completed: boolean) {
  let comment: Partial<Comment> = {}; // 'Partial' does all properties optional
  comment.title = title;
  comment.desc = desc;
  comment.completed = completed;
  return comment as Comment;
}
