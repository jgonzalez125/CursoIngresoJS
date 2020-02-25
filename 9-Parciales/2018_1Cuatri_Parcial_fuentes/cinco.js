function mostrar()
{
	var planeta;

	planeta=prompt('Ingrese planeta','');

	switch(planeta)
	{
		case 'tierra':
		alert(planeta+': acá vivimos');
			break;
		case 'mercurio':
		case 'venus':
		alert(planeta+': acá hace más calor');
			break;
		case 'marte':
		case 'jupiter':
		case 'saturno':
		case 'urano':
		case 'neptuno':
		case 'pluton':
		alert(planeta +': acá hace más frio');
			break;
		default: 
		alert(planeta+ ' no es un planeta valido');
			break;		
	}
}
