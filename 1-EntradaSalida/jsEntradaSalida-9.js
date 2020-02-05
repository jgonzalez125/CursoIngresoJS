/*Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
	var importe;
	var aumento;
	var result;

	importe = document.getElementById('sueldo').value; 
	aumento = 1.1;

	result = importe * aumento;

	document.getElementById('resultado').value=result;

	
}

/*
Otra forma de hacerlo seria: 

var importe;
	var aumento;
	var result;

	importe = document.getElementById('sueldo').value; 
	aumento = 10;

	result = (importe / 100) * 10;


	document.getElementById('resultado').value=result;

	*/

