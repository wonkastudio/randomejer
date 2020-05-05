const year1 = ["2008", "2009", "2010", "2011", "2012", "2013", "2014", "2015", "2016", "2017", "2018", "2019"];
const numEjercicio = ["1", "2", "3", "4", "5", "6"];
const abEjer = ["A", "B"];
const clases = ['blue', 'yellow', 'orange', 'purple', 'green', 'pink'];
var yearDiv = document.querySelector(".year1");
var ejerDiv = document.querySelector(".ejercicio1");
var abDiv = document.querySelector(".a-b1");
var botonGenerarDiv = document.querySelector(".generador1");
var botonBorrar = document.querySelector(".borrar");
var pizza = document.getElementById('pizarra');
var body = document.querySelector("body");
var clase = 'blue';
greetings()

botonGenerarDiv.addEventListener('click', function(){
	//borrar el pizarron con blanco `grow`
	grow()
	//randomTotal2 se ejecuta despues de que el pizzarron esta blanco
	setTimeout(function () {
   	randomTotal2();
	normal();
   	//nuevos numeros abre el prizzaron `normal`
}, 2000);
	setTimeout( function(){
		body.className = randomClase();
	}, 3900);
})

function grow(){
    pizza.className = 'grow';

}

function normal(){
	pizza.className = 'normal';
}

function randomClase(){
	var clase = clases[Math.floor(Math.random() * clases.length)];
	return clase
}


function randomYear(){
	var randomYear = year1[Math.floor(Math.random() * year1.length)];
	return randomYear

}

function randomAb(){
	var aOb = abEjer[Math.floor(Math.random() * abEjer.length)];
	return aOb

}

function randomEjer(){
	var randomEjer = numEjercicio[Math.floor(Math.random() * numEjercicio.length)];
	return randomEjer

}

function randomTotal2(){
	var yearT = randomYear()
	var ejerT = randomEjer()
	var abT = randomAb()
	yearDiv.textContent = yearT;
	ejerDiv.textContent = ejerT;
	abDiv.textContent = abT;
	normal()
	console.log(yearT + "-" + ejerT + ": " + abT + ".");
}



function greetings(){
	var greetings = [
 		"Hey",
  		"Howdy",
 		"Hello There",
  		"Wotcha",
  		"Kiora Kiora",
  		"Alright gov'nor",
  		"Greetings Commander",
  		"Hola Pianola Vecino",
  		"Sup Bro",
  		"Cheers Mate"
	]
	var randomAnswer = greetings[Math.floor(Math.random() * greetings.length)];
	console.log(randomAnswer);
}

