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

let customerId = cid as number  

//another way to do the same thing 
// let customerId = <number> cid 

//using types in functins 

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
    name: "jjohn" 
}
 
//types can be used with unions and primitives 
//interfaces cannot be used with primitives and unions 

//so, we can use unions(this type or this type ) with types 
type Point = number | string 
let one : Point = 3 
let two : Point = "Second one using string " 
// let three : Point = false    //THIS RAISES ERROR yeahh..




