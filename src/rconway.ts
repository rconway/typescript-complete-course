
console.log("\nMessing with types...");

type Address = {
    house: number | string,
    street: string,
    town: string | undefined,
    postcode: string
}

let addr: Address = {
    house: 7,
    street: "The Avenue",
    town: undefined,
    postcode: "SG5 4LY"
}
console.log(addr);

console.log("\nFunctions as types...");

type RFunc = (arg1: string) => number;

function runFunc(f: RFunc, s: string): number {
    return f(s);
}

function myFunc(name: string): number {
    console.log("This is myFunc: with value passed = " + name);
    return name.length;
}

console.log("The answer was: " + runFunc(myFunc, "fred"));
console.log("The answer was: " + runFunc(myFunc, "larry"));
