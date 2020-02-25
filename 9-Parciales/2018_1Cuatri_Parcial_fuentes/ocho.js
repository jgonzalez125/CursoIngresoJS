function mostrar()
{
	var contador;
	var numero;
	var letra;
	var pares;
	var impares;
	var promedio;
	var positivos;
	var negativos;	
	var respuesta;
	var maximo;
	var minimo;
	var acumuladorNegativos;
	var ceros;

	contador=0;
	respuesta='si';
	pares=0;
	impares=0;
	acumulador=0;
	acumuladorNegativos=0;
	ceros=0;
	acumuladorPositivos=0;
	contadorPositivos=0;

	while(respuesta=='si')
	{
		contador=contador+1;//#3 cambio la variable de la logica
		
		numero=prompt("ingrese el "+contador+"º numero :");
		numero=parseInt(numero)

		while(numero<-100 || numero>100)//bien
		{
			numero=prompt("error,reingrese el "+contador+"º numero :");
			numero=parseInt(numero);
		}
		letra=prompt('Ingrese la '+contador+'° letra:');
		
		if(numero%2==0)//numeros pares
		{
			pares++;
		}else//numeros impares
		{
			impares++;
		}

		if(numero>0)//contador de positivos
		{
			positivos=numero;
			acumuladorPositivos=acumuladorPositivos+positivos;
			contadorPositivos++;
		}else//contador de negativos
		{
			negativos=numero;
			acumuladorNegativos=acumuladorNegativos+negativos;
		}

		if(numero== 100 || numero== -100)//cantidad de ceros
		{
			ceros= ceros+2;
		}else
		{
			if(numero%10==0)
			{
				ceros++;
			}
		}

	/* Otra forma de realizar la cantidad de ceros mediante switch:
		switch(numero)
		{
			case 0:
			case 10:
			case 20:
			case 30:
			case 40:
			case 50:
			case 60:
			case 70:
			case 80:
			case 90:
			case -10:
			case -20:
			case -30:
			case -40:
			case -50:
			case -60:
			case -70:
			case -80:
			case -90:
				ceros++;
				break;
			case 100:
			case -100:
				ceros= ceros+2;
				break;
		}*/

		if(contador==1)//maximo y minimo del numero
		{
			maximo=numero;
			minimo=numero;
			letraMaximo=letra;
			letraMinimo=letra;
		}else
		{
			if(numero>maximo)
			{
				maximo=numero;
				letraMaximo=letra;
			}
			if(numero<minimo)
			{
				minimo=numero;
				letraMinimo=letra;
			}
		}

		acumulador=acumulador+positivos;
		respuesta=prompt('si para seguir');
	}
	promedio=acumuladorPositivos/contadorPositivos;//promedio de positivos
	promedio=parseInt(promedio);
	document.write('numeros pares:'+pares);
	document.write('numeros impares:'+impares);
	document.write('maximo:'+maximo+letraMaximo);
	document.write('minimo:'+minimo+letraMinimo);
	document.write('promedio positivos:'+promedio);
	document.write('suma negativos:'+acumuladorNegativos);
	document.write('cantidad de ceros:'+ ceros);
}
