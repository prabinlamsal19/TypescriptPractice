"use strict";
let a = 5;
let company = "Prabin Company";
let isPublished = true;
let x = "Hello";
let ids = [1, 2, 3, 4, 5];
let arr = [1, 2, true, "hello"];
//tuple 
let person = [1, "string here", true];
//tuple array 
let employee;
employee = [
    [1, "prabin"],
    [2, "baral"],
    [3, "Jill"],
];
//enum 
var Direction1;
(function (Direction1) {
    Direction1[Direction1["Up"] = 0] = "Up";
    Direction1[Direction1["Down"] = 1] = "Down";
    Direction1[Direction1["Left"] = 2] = "Left";
    Direction1[Direction1["Right"] = 3] = "Right";
})(Direction1 || (Direction1 = {}));
console.log(Direction1.Up); //prints 0   
//objects 
const user = {
    id: 1,
    name: "Prabin Lamsal"
};
const newUser = {
    id: 2,
    name: "Manish Baral"
};
//type assertion 
let cid = 1;
let customerId = cid;
//another way to do the same thing 
// let customerId = <number> cid 
//using types in functins 
function addNum(x, y) {
    return x + y;
}
console.log(addNum(1, 2));
function log(message) {
    console.log(message);
}
const userFromInterface = {
    id: 1,
    name: "John",
};
const user1 = {
    id: 1,
    name: "john"
};
let one = 3;
let two = "Second one using string ";
const userCool = {
    id: 1,
    name: 'John' //no need to use the optional age property.. YWEAh    
};
const add = (x, y) => x + y;
const sub = (x, y) => x - y;
// userCool.id = 
///here we use interfaces with functions : enjoy: 
// interface MathFunc { 
//     (x: number , y : number ) : number 
// } 
// const add : MathFunc = (x: number , y: number ): number => x + y 
// const sub : MathFunc = (x: number , y: number): number => x -y
