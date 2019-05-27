console.log("Hello World");
let a ='red';
let b ='blue';

//Swapping code goes here ...



let c = a;
a = b;
b = c;



console.log("This is the a variable (red):", a);
console.log("This is the b variable (blue):", b);

//for -in
const person ={
 name: "allen",
 age: 18
};

for (let key in person)
console.log (key,  person[key]);

const colors = ['red', 'green', 'blue'];

for (let index in colors)
console.log(index, colors[index]);

// for-of
for (let color of colors)
console.log(color);

let number=max(5, 10,);
console.log(number);

function max(a, b){
return (a > b)  ? a : b;
}
