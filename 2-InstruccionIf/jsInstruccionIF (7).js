function mostrar()
{
//tomo la edad  
	var edad;
	var estadoCivil;
//	var soltero;
//	var casado;
//	var divorciado;

	edad= document.getElementById('edad').value;
	edad= parseInt(edad);

	estadoCivil = document.getElementById('estadoCivil').value;
//	casado = document.getElementById('estadoCivil').value= 'Casado';
//	divorciado = document.getElementById('estadoCivil').value='Divorciado';
//	soltero = 'Soltero';

		if (edad < 18 && estadoCivil != 'Soltero'){
		 alert('Es muy pequeño para NO ser soltero.');
	}

	/*if (age < 18 && estadoCivil == soltero){
		 console.log('bien');
	} else if (age < 18 && estadoCivil == divorciado || casado) {
		 alert('Es muy pequeño para NO ser soltero.');
	}*/


}//FIN DE LA FUNCIÓN