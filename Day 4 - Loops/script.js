//Activity 1: For Loop
//• Task 1: Write a program to print numbers from 1 to 10 using a for loop.
for (let i = 1; i <= 10; i++) {
  console.log(i);
}

//• Task 2: Write a program to print the multiplication table of 5 using a for loop.
for (let i = 1; i <= 10; i++) {
  console.log(i * 5);
}

//Activity 2: While Loop
//• Task 3: Write a program to calculate the sum of numbers from 1 to 10 using a while loop.
let i = 1,
  sum = 0;
while (i <= 10) {
  sum += i;
  i++;
}
console.log(sum);

//• Task 4: Write a program to print numbers from 10 to 1 using a while loop.
let x = 10;
while (x >= 1) {
  console.log(x);
  x--;
}

//Activity 3: Do...While Loop
//• Task 5: Write a program to print numbers from 1 to 5 using a do…..while loop.
let y = 1;
do {
  console.log(y);
  y++;
} while (y <= 5);

//• Task 6: Write a program to calculate the factorial of a number using a do...while loop.
let num = 10;
let fact = 1;
do {
  if (num === 0) return;
  fact *= num;
  num--;
} while (num > 1);
console.log(fact);

//Activity 4: Nested Loops
//• Task 7: Write a program to print a pattern using nested for loops:
/*
-----------
 *
 * *
 * * *
 * * * *
 * * * * *
-----------
 */
let star = "";
for (let i = 1; i <= 5; i++) {
  console.log((star += "* "));
}

//Activity 5: Loop Control Statements
//• Task 8: Write a program to print numbers from 1 to 10, but skip the number 5 using the continue statement.
for (let i = 1; i <= 10; i++) {
  if (i === 5) continue;
  console.log(i);
}
//• Task 9: Write a program to print numbers from 1 to 10, but stop the loop when the number is 7 using the break statement.
for (let i = 1; i <= 10; i++) {
  if (i === 7) break;
  console.log(i);
}
