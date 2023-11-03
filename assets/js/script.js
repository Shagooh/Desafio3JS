// Pregunta 2.2

const ele2 = document.getElementById("div1")

ele2.addEventListener("click", function () {
    ele2.style.backgroundColor = 'yellow'
});

// Pregunta 2.3

function pintar(color = "green") {
    ele1.style.backgroundColor = color
}
const ele1 = document.getElementById("div2")
ele1.addEventListener("click", function () {
    ele1.style.backgroundColor = "yellow"
});

// function pintar2(elemento){
//     elemento.style.backgroundColor = 'yellow'
// }
// const ele = document.getElementById("div1")
// const ele2 = document.getElementById("div2")
// ele.addEventListener("click", pintar2(ele));
