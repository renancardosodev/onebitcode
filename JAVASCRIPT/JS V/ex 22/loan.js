class Loan {
    static #rate

    constructor(valueLoan, numSimilarities) {
        this.valueLoan = valueLoan
        this.initDate = new Date()
        this.similarities = this.valueLoan / numSimilarities
    }

    get getRate() {
        return Loan.#rate
    }

    set setTaxa(newRate) {
        Loan.#rate = newRate
    }
}

module.exports = Loan