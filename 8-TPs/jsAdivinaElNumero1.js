/*Al comenzar el juego generamos un número 
secreto del 1 al 100, en la pantalla del juego
 dispondremos de un cuadro de texto para ingresar
  un número y un botón “Verificar”, si el número 
  ingresado es el mismo que el número secreto se dará 
  por terminado el juego con un mensaje similar a este: 
“Usted es un ganador!!! y en solo X intentos”.
de no ser igual se debe informar si “falta…”  para llegar al número secreto  o si “se pasó…”  del número secreto.
*/
	var numeroSecreto; 
	var contadorIntentos=0;
	var numeroIngresado;




	function comenzar()
	{
		//Genero el número RANDOM entre 1 y 100
		numeroSecreto= Math.floor(Math.random()*100 +1);
			//alert(numeroSecreto );
			alert(numeroSecreto);

		if(comenzar)
		{
			contadorIntentos=0;
		}	
	}

	function verificar()
	{
		if(numeroIngresado==numeroSecreto)
		{
			alert('Usted es un ganador!!! y en solo '+contadorIntentos+' intentos');
		} else
		{

			if(numeroIngresado > numeroSecreto)
			{
				contadorIntentos++;
				alert('Usted se pasó '+(numeroIngresado-numeroSecreto)+' del numero secreto')
			} else
			{
				contadorIntentos++;
				alert('A usted le faltan '+(numeroSecreto-numeroIngresado)+' para llegar al numero secreto');
			}
		}	
			document.getElementById('intentos').value=contadorIntentos;
			numeroIngresado=document.getElementById('numero').value;
			numeroIngresado=parseInt(numeroIngresado);
	}
		
	
