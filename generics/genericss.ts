function mixed<T extends object, U extends object>(obj1: T, obj2: U) {
  // generic constrains
  return Object.assign(obj1, obj2);
}
const mixedObj = mixed({ name: 'John' }, { age: 20 });

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
