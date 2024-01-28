const Deposit = require("./deposit.js")
const Loan = require("./loan.js")
const Transfer = require("./transfer.js")
const User = require("./user.js")

class App {
    static #listUsers = []

    static createNewUser(name, email) {
        const user = App.findUser(email)
        if(!user) {
            this.#listUsers.push(new User(name, email))
        }else {
            console.log('Já existe esse usuário.')
        }
    }

    static findUser(email){
        return App.#listUsers.find(e => e.email === email) ?? null
    }

    static makeTransfer(userSend, userReceive, valueTransfer) {
        const to = App.findUser(userReceive)
        const from = App.findUser(userSend)

        if(to && from) {
            const transfer = new Transfer(userSend, userReceive, valueTransfer)
            to.account.addTransfer(transfer)
            from.account.addTransfer(transfer)
        }
    }

    static makeDeposit(email, valueDeposit) {
        const user = App.findUser(email)
        if(user) {
            const deposit = new Deposit(valueDeposit)
            user.account.addDeposit(deposit)
        }
    }

    static makeLoan(email, valueLoan, qntSimilarities) {
        const user = App.findUser(email)
        if(user) {
            const loan = new Loan(valueLoan, qntSimilarities)
            user.account.addLoan(loan)
        }
    }

    static changeRateLoan(newRate) {
        Loan.setTaxa = newRate
    }
}

module.exports = App