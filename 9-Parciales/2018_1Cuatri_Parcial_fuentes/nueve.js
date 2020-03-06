function mostrar()
{
	var marcaProducto;
	var pesoProducto;
	var temperaturaProducto;
	var respuesta;
	var contador;
	var acumulador;
	var pares;
	var pesoProductoMaximo;
	var pesoProductoMinimo;
	var temperaturaProductoBajoCero;
	var pesoProductoMaximoMarca;
	var promedio;

	pares=0;
	contador=0;
	temperaturaProductoBajoCero=0;
	acumulador=0;
	respuesta= 'si';

	do{
		marcaProducto= prompt('Ingrese '+contador+'º marca de su producto:');

		do{
			pesoProducto=prompt('Ingrese peso de su producto:');
			pesoProducto=parseInt(pesoProducto);
		}while(isNaN(pesoProducto) || pesoProducto > 100 || pesoProducto < 1);

		do{
			temperaturaProducto=prompt('Ingrese temperatura de su producto:');
			temperaturaProducto=parseInt(temperaturaProducto);
		}while(isNaN(temperaturaProducto) || temperaturaProducto > 30 || temperaturaProducto < -30);

			if(temperaturaProducto%2==0){
				pares++;
			}

			if(contador==1 ||pesoProducto > pesoProductoMaximo){
				pesoProductoMaximo=pesoProducto;
				pesoProductoMaximoMarca=marcaProducto;
			} 

			if(contador==1 || pesoProducto < pesoProductoMinimo){
				pesoProductoMinimo=pesoProducto;
			}

			if(temperaturaProducto < 0){
				temperaturaProductoBajoCero++;
			}

		respuesta=prompt('ingrese si para seguir ingresando');			
		contador++;
		acumulador=acumulador+pesoProducto;
	}while(respuesta=='si');

	promedio=acumulador/contador;

	document.write('<br>Cantidad de temperaturas pares: '+pares);
	document.write('<br>Marca producto mas pesado: '+pesoProductoMaximoMarca);
	document.write('<br>Cantidad de productos que se conservan a menos de 0 grados: '+temperaturaProductoBajoCero);
	document.write('<br>Promedio de peso de todos los productos: '+promedio);
	document.write('<br>El peso máximo: '+pesoProductoMaximo+' '+'El peso minimo: '+pesoProductoMinimo);

















}	
