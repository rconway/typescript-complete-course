console.log(`Page loading at ${new Date()}`)

const adder = function (x: number, y: number): number {
    return x + y;
}
console.log(adder(10, 20));

const mult = (x: number, y: number) => x * y;
console.log(mult(10, 20));

const greet = () => console.log("hello");
greet();

const greetFriend = (friend: string) => console.log(`hello ${friend}`);
greetFriend("fred");
