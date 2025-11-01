//Arithmetic operators 1
let a=10;
let b=20
let g=a-b;
console.log("sum" , a + b ); //30
console.log("difference " + g); //-10
console.log("Product " +a*b); //200
console.log("Quotient" + b/a); //2
 
//  2
let c=30;
let d=a+b+c; //60
let e=d/3; //60/3=20
console.log(e);

//  3
let length=25;
let width=15;
let area=length * width;
console.log("Area of Rectangle is  l*b = " + area);

//  4
let C=25;
let F;
F=(C*(9/5))+32;
console.log( "Fahrenhiet " +F) ;

//  5
console.log("Remainder is % " + length%width);



//assignment operators  6
let x=10;
let y;
y=x+=10;
console.log("increase +=" + y);

//  7
let h=5;
let i;
i=h*=5;
console.log("multiplies *=" +i);

//  8
let j;
j=a-=3;
console.log("decrease -= " +j);

//  9
let k;
k=length/=2;
console.log("divide /= " + k);

//  10
let l;
l=a=length-b*h/j;
console.log("multiple opeator"+ l);


//  Comparison Operators  11
let num4 = 25;
let num3 = 25;
if (num3 === num4) {
    console.log("Both numbers are equal");
} else {
    console.log("Numbers are not equal");
}

//  12
let b2= 15;
let b1 = 10;
if (b2 > b1) {
    console.log(b2 + " is greater than " + b1);
} else {
    console.log(b2 + " is not greater than " + b1);
}

//  13
let str1 = "Hello";
let str2 = "Hello";
if (str1 === str2) {
    console.log("Both strings are the same");
} else {
    console.log("Strings are different");
}

//  14
let number = 75;
if (number <= 100) {
    console.log(number + " is less than or equal to 100");
} else {
    console.log(number + " is greater than 100");
}

//  15
let num5 = 10;
let num6= 10;
if (num5 === num6) {
    console.log("Both numbers are same type and number also");
} else {
    console.log("Numbers are not same");
}

// Logical Operators 16
let number1= 25;
if (number1 >= 10 && number1 <= 50) {
    console.log(number1 + " is between 10 and 50");
} else {
    console.log(number1 + " is not between 10 and 50");
}

//  17
let number2 = 120;
if (number2 < 10 || number2 > 100) {
    console.log(number2 + " is less than 10 or greater than 100");
} else {
    console.log(number2 + " is between 10 and 100");
}

//  18
let isRaining = true;
console.log("Before using NOT operator:", isRaining);
let notRaining = !isRaining;
console.log("After using NOT operator:", notRaining);

//  19
let ages = 25;
let hasID = true;
let isMember = false;
if ((ages >= 18 && hasID) || isMember) {
    console.log("Access granted");
} else {
    console.log("Access denied");
}

//  20
let marks = 45;
if (marks >= 35 && marks <= 100) {
    console.log("The student has passed.");
} else {
    console.log("The student has failed.");
}


//  increment and decrement  21
let m=10;
m++;
console.log("increment ++ " +m);

//  22
let n=10;
n--;
console.log("Decrement -- " + n);

//  23
let post=15;
post++;
console.log("post increment post ++ " + post);

//  24
let pre=15;
++pre;
console.log("Pre increment ++pre " +pre);

//  25
let two=25;
two++;
two--;
console.log("same expression ++ & -- " +two);


//  Ternary Operator  26
let num = 7;
let result = (num % 2 === 0) ? "Even" : "Odd";
console.log("Ternary operator even or odd : " + result);

//  27
let A = 15;
let B = 20;
let greater = (A > B) ? A : B;
console.log("The greater number is: " + greater);

//  28
let age=20;
let message = (age >= 18) ? "Eligible to vote" : "Not eligible to vote";
console.log("Age 20 is "+message);

//  29
let Result = (num > 0) ? "Positive" : (num < 0) ? "Negative" : "Zero";
console.log("given number 7 is " +Result);

