function funcNoReturn(): void {
    console.log("funcNoReturn");
}

function funcReturnNumber(): number {
    //
    return 2;
}

function funcReturnArray(): string[] {
    return ["a", "b"];
}

function funcReturnAny(): any {
    return ["a", true, 8];
}

funcNoReturn();
console.log(funcReturnNumber());
console.log(funcReturnArray());
console.log(funcReturnAny());