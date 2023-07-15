/*
Q1

write a program that allow to user enter number then printit
 Example
 Input: 5
 Output: 5


 solution

  var userNum = Number(window.prompt("enter a number"));
 console.log(userNum);

*/


// ==================================================

/*
Q2

Write a program that take number from user then print yes if that number can divide by 3 
and 4 otherwise print no
Example1
Input: 12 Output Yes 
Example 2
Input: 9 Output No

solution

var userNum = Number(window.prompt("enter a number"));

if (userNum % 3 == 0 && userNum % 4 == 0) {
    console.log("yes");
}else{
    console.log("no");
}


*/

// =====================================================
/*
Q3

Write a program that allows the user to insert 2 integers then print the max
Example1
Input: 3 5
Output: 5
Example 2
Input: 10 7
Output: 10

solution

var userNum1 = Number(window.prompt("enter first number"));
var userNum2 = Number(window.prompt("enter second number"));

if (userNum1 > userNum2) {
    console.log(userNum1);
}else if (userNum1 < userNum2) {
    console.log(userNum2);
}else{
    console.log("two numbers are equal");
}


*/
// ========================================

/*
Q4

Write a program that allows the user to insert an integer then print negative if it is
negative number otherwise print positive.
Example 1
Input: -5
Output negative 
Example2
Input: 10 
Output positive

solution 


var userNum=Number(window.prompt("enter a number"));
if (userNum < 0 ) {
    console.log("this number is negative");
}else if (userNum>0) {
    console.log("this number is Positive");

}else{
    console.log("this number is zero");
}


*/

// =========================================

/*
Q5

Write a program that take 3 integers from user then print the max element 
and the min element.
Example 1
Input:7,8,5
Output:
max element = 8 
min element = 5

solution 


var userNum1 = Number(window.prompt("enter first number"));
var userNum2 = Number(window.prompt("enter second number"));
var userNum3 = Number(window.prompt("enter third number"));


if (userNum1 > userNum2 && userNum1 > userNum3) {
    console.log("max number = " + userNum1);
    if (userNum2 > userNum3) {
        console.log("minimum number =" + userNum3);
    }else{
        console.log("minimum number =" + userNum2);
    }
}
if (userNum2 > userNum1 && userNum2 > userNum3) {
    console.log("max number = " + userNum2);
    if (userNum1 > userNum3) {
        console.log("minimum number =" + userNum3);
    }else{
        console.log("minimum number =" + userNum1);
    }
}
if (userNum3 > userNum1 && userNum3 > userNum2) {
    console.log("max number = " + userNum3);
    if (userNum1 > userNum2) {
        console.log("minimum number =" + userNum2);
    }else{
        console.log("minimum number =" + userNum1);
    }
}



*/

// =========================================================

/*
Q6

Write a program that allows the user to insert integer number then 
check If a number is oven or odd

Example 1
Input: 8 
Output: even
Example 2
Input: 7
Output: odd


solution 


var userNum=Number(window.prompt("enter a number"));

if (userNum%2==0) {
    console.log("the number is even");
}else{
    console.log("the number is odd");
}


*/

// =========================================================

/*
Q7


Write a program that take character from user then if it is vowel chars (a,e,I,o,u) 
then print vowel otherwise print consonant

Example1
Input: O
Output: vowel 
Example 2
Input: b
Output:
Consonant

solution 

var userChar = window.prompt("enter a character");

if (userChar== "a" || userChar== "e" || userChar== "i" || userChar== "o" || userChar== "u" ) {
    console.log(" vowel");
}else{
    console.log("consonant");
}


*/

// =========================================================

/*
Q8


Write a program that allows user to insert integer then print all numbers between 1 to 
that’s number
Example Input 5
Output 1, 2, 3, 4, 5


solution 

var userNum= Number(window.prompt("enter a number"));

for (var i = 1; i <= userNum; i++) {

    console.log(i)

}


*/

