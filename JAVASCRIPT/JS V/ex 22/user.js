const Account = require("./account.js")

class User {
    constructor(userName, email) {
        this.userName = userName
        this.email = email
        this.account = new Account(this)
    }
}

module.exports = User