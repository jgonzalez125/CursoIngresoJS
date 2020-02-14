function mostrar()
{
//tomo la edad  
	var laHora = document.getElementById('hora').value;
	laHora = parseInt(laHora);
	//alert (laHora);
	switch(laHora)
	{
		case laHora:
		if(laHora > 6 && laHora < 12)
			{
			alert('Es de mañana.');
			}
		break;	
	}
	

/*otra forma de hacerlo:

	switch(laHora)
	{
		case 7:
		case 8:
		case 9:
		case 10:
		case 11:
			alert('Es de mañana.');
			break;	
	}
*/

}//FIN DE LA FUNCIÓN