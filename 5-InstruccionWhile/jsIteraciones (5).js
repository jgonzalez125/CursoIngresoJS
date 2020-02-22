function mostrar()
{

	var sexo = prompt("ingrese f ó m .");
	var femenino= 'Femenino';
	var masculino= 'Masculino';

	while(sexo != 'f' && sexo != 'm')
	{
		sexo = prompt("reingrese f ó m .");
		break;
	}
	document.getElementById('Sexo').value= sexo;

	switch(sexo)
	{
		case 'f':
		document.getElementById('Sexo').value=femenino;
		break;
		case 'm':
		document.getElementById('Sexo').value=masculino;
		break;
	}

}//FIN DE LA FUNCIÓN