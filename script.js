function salvar(){
    localStorage.info = document.getElementById("nomeUser").value;
}

window.onload = function carregar(){
    if(localStorage.info == ""){
        document.getElementById("result").value = 'Parabens, Voce esta no grupo:'
    }else{
        document.getElementById("result").value = localStorage.info + ', Voce esta no grupo:';
    }
}