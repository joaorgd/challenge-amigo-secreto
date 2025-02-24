let listaAmigos = [];

function adicionarAmigo() {
    const input = document.getElementById("amigo");
    const nome = input.value.trim();
    const listaElement = document.getElementById("listaAmigos");
    
    if (nome === "") {
        alert("Por favor, insira um nome válido.");
        return;
    }
    if (listaAmigos.includes(nome)) {
        alert("Este nome já foi adicionado.");
        return;
    }
    
    listaAmigos.push(nome);
    
    const li = document.createElement("li");
    li.textContent = nome;
    listaElement.appendChild(li);
    
    input.value = "";
    input.focus();
} 

function sortearAmigo() {
    if (listaAmigos.length === 0) {
        alert("Adicione pelo menos um nome antes de sortear.");
        return;
    }
    
    const indiceAleatorio = Math.floor(Math.random() * listaAmigos.length);
    const nomeSorteado = listaAmigos[indiceAleatorio];
    
    const resultadoElement = document.getElementById("resultado");
    resultadoElement.innerHTML = `<li>O amigo secreto é: <strong>${nomeSorteado}</strong></li>`;
}
