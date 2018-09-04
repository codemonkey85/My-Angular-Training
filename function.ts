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
