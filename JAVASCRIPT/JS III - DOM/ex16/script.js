const dayjs = require('dayjs')

function aniversario(date){
    const birthday = dayjs(date)
    const today = dayjs()

    const idade = today.diff(birthday, 'y')
    console.log('Idade: ', idade)

    const nextBirthday = birthday.add(idade+1, 'y')
    console.log(nextBirthday.format('DD/MM/YYYY'))

    const diasAteProximoAvinersario = nextBirthday.diff(today, 'd') +1
    console.log('Dias até completar o próximo aniversário: ', diasAteProximoAvinersario)
}

aniversario('1995-04-11')