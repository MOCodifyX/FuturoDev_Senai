// Acesso ao Formulário
const formulario = document.querySelector("#formulario_login");

formulario.addEventListener('submit', (e) => {
    e.preventDefault(); // Impede o envio do formulário até a verificação

    // Pegando o valor do usuário e da senha
    let usuario = document.getElementById('Usuario').value; 
    let senha = document.getElementById('Senha').value; 
    
    // Pegando o setor selecionado
    let setor = document.querySelector('input[name="Setor"]:checked'); // Verifica qual setor foi selecionado

    // Selecionando a div para exibir a mensagem de erro
    const divError = document.getElementById('msg-error');

    // Verificando se o setor foi selecionado
    if (!setor) {
        divError.innerHTML = "<p>Por favor, selecione um setor!</p>";
        divError.style.display = "block"; // Exibe a mensagem de erro
        return;
    }

    // Criando as senhas e usuários predefinidos
    const senhaCorreta = {
        "1": { usuario: "CMCL12", senha: "Com&c1@l" }, // Comercial
        "2": { usuario: "98HR", senha: "RH!@2025" }, // RH
        "3": { usuario: "DEV4567TI", senha: "IT&&||==2025" } // TI
    };

    // Verificando se a senha está correta de acordo com o setor
    if (usuario == senhaCorreta[setor.value].usuario && senha === senhaCorreta[setor.value].senha) {
        // Redireciona para a página correspondente ao setor
        switch (setor.value) {
            case "1":
                window.location.href = "comercial.html"; // Pagina Comercial
                break;
            case "2":
                window.location.href = "rh.html"; // Pagina RH
                break
            case "3":
                window.location.href = "ti.html"; // Pagina TI
                break;
        }
    } else {
        // Se o login estiver incorreto, exibe uma única mensagem de erro
        divError.innerHTML = "<p>Usuário ou Senha incorretos!</p>";
        divError.style.display = "block"; // Exibe a mensagem de erro
    }
});
