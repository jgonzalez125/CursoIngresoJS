function mostrar()
{
	var edad;
	//tomo la edad  
	edad = document.getElementById('edad').value;
/*
	if(edad > 17)
	{
		alert('Usted es mayor de edad');
	} 
	if(edad < 18 && edad > 12)
	{
		alert('Usted es adolescente');
	}
	if(edad < 13)
	{
		alert('Usted es niño');
	}
*/

	var age;

	age= document.getElementById('edad').value;
	age= parseInt(age);

	if (age > 17) {
		 alert('Usted es mayor de edad');
	} else if (age < 18 && age > 12) {
		 alert('Usted es adolescente');
	} else {
		 alert('Usted es niño');
	}



}//FIN DE LA FUNCIÓN