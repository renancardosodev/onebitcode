class Installment{
    constructor(valueLoan, numSimilarities) {
        this.numSimilarities = numSimilarities
        this.valueLoan = valueLoan
        this.status = 'pending'
    }
}

module.exports = Installment