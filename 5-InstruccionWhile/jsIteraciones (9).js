function mostrar()
{

	var contador=0;
	// declarar variables
	var maximo=Math.max();
	var minimo=Math.min();
	var numeroIngresado;
	var respuesta='si';

	while(respuesta!='no')
	{
		numeroIngresado = prompt('Ingrese Numero');
		numeroIngresado = parseInt(numeroIngresado);
		contador = contador + 1;

		if(numeroIngresado < minimo)
		{
			minimo=numeroIngresado;
		}
		if(numeroIngresado > maximo)
		{
			maximo=numeroIngresado;
		}
	
		respuesta = prompt('Ingrese "no" para dejar de ingresar numeros');
		
	}
	document.getElementById('minimo').value=minimo;
	document.getElementById('maximo').value=maximo;

}//FIN DE LA FUNCIÓN