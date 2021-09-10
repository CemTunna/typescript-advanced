class Department {
  protected /*readonly*/ employees: string[] = [];
  //readonly allows you to just read
  // protected makes it accesible from other classes which  inherits Department
  constructor(private id: string, private name: string) {}
  printDepartment() {
    console.log(`Department (${this.id}): ${this.name}`);
  }
  addEmployee = (employee: string) => {
    this.employees.push(employee);
  };
  printEmployee = () => {
    console.log(this.employees.length);
    console.log(this.employees);
  };
}
class ITDepartment extends Department {
  constructor(id: string, public admins: string[]) {
    super(id, 'IT');
    this.admins = admins;
  }
}
class AccountingDepartment extends Department {
  constructor(id: string, private reports: string[]) {
    super(id, 'Accounting');
  }
  addReport = (text: string) => {
    this.reports.push(text);
  };
  getReports = () => {
    console.log(this.reports);
  };
  addEmployee = (name: string) => {
    if (name === 'John') return;
    this.employees.push(name);
  };
}
const it = new ITDepartment('id1', ['john']);

it.addEmployee('John');
it.addEmployee('Doe');

const acc = new AccountingDepartment('id2', []);
acc.addReport('Some random report');
acc.getReports();
acc.addEmployee('doe');
acc.printEmployee();
console.log(acc);