// =========================================================

/*
Q9


Write a program that allows user to insert integer then print a multiplication table up to 12.
Example 
Input: 5 
Outputs:
5 10 15 20 25 30 35 40 45 50 55 60


solution 

var userNum = Number(window.prompt("enter a number"));
for(var i = 1; i<=12; i++ ){
    console.log(userNum * i);
}


*/
// =========================================================

/*
Q10


Write a program that allows to user to insert number then print all even numbers 
between 1 to this number
Example:
Input: 15
Output: 2 4 6 8 10 12 14


solution 

var userNum = Number(window.prompt("enter a number"));

for(var i = 0; i < userNum; i+=2 ){
    console.log(i);
}


*/
// =========================================================

/*
Q11


- Write a program that take two integers then print the power
Example:

Input: 4 3
Output: 64
Hint how to calculate 4^3 = 4 * 4 * 4 =64



solution 

var userNum1 = Number(window.prompt("enter first number"))
var userNum2 = Number(window.prompt("enter second number"))

console.log(userNum1 ** userNum2);

*/      



// =========================================================

/*
Q12


Write a program to enter marks of five subjects and calculate total, average and 
percentage.
Example
Input: - Enter Marks of five subjects:
95
76
58
90
89
Output:-.Total marks = 435
Average Marks =87
Percentage =87




solution 

var usermark1 = Number(window.prompt(" Enter Marks of first subjects"));
var usermark2 = Number(window.prompt(" Enter Marks of second subjects"));
var usermark3 = Number(window.prompt(" Enter Marks of third subjects"));
var usermark4 = Number(window.prompt(" Enter Marks of 4th subjects"));
var usermark5 = Number(window.prompt(" Enter Marks of 5th subjects"));


console.log("total marks =" + (usermark1 + usermark2 + usermark3 + usermark4 + usermark5));
console.log("average marks =" + (usermark1 + usermark2 + usermark3 + usermark4 + usermark5)/5);
console.log("Percentage=" + (usermark1 + usermark2 + usermark3 + usermark4 + usermark5)/500 * 100);

*/
// =========================================================

/*
Q13


Write a program to input month number and print number of days in that 
month.
Example:
Input: - Month Number: 1
Output:-. Days in Month: 31




solution 

var userMonth = Number(window.prompt("enter number of month"));

if (
  userMonth == "1" ||
  userMonth == "3" ||
  userMonth == "5" ||
  userMonth == "7" ||
  userMonth == "8" ||
  userMonth == "10" ||
  userMonth == "12"
) {
  console.log("Days in Month: 31");
} else if (userMonth == "2") {
  console.log("Days in Month: 28");
} else if (
  userMonth == "4" ||
  userMonth == "6" ||
  userMonth == "9" ||
  userMonth == "11"
) {
  console.log("Days in Month: 30");
}

*/


// =========================================================

/*
Q14


Write a program to input marks of five subjects
Physics, Chemistry, Biology, Mathematics and Computer
, Find percentage and grade 
Percentage >= 90%: Grad A
Percentage >= 80%: Grad B
Percentage >= 70%: Grad C
Percentage >= 60%: Grad D
Percentage >= 40%: Grad E
Percentage < 40%: Grad F




solution 


var physicsMark = Number(window.prompt("enter Physics mark"));
var ChemistryMark = Number(window.prompt("enter Chemistry mark"));
var BiologyMark = Number(window.prompt("enter Biology mark"));
var MathematicsMark = Number(window.prompt("enter Mathematics mark"));
var ComputerMark = Number(window.prompt("enter Computer mark"));


var percentage = (physicsMark + ChemistryMark + BiologyMark + MathematicsMark + ComputerMark)/500 * 100;



if (percentage < 40) {
  console.log("Grad F");
} else if (percentage >= 40) {
  console.log("Grad E");
} else if (percentage >= 60) {
  console.log("Grad D");
} else if (percentage >= 70) {
  console.log("Grad C");
} else if (percentage >= 80) {
  console.log("Grad B");
} else if (percentage >= 90) {
  console.log("Grad A");
}

*/
// =========================================================

