function mostrar()
{
	var num;

	num = Math.floor((Math.random() * 10)+1);
		
	//console.log(num);

	if(num > 8)
	{
		alert(num +" EXCELENTE");
	}else 
	{
		if(num < 4)
		{
			alert(num +" Vamos, la proxima se puede");
		}else
		{
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


 
	if(num < 4)
	{
		alert(num+ ' vamos, la proxima se puede');
	}else
	{
		if(num > 8)
		{
			alert(num + ' EXCELENTE');
		}else
		{
			alert(num+ ' aprobó');
		}
	}	
*/

}//FIN DE LA FUNCIÓN