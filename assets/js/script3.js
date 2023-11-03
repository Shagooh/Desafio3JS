let a = "pink"
let s = "orange"
let d = "lightblue"

function cambiarColor1() {
    color1 = document.querySelector("#key")
    color1.style.backgroundColor = a
}

function cambiarColor2() {
    color1 = document.querySelector("#key")
    color1.style.backgroundColor = s
}

function cambiarColor3() {
    color1 = document.querySelector("#key")
    color1.style.backgroundColor = d
}
function newDiv1() {
    contenedor = document.getElementById("contenedor");
    nuevoElemento = document.createElement("div");
    contenedor.appendChild(nuevoElemento);
    contenedor.style.backgroundColor = "purple";
    contenedor.style.height = "200px";
    contenedor.style.width = "200px";
    contenedor.style.border = "solid";

}
function newDiv2() {
    contenedor = document.getElementById("contenedor");
    nuevoElemento = document.createElement("div");
    contenedor.appendChild(nuevoElemento);
    contenedor.style.backgroundColor = "gray";
    contenedor.style.height = "200px";
    contenedor.style.width = "200px";
    contenedor.style.border = "solid";
}
function newDiv3() {
    contenedor = document.getElementById("contenedor");
    nuevoElemento = document.createElement("div");
    contenedor.appendChild(nuevoElemento);
    contenedor.style.backgroundColor = "brown";
    contenedor.style.height = "200px";
    contenedor.style.width = "200px";
    contenedor.style.border = "solid";
}


document.addEventListener('keydown', function (event) {
    if (event.key === 'a' || event.key === 'A') {
        cambiarColor1()
    } else if (event.key === 's' || event.key === 'S') {
        cambiarColor2()
    } else if (event.key === 'd' || event.key === 'D') {
        cambiarColor3()
    } else if (event.key === 'q' || event.key === 'Q') {
        newDiv1()
    } else if (event.key === 'w' || event.key === 'W') {
        newDiv2()
    } else if (event.key === 'e' || event.key === 'E') {
        newDiv3()
    }
})