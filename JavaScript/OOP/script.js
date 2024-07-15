'use strict';

// const Person = function (firstName, birthYear) {
//   this.firstName = firstName;
//   this.birthYear = birthYear;

//   // this.calcAge = function () {
//   //   console.log(2037 - this.birthYear);
//   // };
// };

// const jonas = new Person('Jonas', 1991);
// const matilda = new Person('Matilda', 2017);
// const jack = new Person('jack', 1975);

// // // prototypes

// // Person.prototype.calcAge = function () {
// //   console.log(2037 - this.birthYear);
// // };

// // jonas.calcAge();

// const Car = function (make, speed) {
//   this.make = make;
//   this.speed = speed;
// };
// Car.prototype.accelerate = function () {
//   this.speed += 10;
//   console.log(this.speed);
// };
// Car.prototype.brake = function () {
//   this.speed -= 5;
//   console.log(this.speed);
// };
// const honda = new Car('honda', 20);
// console.log(honda);
// honda.accelerate();
// honda.brake();
// const BMW = new Car('BMW', 120);
// const Mercedes = new Car('Mercedes', 95);
// BMW.accelerate();
// // BMW.accelerate();
// // BMW.accelerate();

// // class PersonCl {
// //   constructor(fullName, birthYear) {
// //     this.firstNmae = firstName;
// //     this.birthYear = birthYear;
// //   }

// //   calcAge() {
// //     console.log(2037 - this.birthYear);
// //   }

// //   greet() {
// //     console.log(`Hey${this.firstName}`);
// //   }

// //   get age() {
// //     return 2037 - this.birthYear;
// //   }
// //   // set a property that already exists
// //   set fullName(name) {
// //     if (name.includes(' ')) this._fullName = name;
// //     else alert(`${name} is not a full name`);
// //   }

// //   get fullName() {
// //     return this._fullName;
// //   }

// //   static hey() {
// //     console.log('hey there');
// //   }
// // }

// // const jessica = new PersonCl('Jessica Davis', 1996);
// // jessica.calcAge();
// // jessica.age;

// // // PersonCl.prototype.greet = function () {
// // //   console.log(`Hey${this.firstName}`);
// // // };

// // jessica.greet();

// // const walter = new PersonCl('Walter White', 1965);

// // const account = {
// //   owner: 'Jonas',
// //   movements: [200, 530, 120, 300],

// //   get latest() {
// //     return this.movements.slice(-1).pop();
// //   },

// //   set latest(mov) {
// //     this.movements.push(mov);
// //   },
// // };

// // account.latest = 50;

// // Person.hey = function () {
// //   console.log('het there');
// // };
// // Person.hey();
// // PersonCl.hey();
// // const PersonProto = {
// //   calcAge() {
// //     console.log(2037 - this.birthYear);
// //   },

// //   init(firstName, birthYear) {
// //     this.firstName = firstName;
// //     this.birthYear = birthYear;
// //   },
// // };

// // const steven = Object.create(personProto);
// // steven.name = 'Steven';
// // steven.birthYear = 2002;
// // steven.calcAge();

// // const sarah = Object.create(PersonProto);
// // sarah.init('Sarah', 1979);
// // sarah.calcAge();

// // class Carmodel {
// //   constructor(make, speed) {
// //     this.make = make;
// //     this.speed = speed;
// //   }

// //   accelerate() {
// //     this.speed += 10;
// //     console.log(this.speed);
// //   }

// //   brake() {
// //     this.speed -= 5;
// //     console.log(this.speed);
// //   }

// //   get speedUS() {
// //     return this.speed / 1.6;
// //   }

// //   set speedUS(speed) {
// //     this.speed = speed * 1.6;
// //   }
// // }

// // const ford = new Carmodel('ford', 120);

// // ford.accelerate();
// // ford.brake();
// // ford.speedUS;
// // ford.speedUS(50);

// // const Person = function (firstName, birthYear) {
// //   this.firstName = firstName;
// //   this.birthYear = birthYear;
// // };

// Person.prototype.calcAge = function () {
//   console.log(2037 - this.birthYear);
// };

// const Student = function (firstName, birthYear, course) {
//   Person.call(this, firstName, birthYear);
//   this.course = course;
// };

