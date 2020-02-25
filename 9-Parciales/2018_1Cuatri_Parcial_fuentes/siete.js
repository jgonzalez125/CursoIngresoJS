function mostrar()
{

	var contador;
	var respuesta;
	var notaAlumno;
	var sexoAlumno;
	var edadAlumno;
	var nombreAlumno;
	var acumulador;
	var promedioNotas;
	var mejorNota;
	var peorNota;
	var contadorDeHombres;

	mejorNotaHombres=-1;

	contador=0;//#1 inicializar para ingresar
	acumulador=0;
	contadorDeHombres=0;
	respuesta="si";
	//declarar contadores y variables 
	
	//while(contador<5)//#2 defino la logica
	while(respuesta=='si')
	{
		contador=contador+1;//#3 cambio la variable de la logica
		

		nombreAlumno=prompt("ingrese su nombre");


		notaAlumno=prompt("ingrese el "+contador+"º numero :");
		notaAlumno=parseInt(notaAlumno);
		while(notaAlumno<0 || notaAlumno>10)//bien
		{
			notaAlumno=prompt("error,reingrese el "+contador+"º numero :");
			notaAlumno=parseInt(notaAlumno);
		}

		sexoAlumno= prompt("ingrese f o m");
		while(sexoAlumno!="f" && sexoAlumno!="m")//casi bien
		{
			sexoAlumno= prompt("ingrese f o m");
		}

		/*edadAlumno=prompt("ingrese el "+contador+"º edad :");
		edadAlumno=parseInt(edadAlumno);
		while(edadAlumno<0 || edadAlumno>100)//bien
		{
			edadAlumno=prompt("error,reingrese el "+contador+"º edad :");
			edadAlumno=parseInt(edadAlumno);
		}
		edadAlumno=prompt("ingrese el "+contador+"º edad :");
		edadAlumno=parseInt(edadAlumno);
		while(edadAlumno<0 || edadAlumno>100)//bien
		{
			edadAlumno=prompt("error,reingrese el "+contador+"º edad :");
			edadAlumno=parseInt(edadAlumno);
		}*/


		//termino el ingreso

		
		if(sexoAlumno=="m" && notaAlumno >= 6)
		{
			contadorDeHombres= contadorDeHombres+1;

		}

		if(contador==1)
		{
			mejorNota=notaAlumno;
			peorNota=notaAlumno;
		}
		else
		{

		/*	if(notaAlumno>mejorNota)
			{
				mejorNota=notaAlumno;
			}*/

			if(notaAlumno<peorNota)
			{
				peorNota=notaAlumno;
			}
		}


		acumulador=acumulador+notaAlumno;
		respuesta=prompt("si para seguir");
	}//fin while 

	promedioNotas=acumulador/contador;

	alert("promedio:"+promedioNotas);
	alert("peorNota:"+peorNota+' '+nombreAlumno+' '+sexoAlumno);
	alert("varones con nota mayor o igual a 6:"+contadorDeHombres);
	
}//FIN DE LA FUNCIÓN