// Activity 1: If-Else Statements

// • Task 1: Write a program to check if a number is positive, negative, or zero, and log the result to the console.
let num = 23;
if (num > 0) {
  console.log(`${num} is Positive`);
} else if (num === 0) {
  console.log(`${num} is Zero`);
} else {
  console.log(`${num} is Negative`);
}

// • Task 2: Write a program to check if a person is eligible to vote (age >= 18) and log the result to the console.
const age = 21;
if (age >= 18) {
  console.log("Eligible to vote");
} else if (age < 0) {
  console.log("You aren't even born yet!");
} else {
  console.log("Not Eligible to vote");
}

// Activity 2: Nested If-Else Statements
// • Task 3: Write a program to find the largest of three numbers using nested if-else statements.
const num_1 = 23,
  num_2 = 78,
  num_3 = 79;

if (num_1 > num_2) {
  if (num_1 > num_3) {
    console.log(`${num_1} is largest`);
  }
} else if (num_2 > num_3) {
  if (num_2 > num_1) {
    console.log(`${num_2} is largest`);
  }
} else if (num_3 > num_1) {
  if (num_3 > num_2) {
    console.log(`${num_3} is largest`);
  }
}

// Activity 3: Switch Case

// • Task 4: Write a program that uses a switch case to determine the day of the week based on a number (1-7) and log the day name to the console.

const day = 7;
switch (day) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  case 4:
    console.log("Thursday");
    break;
  case 5:
    console.log("Friday");
    break;
  case 6:
    console.log("Saturday");
    break;
  case 7:
    console.log("Sunday");
    break;
  default:
    console.log("Invalid Input");
    break;
}

// • Task 5: Write a program that uses a switch case to assign a grade ('A', 'B', 'C', 'D', 'F') based on a score and log the grade to the console.

const marks = 75;

switch (true) {
  case marks <= 33:
    console.log("F");
    break;
  case marks <= 50:
    console.log("D");
    break;
  case marks <= 60:
    console.log("C");
    break;
  case marks <= 80:
    console.log("B");
    break;
  case marks <= 100:
    console.log("A");
    break;
  default:
    console.log("Absent");
    break;
}

// Activity 4: Conditional (Ternary) Operator

// • Task 6: Write a program that uses the ternary operator to check if a number is even or odd and log the result to the console.
function checkEven(x) {
  console.log(x % 2 === 0 ? `${x} is even` : `${x} is odd`);
}
checkEven(11);

// Activity 5: Combining Conditions

// • Task 7: Write a program to check if a year is a leap year using multiple conditions (divisible by 4, but not 100 unless also divisible by 400) and log the result to the console.
const year = 2003;

if ((year === 100 || year % 4 !== 0) && year >= 0) {
  console.log(`${year} is not leap year`);
} else if (year % 4 === 0 && year >= 0) {
  console.log(`${year} is a leap year`);
} else {
  console.log("Invalid year");
}
