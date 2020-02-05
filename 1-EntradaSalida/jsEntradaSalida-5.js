/*Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	*/
function mostrar()
{	//nombrar variables
	var nombre;
	var edad;
	//darle un valor a la var
	nombre = document.getElementById('elNombre').value;
	edad = document.getElementById('laEdad').value;		
	//ejecutar comando
	alert("Usted se llama "+nombre+" y tiene "+edad+" años");
}

