
type BankAccount = {
    money: number,
    deposit: (val: number) => void
}

let bankAccount: BankAccount = {
    money: 2000,
    deposit(value: number) {
        this.money += value;
    }
}

type Person = {
    name: string,
    bankAccount: BankAccount,
    hobbies: string[]
}

let myself: Person = {
    name: "RAC",
    bankAccount: bankAccount,
    hobbies: ["Sports", "Cooking"]
}

myself.bankAccount.deposit(3000);

console.log(myself);
