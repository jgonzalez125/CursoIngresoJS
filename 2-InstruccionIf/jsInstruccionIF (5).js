function mostrar()
{
//tomo la edad  
	var age;

	age= document.getElementById('edad').value;
	age= parseInt(age);

	if( age > 17 || age < 13 ) {
		return alert('Usted NO es adolescente');
	}




}//FIN DE LA FUNCIÓN