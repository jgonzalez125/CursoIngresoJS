function mostrar()
{

	var contador=0;
	var acumulador=0;
	var numeroIngresado;
<<<<<<< HEAD

	while(contador<5) 
	{
		numeroIngresado= prompt('Ingrese numero');
		numeroIngresado= parseInt(numeroIngresado);
		contador= contador+1;
		acumulador=acumulador+numeroIngresado;
	}
=======
>>>>>>> 31c6ffef3e47407bfae6997e04f38e8e08104a2b

	while(contador < 5)
	{
		numeroIngresado = prompt('Ingrese Numero');
		numeroIngresado = parseInt(numeroIngresado);
		contador = contador + 1;
		acumulador = acumulador + numeroIngresado;
	}

	document.getElementById('suma').value=acumulador;
	document.getElementById('promedio').value=acumulador/5;

}//FIN DE LA FUNCIÓN