/*
Q15

usind switch case 


 Write a program to print total number of days in month


solution 

var userMonth = Number(window.prompt("enter number of month"));

switch (true) {
    case userMonth == "1" || userMonth == "3" || userMonth == "5" || userMonth == "7" || userMonth == "8" || userMonth == "10" || userMonth == "12":
    console.log("Number of days : 31");
    break;

    case userMonth == "4" || userMonth == "6" || userMonth == "9" || userMonth == "11" :
        console.log("number of days  : 30");
    break;

    case userMonth == "2":
        console.log("number of days : 28");
    break;
}

*/
// =========================================================

/*
Q16

usind switch case 

 Write a program to check whether an alphabet is vowel or consonant 




solution 

var userChar= window.prompt("enter an alphabet");

switch (true) {
  case userChar == "a" ||
    userChar == "e" ||
    userChar == "i" ||
    userChar == "u" ||
    userChar == "o":
    console.log("vowel");
    break;

  default:
    console.log("consonant");
}



another solution


var userChar = window.prompt("enter an alphabet");

switch (userChar == "a" ||userChar == "e" ||userChar == "i" ||userChar == "u" || userChar == "o") {
  case true:
    console.log("vowel");
    break;

  default:
    console.log("consonant");
}

*/
// =========================================================

/*
Q17

usind switch case 

 Write a program to find maximum between two numbers 




solution 
var userNum1 = Number(window.prompt("enter first number"));
var userNum2 = Number(window.prompt("enter second number"));

switch (userNum1 > userNum2) {
    case true:
        console.log("maximum is :" + userNum1);
        break;

    case false:
        console.log("maximum is :" + userNum2);
        break;
}


another solution 

var userNum1 = Number(window.prompt("enter first number"));
var userNum2 = Number(window.prompt("enter second number"));

switch (true) {
  case userNum1 > userNum2:
    console.log("maximum is :" + userNum1);
    break;

  case userNum1 < userNum2:
    console.log("maximum is :" + userNum2);
    break;
}


*/
// =========================================================

/*
Q18

usind switch case 

Write a program to check whether a number is even or odd




solution 

var userNumber = Number(window.prompt("enter a number"));

switch (userNumber % 2 == 0) {
    case true :
        console.log("number is even");
        break;
    
    case false :
        console.log("number is odd");
        break;
}

another sol 

var userNumber = Number(window.prompt("enter a number"));

switch (true) {
  case userNumber % 2 == 0:
    console.log("number is even");
    break;

  case userNumber % 2 != 0:
    console.log("number is odd");
    break;
}

*/
// =========================================================

/*
Q19

usind switch case 

-Write a program to check whether a number is positive or negative or zero




solution 

var userNumber = Number(window.prompt("enter a number"));


switch (true) {
  case userNumber > 0:
    console.log("this num is positive");
    break;
  case userNumber < 0 :
    console.log("this num is negative");
    break;

    case userNumber == 0:
        console.log("this num is zero");
        break;
}


*/
// =========================================================

/*
Q20

usind switch case 

 Write a program to create Simple Calculator




solution 

var userFirstNumber = Number(window.prompt("enter your first number"));
var userSecondNumber = Number(window.prompt("enter your second number"));
var userOperation = window.prompt("enter the sign of the operation you need");

switch (userOperation) {

    case "*" :
        console.log(userFirstNumber * userSecondNumber);
        break;
    
    case "+" :
        console.log(userFirstNumber + userSecondNumber);
        break;
    case "/" :
        console.log(userFirstNumber / userSecondNumber);
        break;
    case "-" :
        console.log(userFirstNumber - userSecondNumber);
        break;

}


*/


