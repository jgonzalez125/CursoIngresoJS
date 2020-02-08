function mostrar()
{
//tomo la edad  
	var age;

	age = document.getElementById('edad').value;
	age = parseInt(age);

	if (age >= 18) {
		return alert('Usted es mayor de edad');
	}


}//FIN DE LA FUNCIÓN