/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
	var altura;
	var base;
	var alambre;
	var resultado;
	var error;
	
	altura = document.getElementById('Largo').value;
	altura = parseInt(altura);

	
	base = document.getElementById('Ancho').value;
	base = parseInt(base);
	
	alambre = 3;
	
	resultado = (altura + base) * 2 * alambre;
	console.log(altura + base);
	error = (altura == base);
	


	document.getElementById('Radio').value= 'Usted debe comprar '+resultado+' metros cuadrados de alambre';

	if (error) { 
		return document.getElementById('Radio').value= 'ERROR, LOS VALORES NO PUEDEN SER IGUALES';
	//return alert('ERROR');
	} else {
		return document.getElementById('Radio').value= 'Usted debe comprar '+resultado+' metros cuadrados de alambre';

	} 


	//Otra forma de hacerlo 

/*	var altura;
	var base;
	var alambre;
	var resultado;
	var perimetro;
	var error;

	altura = document.getElementById('Largo').value;
	altura = parseInt(altura);
	
	base = document.getElementById('Ancho').value;
	base = parseInt(base);
	
	alambre = 3;
	perimetro = (altura + base) * 2;

	resultado = perimetro * alambre;
	error = (altura == base);

	document.getElementById('Radio').value= 'Usted debe comprar '+resultado+' metros cuadrados de alambre';

	if (error) { 
		return document.getElementById('Radio').value= 'ERROR, LOS VALORES NO PUEDEN SER IGUALES';
	//return alert('ERROR');
	} else {
		return document.getElementById('Radio').value= 'Usted debe comprar '+resultado+' metros cuadrados de alambre';

	}
*/
}

function Circulo () 
{
	var radio;
	var diametro;
	var alambre;
	var resultado;
	var pi;

	radio = parseInt(radio);
	diametro =  2;
	alambre = 3;
	//Math.PI
	pi = Math.PI;

	radio = document.getElementById('Largo').value;
	
	resultado = Math.round(radio * diametro * pi * alambre);
	console.log(radio * diametro * pi);


	document.getElementById('Radio').value='Usted debe comprar '+resultado+' metros cuadrados de alambre';


	//Otra forma de hacerlo:

/*	var radio;
	var diametro;
	var alambre;
	var resultado;
	var pi;
	var perimetro;

	radio = parseInt(radio);
	diametro =  2;
	alambre = 3;
	//Math.PI
	pi = Math.PI;
	perimetro = radio * diametro * pi;


	radio = document.getElementById('Largo').value;
	
	resultado = Math.round(perimetro * alambre);
	//console.log(radio * diametro * pi);


	document.getElementById('Radio').value='Usted debe comprar '+resultado+' metros cuadrados de alambre';
*/

}
function Materiales () 
{
	var altura;
	var base;
	var cal;
	var cemento;
	var result1;
	var result2;
	var error;

	altura = document.getElementById('Largo').value;
	altura = parseInt(altura);
	
	base = document.getElementById('Ancho').value;
	base = parseInt(base);
	

	cal = 3;
	cemento = 2;

	result1 = altura * base * cal;
	result2 = altura * base * cemento;
	error = (altura == base);
	document.getElementById('Radio').value= 'Usted debe comprar '+result1+' bolsas de cal y '+result2+' bolsas de cemento';

	
	if (error) { 
		return document.getElementById('Radio').value= 'ERROR, LOS VALORES NO PUEDEN SER IGUALES';
	//return alert('ERROR');
	} else {
		return document.getElementById('Radio').value= 'Usted debe comprar '+result1+' bolsas de cal y '+result2+' bolsas de cemento';

	}


	//Otra forma de hacerlo:

/*	var altura;
	var base;
	var cal;
	var cemento;
	var result1;
	var result2;
	var error;
	var superficie;


	altura = document.getElementById('Largo').value;
	altura = parseInt(altura);
	
	base = document.getElementById('Ancho').value;	
	base = parseInt(base);

	cal = 3;
	cemento = 2;
	superficie = base * altura;


	result1 = superficie * cal;
	result2 = superficie * cemento;
	error = (altura == base);
	document.getElementById('Radio').value= 'Usted debe comprar '+result1+' bolsas de cal y '+result2+' bolsas de cemento';

	if (error) { 
		return document.getElementById('Radio').value= 'ERROR, LOS VALORES NO PUEDEN SER IGUALES';
	//return alert('ERROR');
	} else {
		return document.getElementById('Radio').value= 'Usted debe comprar '+result1+' bolsas de cal y '+result2+' bolsas de cemento';

	} */
}