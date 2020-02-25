function mostrar()
{
	var sexo = prompt("ingrese f ó m .");


	var sexo = prompt("ingrese f ó m .");

	while(sexo != 'f' && sexo != 'm')
	{
		sexo = prompt("reingrese f ó m .");
	}
	document.getElementById('Sexo').value= sexo;

	while(sexo != 'f' && sexo != 'm')
	{
		sexo = prompt("error, reingrese f ó m .");
	}
	document.getElementById('Sexo').value=sexo;


}//FIN DE LA FUNCIÓN