"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Transaction {
    constructor(cpf, value, description) {
        this.cpf = cpf;
        this.value = value;
        this.description = description;
    }
    ;
}
exports.Transaction = Transaction;
;
class UserAccount {
    constructor(name, cpf, age) {
        this.name = name;
        this.cpf = cpf;
        this.age = age;
        this.balance = 0;
        this.transactions = [];
    }
    ;
    getBalance() {
        console.log("Seu saldo é de: ", this.balance);
    }
    ;
    addBalance(transaction) {
        this.balance += transaction.value;
        this.transactions.push(transaction);
    }
    ;
}
exports.UserAccount = UserAccount;
;
//# sourceMappingURL=users.js.map