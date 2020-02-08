function mostrar()
{
//tomo la edad  
	var age;

	age= document.getElementById('edad').value;
	age= parseInt(age);

	if (age >= 18) {
		return alert('Usted es mayor de edad');
	} else if ( age <= 17 && age >= 13 ) {
		return alert('Usted es adolescente');
	} else {
		return alert('Usted es niño');
	}



}//FIN DE LA FUNCIÓN