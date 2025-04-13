const formulario = document.querySelector("formulario_login");

let radio = document.querySelector('input[name="setor"]:checked');

const divError = document.getElementById('msg-error');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    let usuario = document.getElementById('usuario').value;
    let senha = document.getElementById('senha').value;

    if (email === "nomedo email@blabla" && ((senhaValue === "123456" && setor === "1") || (senhaValue === "123456" && setor === "2") || (senhaValue === "123456" && setor === "3"))) {

        switch(setor){
            case "1":
                window.location.href = "index.html"; // Redireciona para nova pagina MUDAR
                break;
            case "2":
                window.location.href = "index.html"; // Redireciona para nova pagina MUDAR
                break;
            case "3":
                window.location.href = "index.html"; // Redireciona para nova pagina MUDAR
                break;
        }
    }
    else {
        divError.innerHTML = "<p> Usuário ou senha inválidos! <p>";
    }
});