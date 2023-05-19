    var time
    var jogador

function cadastrar() {
    time = document.getElementById('time').value
    jogador = document.getElementById('jogador').value

    localStorage.setItem(time, jogador)
    // dessa forma oq vem em primeiro (time) não pode ter repetição pois ele é considerada a chava do localStorage, já o segundo valor (professor) pode ter repetição

    alert(localStorage.getItem (time))
}

function pesquisar() {
    pesquisa = document.getElementById('pesquisar').value
    var msg = document.getElementById('msg')
    var text = "<br>O jogador " + localStorage.getItem(pesquisa) + " é do time " + pesquisa 
    

    // alert ("A chave pesquisada é: " + pesquisa + " " + localStorage.getItem(pesquisa))
    // document.getElementById('msg').innerHTML += "O jogador " + localStorage.getItem(pesquisa) + " é do time " + pesquisa 
    msg.innerHTML += text
    
}


