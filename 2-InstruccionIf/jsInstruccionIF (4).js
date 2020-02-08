function mostrar()
{
//tomo la edad  
	var age;

	age= document.getElementById('edad').value;
	age= parseInt(age);

	if( (age <= 17) && (age >= 13) ){
		return alert('Usted es adolescente');
	}

/*otra forma de realizar el if: 
	if (age <= 17 && age >= 13) {
		return alert('Usted es adolescente');
	}
*/
}//FIN DE LA FUNCIÓN