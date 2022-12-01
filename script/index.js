const result = document.getElementById("result")
const name = document.getElementById("name")
const resultado = document.getElementById("resultado")
var nome = prompt("Digite o nome do aluno: ")
const frm = document.querySelector("form")
let v1 = document.getElementById("n1")
let v2 = document.getElementById("n2")
let v3 = document.getElementById("n3")
let v4 = document.getElementById("n4")
let r1 = document.getElementById("rec1")
let btn = document.getElementById("btn")
const visivel = document.getElementById('rec1').style.display = "inline";
const invisivel = document.getElementById('rec1').style.display = "none";
const btnVis = document.getElementById('btn').style.display = "inline";
const btnInt = document.getElementById('btn').style.display = "none";
const recuperacao = document.getElementById("recuperacao")
const medFinal = document.getElementById("medFinal")
const cabou = document.querySelector("h4")

name.innerText = (`Aluno ${nome}`)




const conceito = (...notas) => {
    const tam = notas.length
    if (tam == 0) {
        console.log("informe ao menos uma nota")
        return
    }
    let total = 0
    for (const nota of notas) {
        total += nota
    }
    var media = total / tam
    console.log(media)
    result.innerText = (`A media do aluno(a) ${nome} é: ${media}`)
    let recFinal = (media + parseFloat("rec1.value") / 2)

    if((v1.value) === ""){
        return console.log("locu")
    }

    if (media < 5) {
        resultado.innerText = ("Recuperacao")
        document.getElementById('rec1').style.display = "inline";
        document.getElementById('btn').style.display = "inline";
    } else {
        resultado.innerText = ("Aprovado")
        document.getElementById('rec1').style.display = "none";
        document.getElementById('btn').style.display = "none"
    }


}

function recFinal() {
    const soma = parseFloat(v1.value) + parseFloat(v2.value) + parseFloat(v3.value) + parseFloat(v4.value)
    const final = soma / 4

    const rec = parseFloat(final) + parseFloat(r1.value)

    const resultFinal = rec / 2

    medFinal.innerText = (`A média final do aluno ${nome} é ${resultFinal}`)
    
    fim()

    function fim() {
        if (resultFinal < 5) {
            cabou.innerText = (`O aluno ${nome} está Reprovado `)
        } else {
            cabou.innerText = (`O aluno ${nome} está Aprovado`)

        }
    }
}



frm.addEventListener("submit", (e) => {
    e.preventDefault()

    conceito(parseFloat(v1.value), parseFloat(v2.value), parseFloat(v3.value), parseFloat(v4.value))


})

