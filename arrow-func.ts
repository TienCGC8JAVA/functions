let f1 = function (i: number): number {
    return i*i;
};

console.log(f1(2));

let f2 = function (i: number) {
    return i*i;
};

console.log(f2(5));

let f3 = (i: number): number => {
    return i*i;
};

console.log(f3(3));

let f4 = (i: number) => {
    return i*i;
};

console.log(f4(4));

let f5 = (i: number) => i*i;

console.log(f5(6));