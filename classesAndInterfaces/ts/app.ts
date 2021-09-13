class Department {
  protected /*readonly*/ employees: string[] = [];
  //readonly allows you to just read
  // protected makes it accesible from other classes which  inherits Department
  constructor(protected id: string, private name: string) {}
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
  static employeeCreator(name: string) {
    return { name };
  }
}
class ITDepartment extends Department {
  constructor(id: string, public admins: string[]) {
    super(id, 'IT');
    this.admins = admins;
  }
}
class AccountingDepartment extends Department {
  private lastReport: string | null = null;
  private static ins: AccountingDepartment;
  private constructor(id: string, private reports: string[]) {
    //private keyword ensures that cant be instanciated
    super(id, 'Accounting');
  }
  get mostRecent() {
    return this.lastReport ? this.lastReport : console.log('no report found');
  }
  set mostRecent(val) {
    val && this.addReport(val);
  }
  static startInstance() {
    return (this.ins = new AccountingDepartment('d4', []));
  }
  addReport = (text: string) => {
    this.reports.push(text);
    this.lastReport = text;
  };
  getReports = () => {
    console.log(this.reports);
  };
  addEmployee = (name: string) => {
    if (name === 'John') return;
    this.employees.push(name);
  };
  desc() {
    console.log('Accolunting department -ID: ', +this.id);
  }
}
const it = new ITDepartment('id1', ['john']);

it.addEmployee('John');
it.addEmployee('Doe');
const emp1 = Department.employeeCreator('Mary');
console.log(emp1);
// const acc = new AccountingDepartment('id2', []);

// acc.mostRecent = 'setting method used'; // using set method, like a variable
// console.log(acc.mostRecent); // calling get method like a variable without '()'
const acc = AccountingDepartment.startInstance(); // sinletons
console.log(acc);
