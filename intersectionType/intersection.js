var person1 = {
    name: 'John',
    accesabilities: ['creating-database'],
    startDate: new Date()
};
var add = function (a, b) {
    if (typeof a === 'number' || typeof b === 'number') {
        // that is called typeguard
        return +a + +b;
    }
    return a.toString() + b.toString();
};
var printUser = function (user) {
    if ('accesabilities' in user) {
        // another version of typeguard
        console.log('acesabilities: ', user.accesabilities);
    }
    if ('startDate' in user) {
        console.log('start date: ', user.startDate);
    }
};
printUser(person1);
var Car = /** @class */ (function () {
    function Car() {
    }
    Car.prototype.drive = function () {
        console.log('Driving car...');
    };
    return Car;
}());
var Truck = /** @class */ (function () {
    function Truck() {
    }
    Truck.prototype.drive = function () {
        console.log('Driving truck...');
    };
    Truck.prototype.cargo = function (amt) {
        console.log('Loading cargo ' + amt);
    };
    return Truck;
}());
var vehicle1 = new Car();
var vehicle2 = new Truck();
var vehicle = function (vhc) {
    vhc.drive();
    if (vhc instanceof Truck)
        vhc.cargo(100); // version of typeguard that is used for classes
};
