class Transfer {
    constructor(userSend, userReceive, valueTransfer) {
        this.userSend = userSend
        this.userReceive = userReceive
        this.valueTransfer = valueTransfer
        this.date = new Date()
    }
}

module.exports = Transfer