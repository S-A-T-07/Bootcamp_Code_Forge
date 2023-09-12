// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler
let t = 'batch'; //string literal
let n = 3;
let result = false;
let r = null;
console.log(t, n, result, r);
//let r='sum'; dynamic


let Student = { name: 'Hari', age: 30 }
console.log(Student)
console.log(Student.name)
console.log(Student.age)
Student.name = 'Sam'
console.log(Student)
Student['name'] = 'Mary'
console.log(Student);
let na = 'name';
Student[n] = 'Sam';
console.log(Student);


//Constant
const m = 5
console.log(m);

let a = ['red', 'blue']
console.log(a);
console.log(a[0]);
console.log(a[1]);
console.log(a[3]); //undefined is data type
a[2] = 'green'
console.log(a);
a[3] = 20;
console.log(a);
a[4] = null;
a[5] = false;
console.log(a);

let b = a.length; // How many objects in the array
console.log(b);

console.log(a.length)


//reading values from user
/*let name=prompt("Enter name ");
console.log('Hello',name,'!')
console.log(`Hello, ${name}!`)*/


//Function
let nam = 'sou';

function greet() {
    console.log("Hello");
}

greet();


//concatenation
console.log("Hello" + nam);



//sample
let num = prompt("Enter number ");

function number(num) {
    return num;
}
console.log(num * num * num)