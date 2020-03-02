function mostrar()
{
	var contador;
	var nota;
	var sexo;
	var acumulador;
	var mejorNota;
	var peorNota;
	var respuesta;
	var hombres;

	contador=0;
	acumulador=0;
	respuesta='si';
	hombres=0;

	while(respuesta=='si'){

		nota=prompt('ingrese'+contador+'° nota de alumno');//notas
		while(nota < 0 || nota > 10){
			nota=prompt('error, reingrese la '+contador+'° nota:');
			nota=parseInt(nota);
		}

		sexo=prompt('ingrese f para femenino o m para masculino');//sexo alumno
		while(sexo != 'f' && sexo != 'm'){
			contador++;
			sexo=prompt('error, reingrese f o m');		
		}

		if(contador==1){
			mejorNota=nota;
			peorNota=nota;
		} else {
			if(nota > mejorNota){
				mejorNota=nota;
			}
			if(nota<peorNota){
				peorNota=nota;
			}
		}

		if(nota >= 6 || sexo=='m'){
			hombres++;	
		}

		acumulador=acumulador+nota;
		respuesta=prompt('si para seguir');
	}	

	promedio=acumulador/contador;

	alert('Promedio de notas:'+promedio);
	alert('Peor nota:'+peorNota+sexo);
	alert('Cantidad de varones con nota mayor o igual a 6:'+hombres);
}
