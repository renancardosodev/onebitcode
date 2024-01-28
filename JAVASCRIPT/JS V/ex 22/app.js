const Account = require("./account.js")
const User = require("./user.js")

class App {
    static #listUsers = []

    static createNewUser(name, email) {
        const resp = App.#listUsers.find(e => e.email === email)
        if(!resp) {
            new User(name, email, App.#listUsers.length+1)
        }else {
            console.log('Já existe esse usuário.')
        }
    }

    static findUser(email){
        return App.#listUsers.find(e => e.email === email)
    }

    static maketransfer(userSend, userReceive, valueTransfer) {
        new Account.maketransfer(userSend, userReceive, valueTransfer)
    }

    static makeDeposit(valueDeposit) {
        (valueDeposit)
    }
}