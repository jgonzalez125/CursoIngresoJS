/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{
	var temperatura;
	var result;
	var fahrenheit;
	
	temperatura = document.getElementById('Temperatura').value;
	temperatura = parseInt(temperatura);
	
	fahrenheit = (temperatura - 32) * 5/9;
	fahrenheit = parseInt(fahrenheit);

	
	alert(temperatura+' Fahrenheit son '+fahrenheit+' centigrados');
	
	
}

function CentigradosFahrenheit () 
{
 	var celsius;
	var result;

	
	celsius = document.getElementById('Temperatura').value;
	celsius = parseInt(celsius);
	

	result = (celsius * 9/5) + 32;
	result = parseInt(result);
	
	
	alert(celsius+' Centigrados son '+result+' Fahrenheit');
	
