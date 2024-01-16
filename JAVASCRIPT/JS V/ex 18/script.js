class User {
    constructor(fullname, email, password) {
        this.fullname = fullname
        this.email = email
        this.password = password
    }
    login(email, password) {
        this.email == email && this.password == password ? console.log('Bem-vindo') : console.log('login incorreto')
    }
}

const usuario = new User('Marcelo Ferraz', 'marcelo@hotmail.com', '34CJ7*')

console.log(usuario)
usuario.login('marcelo2@hotmail.com', '34CJ7*')
usuario.login('marcelo2@hotmail.com', '34CJ7')
usuario.login('marcelo@hotmail.com', '34CJ7*')


