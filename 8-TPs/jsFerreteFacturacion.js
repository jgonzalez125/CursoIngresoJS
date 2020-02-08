/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
	var num1;
	var num2;
	var num3; 
	var result;


	num1 = document.getElementById('PrecioUno').value;
	num2 = document.getElementById('PrecioDos').value;
	num3 = document.getElementById('PrecioTres').value;

	num1 = parseInt(num1);
	num2 = parseInt(num2);
	num3 = parseInt(num3);

	result = (num1 + num2 + num3);
	console.log(result);

	alert('El resultado es '+result);
	


}
function Promedio () 
{
	var num1;
	var num2;
	var num3; 
	var result;

	num1 = document.getElementById('PrecioUno').value;
	num2 = document.getElementById('PrecioDos').value;
	num3 = document.getElementById('PrecioTres').value;

	num1 = parseInt(num1);
	num2 = parseInt(num2);
	num3 = parseInt(num3);

	result = (num1 * num2 * num3);
	console.log(result);
	
	alert('El resultado es '+result);
	
	
}
function PrecioFinal () 
{
	var num1;
	var num2;
	var num3; 
	var suma;
	var iva;
	var result;

	num1 = document.getElementById('PrecioUno').value;
	num2 = document.getElementById('PrecioDos').value;
	num3 = document.getElementById('PrecioTres').value;

	num1 = parseInt(num1)
	num2 = parseInt(num2);
	num3 = parseInt(num3);
	suma =(num1 + num2 + num3)
	
	iva = (suma) / 100 * 21 ;
	result = suma + iva;
	console.log(result);

	alert('El resultado es '+result);
	
}