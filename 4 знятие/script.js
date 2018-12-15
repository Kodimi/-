var button = document.getElementById("knopka");
var celsius = document.getElementById("Cels");
var farenheit = document.getElementById("far");
var count = 0

Function print() {
    ver temp = Number(celius.value)
    farenheit.value = 9/5 * temp + 32
    
}

button.addEventListener("click",print)