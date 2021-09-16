type Admin = {
  name: string;
  accesabilities: string[];
};
type User = {
  name: string;
  startDate: Date;
};
type mergedType = Admin & User;

const person1: mergedType = {
  name: 'John',
  accesabilities: ['creating-database'],
  startDate: new Date(),
};

type Mixed = string | number;
const add = (a: Mixed, b: Mixed) => {
  if (typeof a === 'number' || typeof b === 'number') {
    // that is called typeguard
    return +a + +b;
  }
  return a.toString() + b.toString();
};
type unknownUser = Admin | User;
const printUser = (user: unknownUser) => {
  if ('accesabilities' in user) {
    // another version of typeguard
    console.log('acesabilities: ', user.accesabilities);
  }
  if ('startDate' in user) {
    console.log('start date: ', user.startDate);
  }
};
printUser(person1);

class Car {
  drive() {
    console.log('Driving car...');
  }
}
class Truck {
  drive() {
    console.log('Driving truck...');
  }
  cargo(amt: number) {
    console.log('Loading cargo ' + amt);
  }
}
type CarOrTruck = Car | Truck;
const vehicle1 = new Car();
const vehicle2 = new Truck();

const vehicle = (vhc: CarOrTruck) => {
  vhc.drive();
  if (vhc instanceof Truck) vhc.cargo(100); // version of typeguard that is used for classes
};
