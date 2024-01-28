const Deposit = require("./deposit.js")
const Loan = require("./loan.js")
const Transfer = require("./transfer.js")
const User = require("./user.js")

class Account {
    #balance
    constructor(deposits, transfers, loans, user) {
        this.deposits = deposits
        this.transfers = transfers
        this.loans = loans
        this.user = user
    }

    makeTransfer(userSend, userReceive, valueTransfer) {
        const transfer = new Transfer(userSend, userReceive, valueTransfer)
        const user = new User()
        
        if(transfer.userReceive === user.email) {
            this.#balance += transfer.valueTransfer
        }else {
            this.#balance -= transfer.valueTransfer
        }
        this.transfers.push(transfer)
    }

    makeDeposit() {
        const deposit = new Deposit()
        this.#balance += deposit.valueDeposit
        this.deposits.push(deposit)
    }

    makeLoan() {
        const loan = new Loan()
        this.#balance += loan.valueLoan
        this.loans.push(loan)
    }
}

module.exports = Account