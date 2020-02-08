/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{
	var fahrenheit;
	var result;

	
	fahrenheit = document.getElementById('Temperatura').value;
	fahrenheit = parseInt(fahrenheit);
	

	result = (fahrenheit - 32) * 5/9;
	result = parseInt(result);
	
	
	alert(fahrenheit+' Fahrenheit son '+result+' centigrados');
	Math.round(result);
	
}

function CentigradosFahrenheit () 
{
 	var celsius;
	var result;

	
	celsius = document.getElementById('Temperatura').value;
	celsius = parseInt(celsius);
	

	result = (celsius * 9/5) + 32;
	result = parseInt(result);
	
	
	alert(celsius+' Fahrenheit son '+result+' centigrados');
	Math.round(result);
}
