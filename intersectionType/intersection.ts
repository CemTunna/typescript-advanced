type Admin = {
  name: string;
  accesabilities: string[];
};
type User = {
  name: string;
  startDate: Date;
};
type mergedType = Admin | User;

const person1: mergedType = {
  name: 'John',
  accesabilities: ['creating-database'],
  startDate: new Date(),
};
