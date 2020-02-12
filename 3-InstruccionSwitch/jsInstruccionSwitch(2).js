function mostrar()
{
//tomo la edad  
	var mesDelAño = document.getElementById('mes').value;

	switch(mesDelAño)
	{
		case 'Junio' || 'Julio' || 'Agosto':
			alert("Abrigate que hace frio.");
			break;
		case ('Enero' || "Febrero" || "Marzo" || 'Abril' || 'Mayo'):
			alert(  "Falta para el invierno.");
			break;
		case "Agosto" || "Septiembre" ||"Octubre" ||"Noviembre" ||"Diciembre":
			alert( "Ya pasamos el frio, ahora calor!!!.");
			break;
	/*			default: 
				console.log('nada');
				break;	
	*/}





}//FIN DE LA FUNCIÓN