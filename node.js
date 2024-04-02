// Exemplo básico de funcionalidade JavaScript para o projeto

// Simulação de login
document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault();
    var usuario = document.querySelector('input[type="text"]').value;
    var senha = document.querySelector('input[type="password"]').value;

    // Verifica se o usuário e a senha estão corretos (aqui você pode adicionar lógica real de autenticação)
    if (usuario === 'usuario' && senha === 'senha') {
        // Redireciona para a tela de cardápios de bolo
        window.location.href = 'cardapios.html';
    } else {
        alert('Usuário ou senha incorretos.');
    }
});

// Simulação de clique em um cardápio de bolo
document.querySelectorAll('.card').forEach(function(card) {
    card.addEventListener('click', function() {
        // Redireciona para a tela de descrição do bolo
        window.location.href = 'descricao.html';
    });
});

