function mostrar()
{
	var sexo = prompt("ingrese f ó m .");


	var sexo = prompt("ingrese f ó m .");
	var femenino= 'Femenino';
	var masculino= 'Masculino';

	while(sexo != 'f' && sexo != 'm')
	{
		sexo = prompt("reingrese f ó m .");
		break;
	}
	document.getElementById('Sexo').value= sexo;

<<<<<<< HEAD
	while(sexo != 'f' && sexo != 'm')
	{
		sexo = prompt("error, reingrese f ó m .");
	}
	document.getElementById('Sexo').value=sexo;

=======
	switch(sexo)
	{
		case 'f':
		document.getElementById('Sexo').value=femenino;
		break;
		case 'm':
		document.getElementById('Sexo').value=masculino;
		break;
	}
>>>>>>> 162b6e3d3e8f44c91d6d2126304eedadc936da61

}//FIN DE LA FUNCIÓN