const App = require("./app.js")

App.createNewUser("renan Pontes", "renan@email.com")
App.createNewUser("Lucas Queiroga", "lucas@email.com")
App.createNewUser( "maria Conde", "maria@email.com")

App.makeDeposit("renan@email.com", 100)

App.makeTransfer("renan@email.com", "lucas@email.com", 20)

App.changeRateLoan(10)
App.makeLoan("maria@email.com", 2000, 24)

console.log(App.findUser("renan@email.com"))
console.log(App.findUser("renan@email.com").account)
console.log(App.findUser("lucas@email.com"))
console.log(App.findUser("lucas@email.com").account)
console.log(App.findUser("maria@email.com"))
console.log(App.findUser("maria@email.com").account)
console.log(App.findUser("maria@email.com").account.loans[0].installments)