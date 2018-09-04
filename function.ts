 "use strict";
function makeName(first: string, last: string, title?:string): string {
    if(title !== undefined){
        return title + ". " + first + " " + last;
    }
    return first + " " + last;
}

let fullName = makeName("Michael", "Bond", "Mr");

console.log(fullName);

// es6 default parameters

function makeName1(first: string, last: string, title:string = "Mr"): string {
    if(title !== undefined){
        return title + ". " + first + " " + last;
    }
    return first + " " + last;
}

let fullName1 = makeName1("Michael", "Bond");

console.log(fullName1);

// es6 Arrow functions
const makeName2 = (
    first: string,
    last: string,
    title: string = "mr"
): string => {
    if(title !== undefined){
        return title + ". " + first + " " + last;
    }
    return first + " " + last;
}

let numbers1: Array<number> = [10, 20, 30, 40, 50];
numbers1.filter(function(n){
    return n > 30;
})

numbers1.filter(n => n > 30);

// this is an auto bind
function Person(name1: string, age: number){
    this.name1 = name;
    this.age = age;
    this.describe = () => {
        return `Name: ${this.name1} Age: ${this.age}`;
    };
}

var p1 = new Person("test", 32);
var describeRef = p1.describe;
console.log(describeRef());
