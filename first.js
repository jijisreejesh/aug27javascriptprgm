//Use Object.getPrototypeOf(obj)to find the prototype of an object

let person={
    name:'sini',
    age:50
}
let b=Object.create(person)
console.log(Object.getPrototypeOf(b))

//Use Object.is(obj1,obj2)to check if two objects are same

let employee={
    name:'binu',
    age:87
}
let employee1={
    place:'thrissur',
    phone:"43546546456"
  
}
if(Object.is(employee,employee1))
    console.log("Two objects are equal")
else
    console.log("Two objects are not equal")