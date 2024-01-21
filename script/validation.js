function submitForm(){
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    // Construir o objeto com os dados do formulário
    var formData = {
        email: email,
        password: password
    };

    // Fazer a requisição para a API
    fetch('URL_DA_SUA_API', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
    })
    .then(response => response.json())
    .then(data => {
        // Verificar a resposta da API
        if (data.authenticated) {
            alert('Autenticação bem-sucedida!');
            // Redirecionar ou executar ações após autenticação
        } else {
            alert('Falha na autenticação. Verifique suas credenciais.');
        }
    })
    .catch(error => {
        console.error('Erro na requisição:', error);
    });
}
