const result = document.getElementById("result")
const frm = document.querySelector("form")
var v1= document.getElementById("bim1")
var v2= document.getElementById("bim2")
var v3= document.getElementById("bim3")
var v4= document.getElementById("bim4")



frm.addEventListener("submit", (e)=>{
    e.preventDefault();

    media()
})


function media(){
    const soma = parseFloat(v1.value)+parseFloat(v2.value)+parseFloat(v3.value)+parseFloat(v4.value)
    const final = soma / 4
    result.innerText=(final)
}