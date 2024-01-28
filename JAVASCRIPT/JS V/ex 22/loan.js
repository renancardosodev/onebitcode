const Installment = require("./installment.js")

class Loan {
    static #rate = 1.1

    constructor(value, qntInstallments) {
        this.value = value
        this.installments = []
        this.initDate = new Date()

        for(let i = 1 ; i<=qntInstallments ; i++){
            this.installments.push(new Installment((value*Loan.#rate/qntInstallments), i))
        }
    }

    static get getRate() {
        return Loan.#rate
    }

    static set setTaxa(newRate) {
        Loan.#rate = 1 + (newRate/100)
    }
}

module.exports = Loan