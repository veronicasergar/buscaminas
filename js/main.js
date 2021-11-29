"use strict"

function crearFilasRandom()
{
  let fila = Math.random() * (10 - 1) + 1;
  for (let i = 0; i < fila; i++) {
    document.getElementById("tablero").innerHTML += "<div id='fila" + i + "'></div>"
  }
}

function crearColumnasRandom()
{
  let columna = Math.random() * (10 - 5) + 5
  for (let i = 0; i < columna; i++) {
    document.getElementById("tablero").childNodes.forEach( nodo => {
      nodo.innerHTML += "<button></button>"
    })
  }
  document.getElementById("tablero").childNodes.forEach(boton => {
    boton.addEventListener("click", evt => {
      //coger las coordenadas del boton y comprobar si es una bomba o no
    })
  })
}


function crearBombas(nivel)
{
      document.getElementById("tablero").childNodes.forEach( nodo => {
        let aleatorio = Math.random() * (20 - 1) + 1
        if (aleatorio > 15) {
          nodo.innerHTML += "<button class='bomba'></button>"
        }
      })


  //método que segun el nivel genera un numero aleatorio de bombas dentro de un intervalo
}

function crearTablero(){
  crearFilasRandom()
  crearColumnasRandom()
  //ajustar la pantalla al tamaño del tablero (no funciona)
  //window.resizeTo(document.getElementById("tablero").clientWidth, document.getElementById("tablero").clientHeight)
}

function recolocarBombas(nbombas){
  //recoloca en distintos botones las bombas para que estén de forma aleatoria
}

crearTablero();

