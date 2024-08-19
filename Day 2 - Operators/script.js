//Activity 1: Arithmetic Operations
//• Task 1: Write a program to add two numbers and log the result to the console.
let add_1 = 1,
  add_2 = 20,
  add_res = add_1 + add_2;
console.log("Add:", add_res);

//• Task 2: Write a program to subtract two numbers and log the result to the console.
let sub_1 = 20,
  sub_2 = 17,
  sub_res = sub_1 - sub_2;
console.log("Subtract:", sub_res);

//• Task 3: Write a program to multiply two numbers and log the result to the console.
let multiply_1 = 2,
  multiply_2 = 37,
  multiply_res = multiply_1 * multiply_2;
console.log("Multiply:", multiply_res);

//• Task 4: Write a program to divide two numbers and log the result to the console.
let divide_1 = 200,
  divide_2 = 117,
  divide_res = divide_1 / divide_2;
console.log("Divide:", divide_res);

//• Task 5: Write a program to find the remainder when one number is divided by another and log the result to the console.
let rem_1 = 10,
  rem_2 = 3,
  rem_res = rem_1 % rem_2;
console.log("Remainder:", rem_res);

//Activity 2: Assignment Operators
//• Task 6: Use the += operator to add a number to a variable and log the result to the console.
let add_num = 100;
add_num += 200;
console.log("Addition:", add_num);

//• Task 7: Use the -= operator to subtract a number from a variable and log the result to the console.
let sub_num = 169;
sub_num -= 69;
console.log("Subtraction:", sub_num);

//Activity 3: Comparison Operators
//• Task 8: Write a program to compare two numbers using > and < and log the result to the console.
let comp_1 = 25,
  compt_2 = 7;
console.log(
  `Greater than: ${comp_1 > compt_2}, Less than: ${comp_1 < compt_2}`
);
//• Task 9: Write a program to compare two numbers using >= and <= and log the result to the console.
let comp_3 = 25,
  compt_4 = 25;
console.log(
  `Greater than: ${comp_1 >= compt_2}, Less than: ${comp_1 <= compt_2}`
);
//• Task 10: Write a program to compare two numbers using == and === and log the result to the console.
let comp_5 = 7,
  comp_6 = "7";
console.log(`using "==" ${comp_5 == comp_6}, using "===" ${comp_5 === comp_6}`);

//Activity 4: Logical Operators
//• Task 11: Write a program that uses the && operator to combine two conditions and log the result to the console.
let first = true,
  second = false;
console.log(`true && false: ${first && second}`);

//• Task 12: Write a program that uses the || operator to combine two conditions and log the result to the console.
console.log(`true || false: ${first || second}`);

//• Task 13: Write a program that uses the ! operator to negate a condition and log the result to the console.
console.log(`!true: ${!first}`);

//Activity 5: Ternary Operator
//• Task 14: Write a program that uses the ternary operator to check if a number is positive or negative and log the result to the console.
console.log(
  `Ternary operator, condition is true: ${
    first ? "True condition block" : "False condition block"
  }`
);
console.log(
  `Ternary operator, condition is false: ${
    second ? "True condition block" : "False condition block"
  }`
);
