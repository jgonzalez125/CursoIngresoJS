function mostrar()
{
	var edad;
	//tomo la edad  
	edad = document.getElementById('edad').value;

	if (edad < 13)
	{
		alert('Usted NO es adolescente');
	}
	if(edad > 17) 
	{
		alert('Usted NO es adolescente');
	}	







/*	var age;

	age= document.getElementById('edad').value;
	age= parseInt(age);

	if( age > 17 || age < 13 ) {
		alert('Usted NO es adolescente');
	}

otra forma: 
	age= document.getElementById('edad').value;
	age= parseInt(age);

	if(!( age < 18 && age > 12) ){
		alert('Usted NO es adolescente');
	}

*/


}//FIN DE LA FUNCIÓN