function mostrar()
{

	var numero = prompt("ingrese un número entre 0 y 10.");
	numero = parseInt(numero);

<<<<<<< HEAD
	while(numero < 10 && numero >= 0){
		document.getElementById('Numero').value=numero;
		break;
=======
	while(numero < 0 || numero > 10)
	{
		numero=prompt("error, reingrese un número entre 0 y 10.");
		numero = parseInt(numero);
>>>>>>> 31c6ffef3e47407bfae6997e04f38e8e08104a2b
	}
	document.getElementById('Numero').value=numero;


}//FIN DE LA FUNCIÓN