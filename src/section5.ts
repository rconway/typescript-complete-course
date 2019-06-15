// Exercise 1
console.log("\nExercise 3...");

class Car {
    acceleration: number = 0;

    constructor(private name: string) { }

    honk() {
        console.log("Toooooooooot!");
    }

    accelerate(speed: number) {
        this.acceleration = this.acceleration + speed;
    }
}
let car = new Car("BMW");
car.honk();
console.log(car.acceleration);
car.accelerate(10);
console.log(car.acceleration);

// Exercise 2
console.log("\nExercise 2...");

abstract class BaseObject {
    constructor(public width: number = 0, public length: number = 0) { }
}

class Rectangle extends BaseObject {
    calcSize(): number {
        return this.width * this.length;
    }
}
let rectangle = new Rectangle(5, 2);
console.log(rectangle.calcSize());

// Exercise 3
console.log("\nExercise 3...");

class Person5 {
    private _firstName: string = "";

    get firstName() {
        return this._firstName;
    }

    set firstName(value: string) {
        if (value.length > 3) {
            this._firstName = value;
        }
        else {
            this._firstName = "";
        }
    }

}
let person = new Person5();
console.log(person.firstName);
person.firstName = "Ma";
console.log(person.firstName);
person.firstName = "Maximilian";
console.log(person.firstName);
