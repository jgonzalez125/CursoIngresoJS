function mostrar()
{
//tomo la edad  
var laHora = document.getElementById('hora').value;
	laHora = parseInt(laHora);

	switch(laHora){
		case laHora:
		if(laHora > 6 && laHora < 12)
			{
			alert('Es de mañana.');
			}else{
				if(laHora > 11 && laHora < 20){
					alert("Es de tarde.");
				}else
				{	
					if(laHora > 24 || laHora < 0){	
						alert("la hora no existe.");
					}else{
						alert('Es de noche');
					}
				}
			}
	}


}//FIN DE LA FUNCIÓN