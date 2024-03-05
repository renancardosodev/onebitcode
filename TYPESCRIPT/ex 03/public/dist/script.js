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
    console.log(`Dados do ${user.name}\n
    Id: ${user.id}
    Nome: ${user.name}
    Login: ${user.login}
    Bio: ${user.bio}
    Repositórios Públicos: ${user.public_repos}`);
}
function showUser(userLogin) {
    let user;
    user = arrayUsers.find(e => e.login === userLogin);
    typeof user === undefined ? console.log('Usuário não encontrado') : getRepository(user);
    async function getRepository(user) {
        const response = await fetch(user.repos_url);
        const repository = await response.json();
        console.log(`Dados do ${user.name}\n
        Id: ${user.id}
        Nome: ${user.name}
        Login: ${user.login}
        Bio: ${user.bio}
        Repositórios Públicos: ${user.public_repos}
        Repositórios: ${repository}\n`);
    }
}
function showAllUsers() {
    let menuShowUser = 'Lista de Usuários\n';
    arrayUsers.forEach((e, i) => {
        menuShowUser += `${i + 1} - Nome: ${e.name} |  Login: ${e.login}\n`;
    });
    console.log(menuShowUser);
}
const arrayUsers = [];
console.log(`MENU\n
    1 - Adicionar usuário getGitHub()
    2 - Ver respositório de um usuário showUser()
    3 - Listar todos os usuários showAllUsers()
    4 - SAIR\n`);
