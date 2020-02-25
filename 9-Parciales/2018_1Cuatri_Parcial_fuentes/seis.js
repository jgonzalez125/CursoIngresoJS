function mostrar()
{
	var hora;
	var mañana;
	var tarde;
	var noche;

	hora=document.getElementById('laHora').value;
	hora=parseInt(hora);

	switch(hora)
	{
		case mañana:
			if(hora > 5 && hora < 12 )
			{
				alert('es de mañana');
			} else 
			{
				if(hora > 11 && hora < 20)
				{
					alert('es de tarde');
				} else
				{
					alert('es de noche');

					if(hora < 24 && hora > 20)
					{
						alert('a dormir');
					}
				}
			}
			break;
			default:
				if(hora > 24 || hora < 1)
				{
					alert('la hora no existe');
				}
			break;
	}
}
