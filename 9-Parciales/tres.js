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
function mostrar()
{
	var nombreCliente;
	var edadCliente;
	var sexoCliente;
	
	var transaccion;
	var extraccion;
	var deposito;
	var transaccionMasUtilizada;
	
	var importe;
	var importeMaximo;
	var importeMaximoSexo;
	var importeMaximoNombre;
	var importeDelMasViejo;	
	
	var edadClienteMinima;
	var nombreClienteMinimaEdad;
	var edadClienteMaxima;
	
	var cantidadDeHombres; 
	var cantidadDeMujeres;
		
	var respuesta;
	var contador;
	var acumulador;
	var promedio;

	respuesta='s';
	contador=0;
	acumulador=0;
	cantidadDeMujeres=0;
	cantidadDeHombres=0;
	extraccion++;
	deposito++;

	do
	{
		do
		{
			nombreCliente=prompt('Ingrese su nombre:');
		}while(!isNaN(nombreCliente));

		do
		{
			edadCliente=prompt('Ingrese su edad: ');
			edadCliente=parseInt(edadCliente);
		}while(isNaN(edadCliente) || edadCliente < 18 || edadCliente > 100);
		
		do
		{
			importe=prompt('Ingrese su importe: ');
			importe=parseInt(importe);
		}while(isNaN(importe) || importe < 1 || importe > 5000);

		do
		{
			transaccion=prompt('Ingrese su transaccion: deposito o extraccion');
		}while(!isNaN(transaccion) || transaccion != 'deposito' && transaccion != 'extraccion');

		do
		{
			sexoCliente=prompt('Ingrese su sexo: f o m');
		}while(!isNaN(sexoCliente) || sexoCliente != 'f' && sexoCliente != 'm');

		//validacion finalizada
		
		if(contador==0 || edadClienteMinima>edadCliente)//2)nombre del mas joven=melchor
		{
			edadClienteMinima=edadCliente;
			nombreClienteMinimaEdad=nombreCliente; 
		} 

		if(sexoCliente=='f')//3)cantidad de hombres y mujeres=3 y 0
		{
			cantidadDeMujeres++;
		}else
		{
			cantidadDeHombres++;
		}

		if(contador==0 || importeMaximo<importe)//4) sexo del importe mas alto=f
		{
			importeMaximo=importe;
			importeMaximoSexo=sexoCliente; 
			importeMaximoNombre=nombreCliente;
		}

		if(contador==0 || edadClienteMaxima<edadCliente)
		{
			edadClienteMaxima=edadCliente;
			importeDelMasViejo=importe;
		}

		switch(transaccion)
		{
			case 'extraccion':
			extraccion++;
				break;
			case 'deposito':
			deposito++;	
				break;
		}


		respuesta=prompt('Ingrese s para realizar otra transaccion');
		contador++;
		acumulador=acumulador+edadCliente;
		
	}while(respuesta=='s')

		if(extraccion > deposito)//5)transaccion mas utilizada=extraccion
		{
			transaccionMasUtilizada="extraccion";
		}else
		{
			transaccionMasUtilizada="deposito";
		}


	promedio=acumulador/contador;//1)promedio de edad= 32,5

	document.write('<br>Promedio edades: '+promedio);
	document.write('<br>Nombre del cliente mas joven: '+nombreClienteMinimaEdad);
	document.write('<br>cantidad de hombres: '+cantidadDeHombres);
	document.write('<br>cantidad de mujeres: '+cantidadDeMujeres);
	document.write('<br>sexo del importe mas alto: '+importeMaximoSexo);
	document.write('<br>nombre del importe mas alto: '+importeMaximoNombre);
	document.write('<br>transaccion mas utilizada: '+transaccionMasUtilizada);
	document.write('<br>importe del mas viejo: '+importeMaximoEdad);
}
