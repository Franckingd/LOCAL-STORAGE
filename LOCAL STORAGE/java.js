    var disciplina
    var professor

function cadastrar() {
    disciplina = document.getElementById('disciplina').value
    professor = document.getElementById('professor').value

    localStorage.setItem(disciplina, professor)
    // dessa forma oq vem em primeiro (disciplina) não pode ter repetição pois ele é considerada a chava do localStorage, já o segundo valor (professor) pode ter repetição

    alert(localStorage.getItem (disciplina))
}

function pesquisar() {
    pesquisa = document.getElementById('pesquisar').value

    alert ("A chave pesquisada é: " + pesquisa + " " + localStorage.getItem(pesquisa))

    
}

// var time
// var jogador
// var msg = document.getElementById('msg')

// function cadastrar() {
// time = document.getElementById('time').value
// jogador = document.getElementById('jogador').value

// localStorage.setItem(time, jogador)
// // dessa forma oq vem em primeiro (disciplina) não pode ter repetição pois ele é considerada a chava do localStorage, já o segundo valor (professor) pode ter repetição

// alert(localStorage.getItem (time))
// }

// function pesquisar() {
// pesquisa = document.getElementById('pesquisar').value

// msg.innerHTML ("A chave pesquisada é: " + pesquisa + " " + localStorage.getItem(pesquisa))


// }

