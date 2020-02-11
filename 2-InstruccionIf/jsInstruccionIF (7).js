function mostrar()
{
//tomo la edad  
	var age;
	var estadoCivil;
	var soltero;
//	var casado;
//	var divorciado;

	age= document.getElementById('edad').value;
	age= parseInt(age);

	estadoCivil = document.getElementById('estadoCivil').value;
//	casado = document.getElementById('estadoCivil').value= 'Casado';
//	divorciado = document.getElementById('estadoCivil').value='Divorciado';
	soltero = 'Soltero';

		if (age < 18 && estadoCivil != soltero){
		 alert('Es muy pequeño para NO ser soltero.');
	}

	/*if (age < 18 && estadoCivil == soltero){
		 console.log('bien');
	} else if (age < 18 && estadoCivil == divorciado || casado) {
		 alert('Es muy pequeño para NO ser soltero.');
	}*/


}//FIN DE LA FUNCIÓN