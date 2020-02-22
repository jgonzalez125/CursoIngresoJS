function mostrar()
{

	var contador=0;
	var positivo=0;
	var negativo=1;
	var numeroIngresado;
	var respuesta='si';

	while(respuesta=='si')
	{
		numeroIngresado = prompt('Ingrese Numero');
		numeroIngresado = parseInt(numeroIngresado);
		contador = contador + 1;
		if(numeroIngresado > 0)
		{
			positivo=positivo+numeroIngresado;
		}
		if(numeroIngresado < 0)
		{
			negativo=negativo*numeroIngresado;
		}

		respuesta = prompt('Ingrese "si" para continuar ingresando numeros');
	}
	document.getElementById('suma').value=positivo;
	document.getElementById('producto').value=negativo;

}//FIN DE LA FUNCIÓN