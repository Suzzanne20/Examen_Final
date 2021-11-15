var docu = function(medio){
    var medio=RadioSucu();
    var enviodocu = "Se realizara el envio de sus documentos, desde la sucursal: " + medio + " Por un total de Q.40.00";
    return enviodocu;
}


function RadioSucu(){
	var radios = document.getElementsByName('radsucu');
	var radioCheked;
	for (var i = 0, length = radios.length; i < length; i++) {  
	  if (radios[i].checked) {                                
	    radioCheked=radios[i].value;
	    break;
	  }
	}
	return radioCheked;
}

var alertnose = function(medioN){
	var vamosaber=pasaber();
	var vamosaberkm=pasaberKM();
    var enviopaq = "Se realizara el envio de sus documentos, desde la sucursal: " + vamosaber + " a una distancia de " + vamosaberkm + ". GRACIAS POR PREFERIRNOS!!" ;
    return enviopaq;
}
var alertsise = function(medioS){
	var vamosaber=pasaber();
	var vamosaberkm=pasaberKM();
    var enviopaq = "Se realizara el envio de sus documentos, desde la sucursal: " + vamosaber + " a una distancia de " + vamosaberkm + ". GRACIAS POR PREFERIRNOS!!" ;
    return enviopaq;
}

function pasaber(){
	var numSucu = parseFloat(document.getElementById("numSucu").value);
	if (numSucu="1"){
		var numSucupa="Guatemala";
		return numSucupa;
	  } else if (numSucu="2"){
		var numSucupa="Izabal";
		return numSucupa;
	  } else if (numSucu="3"){
		var numSucupa="Chiquimula";
		return numSucupa;
	} 	else if (numSucu="4"){
		var numSucupa="Peten";
		return numSucupa;
	} 	else if (numSucu="5"){
		var numSucupa="Retalhuleu";
		return numSucupa;
	  } else {
		alert("no se pudo weee")
	}
}

function pasaberKM(){
	var numSucu = parseFloat(document.getElementById("numSucu").value);
	if (numSucu="1"){
		var numSucupakm="10 km";
		return numSucupakm;
	  } else if (numSucu="2"){
		var numSucupakm="300 km";
		return numSucupakm;
	  } else if (numSucu="3"){
		var numSucupakm="460 km";
		return numSucupakm;
	} 	else if (numSucu="4"){
		var numSucupakm="178 km";
		return numSucupakm;
	} 	else if (numSucu="5"){
		var numSucupakm="200 km";
		return numSucupakm;
	  } else {
		alert("no se pudo weee")
	}
}

function nose(){
	var largo = parseFloat(document.getElementById("largo").value);
	var ancho = parseFloat(document.getElementById("ancho").value);
	var alto = parseFloat(document.getElementById("alto").value);
	var numSucu = parseFloat(document.getElementById("numSucu").value);
	var pvol, costodis, distancia, costokg, totald, finalnose;
	pvol = (largo*ancho*alto)/2272
	costodis = 0.13;
	costokg  = 2.5;

	if (numSucu="1"){
		distancia = 10;
		totald = distancia * costodis;
		finalnose=pvol*costokg+totald;
		escribe = document.getElementById("texto")
		escribe.innerHTML = finalnose
	  } else if (numSucu="2"){
		distancia = 300;
		totald = distancia * costodis;
		finalnose=pvol*costokg+totald;
		escribe = document.getElementById("texto")
		escribe.innerHTML = finalnose
	  } else if (numSucu="3"){
		distancia = 460;
		totald = distancia * costodis;
		finalnose=pvol*costokg+totald;
		escribe = document.getElementById("texto")
		escribe.innerHTML = finalnose
	} 	else if (numSucu="4"){
		distancia = 178;
		totald = distancia * costodis;
		finalnose=pvol*costokg+totald;
		escribe = document.getElementById("texto")
		escribe.innerHTML = finalnose
	} 	else if (numSucu="5"){
		distancia = 200;
		totald = distancia * costodis;
		finalnose=pvol*costokg+totald;
		escribe = document.getElementById("texto")
		escribe.innerHTML = finalnose
	  } else {
		alert("no se pudo weee")
	}

}

function sise(){
	var peso = parseFloat(document.getElementById("peso").value);
	var numSucu = parseFloat(document.getElementById("numSucu").value);
	var pvol, costodis, distancia, costokg, totald, finalnose;
	pvol = peso;
	costodis = 0.13;
	costokg  = 2.5;

	if (numSucu="1"){
		distancia = 10;
		totald = distancia * costodis;
		finalnose=pvol*costokg+totald;
		escribe = document.getElementById("textoS")
		escribe.innerHTML = finalnose
	  } else if (numSucu="2"){
		distancia = 300;
		totald = distancia * costodis;
		finalnose=pvol*costokg+totald;
		escribe = document.getElementById("textoS")
		escribe.innerHTML = finalnose
	  } else if (numSucu="3"){
		distancia = 460;
		totald = distancia * costodis;
		finalnose=pvol*costokg+totald;
		escribe = document.getElementById("textoS")
		escribe.innerHTML = finalnose
	} 	else if (numSucu="4"){
		distancia = 178;
		totald = distancia * costodis;
		finalnose=pvol*costokg+totald;
		escribe = document.getElementById("textoS")
		escribe.innerHTML = finalnose
	} 	else if (numSucu="5"){
		distancia = 200;
		totald = distancia * costodis;
		finalnose=pvol*costokg+totald;
		escribe = document.getElementById("textoS")
		escribe.innerHTML = finalnose
	  } else {
		alert("no se pudo weee")
	}

}