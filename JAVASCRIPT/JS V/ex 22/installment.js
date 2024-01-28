const Loan = require("./loan.js");

class Installment extends Loan {
    constructor(valueLoan, numSimilarities, installment) {
        super(valueLoan, numSimilarities)
        this.initDate = new Date()
    }
}

module.exports = Installment