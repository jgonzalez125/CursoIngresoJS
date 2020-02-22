function mostrar()
{

	var contador=0;
	var acumulador=0;
	var respuesta='si';
	var numeroIngresado;

	while(respuesta=='si')
	{
		numeroIngresado = prompt('Ingrese Numero');
		numeroIngresado = parseInt(numeroIngresado);
		contador = contador + 1;
		acumulador = acumulador + numeroIngresado;
		respuesta = prompt('Ingrese "si" para continuar ingresando numeros');
	}

document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/contador;

}//FIN DE LA FUNCIÓN