class Installment extends Loan {
    constructor(valueLoan, numSimilarities) {
        this.numSimilarities = numSimilarities
        this.valueLoan = valueLoan
        this.status = 'pending'
    }
}

module.exports = Installment