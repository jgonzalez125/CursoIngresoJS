function mostrar()
{
	var contador;
	var peso;
	var marca;
	var pares;
	var promedio;
	var temperatura;
	var respuesta;
	var maximo;
	var minimo;
	var marcaMaximo;
	var bajoCero;
	var acumulador;

	contador=0;
	respuesta='si';
	pares=0;
	acumulador=0;
	bajoCero=0;
	acumulador=0;

	while(respuesta=='si')
	{
		contador=contador+1;//#3 cambio la variable de la logica
		
		peso=prompt("ingrese el "+contador+"º peso :");
		peso=parseInt(peso);
		acumulador=acumulador+peso;

		while(peso<1 || peso>100)//tomo y valido peso
		{
			peso=prompt("error,reingrese el "+contador+"º peso :");
			peso=parseInt(peso);
		}
		
		temperatura=prompt("ingrese la "+contador+"º temperatura :");
		temperatura=parseInt(temperatura)

		while(temperatura<-30 || temperatura>30)//tomo y valido temperatura
		{
			temperatura=prompt("error,reingrese el "+contador+"º temperatura :");
			temperatura=parseInt(temperatura);
		}

		marca=prompt('Ingrese la'+contador+'° marca:');

		if(temperatura%2==0)//a)temperaturas pares
		{
			pares++;
		}

		if(contador==1)//b y f)maximo y minimo del peso
		{
			maximo=peso;
			minimo=peso;
			marcaMaximo=marca;
		}else
		{
			if(peso>maximo)
			{
				maximo=peso;
				marcaMaximo=marca;
			}
			if(peso<minimo)
			{
				minimo=peso;
			}
		}

		if(temperatura<0)//c)temperaturas bajo cero
		{
			bajoCero++;
		}
		respuesta=prompt('si para seguir');

	}	
	promedio=acumulador/contador;//d)promedio de pesos
	promedio=parseInt(promedio);

	document.write('cantidad de temperaturas pares:'+pares);
	document.write('marca de producto mas pesado:'+marcaMaximo);
	document.write('cantidad de temperaturas bajo cero:'+ bajoCero);
	document.write('Promedio de pesos:'+promedio);
	document.write('Peso maximo:'+maximo);
	document.write('Peso minimo:'+minimo);
}