// Student.prototype = Object.create(Person.prototype);

// Student.prototype.introduce = function () {
//   console.log(`My name is ${this.firstNmae} and I study ${this.course}`);
// };

// const mike = new Student('Mike', 2020, 'Computer Science');
// console.log(mike);
// mike.introduce();

// mike.calcAge();

// const EV = function (make, speed, charge) {
//   Car.call(this, make, speed);
//   this.charge = charge;
// };

// EV.prototype = Object.create(Car.prototype);

// EV.prototype.chargeBattery = function (chargeTo) {
//   this.charge = chargeTo;
// };
// EV.prototype.accelerate = function () {
//   this.speed += 20;
//   this.charge--;
//   console.log(
//     `${this.make} going at ${this.speed} km/h, with a charge of ${this.charge}%`
//   );
// };

// const tesla = new EV('tesla', '120', 23);
// tesla.accelerate;
// tesla.brake;
// tesla.chargeBattery(90);

// console.log(tesla);

// class PersonCl {
//   constructor(fullName, birthYear) {
//     this.firstNmae = firstName;
//     this.birthYear = birthYear;
//   }

//   calcAge() {
//     console.log(2037 - this.birthYear);
//   }

//   greet() {
//     console.log(`Hey${this.firstName}`);
//   }

//   get age() {
//     return 2037 - this.birthYear;
//   }
// }

// class StudentCl extends PersonCl {
//   constructor(fullName, birthYear, course) {
//     super(fullName, birthYear);
//     this.course = course;
//   }

//   introduce() {
//     console.log(`my name is ${this.firstName} and I study ${this.course}`);
//   }

//   calcAge() {
//     console.log(
//       `I'm ${
//         2037 - this.birthYear
//       } years old, but as a student i feel more like ${
//         2037 - this.birthYear + 10
//       }`
//     );
//   }
// }

// const martha = new StudentCl('Martha Jones', 2012, 'Computer Science');
// martha.introduce();
// martha.calcAge();

// // Public fields

// // private fields
// // public methods
// // private methods

// class Account {
//   // public fields (instances)
//   locale = navigator.language;

//   // private fields
//   #movements = [];
//   #pin;

//   constructor(owner, currency, pin) {
//     this.owner = owner;
//     this.currency = currency;
//     this.#pin = pin;
//     // this._movements = [];
//     // this.locale = navigator.language;

//     console.log(`thanmks for openiing an account , ${owner}`);
//   }
//   // public methods

//   getMovements() {
//     return this.#movements;
//   }
//   deposit(val) {
//     this.#movements.push(val);
//     return this;
//   }

//   withdraw(val) {
//     this.deposit(-val);
//     return this;
//   }

//   requestLoan(val) {
//     if (this.#approveLoan(val)) {
//       this.deposit(val);
//       console.log(`loan approved`);
//       return this;
//     }
//   }

//   // private methods
//   #approveLoan(val) {
//     return true;
//   }
// }

// const acc1 = new Account('Jonas', 'EUR', 1111);
// console.log(acc1);

// // acc1.movements.push(250);
// // acc1.movements.push(-140);

// acc1.deposit(250);
// acc1.withdraw(140);

// console.log(acc1);

class CarCl {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }

  accelerate() {
    this.speed += 10;
    console.log(`${this.make} going at speed ${this.speed}`);
  }
  brake() {
    this.speed -= 5;
    console.log(`${this.make} is going at ${this.speed}`);
    return this;
  }

  get speedUS() {
    return this.speed / 1.6;
  }

  set speedUS(speed) {
    this.speed = speed * 1.6;
  }
}

class EVCl extends CarCl {
  #charge;
  constructor(make, speed, charge) {
    super(make, speed);
    this.#charge = charge;
  }
  chargeBattery(chargeTo) {
    this.#charge = chargeTo;
    return this;
  }

  accelerate() {
    this.speed += 20;
    this.#charge--;
    console.log(
      `${this.make} going at speed ${this.speed} has ${
        this.#charge
      } of battery left`
    );
    return this;
  }
}

const rivian = new EVCl('Rivian', 120, 23);
rivian.accelerate;

rivian.accelerate().accelerate();
