function mostrar()
{	
	var precio;
	var porcentaje;
	var descuento;
	var precioFinal;

	precio= prompt('Ingrese precio','');
	precio=parseInt(precio);

	porcentaje= prompt('Ingrese porcentaje','');
	porcentaje=parseInt(porcentaje);

	descuento= (precio*porcentaje)/100;
	descuento=parseInt(descuento);

	precioFinal= precio-descuento;
	precioFinal=parseInt(precioFinal);

	document.getElementById('elPrecioFinal').value=precioFinal;

}
