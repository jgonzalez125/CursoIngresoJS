function mostrar()
{
//tomo la edad  
	var age;
	var estadoCivil;

	age= document.getElementById('edad').value;
	age= parseInt(age);

	estadoCivil = document.getElementById('estadoCivil').value;

	if (age > 17 && estadoCivil == 'Soltero')
	{
		 alert('Es soltero y no es menor.');
	} 




}//FIN DE LA FUNCIÓN