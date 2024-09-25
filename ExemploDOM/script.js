// Exibir os dados do formulário na tela
function exibirDados(person) {
    
    if(person){
        document.getElementById('exbNomeCompleto').textContent = `Nome Completo: ${person.nome} ${person.sobrenome}`;
        document.getElementById('exbCPF').textContent = `CPF: ${person.CPF}`;
        document.getElementById('exbSenha').textContent = `Senha: ${person.senha}`;
    
        // Libera exibição da div
        document.getElementById('exibirPessoa').style.display = 'block';
    }
};

// Envio do formulário
document.getElementById('formulario').addEventListener('submit', function() {

    let nome = document.getElementById('nome').value;
    let sobrenome = document.getElementById('sobrenome').value;
    let CPF = document.getElementById('CPF').value;
    let senha = document.getElementById('senha').value;

    // Objeto
    const pessoa = {nome, sobrenome, CPF, senha};

    exibirDados(pessoa);
});


