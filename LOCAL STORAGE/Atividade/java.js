var time
var jogador

function cadastrar() {
time = document.getElementById('time').value
jogador = document.getElementById('jogador').value

localStorage.setItem(time, jogador)
// dessa forma oq vem em primeiro (disciplina) não pode ter repetição pois ele é considerada a chava do localStorage, já o segundo valor (professor) pode ter repetição

alert(localStorage.getItem (time))
}

function pesquisar() {
pesquisa = document.getElementById('pesquisar').value
var msg = document.getElementById('msg').value

// alert("A chave pesquisada é: " + pesquisa + " - " + localStorage.getItem(pesquisa))
// alert("O " + localStorage.getItem(pesquisa) + " joga no time do " + pesquisa)
msg.innerHTML = "O " + localStorage.getItem(pesquisa) + " joga no time do " + pesquisa;

}
