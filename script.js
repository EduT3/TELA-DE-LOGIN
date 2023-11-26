// Armazenar os dados do formulário
function cadastrar() {
    var nome = document.getElementById('nome').value;
    var email = document.getElementById('email').value;
    var senha = document.getElementById('senha').value;

    // Armazenar os dados localmente (pode ser substituído por um backend ou banco de dados real)
    localStorage.setItem('nome', nome);
    localStorage.setItem('email', email);
    localStorage.setItem('senha', senha);

    // Exibir a tela de login
    document.getElementById('cadastroForm').style.display = 'none';
    document.getElementById('loginDiv').style.display = 'block';
}


// Verificar os dados durante o login
function login() {
    var loginEmail = document.getElementById('loginEmail').value;
    var loginSenha = document.getElementById('loginSenha').value;

    // Obter os dados armazenados localmente
    var storedEmail = localStorage.getItem('email');
    var storedSenha = localStorage.getItem('senha');

    // Verificar se os dados do login correspondem aos dados armazenados
    if (loginEmail === storedEmail && loginSenha === storedSenha) {
        document.getElementById('loginDiv').style.display = 'none';
        document.getElementById('userInfo').style.display = 'block';
        document.getElementById('userInfoNome').innerText = localStorage.getItem('nome');
        document.getElementById('userInfoEmail').innerText = localStorage.getItem('email');
    } else {
        alert('Credenciais inválidas. Tente novamente.');
    }

}
