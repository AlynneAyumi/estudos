function validarCPF(cpf) {
    // Remove caracteres não numéricos
    cpf = cpf.replace(/[^\d]+/g, '');
  
    // Verifica se tem 11 dígitos
    if (cpf.length !== 11) {
      return false;
    }
  
    // Valida os dígitos verificadores
    let soma = 0;
    let resto;
    for (let i = 1; i <= 9; i++) {
      soma += parseInt(cpf.substring(i - 1, i)) * (11 - i);
    }
    resto = (soma * 10) % 11;
    if (resto === 10 || resto === 11) {
      resto = 0;
    }
    if (resto !== parseInt(cpf.substring(9, 10))) {
      return false;
    }
  
    soma = 0;
    for (let i = 1; i <= 10; i++) {
      soma += parseInt(cpf.substring(i - 1, i)) * (12 - i);
    }
    resto = (soma * 10) % 11;
    if (resto === 10 || resto === 11) {
      resto = 0;
    }
    if (resto !== parseInt(cpf.substring(10, 11))) {
      return false;
    }
  
    return true;
  }


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
document.getElementById('formulario').addEventListener('submit', function(e) {
    e.preventDefault();
    let nome = document.getElementById('nome').value;
    let sobrenome = document.getElementById('sobrenome').value;
    let CPF = document.getElementById('CPF').value;
    let senha = document.getElementById('senha').value;

    // Objeto
    const pessoa = {nome, sobrenome, CPF, senha};

    if (validarCPF(pessoa.CPF)) {
        exibirDados(pessoa);
    } else {
        alert(`CPF inválido!`);
    }
});

exibirDados();

