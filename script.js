document.getElementById("btn-enviar").addEventListener("click", function() {

let nome = document.getElementById("nome").value.trim();
let email = document.getElementById("email").value.trim();
let mensagem = document.getElementById("mensagem").value.trim();


if (nome === "" || email === "" || mensagem === "") {

    alert("Por favor, preencha todos os campos!");
} else {
    alert(`Obrigado ${nome}, sua mensagem foi enviada com sucesso!`);
}
});