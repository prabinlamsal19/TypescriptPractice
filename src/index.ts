let a : number= 5 
let company: string = "Prabin Company"
let isPublished: boolean= true
let x: any = "Hello" 

let ids: number[] = [1,2,3,4,5] 
let arr: any[] = [1,2,true, "hello"]

//tuple 
let person : [number, string , boolean] = [1 , "string here" , true] 

//tuple array 
let employee : [number , string] [] 

employee = [ 
    [1 , "prabin"] , 
    [2 , "baral"] , 
    [3, "Jill"] , 

]  

//enum 
enum Direction1 { 
    Up, 
    Down, 
    Left, 
    Right
} 

console.log(Direction1.Up)   //prints 0   

//objects 
const user: {
     id: number, 
     name: string
}  = { 
    id: 1 , 
    name: "Prabin Lamsal" 
}

//creating classes and then objects the following way
//classes can be created using class keywork also which will come later
type User = { 
    id: number ,    
    name: string 
} 

const newUser : User = { 
    id: 2 , 
    name: "Manish Baral" 
}

//type assertion 
let cid: any = 1 

let customerId = cid as number //after this , we cannot assign it to a number 


//another way to do the same thing 
// let customerId = <number> cid 

//using types in functions 

function addNum(x: number ,y : number ) : number { 
    return x+y
} 
console.log(addNum(1,2))

function log(message: string | number) { 
    console.log(message) 
}

//interfaces (like a custom type) 
//no commas in interfaces or type.. in none of them lol. not mandatory
interface UserInterface { 
    id: number 
    name: string 
}  

const userFromInterface : UserInterface = { 
    id: 1 , 
    name: "John",  
}  

const user1 : UserInterface = { 
    id: 1 , 
    name: "john" 
}
 
//types can be used with unions and primitives 
//interfaces cannot be used with primitives and unions 

//so, we can use unions(this type or this type ) with types 
type Point = number | string 
let one : Point = 3 
let two : Point = "Second one using string " 
// let three : Point = false    //THIS RAISES ERROR yeahh..

//------what about primitives though??????? Lets see .....NOPE LATER 

//Lets use interfaces some more

interface NewUserInterface { 
    readonly id: number    //makes it readonly and can't change it 
    name: string 
    age? : number   //the ? makes it optional 
} 
const userCool : NewUserInterface = { 
    id: 1, 
    name: 'John'    //no need to use the optional age property.. YWEAh    
}   

// userCool.id = 4 ;   //GIVES ERRORS !! 

//functions in an interface 

interface MathFunc{ 
    (x: number, y: number) : number 
} 

const add: MathFunc = (x: number , y: number ): number => x + y 
const sub: MathFunc = (x: number , y: number ) : number => x - y

//classes
class ClssPerson{ 
    id: number 
    name: string 
    
    constructor(id: number , name: string){ 
        this.id = id 
        this.name = name
    } 
} 

const brad = new ClssPerson(1, "Prabin Lamsal") 

//private -> access from only inside the class 
//protected -> access from only this class and its children 
//public -> anyone can access it from anywhere 
//so this means that file level encapsulation doesn't exist in typescript
//unlike dart 


//for inheritance, use the 'implements' keyword


//GENERICS 
//to build reusable components 

//firstly , we are just going to use any
function getMySexyArray(items: any[]): any[] { 
    return new Array().concat(items)
}

let numArray = getMySexyArray([1,2,3,4]) 
let strArray = getMySexyArray(['brad', 'John', 'Jill']) 

numArray.push("hello") 

// bet we wanted to create numArray adn strArray to be able to have 
//elements that can be only num and only string respectively

//now, we use generics for the same code to implement that   

function getMyExtremelySexyArray<T>(items: T[]): T[] { 
    return new Array().concat(items)
}

let numArrayExtreme = getMyExtremelySexyArray([1,2,3,4]) 
let strArrayExtreme= getMyExtremelySexyArray(['brad', 'John', 'Jill']) 

// numArrayExtreme.push('hello') ;  

//just by doing this , we get and error when i try to push a string 
//in a number array

//we could also have done this 

//    getMyExtremelySexyArray<number>([1,2,3,4]) to be safe 
//but it seems like we don't even need to do that and the code just works either way. which is good. 

//so , using generics , we can reuse components for different types 
//and also maintain a level of type safety and compactness.. yeahh.!!
