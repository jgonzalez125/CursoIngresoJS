function mostrar()
{
	var edad;
	//tomo la edad  
	edad= document.getElementById('edad').value;

	if(edad > 12 ) 
	{
		if(edad < 18) 
		{
			alert('Usted es adolescente');
		}
	}






/*	var age;

	age= document.getElementById('edad').value;
	age= parseInt(age);

	if( (age < 18) && (age > 12) ){
		alert('Usted es adolescente');
	}

/*otra forma de realizar el if: 
	if (age <= 17 && age >= 13) {
		alert('Usted es adolescente');
	}
*/
}//FIN DE LA FUNCIÓN