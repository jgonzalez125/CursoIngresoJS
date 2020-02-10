function mostrar()
{
//tomo la edad  
	var age;
	var estadoCivil;
	var soltero;
	var casado;
	var divorciado;

	age= document.getElementById('edad').value;
	age= parseInt(age);

	estadoCivil = document.getElementById('estadoCivil').value;
	casado = document.getElementById('estadoCivil').value= 'Casado';
	divorciado = document.getElementById('estadoCivil').value='Divorciado';
	soltero = document.getElementById('estadoCivil').value= 'Soltero';

	if (age >= 18 && estadoCivil == soltero){
		return alert('Es soltero y no es menor.' );
	} else if (age > 18 && estadoCivil == casado || divorciado) {
		return null;
	}
	


}//FIN DE LA FUNCIÓN