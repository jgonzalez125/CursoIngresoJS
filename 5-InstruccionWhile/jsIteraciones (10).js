function mostrar()
{

	var contador=0;
	//declarar contadores y variables 
	var numeroIngresado;
	var negativo;
	var positivo;
	var par;
	var impar;
	var respuesta="si";

	while(respuesta!="no")
	{
		numeroIngresado = prompt('Ingrese Numero');
		numeroIngresado = parseInt(numeroIngresado);
		contador = contador + 1;	
	
		if(numeroIngresado < 0)
		{
			numeroIngresado == negativo;
			while(numeroIngresado == negativo);
			{
				numeroIngresado = parseInt(numeroIngresado);
				numeroIngresado++;
			}
		}
		if(numeroIngresado > 0)
		{
			numeroIngresado == positivo;
			while(numeroIngresado == positivo)
			{
				numeroIngresado = parseInt(numeroIngresado);
				numeroIngresado++;
			}
		}
		respuesta = prompt('Ingrese "no" para dejar de ingresar numeros');

	}




}//FIN DE LA FUNCIÓN