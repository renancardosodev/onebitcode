const Account = require("./account.js")
const Deposit = require("./deposit.js")
const Loan = require("./loan.js")
const Transfer = require("./transfer.js")
const User = require("./user.js")

class App {
    static #listUsers = []

    static createNewUser(name, email) {
        const resp = App.#listUsers.find(e => e.email === email)
        if(!resp) {
            new User(name, email, App.#listUsers.length+1)
        }else {
            console.log('Já existe esse usuário.')
        }
    }

    static findUser(email){
        return App.#listUsers.find(e => e.email === email)
    }

    static makeTransfer(userSend, userReceive, valueTransfer) {
        const transfer = new Transfer(userSend, userReceive, valueTransfer)
        Account.addTransfer(transfer)
    }

    static makeDeposit(valueDeposit) {
        const deposit = new Deposit(valueDeposit)
        Account.addDeposit(deposit)
    }

    static makeLoan(valueLoan, qntSimilarities) {
        const loan = new Loan(valueLoan, qntSimilarities)
        Account.addLoan(loan)
    }

    changeRateLoan(newRate) {
        new Loan.setTaxa(newRate)
    }
}