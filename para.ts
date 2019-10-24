function userInfo1(name: string, age: number): string {
    return `My name is ${name}, ${age} years old`;
}

console.log(userInfo1("john", 20));

function userInfo2(name: string = "anna", age: number = 69): string {
    return `My name is ${name}, ${age} years old`;
}

console.log(userInfo2());

function userInfo3(name: string = "anna", age?: number): string {
    if (age == null) {
        return `My name is ${name}`;
    }
    return `My name is ${name}, ${age} years old`;
}

console.log(userInfo3());
console.log(userInfo3("henry", 23));

function totalLength(x: (string | any[]), y: (string[] | string)): number {
    return x.length + y.length;
}

console.log(totalLength('abc', ['123']));
console.log(totalLength([1, 'abc', 'def'], ['123', 'abc']));
console.log(totalLength([1, 'abc', 'def'], 'def'));

