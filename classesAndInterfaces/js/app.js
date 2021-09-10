"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Department = (function () {
    function Department(id, name) {
        var _this = this;
        this.id = id;
        this.name = name;
        this.employees = [];
        this.addEmployee = function (employee) {
            _this.employees.push(employee);
        };
        this.printEmployee = function () {
            console.log(_this.employees.length);
            console.log(_this.employees);
        };
    }
    Department.prototype.printDepartment = function () {
        console.log("Department (" + this.id + "): " + this.name);
    };
    return Department;
}());
var ITDepartment = (function (_super) {
    __extends(ITDepartment, _super);
    function ITDepartment(id, admins) {
        var _this = _super.call(this, id, 'IT') || this;
        _this.admins = admins;
        _this.admins = admins;
        return _this;
    }
    return ITDepartment;
}(Department));
var AccountingDepartment = (function (_super) {
    __extends(AccountingDepartment, _super);
    function AccountingDepartment(id, reports) {
        var _this = _super.call(this, id, 'Accounting') || this;
        _this.reports = reports;
        _this.addReport = function (text) {
            _this.reports.push(text);
        };
        _this.getReports = function () {
            console.log(_this.reports);
        };
        _this.addEmployee = function (name) {
            if (name === 'John')
                return;
            _this.employees.push(name);
        };
        return _this;
    }
    return AccountingDepartment;
}(Department));
var it = new ITDepartment('id1', ['john']);
it.addEmployee('John');
it.addEmployee('Doe');
var acc = new AccountingDepartment('id2', []);
acc.addReport('Some random report');
acc.getReports();
acc.addEmployee('doe');
acc.printEmployee();
console.log(acc);
