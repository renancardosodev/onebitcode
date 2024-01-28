class Account {
    #balance

    constructor(user) {
        this.user = user
        this.deposits = []
        this.transfers = []
        this.loans = []
        this.#balance = 0
    }

    get balance() {
        return this.#balance
    }

    addTransfer(transfer) {
        if(transfer.userReceive === this.user.email) {
            this.#balance += transfer.valueTransfer
            this.transfers.push(transfer)
        }else if(transfer.userSend === this.user.email) {
            this.#balance -= transfer.valueTransfer
            this.transfers.push(transfer)
        }else {
            console.log('Error')
        }
    }

    addDeposit(deposit) {
        this.#balance += deposit.valueDeposit
        this.deposits.push(deposit)
    }

    addLoan(loan) {
        this.#balance += loan.value
        this.loans.push(loan)
    }
}

module.exports = Account