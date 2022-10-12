function salvar(){
    localStorage.info = document.getElementById("nomeUser").value;
}

window.onload = function carregar(){
    document.getElementById("result").value = localStorage.info + ', Voce esta no grupo:';
}