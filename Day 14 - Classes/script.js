// Activity 1: Class Definition
// • Task 1: Define a class Person with properties name and age, and a method to return a greeting message. Create an instance of the class and log the greeting message.
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  greet() {
    return `Hello from ${this.name}`;
  }
  upcomingAge() {
    return `${this.name} will become ${this.age + 1} on their next birhtday`;
  }
  static genericGreet() {
    return "Hello World from static method";
  }
}
const person = new Person("Harsh", 21);
console.log(person);
console.log(person.greet());

// • Task 2: Add a method to the Person class that updates the age property and logs the updated age.
console.log(person.upcomingAge());

// Activity 2: Class Inheritance
// • Task 3: Define a class Student that extends the Person class. Add a property studentId and a method to return the student ID. Create an instance of the Student class and log the student ID.
class Student extends Person {
  static studentCount = 0;
  constructor(name, age, studentId) {
    super(name, age);
    this.studentId = studentId;
    // Increment the student count each time a new student is created
    Student.studentCount++;
  }
  getStudentID() {
    return `Student ID is ${this.studentId}`;
  }
  greet() {
    return `Hello from student ID: ${this.studentId}`;
  }
  // Static method to get the total number of students
  static getStudentCount() {
    return `Total number of students: ${Student.studentCount}`;
  }
}

const student = new Student("Badri", 14, "0001");
console.log(student);
console.log(student.getStudentID());

// • Task 4: Override the greeting method in the Student class to include the student ID in the message. Log the overridden greeting message.
console.log(student.greet());

// Activity 3: Static Methods and Properties
// • Task 5: Add a static method to the Person class that returns a generic greeting message. Call this static method without creating an instance of the class and log the message.
console.log(Person.genericGreet());

// • Task 6: Add a static property to the Student class to keep track of the number of students created. Increment this property in the constructor and log the total number of students.
const student1 = new Student("abc", 10, "1");
const student2 = new Student("pqr", 11, "2");
const student3 = new Student("xyz", 12, "3");

console.log(Student.getStudentCount());

// Activity 4: Getters and Setters
// • Task 7: Add a getter method to the Person class to return the full name (assume a firstName and lastName property). Create an instance and log the full name using the getter.
class Hero {
  constructor(firstName, lastName, email) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
  }

  get fullName() {
    return `Full name of user is: ${this.firstName} ${this.lastName}`;
  }

  set fullName(name) {
    const [firstName, lastName] = name.split(" ");
    this.firstName = firstName;
    this.lastName = lastName;
  }

  greeting() {
    return `Hello from user: ${this.firstName} ${this.lastName}`;
  }
}

const hero = new Hero("Tony", "Stark", "Ironman@avengers.com");
console.log(hero.fullName);

// • Task 8: Add a setter method to the Person class to update the name properties (firstName and lastName ). Update the name using the setter and log the updated full name.
const hero_2 = new Hero("Peter", "Parkour", "spiderman@avengers.com");
// Log the full name using the getter
console.log(`Before updating: ${hero_2.fullName}`);

// Update name using the setter
hero_2.fullName = "Peter Parker";

// Log the updated full name using the getter
console.log(`After updating: ${hero_2.fullName}`);

// Activity 5: Private Fields (Optional)
// • Task 9: Define a class Account with private fields for balance and a method to deposit and withdraw money. Ensure that the balance can only be updated through these methods.
class Account {
  #balance;

  constructor(initialAmount) {
    this.#balance = initialAmount;
  }

  deposit(amount) {
    if (amount > 0) {
      this.#balance += amount;
      console.log(
        `${amount} has been succesfully deposited to your account: Updated balance: ${
          this.#balance
        }`
      );
    } else {
      console.log(`Deposit amount must pe greater than zero`);
    }
  }

  withdraw(amount) {
    if (amount > 0 && amount <= this.#balance) {
      this.#balance -= amount;
      console.log(
        `${amount} has been succesfully withdrawn to your account: Updated balance: ${
          this.#balance
        }`
      );
    } else if (amount > this.#balance) {
      console.log("Insufficient balance");
    } else {
      console.log(`Withdraw amount must pe greater than zero`);
    }
  }

  get balance() {
    return `Current balance is ${this.#balance}`;
  }
}

// • Task 10: Create an instance of the Account class and test the deposit and withdraw methods, logging the balance after each operation.
const account = new Account(1000);

// Log initial amount to console
console.log(account.balance);

// Withdraw money
account.withdraw(500);

// Deposit money
account.deposit(20000);

// Withdraw money
account.withdraw(15000);

// Deposit money
account.deposit(1000);

// Withdraw money
account.withdraw(1500);

// Deposit money
account.deposit(50000);