//  30
let str = "vignesh";
let word = (str.length === 0) ? "String is empty" : "String is not empty";
console.log("Vignesh is string "+ word);


//  Bitwise Operators  31
let X=5;
let Y=3;
let res = X & Y;
console.log("Bitwise AND:", res);

//  32
let resu = a | b;
console.log("Bitwise OR:", resu);

//  33
let num1 = 8;
let num2 = 4;
let ress = num1 ^ num2; 
console.log("The bitwise XOR of", num1, "and", num2, "is:", ress);

//  34
 num = 6;  // Binary: 0110
let rees = num << 2; // Shift left by 2 bits
console.log("The result is:", rees);

//  35
let o = 5;  // Binary: 0101
let p = 3;  // Binary: 0011


// Bitwise Operators
let bitwiseAnd = o & p;   
let bitwiseOr  = o | p;   
let bitwiseXor = o ^ p;   

let q = true;
let r = false;
//Logical Operators
let logicalAnd = q && r;  
let logicalOr  = q || r;  

console.log("Bitwise AND (a & b):", bitwiseAnd);
console.log("Bitwise OR  (a | b):", bitwiseOr);
console.log("Bitwise XOR (a ^ b):", bitwiseXor);
console.log("Logical AND (x && y):", logicalAnd);
console.log("Logical OR  (x || y):", logicalOr);


// Bonus Mixed Tasks  36
// Declare variables of different data types
let name = "Vignesh";   // String
let Age = 25;            // Number
let isStudent = true;    // Boolean

// Perform operations
let greeting = "Hello, " + name + "!";       // String concatenation
let nextYearAge = Age + 1;                   // Number addition
let studentStatus = !isStudent;              // Boolean NOT operator
let checkAge = Age > 18 && isStudent;        // Logical operation

// Display the results
console.log("Greeting:", greeting);
console.log("Next Year Age:", nextYearAge);
console.log("Is Student (Before):", isStudent);
console.log("Is Student (After NOT):", studentStatus);
console.log("Check if Adult Student:", checkAge);

//  37
let s=10;
let t=20;
console.log("befor swapping" ,"s = " ,s,"t = " ,t);
// after swapping
s=s+t;
t=s-t;
s=s-t;
console.log("After swapping","s = ",s ,"t = ",t);

//  38
let a1=10;
let a2=15;
let a3=5;
let total=a1+a2*a3;
let equal=total==85;
let typeequal=total===85;
console.log(equal );
console.log(typeequal );

//  39
let score=85;
(score>80)?(console.log("pass")):console.log("fail");

//  40
console.log("Compare all the opeators")
let A1 = prompt("Enter the number a");
let A2 = prompt("Enter the number b");

// 🔹 Arithmetic Operators
console.log("Addition:", A1 + A2);
console.log("Subtraction:", A1 - A2);
console.log("Multiplication:", A1 * A2);
console.log("Division:", A1 / A2);
console.log("Remainder:", A1 % A2);

// 🔹 Comparison Operators
console.log("Is a greater than b?", A1 > A2);
console.log("Is a equal to b?", A1 === A2);
console.log("Is a not equal to b?", A1 !== A2);

// 🔹 Logical Operators
console.log("Logical AND (a > b && a < 20):", A1 >A2b && A1 < 20);
console.log("Logical OR (a < b || b < 10):", A1 < A2 || A2 < 10);
console.log("Logical NOT (!(a > b)):", !(A1 > A2));

// 🔹 Assignment Operators
A1 += 5; // a = a + 5
console.log("After assignment (a += 5):", A1);

// 🔹 Bitwise Operators
console.log("Bitwise AND (a & b):", A1 & A2);
console.log("Bitwise OR (a | b):", A1 | A2);
console.log("Bitwise XOR (a ^ b):", A1 ^ A2);
console.log("Left Shift (a << 1):", A1 << 1);
console.log("Right Shift (a >> 1):", A1 >> 1);
