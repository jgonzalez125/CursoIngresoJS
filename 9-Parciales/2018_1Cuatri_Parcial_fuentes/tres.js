/*
De los movimientos de un banco necesito saber:
a)el nombre del cliente
B)la edad (debe ser mayor de edad)
c)sexo
d)tipo de transaccion(extraccion o deposito)
e)importe(validar que no sea negativo)
jose 37 m extraccion 1000
maria 40 f deposito 2000
jesus 33 m extraccion 1500
melchor 20 m extraccion 1300
mostrar:
1)promedio de edad= 32,5
2)nombre del mas joven=melchor
3)cantidad de hombres y mujeres=3 y 1
4) sexo del importe mas alto=f
5)transaccion mas utilizada=extraccion
6)importe del mas viejo=2000
*/
function mostrar(){	
	//variables a validar
	var nombreCliente;
	var edadCliente;
	var sexoCliente;
	var transaccion;
	var importe;
	var deposito;
	var extraccion;
	
	var contador;
	var acumulador;
	var promedio;

	var edadClienteMasJoven;
	var nombreClienteMasJoven;
	var sexoClienteHombres;
	var sexoClienteMujeres;
	var importeMaximo;
	var edadClienteMasViejo;
	var importeMaximoSexo;
	var importeClienteMasViejo;
	var transaccionMasUtilizada;

	respuesta='si';
	contador=0;
	acumulador=0;
	sexoClienteMujeres=0;
	sexoClienteHombres=0;
	extraccion=0;
	deposito=0;

	do{
		contador++;
		
		do{//a)el nombre del cliente
			nombreCliente=prompt('Ingrese su nombre:');
		}while(!isNaN(nombreCliente));

		do{//B)la edad (debe ser mayor de edad)
			edadCliente=prompt('Ingrese su edad:');
			edadCliente=parseInt(edadCliente);
		}while(isNaN(edadCliente) || edadCliente < 18 || edadCliente > 100);


		do{//c)sexo
			sexoCliente=prompt('Ingrese sexo, f o m');
		}while(!isNaN(sexoCliente) || sexoCliente !='f' && sexoCliente != 'm');
		
		do{//d)tipo de transaccion(extraccion o deposito)
			transaccion=prompt('Ingrese transaccion, deposito o extraccion');
		}while(!isNaN(transaccion) || transaccion !='deposito' && transaccion != 'extraccion');

		do{//e)importe(validar que no sea negativo)
			importe=prompt('Ingrese su importe');
			importe=parseInt(importe);
		}while(isNaN(importe) || importe < 0 || importe > 5000);

//fin de la validacion

//pasamos a averiguar lo que nos pide el enunciado:
		
		if(contador==1 || edadCliente < edadClienteMasJoven){//2)nombre del mas joven
			edadClienteMasJoven=edadCliente;
			nombreClienteMasJoven=nombreCliente;
		}		

		if(sexoCliente=='f'){//3)cantidad de hombres y mujeres
			sexoClienteMujeres++;
		}else{
			sexoClienteHombres++;
		}

		if(contador==1 || importe > importeMaximo){//4) sexo del importe mas alto
			importeMaximo=importe;
			importeMaximoSexo=sexoCliente;
		}

		switch(transaccion){//5)transaccion mas utilizada
			case 'extraccion':
			extraccion++;
				break;
			case 'deposito':
			deposito++;
				break;	
		}

		if(contador==1 || edadCliente > edadClienteMasViejo){//6)importe del mas viejo
			edadClienteMasViejo=edadCliente;
			importeClienteMasViejo=importe;
		}	

		respuesta=prompt('ingrese si para otra transaccion');
		acumulador=acumulador+edadCliente;	
	}while(respuesta=='si');

	if(extraccion>deposito){
		transaccionMasUtilizada='extraccion';
	}else{
		if(extraccion===deposito){
		transaccionMasUtilizada='ambas se utilizaron por igual';
		}else{
			transaccionMasUtilizada='deposito';
		}
	}
	promedio=acumulador/contador;//1)promedio de edad

	document.write('<br> El promedio de edad: '+promedio);
	document.write('<br> Nombre del mas joven: '+nombreClienteMasJoven);
	document.write('<br>cantidad de hombres: '+ sexoClienteHombres);
	document.write('<br>cantidad de mujeres: '+ sexoClienteMujeres);
	document.write('<br>sexo del importe mas alto: '+ importeMaximoSexo);
	document.write('<br>transaccion mas utilizada: '+ transaccionMasUtilizada);
	document.write('<br>importe del mas viejo: '+importeClienteMasViejo);








}