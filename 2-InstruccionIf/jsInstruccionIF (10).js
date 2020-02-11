function mostrar()
{
	var num;
	//Genero el número RANDOM entre 1 y 10 
	num = Math.round((Math.random() * 10 + 1));

	if(num > 8)
	{
		alert(num +" EXCELENTE");
	} else 
	{
		if(num < 4)
		{
			alert(num +" Vamos, la proxima se puede");
		}
		 	else{
				alert( num +" APROBÓ");
		}
	}

/*	if(num < 8 && num > 3)
	{
		alert(num+' aprobó');
	} else 
	{
		if(num > 8) 
		{
			alert(num +' EXCELENTE');
		} else
		{
			alert(num + ' vamos, la proxima se puede');
		}
	}
*/


}//FIN DE LA FUNCIÓN