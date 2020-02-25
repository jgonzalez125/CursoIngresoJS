function mostrar()
{
	var dia;

	dia=prompt('Ingrese dia: '+'');

	switch(dia)
	{
		case 'sabado':
		case 'domingo':
		confirm('buen finde');
			break;
		case 'lunes':
		case 'martes':
		case 'miercoles':
		case 'jueves':
		case 'viernes':
		confirm('a trabajar');
			break;
		default:
		alert(dia+' no es un dia valido');
			break;	
	}
}
