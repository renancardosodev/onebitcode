async function getGitHub(nameUser) {
    const response = await fetch(`https://api.github.com/users/${nameUser}`);
    const user = await response.json();
    if (user.message) {
        console.log('Usuário não encontrado');
    }
    else {
        creatUser(user);
    }
}
function creatUser(user) {
    const newUser = {
        id: user.id,
        login: user.login,
        name: user.name,
        bio: user.bio,
        public_repos: user.public_repos,
        repos_url: user.repos_url
    };
    arrayUsers.push(newUser);
    console.log('Usuário adicionado');
}
function showUser(arrayUsers) {
    let numberUser;
    let user;
    let menuShowUser = 'Lista de Usuários\n';
    let resp = false;
    arrayUsers.forEach((e, i) => {
        menuShowUser += `${i + 1} - Nome: ${e.name} |  Login: ${e.login}\n`;
    });
    if (arrayUsers.length === 0) {
        console.log('Ainda não há usuários salvos');
    }
    else {
        do {
            numberUser = Number(prompt(menuShowUser));
            if (numberUser > arrayUsers.length) {
                console.log('Esse número de usuário não é valido');
                resp = true;
            }
            else {
                user = arrayUsers[numberUser - 1];
                console.log(`Dados do ${user.name}\n
                Id: ${user.id}
                Nome: ${user.name}
                Login: ${user.bio}
                Repositórios Públicos: ${user.public_repos}`);
                resp = false;
            }
        } while (resp);
    }
}
const arrayUsers = [];
console.log(`MENU\n
    1 - Adicionar usuário getGitHub()
    2 - Ver respositório de um usuário showUser()
    3 - Listar todos os usuários listAll()
    4 - SAIR\n`);
const nameUser = prompt('Informe o usuário:');
getGitHub(nameUser);
showUser(arrayUsers);
console.log(arrayUsers);
