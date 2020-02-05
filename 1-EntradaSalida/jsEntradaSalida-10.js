/*Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
	var importe;
	var descuento;
	var result;

	importe = document.getElementById('importe').value;
	importe = parseInt(importe);

	descuento = 0.75;

	

	result = importe * descuento;

	document.getElementById('resultado').value=result;
	
 /*
 Ejercicio 11:

	var importe1;
	var descuento1;
	var resultado;

	importe1 = prompt('Escribe tu importe', '');
	descuento1 = prompt('Escribe tu porcentaje', '');

	importe1 = parseInt(importe1);
	descuento1 = parseInt(descuento1);

	resultado = importe1 - (importe1 * descuento1 / 100);	


	console.log(resultado);
*/

}



	